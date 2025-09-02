import { w as writable, d as derived } from "./index2.js";
import { h as get_store_value, c as create_ssr_component, e as escape, i as createEventDispatcher, b as add_attribute, v as validate_component, m as missing_component, d as each, j as spread, k as escape_object, l as escape_attribute_value, n as globals, a as subscribe } from "./index3.js";
import { CookieStorage } from "cookie-storage";
import * as dsv from "d3-dsv";
import booleanIntersects from "@turf/boolean-intersects";
import bboxPolygon from "@turf/bbox-polygon";
import { p as page } from "./stores.js";
import { c as content } from "./content.js";
import { m as modes, G as GeoTypes, a as appBasePath } from "./MaterialIcon.js";
function never(_) {
  throw new Error("Unexpected value. Should have been never.");
}
globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __awaiter$1 = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const getStoresArray = (stores) => {
  return Array.isArray(stores) ? stores : [stores];
};
const isReloadable = (object) => object ? Object.prototype.hasOwnProperty.call(object, "reload") : false;
const anyReloadable = (stores) => getStoresArray(stores).some(isReloadable);
const getAll = (stores) => {
  const valuesArray = getStoresArray(stores).map((store) => get_store_value(store));
  return Array.isArray(stores) ? valuesArray : valuesArray[0];
};
const loadAll = (stores) => __awaiter$1(void 0, void 0, void 0, function* () {
  const loadPromises = getStoresArray(stores).map((store) => {
    if (Object.prototype.hasOwnProperty.call(store, "load")) {
      return store.load();
    } else {
      return get_store_value(store);
    }
  });
  yield Promise.all(loadPromises);
  return getAll(stores);
});
const reloadAll = (stores, visitedMap) => __awaiter$1(void 0, void 0, void 0, function* () {
  const visitMap = visitedMap !== null && visitedMap !== void 0 ? visitedMap : /* @__PURE__ */ new WeakMap();
  const reloadPromises = getStoresArray(stores).map((store) => {
    if (Object.prototype.hasOwnProperty.call(store, "reload")) {
      if (!visitMap.has(store)) {
        visitMap.set(store, store.reload(visitMap));
      }
      return visitMap.get(store);
    } else if (Object.prototype.hasOwnProperty.call(store, "load")) {
      return store.load();
    } else {
      return get_store_value(store);
    }
  });
  yield Promise.all(reloadPromises);
  return getAll(stores);
});
var __awaiter = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const getLoadState = (stateString) => {
  return {
    isLoading: stateString === "LOADING",
    isReloading: stateString === "RELOADING",
    isLoaded: stateString === "LOADED",
    isWriting: stateString === "WRITING",
    isError: stateString === "ERROR",
    isPending: stateString === "LOADING" || stateString === "RELOADING",
    isSettled: stateString === "LOADED" || stateString === "ERROR"
  };
};
const asyncWritable = (stores, mappingLoadFunction, mappingWriteFunction, options = {}) => {
  const { reloadable, trackState, initial } = options;
  const loadState = trackState ? writable(getLoadState("LOADING")) : void 0;
  const setState = (state2) => loadState === null || loadState === void 0 ? void 0 : loadState.set(getLoadState(state2));
  let loadedValuesString;
  let latestLoadAndSet;
  let currentLoadPromise;
  const tryLoad = (values) => __awaiter(void 0, void 0, void 0, function* () {
    try {
      return yield mappingLoadFunction(values);
    } catch (e) {
      if (e.name !== "AbortError") {
        setState("ERROR");
      }
      throw e;
    }
  });
  let loadDependenciesThenSet;
  const thisStore = writable(initial, () => {
    loadDependenciesThenSet(loadAll).catch(() => Promise.resolve());
    const parentUnsubscribers = getStoresArray(stores).map((store) => store.subscribe(() => {
      loadDependenciesThenSet(loadAll).catch(() => Promise.resolve());
    }));
    return () => {
      parentUnsubscribers.map((unsubscriber) => unsubscriber());
    };
  });
  loadDependenciesThenSet = (parentLoadFunction, forceReload = false) => __awaiter(void 0, void 0, void 0, function* () {
    const loadParentStores = parentLoadFunction(stores);
    try {
      yield loadParentStores;
    } catch (_a) {
      currentLoadPromise = loadParentStores;
      setState("ERROR");
      return currentLoadPromise;
    }
    const storeValues = getStoresArray(stores).map((store) => get_store_value(store));
    if (!forceReload) {
      const newValuesString = JSON.stringify(storeValues);
      if (newValuesString === loadedValuesString) {
        return currentLoadPromise;
      }
      loadedValuesString = newValuesString;
    }
    const loadInput = Array.isArray(stores) ? storeValues : storeValues[0];
    const loadAndSet = () => __awaiter(void 0, void 0, void 0, function* () {
      var _b;
      latestLoadAndSet = loadAndSet;
      if ((_b = get_store_value(loadState)) === null || _b === void 0 ? void 0 : _b.isSettled) {
        setState("RELOADING");
      }
      try {
        const finalValue = yield tryLoad(loadInput);
        thisStore.set(finalValue);
        setState("LOADED");
        return finalValue;
      } catch (e) {
        if (e.name === "AbortError") {
          if (loadAndSet === latestLoadAndSet) {
            setState("LOADED");
          }
          return get_store_value(thisStore);
        }
        throw e;
      }
    });
    currentLoadPromise = loadAndSet();
    return currentLoadPromise;
  });
  const setStoreValueThenWrite = (updater, persist) => __awaiter(void 0, void 0, void 0, function* () {
    setState("WRITING");
    let oldValue;
    try {
      oldValue = yield loadDependenciesThenSet(loadAll);
    } catch (_c) {
      oldValue = get_store_value(thisStore);
    }
    const newValue = updater(oldValue);
    currentLoadPromise = currentLoadPromise.then(() => newValue).catch(() => newValue);
    thisStore.set(newValue);
    if (mappingWriteFunction && persist) {
      try {
        const parentValues = yield loadAll(stores);
        const writeResponse = yield mappingWriteFunction(newValue, parentValues, oldValue);
        if (writeResponse !== void 0) {
          thisStore.set(writeResponse);
          currentLoadPromise = currentLoadPromise.then(() => writeResponse);
        }
      } catch (e) {
        setState("ERROR");
        throw e;
      }
    }
    setState("LOADED");
  });
  const subscribe2 = thisStore.subscribe;
  const set = (newValue, persist = true) => setStoreValueThenWrite(() => newValue, persist);
  const update = (updater, persist = true) => setStoreValueThenWrite(updater, persist);
  const load = () => loadDependenciesThenSet(loadAll);
  const hasReloadFunction = Boolean(reloadable || anyReloadable(stores));
  const reload = hasReloadFunction ? (visitedMap) => __awaiter(void 0, void 0, void 0, function* () {
    const visitMap = visitedMap !== null && visitedMap !== void 0 ? visitedMap : /* @__PURE__ */ new WeakMap();
    const reloadAndTrackVisits = (stores2) => reloadAll(stores2, visitMap);
    setState("RELOADING");
    const result = yield loadDependenciesThenSet(reloadAndTrackVisits, reloadable);
    setState("LOADED");
    return result;
  }) : void 0;
  const state = loadState ? { subscribe: loadState.subscribe } : void 0;
  const reset = void 0;
  return Object.assign(Object.assign(Object.assign({
    get store() {
      return this;
    },
    subscribe: subscribe2,
    set,
    update,
    load
  }, reload && { reload }), state && { state }), reset);
};
const asyncDerived = (stores, mappingLoadFunction, options) => {
  const { store, subscribe: subscribe2, load, reload, state, reset } = asyncWritable(stores, mappingLoadFunction, void 0, options);
  return Object.assign(Object.assign(Object.assign({
    store,
    subscribe: subscribe2,
    load
  }, reload && { reload }), state && { state }), reset && { reset });
};
globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
new CookieStorage();
globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const lad = [
  {
    tilename: "ew",
    bbox: {
      east: 1.76,
      north: 58.64,
      west: -7.57,
      south: 49.92
    }
  }
];
const msoa = [
  {
    tilename: "61-43-7",
    bbox: {
      east: -5.625,
      north: 50.73645513701065,
      west: -8.4375,
      south: 48.922499263758255
    }
  },
  {
    tilename: "62-40-7",
    bbox: {
      east: -2.8125,
      north: 55.77657301866769,
      west: -5.625,
      south: 54.16243396806781
    }
  },
  {
    tilename: "62-41-7",
    bbox: {
      east: -2.8125,
      north: 54.16243396806781,
      west: -5.625,
      south: 52.48278022207821
    }
  },
  {
    tilename: "62-42-7",
    bbox: {
      east: -2.8125,
      north: 52.48278022207821,
      west: -5.625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "62-43-7",
    bbox: {
      east: -2.8125,
      north: 50.73645513701065,
      west: -5.625,
      south: 48.922499263758255
    }
  },
  {
    tilename: "63-40-7",
    bbox: {
      east: 0,
      north: 55.77657301866769,
      west: -2.8125,
      south: 54.16243396806781
    }
  },
  {
    tilename: "63-43-7",
    bbox: {
      east: 0,
      north: 50.73645513701065,
      west: -2.8125,
      south: 48.922499263758255
    }
  },
  {
    tilename: "64-41-7",
    bbox: {
      east: 2.8125,
      north: 54.16243396806781,
      west: 0,
      south: 52.48278022207821
    }
  },
  {
    tilename: "64-42-7",
    bbox: {
      east: 2.8125,
      north: 52.48278022207821,
      west: 0,
      south: 50.73645513701065
    }
  },
  {
    tilename: "126-82-8",
    bbox: {
      east: -1.40625,
      north: 54.16243396806781,
      west: -2.8125,
      south: 53.33087298301704
    }
  },
  {
    tilename: "126-83-8",
    bbox: {
      east: -1.40625,
      north: 53.33087298301704,
      west: -2.8125,
      south: 52.48278022207821
    }
  },
  {
    tilename: "126-84-8",
    bbox: {
      east: -1.40625,
      north: 52.48278022207821,
      west: -2.8125,
      south: 51.6180165487737
    }
  },
  {
    tilename: "126-85-8",
    bbox: {
      east: -1.40625,
      north: 51.6180165487737,
      west: -2.8125,
      south: 50.73645513701065
    }
  },
  {
    tilename: "127-82-8",
    bbox: {
      east: 0,
      north: 54.16243396806781,
      west: -1.40625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "127-83-8",
    bbox: {
      east: 0,
      north: 53.33087298301704,
      west: -1.40625,
      south: 52.48278022207821
    }
  },
  {
    tilename: "127-84-8",
    bbox: {
      east: 0,
      north: 52.48278022207821,
      west: -1.40625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "254-170-9",
    bbox: {
      east: -0.703125,
      north: 51.6180165487737,
      west: -1.40625,
      south: 51.17934297928927
    }
  },
  {
    tilename: "254-171-9",
    bbox: {
      east: -0.703125,
      north: 51.17934297928927,
      west: -1.40625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "255-170-9",
    bbox: {
      east: 0,
      north: 51.6180165487737,
      west: -0.703125,
      south: 51.17934297928927
    }
  },
  {
    tilename: "255-171-9",
    bbox: {
      east: 0,
      north: 51.17934297928927,
      west: -0.703125,
      south: 50.73645513701065
    }
  }
];
const lsoa = [
  {
    tilename: "61-43-7",
    bbox: {
      east: -5.625,
      north: 50.73645513701065,
      west: -8.4375,
      south: 48.922499263758255
    }
  },
  {
    tilename: "62-40-7",
    bbox: {
      east: -2.8125,
      north: 55.77657301866769,
      west: -5.625,
      south: 54.16243396806781
    }
  },
  {
    tilename: "62-43-7",
    bbox: {
      east: -2.8125,
      north: 50.73645513701065,
      west: -5.625,
      south: 48.922499263758255
    }
  },
  {
    tilename: "63-39-7",
    bbox: {
      east: 0,
      north: 57.32652122521708,
      west: -2.8125,
      south: 55.77657301866769
    }
  },
  {
    tilename: "63-43-7",
    bbox: {
      east: 0,
      north: 50.73645513701065,
      west: -2.8125,
      south: 48.922499263758255
    }
  },
  {
    tilename: "64-41-7",
    bbox: {
      east: 2.8125,
      north: 54.16243396806781,
      west: 0,
      south: 52.48278022207821
    }
  },
  {
    tilename: "124-82-8",
    bbox: {
      east: -4.21875,
      north: 54.16243396806781,
      west: -5.625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "124-83-8",
    bbox: {
      east: -4.21875,
      north: 53.33087298301704,
      west: -5.625,
      south: 52.48278022207821
    }
  },
  {
    tilename: "124-84-8",
    bbox: {
      east: -4.21875,
      north: 52.48278022207821,
      west: -5.625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "124-85-8",
    bbox: {
      east: -4.21875,
      north: 51.6180165487737,
      west: -5.625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "125-83-8",
    bbox: {
      east: -2.8125,
      north: 53.33087298301704,
      west: -4.21875,
      south: 52.48278022207821
    }
  },
  {
    tilename: "125-84-8",
    bbox: {
      east: -2.8125,
      north: 52.48278022207821,
      west: -4.21875,
      south: 51.6180165487737
    }
  },
  {
    tilename: "126-80-8",
    bbox: {
      east: -1.40625,
      north: 55.77657301866769,
      west: -2.8125,
      south: 54.97761367069626
    }
  },
  {
    tilename: "126-81-8",
    bbox: {
      east: -1.40625,
      north: 54.97761367069626,
      west: -2.8125,
      south: 54.16243396806781
    }
  },
  {
    tilename: "127-80-8",
    bbox: {
      east: 0,
      north: 55.77657301866769,
      west: -1.40625,
      south: 54.97761367069626
    }
  },
  {
    tilename: "127-81-8",
    bbox: {
      east: 0,
      north: 54.97761367069626,
      west: -1.40625,
      south: 54.16243396806781
    }
  },
  {
    tilename: "129-84-8",
    bbox: {
      east: 2.8125,
      north: 52.48278022207821,
      west: 1.40625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "129-85-8",
    bbox: {
      east: 2.8125,
      north: 51.6180165487737,
      west: 1.40625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "250-170-9",
    bbox: {
      east: -3.515625,
      north: 51.6180165487737,
      west: -4.21875,
      south: 51.17934297928927
    }
  },
  {
    tilename: "250-171-9",
    bbox: {
      east: -3.515625,
      north: 51.17934297928927,
      west: -4.21875,
      south: 50.73645513701065
    }
  },
  {
    tilename: "251-164-9",
    bbox: {
      east: -2.8125,
      north: 54.16243396806781,
      west: -3.515625,
      south: 53.74871079689899
    }
  },
  {
    tilename: "251-165-9",
    bbox: {
      east: -2.8125,
      north: 53.74871079689899,
      west: -3.515625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "251-170-9",
    bbox: {
      east: -2.8125,
      north: 51.6180165487737,
      west: -3.515625,
      south: 51.17934297928927
    }
  },
  {
    tilename: "251-171-9",
    bbox: {
      east: -2.8125,
      north: 51.17934297928927,
      west: -3.515625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "252-164-9",
    bbox: {
      east: -2.109375,
      north: 54.16243396806781,
      west: -2.8125,
      south: 53.74871079689899
    }
  },
  {
    tilename: "252-166-9",
    bbox: {
      east: -2.109375,
      north: 53.33087298301704,
      west: -2.8125,
      south: 52.908902047770255
    }
  },
  {
    tilename: "252-167-9",
    bbox: {
      east: -2.109375,
      north: 52.908902047770255,
      west: -2.8125,
      south: 52.48278022207821
    }
  },
  {
    tilename: "252-168-9",
    bbox: {
      east: -2.109375,
      north: 52.48278022207821,
      west: -2.8125,
      south: 52.05249047600098
    }
  },
  {
    tilename: "252-169-9",
    bbox: {
      east: -2.109375,
      north: 52.05249047600098,
      west: -2.8125,
      south: 51.6180165487737
    }
  },
  {
    tilename: "252-170-9",
    bbox: {
      east: -2.109375,
      north: 51.6180165487737,
      west: -2.8125,
      south: 51.17934297928927
    }
  },
  {
    tilename: "252-171-9",
    bbox: {
      east: -2.109375,
      north: 51.17934297928927,
      west: -2.8125,
      south: 50.73645513701065
    }
  },
  {
    tilename: "253-164-9",
    bbox: {
      east: -1.40625,
      north: 54.16243396806781,
      west: -2.109375,
      south: 53.74871079689899
    }
  },
  {
    tilename: "253-166-9",
    bbox: {
      east: -1.40625,
      north: 53.33087298301704,
      west: -2.109375,
      south: 52.908902047770255
    }
  },
  {
    tilename: "253-169-9",
    bbox: {
      east: -1.40625,
      north: 52.05249047600098,
      west: -2.109375,
      south: 51.6180165487737
    }
  },
  {
    tilename: "253-170-9",
    bbox: {
      east: -1.40625,
      north: 51.6180165487737,
      west: -2.109375,
      south: 51.17934297928927
    }
  },
  {
    tilename: "253-171-9",
    bbox: {
      east: -1.40625,
      north: 51.17934297928927,
      west: -2.109375,
      south: 50.73645513701065
    }
  },
  {
    tilename: "254-164-9",
    bbox: {
      east: -0.703125,
      north: 54.16243396806781,
      west: -1.40625,
      south: 53.74871079689899
    }
  },
  {
    tilename: "254-165-9",
    bbox: {
      east: -0.703125,
      north: 53.74871079689899,
      west: -1.40625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "254-166-9",
    bbox: {
      east: -0.703125,
      north: 53.33087298301704,
      west: -1.40625,
      south: 52.908902047770255
    }
  },
  {
    tilename: "254-167-9",
    bbox: {
      east: -0.703125,
      north: 52.908902047770255,
      west: -1.40625,
      south: 52.48278022207821
    }
  },
  {
    tilename: "254-168-9",
    bbox: {
      east: -0.703125,
      north: 52.48278022207821,
      west: -1.40625,
      south: 52.05249047600098
    }
  },
  {
    tilename: "254-169-9",
    bbox: {
      east: -0.703125,
      north: 52.05249047600098,
      west: -1.40625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "254-170-9",
    bbox: {
      east: -0.703125,
      north: 51.6180165487737,
      west: -1.40625,
      south: 51.17934297928927
    }
  },
  {
    tilename: "254-171-9",
    bbox: {
      east: -0.703125,
      north: 51.17934297928927,
      west: -1.40625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "255-164-9",
    bbox: {
      east: 0,
      north: 54.16243396806781,
      west: -0.703125,
      south: 53.74871079689899
    }
  },
  {
    tilename: "255-165-9",
    bbox: {
      east: 0,
      north: 53.74871079689899,
      west: -0.703125,
      south: 53.33087298301704
    }
  },
  {
    tilename: "255-166-9",
    bbox: {
      east: 0,
      north: 53.33087298301704,
      west: -0.703125,
      south: 52.908902047770255
    }
  },
  {
    tilename: "255-167-9",
    bbox: {
      east: 0,
      north: 52.908902047770255,
      west: -0.703125,
      south: 52.48278022207821
    }
  },
  {
    tilename: "255-168-9",
    bbox: {
      east: 0,
      north: 52.48278022207821,
      west: -0.703125,
      south: 52.05249047600098
    }
  },
  {
    tilename: "255-171-9",
    bbox: {
      east: 0,
      north: 51.17934297928927,
      west: -0.703125,
      south: 50.73645513701065
    }
  },
  {
    tilename: "256-168-9",
    bbox: {
      east: 0.703125,
      north: 52.48278022207821,
      west: 0,
      south: 52.05249047600098
    }
  },
  {
    tilename: "256-169-9",
    bbox: {
      east: 0.703125,
      north: 52.05249047600098,
      west: 0,
      south: 51.6180165487737
    }
  },
  {
    tilename: "256-171-9",
    bbox: {
      east: 0.703125,
      north: 51.17934297928927,
      west: 0,
      south: 50.73645513701065
    }
  },
  {
    tilename: "257-168-9",
    bbox: {
      east: 1.40625,
      north: 52.48278022207821,
      west: 0.703125,
      south: 52.05249047600098
    }
  },
  {
    tilename: "257-169-9",
    bbox: {
      east: 1.40625,
      north: 52.05249047600098,
      west: 0.703125,
      south: 51.6180165487737
    }
  },
  {
    tilename: "257-170-9",
    bbox: {
      east: 1.40625,
      north: 51.6180165487737,
      west: 0.703125,
      south: 51.17934297928927
    }
  },
  {
    tilename: "257-171-9",
    bbox: {
      east: 1.40625,
      north: 51.17934297928927,
      west: 0.703125,
      south: 50.73645513701065
    }
  },
  {
    tilename: "504-330-10",
    bbox: {
      east: -2.4609375,
      north: 53.74871079689899,
      west: -2.8125,
      south: 53.54030739150021
    }
  },
  {
    tilename: "504-331-10",
    bbox: {
      east: -2.4609375,
      north: 53.54030739150021,
      west: -2.8125,
      south: 53.33087298301704
    }
  },
  {
    tilename: "505-330-10",
    bbox: {
      east: -2.109375,
      north: 53.74871079689899,
      west: -2.4609375,
      south: 53.54030739150021
    }
  },
  {
    tilename: "505-331-10",
    bbox: {
      east: -2.109375,
      north: 53.54030739150021,
      west: -2.4609375,
      south: 53.33087298301704
    }
  },
  {
    tilename: "506-330-10",
    bbox: {
      east: -1.7578125,
      north: 53.74871079689899,
      west: -2.109375,
      south: 53.54030739150021
    }
  },
  {
    tilename: "506-331-10",
    bbox: {
      east: -1.7578125,
      north: 53.54030739150021,
      west: -2.109375,
      south: 53.33087298301704
    }
  },
  {
    tilename: "506-334-10",
    bbox: {
      east: -1.7578125,
      north: 52.908902047770255,
      west: -2.109375,
      south: 52.69636107827448
    }
  },
  {
    tilename: "506-335-10",
    bbox: {
      east: -1.7578125,
      north: 52.69636107827448,
      west: -2.109375,
      south: 52.48278022207821
    }
  },
  {
    tilename: "506-336-10",
    bbox: {
      east: -1.7578125,
      north: 52.48278022207821,
      west: -2.109375,
      south: 52.26815737376817
    }
  },
  {
    tilename: "506-337-10",
    bbox: {
      east: -1.7578125,
      north: 52.26815737376817,
      west: -2.109375,
      south: 52.05249047600098
    }
  },
  {
    tilename: "507-330-10",
    bbox: {
      east: -1.40625,
      north: 53.74871079689899,
      west: -1.7578125,
      south: 53.54030739150021
    }
  },
  {
    tilename: "507-331-10",
    bbox: {
      east: -1.40625,
      north: 53.54030739150021,
      west: -1.7578125,
      south: 53.33087298301704
    }
  },
  {
    tilename: "507-334-10",
    bbox: {
      east: -1.40625,
      north: 52.908902047770255,
      west: -1.7578125,
      south: 52.69636107827448
    }
  },
  {
    tilename: "507-335-10",
    bbox: {
      east: -1.40625,
      north: 52.69636107827448,
      west: -1.7578125,
      south: 52.48278022207821
    }
  },
  {
    tilename: "507-336-10",
    bbox: {
      east: -1.40625,
      north: 52.48278022207821,
      west: -1.7578125,
      south: 52.26815737376817
    }
  },
  {
    tilename: "507-337-10",
    bbox: {
      east: -1.40625,
      north: 52.26815737376817,
      west: -1.7578125,
      south: 52.05249047600098
    }
  },
  {
    tilename: "510-338-10",
    bbox: {
      east: -0.3515625,
      north: 52.05249047600098,
      west: -0.703125,
      south: 51.83577752045249
    }
  },
  {
    tilename: "510-339-10",
    bbox: {
      east: -0.3515625,
      north: 51.83577752045249,
      west: -0.703125,
      south: 51.6180165487737
    }
  },
  {
    tilename: "510-340-10",
    bbox: {
      east: -0.3515625,
      north: 51.6180165487737,
      west: -0.703125,
      south: 51.39920565355378
    }
  },
  {
    tilename: "510-341-10",
    bbox: {
      east: -0.3515625,
      north: 51.39920565355378,
      west: -0.703125,
      south: 51.17934297928927
    }
  },
  {
    tilename: "511-338-10",
    bbox: {
      east: 0,
      north: 52.05249047600098,
      west: -0.3515625,
      south: 51.83577752045249
    }
  },
  {
    tilename: "511-339-10",
    bbox: {
      east: 0,
      north: 51.83577752045249,
      west: -0.3515625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "511-341-10",
    bbox: {
      east: 0,
      north: 51.39920565355378,
      west: -0.3515625,
      south: 51.17934297928927
    }
  },
  {
    tilename: "512-341-10",
    bbox: {
      east: 0.3515625,
      north: 51.39920565355378,
      west: 0,
      south: 51.17934297928927
    }
  },
  {
    tilename: "513-340-10",
    bbox: {
      east: 0.703125,
      north: 51.6180165487737,
      west: 0.3515625,
      south: 51.39920565355378
    }
  },
  {
    tilename: "513-341-10",
    bbox: {
      east: 0.703125,
      north: 51.39920565355378,
      west: 0.3515625,
      south: 51.17934297928927
    }
  },
  {
    tilename: "1022-680-11",
    bbox: {
      east: -0.17578125,
      north: 51.6180165487737,
      west: -0.3515625,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1022-681-11",
    bbox: {
      east: -0.17578125,
      north: 51.50874245880333,
      west: -0.3515625,
      south: 51.39920565355378
    }
  },
  {
    tilename: "1023-680-11",
    bbox: {
      east: 0,
      north: 51.6180165487737,
      west: -0.17578125,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1023-681-11",
    bbox: {
      east: 0,
      north: 51.50874245880333,
      west: -0.17578125,
      south: 51.39920565355378
    }
  },
  {
    tilename: "1024-680-11",
    bbox: {
      east: 0.17578125,
      north: 51.6180165487737,
      west: 0,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1024-681-11",
    bbox: {
      east: 0.17578125,
      north: 51.50874245880333,
      west: 0,
      south: 51.39920565355378
    }
  },
  {
    tilename: "1025-680-11",
    bbox: {
      east: 0.3515625,
      north: 51.6180165487737,
      west: 0.17578125,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1025-681-11",
    bbox: {
      east: 0.3515625,
      north: 51.50874245880333,
      west: 0.17578125,
      south: 51.39920565355378
    }
  }
];
const oa = [
  {
    tilename: "61-43-7",
    bbox: {
      east: -5.625,
      north: 50.73645513701065,
      west: -8.4375,
      south: 48.922499263758255
    }
  },
  {
    tilename: "63-39-7",
    bbox: {
      east: 0,
      north: 57.32652122521708,
      west: -2.8125,
      south: 55.77657301866769
    }
  },
  {
    tilename: "124-82-8",
    bbox: {
      east: -4.21875,
      north: 54.16243396806781,
      west: -5.625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "124-83-8",
    bbox: {
      east: -4.21875,
      north: 53.33087298301704,
      west: -5.625,
      south: 52.48278022207821
    }
  },
  {
    tilename: "124-84-8",
    bbox: {
      east: -4.21875,
      north: 52.48278022207821,
      west: -5.625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "124-85-8",
    bbox: {
      east: -4.21875,
      north: 51.6180165487737,
      west: -5.625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "125-80-8",
    bbox: {
      east: -2.8125,
      north: 55.77657301866769,
      west: -4.21875,
      south: 54.97761367069626
    }
  },
  {
    tilename: "127-80-8",
    bbox: {
      east: 0,
      north: 55.77657301866769,
      west: -1.40625,
      south: 54.97761367069626
    }
  },
  {
    tilename: "127-86-8",
    bbox: {
      east: 0,
      north: 50.73645513701065,
      west: -1.40625,
      south: 49.83798245308485
    }
  },
  {
    tilename: "128-82-8",
    bbox: {
      east: 1.40625,
      north: 54.16243396806781,
      west: 0,
      south: 53.33087298301704
    }
  },
  {
    tilename: "129-83-8",
    bbox: {
      east: 2.8125,
      north: 53.33087298301704,
      west: 1.40625,
      south: 52.48278022207821
    }
  },
  {
    tilename: "129-84-8",
    bbox: {
      east: 2.8125,
      north: 52.48278022207821,
      west: 1.40625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "129-85-8",
    bbox: {
      east: 2.8125,
      north: 51.6180165487737,
      west: 1.40625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "248-172-9",
    bbox: {
      east: -4.921875,
      north: 50.73645513701065,
      west: -5.625,
      south: 50.28933925329178
    }
  },
  {
    tilename: "248-173-9",
    bbox: {
      east: -4.921875,
      north: 50.28933925329178,
      west: -5.625,
      south: 49.83798245308485
    }
  },
  {
    tilename: "249-172-9",
    bbox: {
      east: -4.21875,
      north: 50.73645513701065,
      west: -4.921875,
      south: 50.28933925329178
    }
  },
  {
    tilename: "249-173-9",
    bbox: {
      east: -4.21875,
      north: 50.28933925329178,
      west: -4.921875,
      south: 49.83798245308485
    }
  },
  {
    tilename: "250-162-9",
    bbox: {
      east: -3.515625,
      north: 54.97761367069626,
      west: -4.21875,
      south: 54.57206165565853
    }
  },
  {
    tilename: "250-163-9",
    bbox: {
      east: -3.515625,
      north: 54.57206165565853,
      west: -4.21875,
      south: 54.16243396806781
    }
  },
  {
    tilename: "250-166-9",
    bbox: {
      east: -3.515625,
      north: 53.33087298301704,
      west: -4.21875,
      south: 52.908902047770255
    }
  },
  {
    tilename: "250-167-9",
    bbox: {
      east: -3.515625,
      north: 52.908902047770255,
      west: -4.21875,
      south: 52.48278022207821
    }
  },
  {
    tilename: "250-168-9",
    bbox: {
      east: -3.515625,
      north: 52.48278022207821,
      west: -4.21875,
      south: 52.05249047600098
    }
  },
  {
    tilename: "250-170-9",
    bbox: {
      east: -3.515625,
      north: 51.6180165487737,
      west: -4.21875,
      south: 51.17934297928927
    }
  },
  {
    tilename: "250-171-9",
    bbox: {
      east: -3.515625,
      north: 51.17934297928927,
      west: -4.21875,
      south: 50.73645513701065
    }
  },
  {
    tilename: "250-173-9",
    bbox: {
      east: -3.515625,
      north: 50.28933925329178,
      west: -4.21875,
      south: 49.83798245308485
    }
  },
  {
    tilename: "251-162-9",
    bbox: {
      east: -2.8125,
      north: 54.97761367069626,
      west: -3.515625,
      south: 54.57206165565853
    }
  },
  {
    tilename: "251-163-9",
    bbox: {
      east: -2.8125,
      north: 54.57206165565853,
      west: -3.515625,
      south: 54.16243396806781
    }
  },
  {
    tilename: "251-167-9",
    bbox: {
      east: -2.8125,
      north: 52.908902047770255,
      west: -3.515625,
      south: 52.48278022207821
    }
  },
  {
    tilename: "251-168-9",
    bbox: {
      east: -2.8125,
      north: 52.48278022207821,
      west: -3.515625,
      south: 52.05249047600098
    }
  },
  {
    tilename: "251-172-9",
    bbox: {
      east: -2.8125,
      north: 50.73645513701065,
      west: -3.515625,
      south: 50.28933925329178
    }
  },
  {
    tilename: "252-160-9",
    bbox: {
      east: -2.109375,
      north: 55.77657301866769,
      west: -2.8125,
      south: 55.37911044801048
    }
  },
  {
    tilename: "252-161-9",
    bbox: {
      east: -2.109375,
      north: 55.37911044801048,
      west: -2.8125,
      south: 54.97761367069626
    }
  },
  {
    tilename: "252-162-9",
    bbox: {
      east: -2.109375,
      north: 54.97761367069626,
      west: -2.8125,
      south: 54.57206165565853
    }
  },
  {
    tilename: "252-163-9",
    bbox: {
      east: -2.109375,
      north: 54.57206165565853,
      west: -2.8125,
      south: 54.16243396806781
    }
  },
  {
    tilename: "252-171-9",
    bbox: {
      east: -2.109375,
      north: 51.17934297928927,
      west: -2.8125,
      south: 50.73645513701065
    }
  },
  {
    tilename: "252-172-9",
    bbox: {
      east: -2.109375,
      north: 50.73645513701065,
      west: -2.8125,
      south: 50.28933925329178
    }
  },
  {
    tilename: "253-160-9",
    bbox: {
      east: -1.40625,
      north: 55.77657301866769,
      west: -2.109375,
      south: 55.37911044801048
    }
  },
  {
    tilename: "253-163-9",
    bbox: {
      east: -1.40625,
      north: 54.57206165565853,
      west: -2.109375,
      south: 54.16243396806781
    }
  },
  {
    tilename: "253-172-9",
    bbox: {
      east: -1.40625,
      north: 50.73645513701065,
      west: -2.109375,
      south: 50.28933925329178
    }
  },
  {
    tilename: "255-163-9",
    bbox: {
      east: 0,
      north: 54.57206165565853,
      west: -0.703125,
      south: 54.16243396806781
    }
  },
  {
    tilename: "256-166-9",
    bbox: {
      east: 0.703125,
      north: 53.33087298301704,
      west: 0,
      south: 52.908902047770255
    }
  },
  {
    tilename: "256-167-9",
    bbox: {
      east: 0.703125,
      north: 52.908902047770255,
      west: 0,
      south: 52.48278022207821
    }
  },
  {
    tilename: "257-166-9",
    bbox: {
      east: 1.40625,
      north: 53.33087298301704,
      west: 0.703125,
      south: 52.908902047770255
    }
  },
  {
    tilename: "257-171-9",
    bbox: {
      east: 1.40625,
      north: 51.17934297928927,
      west: 0.703125,
      south: 50.73645513701065
    }
  },
  {
    tilename: "500-338-10",
    bbox: {
      east: -3.8671875,
      north: 52.05249047600098,
      west: -4.21875,
      south: 51.83577752045249
    }
  },
  {
    tilename: "500-339-10",
    bbox: {
      east: -3.8671875,
      north: 51.83577752045249,
      west: -4.21875,
      south: 51.6180165487737
    }
  },
  {
    tilename: "500-344-10",
    bbox: {
      east: -3.8671875,
      north: 50.73645513701065,
      west: -4.21875,
      south: 50.51342652633955
    }
  },
  {
    tilename: "501-338-10",
    bbox: {
      east: -3.515625,
      north: 52.05249047600098,
      west: -3.8671875,
      south: 51.83577752045249
    }
  },
  {
    tilename: "501-339-10",
    bbox: {
      east: -3.515625,
      north: 51.83577752045249,
      west: -3.8671875,
      south: 51.6180165487737
    }
  },
  {
    tilename: "501-344-10",
    bbox: {
      east: -3.515625,
      north: 50.73645513701065,
      west: -3.8671875,
      south: 50.51342652633955
    }
  },
  {
    tilename: "501-345-10",
    bbox: {
      east: -3.515625,
      north: 50.51342652633955,
      west: -3.8671875,
      south: 50.28933925329178
    }
  },
  {
    tilename: "502-328-10",
    bbox: {
      east: -3.1640625,
      north: 54.16243396806781,
      west: -3.515625,
      south: 53.9560855309879
    }
  },
  {
    tilename: "502-331-10",
    bbox: {
      east: -3.1640625,
      north: 53.54030739150021,
      west: -3.515625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "502-332-10",
    bbox: {
      east: -3.1640625,
      north: 53.33087298301704,
      west: -3.515625,
      south: 53.12040528310657
    }
  },
  {
    tilename: "502-333-10",
    bbox: {
      east: -3.1640625,
      north: 53.12040528310657,
      west: -3.515625,
      south: 52.908902047770255
    }
  },
  {
    tilename: "502-338-10",
    bbox: {
      east: -3.1640625,
      north: 52.05249047600098,
      west: -3.515625,
      south: 51.83577752045249
    }
  },
  {
    tilename: "502-341-10",
    bbox: {
      east: -3.1640625,
      north: 51.39920565355378,
      west: -3.515625,
      south: 51.17934297928927
    }
  },
  {
    tilename: "502-342-10",
    bbox: {
      east: -3.1640625,
      north: 51.17934297928927,
      west: -3.515625,
      south: 50.95842672335991
    }
  },
  {
    tilename: "502-343-10",
    bbox: {
      east: -3.1640625,
      north: 50.95842672335991,
      west: -3.515625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "503-328-10",
    bbox: {
      east: -2.8125,
      north: 54.16243396806781,
      west: -3.1640625,
      south: 53.9560855309879
    }
  },
  {
    tilename: "503-330-10",
    bbox: {
      east: -2.8125,
      north: 53.74871079689899,
      west: -3.1640625,
      south: 53.54030739150021
    }
  },
  {
    tilename: "503-333-10",
    bbox: {
      east: -2.8125,
      north: 53.12040528310657,
      west: -3.1640625,
      south: 52.908902047770255
    }
  },
  {
    tilename: "503-338-10",
    bbox: {
      east: -2.8125,
      north: 52.05249047600098,
      west: -3.1640625,
      south: 51.83577752045249
    }
  },
  {
    tilename: "503-339-10",
    bbox: {
      east: -2.8125,
      north: 51.83577752045249,
      west: -3.1640625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "503-340-10",
    bbox: {
      east: -2.8125,
      north: 51.6180165487737,
      west: -3.1640625,
      south: 51.39920565355378
    }
  },
  {
    tilename: "503-341-10",
    bbox: {
      east: -2.8125,
      north: 51.39920565355378,
      west: -3.1640625,
      south: 51.17934297928927
    }
  },
  {
    tilename: "503-342-10",
    bbox: {
      east: -2.8125,
      north: 51.17934297928927,
      west: -3.1640625,
      south: 50.95842672335991
    }
  },
  {
    tilename: "503-343-10",
    bbox: {
      east: -2.8125,
      north: 50.95842672335991,
      west: -3.1640625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "504-328-10",
    bbox: {
      east: -2.4609375,
      north: 54.16243396806781,
      west: -2.8125,
      south: 53.9560855309879
    }
  },
  {
    tilename: "504-329-10",
    bbox: {
      east: -2.4609375,
      north: 53.9560855309879,
      west: -2.8125,
      south: 53.74871079689899
    }
  },
  {
    tilename: "504-332-10",
    bbox: {
      east: -2.4609375,
      north: 53.33087298301704,
      west: -2.8125,
      south: 53.12040528310657
    }
  },
  {
    tilename: "504-333-10",
    bbox: {
      east: -2.4609375,
      north: 53.12040528310657,
      west: -2.8125,
      south: 52.908902047770255
    }
  },
  {
    tilename: "504-334-10",
    bbox: {
      east: -2.4609375,
      north: 52.908902047770255,
      west: -2.8125,
      south: 52.69636107827448
    }
  },
  {
    tilename: "504-335-10",
    bbox: {
      east: -2.4609375,
      north: 52.69636107827448,
      west: -2.8125,
      south: 52.48278022207821
    }
  },
  {
    tilename: "504-336-10",
    bbox: {
      east: -2.4609375,
      north: 52.48278022207821,
      west: -2.8125,
      south: 52.26815737376817
    }
  },
  {
    tilename: "504-337-10",
    bbox: {
      east: -2.4609375,
      north: 52.26815737376817,
      west: -2.8125,
      south: 52.05249047600098
    }
  },
  {
    tilename: "504-338-10",
    bbox: {
      east: -2.4609375,
      north: 52.05249047600098,
      west: -2.8125,
      south: 51.83577752045249
    }
  },
  {
    tilename: "504-339-10",
    bbox: {
      east: -2.4609375,
      north: 51.83577752045249,
      west: -2.8125,
      south: 51.6180165487737
    }
  },
  {
    tilename: "504-341-10",
    bbox: {
      east: -2.4609375,
      north: 51.39920565355378,
      west: -2.8125,
      south: 51.17934297928927
    }
  },
  {
    tilename: "505-328-10",
    bbox: {
      east: -2.109375,
      north: 54.16243396806781,
      west: -2.4609375,
      south: 53.9560855309879
    }
  },
  {
    tilename: "505-329-10",
    bbox: {
      east: -2.109375,
      north: 53.9560855309879,
      west: -2.4609375,
      south: 53.74871079689899
    }
  },
  {
    tilename: "505-332-10",
    bbox: {
      east: -2.109375,
      north: 53.33087298301704,
      west: -2.4609375,
      south: 53.12040528310657
    }
  },
  {
    tilename: "505-334-10",
    bbox: {
      east: -2.109375,
      north: 52.908902047770255,
      west: -2.4609375,
      south: 52.69636107827448
    }
  },
  {
    tilename: "505-336-10",
    bbox: {
      east: -2.109375,
      north: 52.48278022207821,
      west: -2.4609375,
      south: 52.26815737376817
    }
  },
  {
    tilename: "505-337-10",
    bbox: {
      east: -2.109375,
      north: 52.26815737376817,
      west: -2.4609375,
      south: 52.05249047600098
    }
  },
  {
    tilename: "505-338-10",
    bbox: {
      east: -2.109375,
      north: 52.05249047600098,
      west: -2.4609375,
      south: 51.83577752045249
    }
  },
  {
    tilename: "505-339-10",
    bbox: {
      east: -2.109375,
      north: 51.83577752045249,
      west: -2.4609375,
      south: 51.6180165487737
    }
  },
  {
    tilename: "505-340-10",
    bbox: {
      east: -2.109375,
      north: 51.6180165487737,
      west: -2.4609375,
      south: 51.39920565355378
    }
  },
  {
    tilename: "505-341-10",
    bbox: {
      east: -2.109375,
      north: 51.39920565355378,
      west: -2.4609375,
      south: 51.17934297928927
    }
  },
  {
    tilename: "506-322-10",
    bbox: {
      east: -1.7578125,
      north: 55.37911044801048,
      west: -2.109375,
      south: 55.17886766328199
    }
  },
  {
    tilename: "506-323-10",
    bbox: {
      east: -1.7578125,
      north: 55.17886766328199,
      west: -2.109375,
      south: 54.97761367069626
    }
  },
  {
    tilename: "506-324-10",
    bbox: {
      east: -1.7578125,
      north: 54.97761367069626,
      west: -2.109375,
      south: 54.77534585936448
    }
  },
  {
    tilename: "506-325-10",
    bbox: {
      east: -1.7578125,
      north: 54.77534585936448,
      west: -2.109375,
      south: 54.57206165565853
    }
  },
  {
    tilename: "506-328-10",
    bbox: {
      east: -1.7578125,
      north: 54.16243396806781,
      west: -2.109375,
      south: 53.9560855309879
    }
  },
  {
    tilename: "506-332-10",
    bbox: {
      east: -1.7578125,
      north: 53.33087298301704,
      west: -2.109375,
      south: 53.12040528310657
    }
  },
  {
    tilename: "506-333-10",
    bbox: {
      east: -1.7578125,
      north: 53.12040528310657,
      west: -2.109375,
      south: 52.908902047770255
    }
  },
  {
    tilename: "506-334-10",
    bbox: {
      east: -1.7578125,
      north: 52.908902047770255,
      west: -2.109375,
      south: 52.69636107827448
    }
  },
  {
    tilename: "506-337-10",
    bbox: {
      east: -1.7578125,
      north: 52.26815737376817,
      west: -2.109375,
      south: 52.05249047600098
    }
  },
  {
    tilename: "506-338-10",
    bbox: {
      east: -1.7578125,
      north: 52.05249047600098,
      west: -2.109375,
      south: 51.83577752045249
    }
  },
  {
    tilename: "506-339-10",
    bbox: {
      east: -1.7578125,
      north: 51.83577752045249,
      west: -2.109375,
      south: 51.6180165487737
    }
  },
  {
    tilename: "506-340-10",
    bbox: {
      east: -1.7578125,
      north: 51.6180165487737,
      west: -2.109375,
      south: 51.39920565355378
    }
  },
  {
    tilename: "506-341-10",
    bbox: {
      east: -1.7578125,
      north: 51.39920565355378,
      west: -2.109375,
      south: 51.17934297928927
    }
  },
  {
    tilename: "506-342-10",
    bbox: {
      east: -1.7578125,
      north: 51.17934297928927,
      west: -2.109375,
      south: 50.95842672335991
    }
  },
  {
    tilename: "506-343-10",
    bbox: {
      east: -1.7578125,
      north: 50.95842672335991,
      west: -2.109375,
      south: 50.73645513701065
    }
  },
  {
    tilename: "507-322-10",
    bbox: {
      east: -1.40625,
      north: 55.37911044801048,
      west: -1.7578125,
      south: 55.17886766328199
    }
  },
  {
    tilename: "507-325-10",
    bbox: {
      east: -1.40625,
      north: 54.77534585936448,
      west: -1.7578125,
      south: 54.57206165565853
    }
  },
  {
    tilename: "507-328-10",
    bbox: {
      east: -1.40625,
      north: 54.16243396806781,
      west: -1.7578125,
      south: 53.9560855309879
    }
  },
  {
    tilename: "507-332-10",
    bbox: {
      east: -1.40625,
      north: 53.33087298301704,
      west: -1.7578125,
      south: 53.12040528310657
    }
  },
  {
    tilename: "507-333-10",
    bbox: {
      east: -1.40625,
      north: 53.12040528310657,
      west: -1.7578125,
      south: 52.908902047770255
    }
  },
  {
    tilename: "507-334-10",
    bbox: {
      east: -1.40625,
      north: 52.908902047770255,
      west: -1.7578125,
      south: 52.69636107827448
    }
  },
  {
    tilename: "507-335-10",
    bbox: {
      east: -1.40625,
      north: 52.69636107827448,
      west: -1.7578125,
      south: 52.48278022207821
    }
  },
  {
    tilename: "507-337-10",
    bbox: {
      east: -1.40625,
      north: 52.26815737376817,
      west: -1.7578125,
      south: 52.05249047600098
    }
  },
  {
    tilename: "507-338-10",
    bbox: {
      east: -1.40625,
      north: 52.05249047600098,
      west: -1.7578125,
      south: 51.83577752045249
    }
  },
  {
    tilename: "507-339-10",
    bbox: {
      east: -1.40625,
      north: 51.83577752045249,
      west: -1.7578125,
      south: 51.6180165487737
    }
  },
  {
    tilename: "507-340-10",
    bbox: {
      east: -1.40625,
      north: 51.6180165487737,
      west: -1.7578125,
      south: 51.39920565355378
    }
  },
  {
    tilename: "507-341-10",
    bbox: {
      east: -1.40625,
      north: 51.39920565355378,
      west: -1.7578125,
      south: 51.17934297928927
    }
  },
  {
    tilename: "507-342-10",
    bbox: {
      east: -1.40625,
      north: 51.17934297928927,
      west: -1.7578125,
      south: 50.95842672335991
    }
  },
  {
    tilename: "507-343-10",
    bbox: {
      east: -1.40625,
      north: 50.95842672335991,
      west: -1.7578125,
      south: 50.73645513701065
    }
  },
  {
    tilename: "508-324-10",
    bbox: {
      east: -1.0546875,
      north: 54.97761367069626,
      west: -1.40625,
      south: 54.77534585936448
    }
  },
  {
    tilename: "508-325-10",
    bbox: {
      east: -1.0546875,
      north: 54.77534585936448,
      west: -1.40625,
      south: 54.57206165565853
    }
  },
  {
    tilename: "508-326-10",
    bbox: {
      east: -1.0546875,
      north: 54.57206165565853,
      west: -1.40625,
      south: 54.36775852406839
    }
  },
  {
    tilename: "508-327-10",
    bbox: {
      east: -1.0546875,
      north: 54.36775852406839,
      west: -1.40625,
      south: 54.16243396806781
    }
  },
  {
    tilename: "508-328-10",
    bbox: {
      east: -1.0546875,
      north: 54.16243396806781,
      west: -1.40625,
      south: 53.9560855309879
    }
  },
  {
    tilename: "508-329-10",
    bbox: {
      east: -1.0546875,
      north: 53.9560855309879,
      west: -1.40625,
      south: 53.74871079689899
    }
  },
  {
    tilename: "508-330-10",
    bbox: {
      east: -1.0546875,
      north: 53.74871079689899,
      west: -1.40625,
      south: 53.54030739150021
    }
  },
  {
    tilename: "508-334-10",
    bbox: {
      east: -1.0546875,
      north: 52.908902047770255,
      west: -1.40625,
      south: 52.69636107827448
    }
  },
  {
    tilename: "508-336-10",
    bbox: {
      east: -1.0546875,
      north: 52.48278022207821,
      west: -1.40625,
      south: 52.26815737376817
    }
  },
  {
    tilename: "508-337-10",
    bbox: {
      east: -1.0546875,
      north: 52.26815737376817,
      west: -1.40625,
      south: 52.05249047600098
    }
  },
  {
    tilename: "508-338-10",
    bbox: {
      east: -1.0546875,
      north: 52.05249047600098,
      west: -1.40625,
      south: 51.83577752045249
    }
  },
  {
    tilename: "508-339-10",
    bbox: {
      east: -1.0546875,
      north: 51.83577752045249,
      west: -1.40625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "508-340-10",
    bbox: {
      east: -1.0546875,
      north: 51.6180165487737,
      west: -1.40625,
      south: 51.39920565355378
    }
  },
  {
    tilename: "508-341-10",
    bbox: {
      east: -1.0546875,
      north: 51.39920565355378,
      west: -1.40625,
      south: 51.17934297928927
    }
  },
  {
    tilename: "508-342-10",
    bbox: {
      east: -1.0546875,
      north: 51.17934297928927,
      west: -1.40625,
      south: 50.95842672335991
    }
  },
  {
    tilename: "509-325-10",
    bbox: {
      east: -0.703125,
      north: 54.77534585936448,
      west: -1.0546875,
      south: 54.57206165565853
    }
  },
  {
    tilename: "509-326-10",
    bbox: {
      east: -0.703125,
      north: 54.57206165565853,
      west: -1.0546875,
      south: 54.36775852406839
    }
  },
  {
    tilename: "509-327-10",
    bbox: {
      east: -0.703125,
      north: 54.36775852406839,
      west: -1.0546875,
      south: 54.16243396806781
    }
  },
  {
    tilename: "509-328-10",
    bbox: {
      east: -0.703125,
      north: 54.16243396806781,
      west: -1.0546875,
      south: 53.9560855309879
    }
  },
  {
    tilename: "509-329-10",
    bbox: {
      east: -0.703125,
      north: 53.9560855309879,
      west: -1.0546875,
      south: 53.74871079689899
    }
  },
  {
    tilename: "509-330-10",
    bbox: {
      east: -0.703125,
      north: 53.74871079689899,
      west: -1.0546875,
      south: 53.54030739150021
    }
  },
  {
    tilename: "509-331-10",
    bbox: {
      east: -0.703125,
      north: 53.54030739150021,
      west: -1.0546875,
      south: 53.33087298301704
    }
  },
  {
    tilename: "509-332-10",
    bbox: {
      east: -0.703125,
      north: 53.33087298301704,
      west: -1.0546875,
      south: 53.12040528310657
    }
  },
  {
    tilename: "509-333-10",
    bbox: {
      east: -0.703125,
      north: 53.12040528310657,
      west: -1.0546875,
      south: 52.908902047770255
    }
  },
  {
    tilename: "509-334-10",
    bbox: {
      east: -0.703125,
      north: 52.908902047770255,
      west: -1.0546875,
      south: 52.69636107827448
    }
  },
  {
    tilename: "509-335-10",
    bbox: {
      east: -0.703125,
      north: 52.69636107827448,
      west: -1.0546875,
      south: 52.48278022207821
    }
  },
  {
    tilename: "509-336-10",
    bbox: {
      east: -0.703125,
      north: 52.48278022207821,
      west: -1.0546875,
      south: 52.26815737376817
    }
  },
  {
    tilename: "509-338-10",
    bbox: {
      east: -0.703125,
      north: 52.05249047600098,
      west: -1.0546875,
      south: 51.83577752045249
    }
  },
  {
    tilename: "509-339-10",
    bbox: {
      east: -0.703125,
      north: 51.83577752045249,
      west: -1.0546875,
      south: 51.6180165487737
    }
  },
  {
    tilename: "509-342-10",
    bbox: {
      east: -0.703125,
      north: 51.17934297928927,
      west: -1.0546875,
      south: 50.95842672335991
    }
  },
  {
    tilename: "509-343-10",
    bbox: {
      east: -0.703125,
      north: 50.95842672335991,
      west: -1.0546875,
      south: 50.73645513701065
    }
  },
  {
    tilename: "510-328-10",
    bbox: {
      east: -0.3515625,
      north: 54.16243396806781,
      west: -0.703125,
      south: 53.9560855309879
    }
  },
  {
    tilename: "510-329-10",
    bbox: {
      east: -0.3515625,
      north: 53.9560855309879,
      west: -0.703125,
      south: 53.74871079689899
    }
  },
  {
    tilename: "510-330-10",
    bbox: {
      east: -0.3515625,
      north: 53.74871079689899,
      west: -0.703125,
      south: 53.54030739150021
    }
  },
  {
    tilename: "510-331-10",
    bbox: {
      east: -0.3515625,
      north: 53.54030739150021,
      west: -0.703125,
      south: 53.33087298301704
    }
  },
  {
    tilename: "510-332-10",
    bbox: {
      east: -0.3515625,
      north: 53.33087298301704,
      west: -0.703125,
      south: 53.12040528310657
    }
  },
  {
    tilename: "510-333-10",
    bbox: {
      east: -0.3515625,
      north: 53.12040528310657,
      west: -0.703125,
      south: 52.908902047770255
    }
  },
  {
    tilename: "510-334-10",
    bbox: {
      east: -0.3515625,
      north: 52.908902047770255,
      west: -0.703125,
      south: 52.69636107827448
    }
  },
  {
    tilename: "510-335-10",
    bbox: {
      east: -0.3515625,
      north: 52.69636107827448,
      west: -0.703125,
      south: 52.48278022207821
    }
  },
  {
    tilename: "510-336-10",
    bbox: {
      east: -0.3515625,
      north: 52.48278022207821,
      west: -0.703125,
      south: 52.26815737376817
    }
  },
  {
    tilename: "510-337-10",
    bbox: {
      east: -0.3515625,
      north: 52.26815737376817,
      west: -0.703125,
      south: 52.05249047600098
    }
  },
  {
    tilename: "510-342-10",
    bbox: {
      east: -0.3515625,
      north: 51.17934297928927,
      west: -0.703125,
      south: 50.95842672335991
    }
  },
  {
    tilename: "510-343-10",
    bbox: {
      east: -0.3515625,
      north: 50.95842672335991,
      west: -0.703125,
      south: 50.73645513701065
    }
  },
  {
    tilename: "511-328-10",
    bbox: {
      east: 0,
      north: 54.16243396806781,
      west: -0.3515625,
      south: 53.9560855309879
    }
  },
  {
    tilename: "511-329-10",
    bbox: {
      east: 0,
      north: 53.9560855309879,
      west: -0.3515625,
      south: 53.74871079689899
    }
  },
  {
    tilename: "511-330-10",
    bbox: {
      east: 0,
      north: 53.74871079689899,
      west: -0.3515625,
      south: 53.54030739150021
    }
  },
  {
    tilename: "511-331-10",
    bbox: {
      east: 0,
      north: 53.54030739150021,
      west: -0.3515625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "511-332-10",
    bbox: {
      east: 0,
      north: 53.33087298301704,
      west: -0.3515625,
      south: 53.12040528310657
    }
  },
  {
    tilename: "511-333-10",
    bbox: {
      east: 0,
      north: 53.12040528310657,
      west: -0.3515625,
      south: 52.908902047770255
    }
  },
  {
    tilename: "511-334-10",
    bbox: {
      east: 0,
      north: 52.908902047770255,
      west: -0.3515625,
      south: 52.69636107827448
    }
  },
  {
    tilename: "511-335-10",
    bbox: {
      east: 0,
      north: 52.69636107827448,
      west: -0.3515625,
      south: 52.48278022207821
    }
  },
  {
    tilename: "511-336-10",
    bbox: {
      east: 0,
      north: 52.48278022207821,
      west: -0.3515625,
      south: 52.26815737376817
    }
  },
  {
    tilename: "511-337-10",
    bbox: {
      east: 0,
      north: 52.26815737376817,
      west: -0.3515625,
      south: 52.05249047600098
    }
  },
  {
    tilename: "511-338-10",
    bbox: {
      east: 0,
      north: 52.05249047600098,
      west: -0.3515625,
      south: 51.83577752045249
    }
  },
  {
    tilename: "511-342-10",
    bbox: {
      east: 0,
      north: 51.17934297928927,
      west: -0.3515625,
      south: 50.95842672335991
    }
  },
  {
    tilename: "512-336-10",
    bbox: {
      east: 0.3515625,
      north: 52.48278022207821,
      west: 0,
      south: 52.26815737376817
    }
  },
  {
    tilename: "512-337-10",
    bbox: {
      east: 0.3515625,
      north: 52.26815737376817,
      west: 0,
      south: 52.05249047600098
    }
  },
  {
    tilename: "512-338-10",
    bbox: {
      east: 0.3515625,
      north: 52.05249047600098,
      west: 0,
      south: 51.83577752045249
    }
  },
  {
    tilename: "512-339-10",
    bbox: {
      east: 0.3515625,
      north: 51.83577752045249,
      west: 0,
      south: 51.6180165487737
    }
  },
  {
    tilename: "512-341-10",
    bbox: {
      east: 0.3515625,
      north: 51.39920565355378,
      west: 0,
      south: 51.17934297928927
    }
  },
  {
    tilename: "512-342-10",
    bbox: {
      east: 0.3515625,
      north: 51.17934297928927,
      west: 0,
      south: 50.95842672335991
    }
  },
  {
    tilename: "512-343-10",
    bbox: {
      east: 0.3515625,
      north: 50.95842672335991,
      west: 0,
      south: 50.73645513701065
    }
  },
  {
    tilename: "513-336-10",
    bbox: {
      east: 0.703125,
      north: 52.48278022207821,
      west: 0.3515625,
      south: 52.26815737376817
    }
  },
  {
    tilename: "513-337-10",
    bbox: {
      east: 0.703125,
      north: 52.26815737376817,
      west: 0.3515625,
      south: 52.05249047600098
    }
  },
  {
    tilename: "513-338-10",
    bbox: {
      east: 0.703125,
      north: 52.05249047600098,
      west: 0.3515625,
      south: 51.83577752045249
    }
  },
  {
    tilename: "513-339-10",
    bbox: {
      east: 0.703125,
      north: 51.83577752045249,
      west: 0.3515625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "513-342-10",
    bbox: {
      east: 0.703125,
      north: 51.17934297928927,
      west: 0.3515625,
      south: 50.95842672335991
    }
  },
  {
    tilename: "513-343-10",
    bbox: {
      east: 0.703125,
      north: 50.95842672335991,
      west: 0.3515625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "514-334-10",
    bbox: {
      east: 1.0546875,
      north: 52.908902047770255,
      west: 0.703125,
      south: 52.69636107827448
    }
  },
  {
    tilename: "514-335-10",
    bbox: {
      east: 1.0546875,
      north: 52.69636107827448,
      west: 0.703125,
      south: 52.48278022207821
    }
  },
  {
    tilename: "514-336-10",
    bbox: {
      east: 1.0546875,
      north: 52.48278022207821,
      west: 0.703125,
      south: 52.26815737376817
    }
  },
  {
    tilename: "514-337-10",
    bbox: {
      east: 1.0546875,
      north: 52.26815737376817,
      west: 0.703125,
      south: 52.05249047600098
    }
  },
  {
    tilename: "514-338-10",
    bbox: {
      east: 1.0546875,
      north: 52.05249047600098,
      west: 0.703125,
      south: 51.83577752045249
    }
  },
  {
    tilename: "514-339-10",
    bbox: {
      east: 1.0546875,
      north: 51.83577752045249,
      west: 0.703125,
      south: 51.6180165487737
    }
  },
  {
    tilename: "514-340-10",
    bbox: {
      east: 1.0546875,
      north: 51.6180165487737,
      west: 0.703125,
      south: 51.39920565355378
    }
  },
  {
    tilename: "514-341-10",
    bbox: {
      east: 1.0546875,
      north: 51.39920565355378,
      west: 0.703125,
      south: 51.17934297928927
    }
  },
  {
    tilename: "515-334-10",
    bbox: {
      east: 1.40625,
      north: 52.908902047770255,
      west: 1.0546875,
      south: 52.69636107827448
    }
  },
  {
    tilename: "515-335-10",
    bbox: {
      east: 1.40625,
      north: 52.69636107827448,
      west: 1.0546875,
      south: 52.48278022207821
    }
  },
  {
    tilename: "515-336-10",
    bbox: {
      east: 1.40625,
      north: 52.48278022207821,
      west: 1.0546875,
      south: 52.26815737376817
    }
  },
  {
    tilename: "515-337-10",
    bbox: {
      east: 1.40625,
      north: 52.26815737376817,
      west: 1.0546875,
      south: 52.05249047600098
    }
  },
  {
    tilename: "515-338-10",
    bbox: {
      east: 1.40625,
      north: 52.05249047600098,
      west: 1.0546875,
      south: 51.83577752045249
    }
  },
  {
    tilename: "515-339-10",
    bbox: {
      east: 1.40625,
      north: 51.83577752045249,
      west: 1.0546875,
      south: 51.6180165487737
    }
  },
  {
    tilename: "515-341-10",
    bbox: {
      east: 1.40625,
      north: 51.39920565355378,
      west: 1.0546875,
      south: 51.17934297928927
    }
  },
  {
    tilename: "1000-690-11",
    bbox: {
      east: -4.04296875,
      north: 50.51342652633955,
      west: -4.21875,
      south: 50.40151532278236
    }
  },
  {
    tilename: "1000-691-11",
    bbox: {
      east: -4.04296875,
      north: 50.40151532278236,
      west: -4.21875,
      south: 50.28933925329178
    }
  },
  {
    tilename: "1001-690-11",
    bbox: {
      east: -3.8671875,
      north: 50.51342652633955,
      west: -4.04296875,
      south: 50.40151532278236
    }
  },
  {
    tilename: "1001-691-11",
    bbox: {
      east: -3.8671875,
      north: 50.40151532278236,
      west: -4.04296875,
      south: 50.28933925329178
    }
  },
  {
    tilename: "1004-678-11",
    bbox: {
      east: -3.33984375,
      north: 51.83577752045249,
      west: -3.515625,
      south: 51.727028157047734
    }
  },
  {
    tilename: "1004-679-11",
    bbox: {
      east: -3.33984375,
      north: 51.727028157047734,
      west: -3.515625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "1004-680-11",
    bbox: {
      east: -3.33984375,
      north: 51.6180165487737,
      west: -3.515625,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1004-681-11",
    bbox: {
      east: -3.33984375,
      north: 51.50874245880333,
      west: -3.515625,
      south: 51.39920565355378
    }
  },
  {
    tilename: "1005-678-11",
    bbox: {
      east: -3.1640625,
      north: 51.83577752045249,
      west: -3.33984375,
      south: 51.727028157047734
    }
  },
  {
    tilename: "1005-679-11",
    bbox: {
      east: -3.1640625,
      north: 51.727028157047734,
      west: -3.33984375,
      south: 51.6180165487737
    }
  },
  {
    tilename: "1005-680-11",
    bbox: {
      east: -3.1640625,
      north: 51.6180165487737,
      west: -3.33984375,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1005-681-11",
    bbox: {
      east: -3.1640625,
      north: 51.50874245880333,
      west: -3.33984375,
      south: 51.39920565355378
    }
  },
  {
    tilename: "1006-658-11",
    bbox: {
      east: -2.98828125,
      north: 53.9560855309879,
      west: -3.1640625,
      south: 53.85252660044952
    }
  },
  {
    tilename: "1006-659-11",
    bbox: {
      east: -2.98828125,
      north: 53.85252660044952,
      west: -3.1640625,
      south: 53.74871079689899
    }
  },
  {
    tilename: "1006-662-11",
    bbox: {
      east: -2.98828125,
      north: 53.54030739150021,
      west: -3.1640625,
      south: 53.4357192066942
    }
  },
  {
    tilename: "1006-663-11",
    bbox: {
      east: -2.98828125,
      north: 53.4357192066942,
      west: -3.1640625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "1006-664-11",
    bbox: {
      east: -2.98828125,
      north: 53.33087298301704,
      west: -3.1640625,
      south: 53.2257684357902
    }
  },
  {
    tilename: "1006-665-11",
    bbox: {
      east: -2.98828125,
      north: 53.2257684357902,
      west: -3.1640625,
      south: 53.12040528310657
    }
  },
  {
    tilename: "1007-658-11",
    bbox: {
      east: -2.8125,
      north: 53.9560855309879,
      west: -2.98828125,
      south: 53.85252660044952
    }
  },
  {
    tilename: "1007-659-11",
    bbox: {
      east: -2.8125,
      north: 53.85252660044952,
      west: -2.98828125,
      south: 53.74871079689899
    }
  },
  {
    tilename: "1007-662-11",
    bbox: {
      east: -2.8125,
      north: 53.54030739150021,
      west: -2.98828125,
      south: 53.4357192066942
    }
  },
  {
    tilename: "1007-664-11",
    bbox: {
      east: -2.8125,
      north: 53.33087298301704,
      west: -2.98828125,
      south: 53.2257684357902
    }
  },
  {
    tilename: "1007-665-11",
    bbox: {
      east: -2.8125,
      north: 53.2257684357902,
      west: -2.98828125,
      south: 53.12040528310657
    }
  },
  {
    tilename: "1008-660-11",
    bbox: {
      east: -2.63671875,
      north: 53.74871079689899,
      west: -2.8125,
      south: 53.64463782485651
    }
  },
  {
    tilename: "1008-661-11",
    bbox: {
      east: -2.63671875,
      north: 53.64463782485651,
      west: -2.8125,
      south: 53.54030739150021
    }
  },
  {
    tilename: "1008-662-11",
    bbox: {
      east: -2.63671875,
      north: 53.54030739150021,
      west: -2.8125,
      south: 53.4357192066942
    }
  },
  {
    tilename: "1008-663-11",
    bbox: {
      east: -2.63671875,
      north: 53.4357192066942,
      west: -2.8125,
      south: 53.33087298301704
    }
  },
  {
    tilename: "1008-680-11",
    bbox: {
      east: -2.63671875,
      north: 51.6180165487737,
      west: -2.8125,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1008-681-11",
    bbox: {
      east: -2.63671875,
      north: 51.50874245880333,
      west: -2.8125,
      south: 51.39920565355378
    }
  },
  {
    tilename: "1009-660-11",
    bbox: {
      east: -2.4609375,
      north: 53.74871079689899,
      west: -2.63671875,
      south: 53.64463782485651
    }
  },
  {
    tilename: "1009-661-11",
    bbox: {
      east: -2.4609375,
      north: 53.64463782485651,
      west: -2.63671875,
      south: 53.54030739150021
    }
  },
  {
    tilename: "1009-662-11",
    bbox: {
      east: -2.4609375,
      north: 53.54030739150021,
      west: -2.63671875,
      south: 53.4357192066942
    }
  },
  {
    tilename: "1009-663-11",
    bbox: {
      east: -2.4609375,
      north: 53.4357192066942,
      west: -2.63671875,
      south: 53.33087298301704
    }
  },
  {
    tilename: "1009-680-11",
    bbox: {
      east: -2.4609375,
      north: 51.6180165487737,
      west: -2.63671875,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1010-660-11",
    bbox: {
      east: -2.28515625,
      north: 53.74871079689899,
      west: -2.4609375,
      south: 53.64463782485651
    }
  },
  {
    tilename: "1010-661-11",
    bbox: {
      east: -2.28515625,
      north: 53.64463782485651,
      west: -2.4609375,
      south: 53.54030739150021
    }
  },
  {
    tilename: "1010-662-11",
    bbox: {
      east: -2.28515625,
      north: 53.54030739150021,
      west: -2.4609375,
      south: 53.4357192066942
    }
  },
  {
    tilename: "1010-663-11",
    bbox: {
      east: -2.28515625,
      north: 53.4357192066942,
      west: -2.4609375,
      south: 53.33087298301704
    }
  },
  {
    tilename: "1010-666-11",
    bbox: {
      east: -2.28515625,
      north: 53.12040528310657,
      west: -2.4609375,
      south: 53.01478324585923
    }
  },
  {
    tilename: "1010-667-11",
    bbox: {
      east: -2.28515625,
      north: 53.01478324585923,
      west: -2.4609375,
      south: 52.908902047770255
    }
  },
  {
    tilename: "1010-670-11",
    bbox: {
      east: -2.28515625,
      north: 52.69636107827448,
      west: -2.4609375,
      south: 52.589700768717805
    }
  },
  {
    tilename: "1010-671-11",
    bbox: {
      east: -2.28515625,
      north: 52.589700768717805,
      west: -2.4609375,
      south: 52.48278022207821
    }
  },
  {
    tilename: "1011-660-11",
    bbox: {
      east: -2.109375,
      north: 53.74871079689899,
      west: -2.28515625,
      south: 53.64463782485651
    }
  },
  {
    tilename: "1011-661-11",
    bbox: {
      east: -2.109375,
      north: 53.64463782485651,
      west: -2.28515625,
      south: 53.54030739150021
    }
  },
  {
    tilename: "1011-666-11",
    bbox: {
      east: -2.109375,
      north: 53.12040528310657,
      west: -2.28515625,
      south: 53.01478324585923
    }
  },
  {
    tilename: "1011-667-11",
    bbox: {
      east: -2.109375,
      north: 53.01478324585923,
      west: -2.28515625,
      south: 52.908902047770255
    }
  },
  {
    tilename: "1011-670-11",
    bbox: {
      east: -2.109375,
      north: 52.69636107827448,
      west: -2.28515625,
      south: 52.589700768717805
    }
  },
  {
    tilename: "1011-671-11",
    bbox: {
      east: -2.109375,
      north: 52.589700768717805,
      west: -2.28515625,
      south: 52.48278022207821
    }
  },
  {
    tilename: "1012-658-11",
    bbox: {
      east: -1.93359375,
      north: 53.9560855309879,
      west: -2.109375,
      south: 53.85252660044952
    }
  },
  {
    tilename: "1012-659-11",
    bbox: {
      east: -1.93359375,
      north: 53.85252660044952,
      west: -2.109375,
      south: 53.74871079689899
    }
  },
  {
    tilename: "1012-660-11",
    bbox: {
      east: -1.93359375,
      north: 53.74871079689899,
      west: -2.109375,
      south: 53.64463782485651
    }
  },
  {
    tilename: "1012-661-11",
    bbox: {
      east: -1.93359375,
      north: 53.64463782485651,
      west: -2.109375,
      south: 53.54030739150021
    }
  },
  {
    tilename: "1012-662-11",
    bbox: {
      east: -1.93359375,
      north: 53.54030739150021,
      west: -2.109375,
      south: 53.4357192066942
    }
  },
  {
    tilename: "1012-663-11",
    bbox: {
      east: -1.93359375,
      north: 53.4357192066942,
      west: -2.109375,
      south: 53.33087298301704
    }
  },
  {
    tilename: "1012-670-11",
    bbox: {
      east: -1.93359375,
      north: 52.69636107827448,
      west: -2.109375,
      south: 52.589700768717805
    }
  },
  {
    tilename: "1012-673-11",
    bbox: {
      east: -1.93359375,
      north: 52.3755991766591,
      west: -2.109375,
      south: 52.26815737376817
    }
  },
  {
    tilename: "1013-658-11",
    bbox: {
      east: -1.7578125,
      north: 53.9560855309879,
      west: -1.93359375,
      south: 53.85252660044952
    }
  },
  {
    tilename: "1013-659-11",
    bbox: {
      east: -1.7578125,
      north: 53.85252660044952,
      west: -1.93359375,
      south: 53.74871079689899
    }
  },
  {
    tilename: "1013-660-11",
    bbox: {
      east: -1.7578125,
      north: 53.74871079689899,
      west: -1.93359375,
      south: 53.64463782485651
    }
  },
  {
    tilename: "1013-661-11",
    bbox: {
      east: -1.7578125,
      north: 53.64463782485651,
      west: -1.93359375,
      south: 53.54030739150021
    }
  },
  {
    tilename: "1013-662-11",
    bbox: {
      east: -1.7578125,
      north: 53.54030739150021,
      west: -1.93359375,
      south: 53.4357192066942
    }
  },
  {
    tilename: "1013-663-11",
    bbox: {
      east: -1.7578125,
      north: 53.4357192066942,
      west: -1.93359375,
      south: 53.33087298301704
    }
  },
  {
    tilename: "1013-670-11",
    bbox: {
      east: -1.7578125,
      north: 52.69636107827448,
      west: -1.93359375,
      south: 52.589700768717805
    }
  },
  {
    tilename: "1013-673-11",
    bbox: {
      east: -1.7578125,
      north: 52.3755991766591,
      west: -1.93359375,
      south: 52.26815737376817
    }
  },
  {
    tilename: "1014-646-11",
    bbox: {
      east: -1.58203125,
      north: 55.17886766328199,
      west: -1.7578125,
      south: 55.07836723201513
    }
  },
  {
    tilename: "1014-647-11",
    bbox: {
      east: -1.58203125,
      north: 55.07836723201513,
      west: -1.7578125,
      south: 54.97761367069626
    }
  },
  {
    tilename: "1014-648-11",
    bbox: {
      east: -1.58203125,
      north: 54.97761367069626,
      west: -1.7578125,
      south: 54.876606654108684
    }
  },
  {
    tilename: "1014-649-11",
    bbox: {
      east: -1.58203125,
      north: 54.876606654108684,
      west: -1.7578125,
      south: 54.77534585936448
    }
  },
  {
    tilename: "1014-658-11",
    bbox: {
      east: -1.58203125,
      north: 53.9560855309879,
      west: -1.7578125,
      south: 53.85252660044952
    }
  },
  {
    tilename: "1014-660-11",
    bbox: {
      east: -1.58203125,
      north: 53.74871079689899,
      west: -1.7578125,
      south: 53.64463782485651
    }
  },
  {
    tilename: "1014-661-11",
    bbox: {
      east: -1.58203125,
      north: 53.64463782485651,
      west: -1.7578125,
      south: 53.54030739150021
    }
  },
  {
    tilename: "1014-662-11",
    bbox: {
      east: -1.58203125,
      north: 53.54030739150021,
      west: -1.7578125,
      south: 53.4357192066942
    }
  },
  {
    tilename: "1014-663-11",
    bbox: {
      east: -1.58203125,
      north: 53.4357192066942,
      west: -1.7578125,
      south: 53.33087298301704
    }
  },
  {
    tilename: "1014-672-11",
    bbox: {
      east: -1.58203125,
      north: 52.48278022207821,
      west: -1.7578125,
      south: 52.3755991766591
    }
  },
  {
    tilename: "1014-673-11",
    bbox: {
      east: -1.58203125,
      north: 52.3755991766591,
      west: -1.7578125,
      south: 52.26815737376817
    }
  },
  {
    tilename: "1015-646-11",
    bbox: {
      east: -1.40625,
      north: 55.17886766328199,
      west: -1.58203125,
      south: 55.07836723201513
    }
  },
  {
    tilename: "1015-647-11",
    bbox: {
      east: -1.40625,
      north: 55.07836723201513,
      west: -1.58203125,
      south: 54.97761367069626
    }
  },
  {
    tilename: "1015-649-11",
    bbox: {
      east: -1.40625,
      north: 54.876606654108684,
      west: -1.58203125,
      south: 54.77534585936448
    }
  },
  {
    tilename: "1015-658-11",
    bbox: {
      east: -1.40625,
      north: 53.9560855309879,
      west: -1.58203125,
      south: 53.85252660044952
    }
  },
  {
    tilename: "1015-660-11",
    bbox: {
      east: -1.40625,
      north: 53.74871079689899,
      west: -1.58203125,
      south: 53.64463782485651
    }
  },
  {
    tilename: "1015-661-11",
    bbox: {
      east: -1.40625,
      north: 53.64463782485651,
      west: -1.58203125,
      south: 53.54030739150021
    }
  },
  {
    tilename: "1015-662-11",
    bbox: {
      east: -1.40625,
      north: 53.54030739150021,
      west: -1.58203125,
      south: 53.4357192066942
    }
  },
  {
    tilename: "1015-673-11",
    bbox: {
      east: -1.40625,
      north: 52.3755991766591,
      west: -1.58203125,
      south: 52.26815737376817
    }
  },
  {
    tilename: "1016-662-11",
    bbox: {
      east: -1.23046875,
      north: 53.54030739150021,
      west: -1.40625,
      south: 53.4357192066942
    }
  },
  {
    tilename: "1016-663-11",
    bbox: {
      east: -1.23046875,
      north: 53.4357192066942,
      west: -1.40625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "1016-664-11",
    bbox: {
      east: -1.23046875,
      north: 53.33087298301704,
      west: -1.40625,
      south: 53.2257684357902
    }
  },
  {
    tilename: "1016-665-11",
    bbox: {
      east: -1.23046875,
      north: 53.2257684357902,
      west: -1.40625,
      south: 53.12040528310657
    }
  },
  {
    tilename: "1016-666-11",
    bbox: {
      east: -1.23046875,
      north: 53.12040528310657,
      west: -1.40625,
      south: 53.01478324585923
    }
  },
  {
    tilename: "1016-667-11",
    bbox: {
      east: -1.23046875,
      north: 53.01478324585923,
      west: -1.40625,
      south: 52.908902047770255
    }
  },
  {
    tilename: "1016-670-11",
    bbox: {
      east: -1.23046875,
      north: 52.69636107827448,
      west: -1.40625,
      south: 52.589700768717805
    }
  },
  {
    tilename: "1016-671-11",
    bbox: {
      east: -1.23046875,
      north: 52.589700768717805,
      west: -1.40625,
      south: 52.48278022207821
    }
  },
  {
    tilename: "1016-686-11",
    bbox: {
      east: -1.23046875,
      north: 50.95842672335991,
      west: -1.40625,
      south: 50.847572953653874
    }
  },
  {
    tilename: "1016-687-11",
    bbox: {
      east: -1.23046875,
      north: 50.847572953653874,
      west: -1.40625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "1017-662-11",
    bbox: {
      east: -1.0546875,
      north: 53.54030739150021,
      west: -1.23046875,
      south: 53.4357192066942
    }
  },
  {
    tilename: "1017-663-11",
    bbox: {
      east: -1.0546875,
      north: 53.4357192066942,
      west: -1.23046875,
      south: 53.33087298301704
    }
  },
  {
    tilename: "1017-664-11",
    bbox: {
      east: -1.0546875,
      north: 53.33087298301704,
      west: -1.23046875,
      south: 53.2257684357902
    }
  },
  {
    tilename: "1017-665-11",
    bbox: {
      east: -1.0546875,
      north: 53.2257684357902,
      west: -1.23046875,
      south: 53.12040528310657
    }
  },
  {
    tilename: "1017-666-11",
    bbox: {
      east: -1.0546875,
      north: 53.12040528310657,
      west: -1.23046875,
      south: 53.01478324585923
    }
  },
  {
    tilename: "1017-671-11",
    bbox: {
      east: -1.0546875,
      north: 52.589700768717805,
      west: -1.23046875,
      south: 52.48278022207821
    }
  },
  {
    tilename: "1017-686-11",
    bbox: {
      east: -1.0546875,
      north: 50.95842672335991,
      west: -1.23046875,
      south: 50.847572953653874
    }
  },
  {
    tilename: "1017-687-11",
    bbox: {
      east: -1.0546875,
      north: 50.847572953653874,
      west: -1.23046875,
      south: 50.73645513701065
    }
  },
  {
    tilename: "1018-674-11",
    bbox: {
      east: -0.87890625,
      north: 52.26815737376817,
      west: -1.0546875,
      south: 52.16045455774704
    }
  },
  {
    tilename: "1018-675-11",
    bbox: {
      east: -0.87890625,
      north: 52.16045455774704,
      west: -1.0546875,
      south: 52.05249047600098
    }
  },
  {
    tilename: "1018-680-11",
    bbox: {
      east: -0.87890625,
      north: 51.6180165487737,
      west: -1.0546875,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1018-681-11",
    bbox: {
      east: -0.87890625,
      north: 51.50874245880333,
      west: -1.0546875,
      south: 51.39920565355378
    }
  },
  {
    tilename: "1018-682-11",
    bbox: {
      east: -0.87890625,
      north: 51.39920565355378,
      west: -1.0546875,
      south: 51.28940590271679
    }
  },
  {
    tilename: "1018-683-11",
    bbox: {
      east: -0.87890625,
      north: 51.28940590271679,
      west: -1.0546875,
      south: 51.17934297928927
    }
  },
  {
    tilename: "1019-674-11",
    bbox: {
      east: -0.703125,
      north: 52.26815737376817,
      west: -0.87890625,
      south: 52.16045455774704
    }
  },
  {
    tilename: "1019-675-11",
    bbox: {
      east: -0.703125,
      north: 52.16045455774704,
      west: -0.87890625,
      south: 52.05249047600098
    }
  },
  {
    tilename: "1019-680-11",
    bbox: {
      east: -0.703125,
      north: 51.6180165487737,
      west: -0.87890625,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1019-681-11",
    bbox: {
      east: -0.703125,
      north: 51.50874245880333,
      west: -0.87890625,
      south: 51.39920565355378
    }
  },
  {
    tilename: "1019-682-11",
    bbox: {
      east: -0.703125,
      north: 51.39920565355378,
      west: -0.87890625,
      south: 51.28940590271679
    }
  },
  {
    tilename: "1019-683-11",
    bbox: {
      east: -0.703125,
      north: 51.28940590271679,
      west: -0.87890625,
      south: 51.17934297928927
    }
  },
  {
    tilename: "1020-676-11",
    bbox: {
      east: -0.52734375,
      north: 52.05249047600098,
      west: -0.703125,
      south: 51.94426487902876
    }
  },
  {
    tilename: "1020-677-11",
    bbox: {
      east: -0.52734375,
      north: 51.94426487902876,
      west: -0.703125,
      south: 51.83577752045249
    }
  },
  {
    tilename: "1020-678-11",
    bbox: {
      east: -0.52734375,
      north: 51.83577752045249,
      west: -0.703125,
      south: 51.727028157047734
    }
  },
  {
    tilename: "1020-679-11",
    bbox: {
      east: -0.52734375,
      north: 51.727028157047734,
      west: -0.703125,
      south: 51.6180165487737
    }
  },
  {
    tilename: "1020-680-11",
    bbox: {
      east: -0.52734375,
      north: 51.6180165487737,
      west: -0.703125,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1020-681-11",
    bbox: {
      east: -0.52734375,
      north: 51.50874245880333,
      west: -0.703125,
      south: 51.39920565355378
    }
  },
  {
    tilename: "1020-682-11",
    bbox: {
      east: -0.52734375,
      north: 51.39920565355378,
      west: -0.703125,
      south: 51.28940590271679
    }
  },
  {
    tilename: "1020-683-11",
    bbox: {
      east: -0.52734375,
      north: 51.28940590271679,
      west: -0.703125,
      south: 51.17934297928927
    }
  },
  {
    tilename: "1021-676-11",
    bbox: {
      east: -0.3515625,
      north: 52.05249047600098,
      west: -0.52734375,
      south: 51.94426487902876
    }
  },
  {
    tilename: "1021-677-11",
    bbox: {
      east: -0.3515625,
      north: 51.94426487902876,
      west: -0.52734375,
      south: 51.83577752045249
    }
  },
  {
    tilename: "1021-678-11",
    bbox: {
      east: -0.3515625,
      north: 51.83577752045249,
      west: -0.52734375,
      south: 51.727028157047734
    }
  },
  {
    tilename: "1021-679-11",
    bbox: {
      east: -0.3515625,
      north: 51.727028157047734,
      west: -0.52734375,
      south: 51.6180165487737
    }
  },
  {
    tilename: "1021-682-11",
    bbox: {
      east: -0.3515625,
      north: 51.39920565355378,
      west: -0.52734375,
      south: 51.28940590271679
    }
  },
  {
    tilename: "1021-683-11",
    bbox: {
      east: -0.3515625,
      north: 51.28940590271679,
      west: -0.52734375,
      south: 51.17934297928927
    }
  },
  {
    tilename: "1022-678-11",
    bbox: {
      east: -0.17578125,
      north: 51.83577752045249,
      west: -0.3515625,
      south: 51.727028157047734
    }
  },
  {
    tilename: "1022-679-11",
    bbox: {
      east: -0.17578125,
      north: 51.727028157047734,
      west: -0.3515625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "1022-683-11",
    bbox: {
      east: -0.17578125,
      north: 51.28940590271679,
      west: -0.3515625,
      south: 51.17934297928927
    }
  },
  {
    tilename: "1022-686-11",
    bbox: {
      east: -0.17578125,
      north: 50.95842672335991,
      west: -0.3515625,
      south: 50.847572953653874
    }
  },
  {
    tilename: "1022-687-11",
    bbox: {
      east: -0.17578125,
      north: 50.847572953653874,
      west: -0.3515625,
      south: 50.73645513701065
    }
  },
  {
    tilename: "1023-678-11",
    bbox: {
      east: 0,
      north: 51.83577752045249,
      west: -0.17578125,
      south: 51.727028157047734
    }
  },
  {
    tilename: "1023-683-11",
    bbox: {
      east: 0,
      north: 51.28940590271679,
      west: -0.17578125,
      south: 51.17934297928927
    }
  },
  {
    tilename: "1023-686-11",
    bbox: {
      east: 0,
      north: 50.95842672335991,
      west: -0.17578125,
      south: 50.847572953653874
    }
  },
  {
    tilename: "1023-687-11",
    bbox: {
      east: 0,
      north: 50.847572953653874,
      west: -0.17578125,
      south: 50.73645513701065
    }
  },
  {
    tilename: "1025-680-11",
    bbox: {
      east: 0.3515625,
      north: 51.6180165487737,
      west: 0.17578125,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1025-681-11",
    bbox: {
      east: 0.3515625,
      north: 51.50874245880333,
      west: 0.17578125,
      south: 51.39920565355378
    }
  },
  {
    tilename: "1026-680-11",
    bbox: {
      east: 0.52734375,
      north: 51.6180165487737,
      west: 0.3515625,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1026-681-11",
    bbox: {
      east: 0.52734375,
      north: 51.50874245880333,
      west: 0.3515625,
      south: 51.39920565355378
    }
  },
  {
    tilename: "1026-682-11",
    bbox: {
      east: 0.52734375,
      north: 51.39920565355378,
      west: 0.3515625,
      south: 51.28940590271679
    }
  },
  {
    tilename: "1026-683-11",
    bbox: {
      east: 0.52734375,
      north: 51.28940590271679,
      west: 0.3515625,
      south: 51.17934297928927
    }
  },
  {
    tilename: "1027-680-11",
    bbox: {
      east: 0.703125,
      north: 51.6180165487737,
      west: 0.52734375,
      south: 51.50874245880333
    }
  },
  {
    tilename: "1027-681-11",
    bbox: {
      east: 0.703125,
      north: 51.50874245880333,
      west: 0.52734375,
      south: 51.39920565355378
    }
  },
  {
    tilename: "1027-682-11",
    bbox: {
      east: 0.703125,
      north: 51.39920565355378,
      west: 0.52734375,
      south: 51.28940590271679
    }
  },
  {
    tilename: "1027-683-11",
    bbox: {
      east: 0.703125,
      north: 51.28940590271679,
      west: 0.52734375,
      south: 51.17934297928927
    }
  },
  {
    tilename: "2014-1326-12",
    bbox: {
      east: -2.900390625,
      north: 53.4357192066942,
      west: -2.98828125,
      south: 53.38332836757154
    }
  },
  {
    tilename: "2014-1327-12",
    bbox: {
      east: -2.900390625,
      north: 53.38332836757154,
      west: -2.98828125,
      south: 53.33087298301704
    }
  },
  {
    tilename: "2015-1326-12",
    bbox: {
      east: -2.8125,
      north: 53.4357192066942,
      west: -2.900390625,
      south: 53.38332836757154
    }
  },
  {
    tilename: "2015-1327-12",
    bbox: {
      east: -2.8125,
      north: 53.38332836757154,
      west: -2.900390625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "2018-1362-12",
    bbox: {
      east: -2.548828125,
      north: 51.50874245880333,
      west: -2.63671875,
      south: 51.45400691005982
    }
  },
  {
    tilename: "2018-1363-12",
    bbox: {
      east: -2.548828125,
      north: 51.45400691005982,
      west: -2.63671875,
      south: 51.39920565355378
    }
  },
  {
    tilename: "2019-1362-12",
    bbox: {
      east: -2.4609375,
      north: 51.50874245880333,
      west: -2.548828125,
      south: 51.45400691005982
    }
  },
  {
    tilename: "2019-1363-12",
    bbox: {
      east: -2.4609375,
      north: 51.45400691005982,
      west: -2.548828125,
      south: 51.39920565355378
    }
  },
  {
    tilename: "2022-1324-12",
    bbox: {
      east: -2.197265625,
      north: 53.54030739150021,
      west: -2.28515625,
      south: 53.4880455360562
    }
  },
  {
    tilename: "2022-1325-12",
    bbox: {
      east: -2.197265625,
      north: 53.4880455360562,
      west: -2.28515625,
      south: 53.4357192066942
    }
  },
  {
    tilename: "2022-1326-12",
    bbox: {
      east: -2.197265625,
      north: 53.4357192066942,
      west: -2.28515625,
      south: 53.38332836757154
    }
  },
  {
    tilename: "2022-1327-12",
    bbox: {
      east: -2.197265625,
      north: 53.38332836757154,
      west: -2.28515625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "2023-1324-12",
    bbox: {
      east: -2.109375,
      north: 53.54030739150021,
      west: -2.197265625,
      south: 53.4880455360562
    }
  },
  {
    tilename: "2023-1325-12",
    bbox: {
      east: -2.109375,
      north: 53.4880455360562,
      west: -2.197265625,
      south: 53.4357192066942
    }
  },
  {
    tilename: "2023-1326-12",
    bbox: {
      east: -2.109375,
      north: 53.4357192066942,
      west: -2.197265625,
      south: 53.38332836757154
    }
  },
  {
    tilename: "2023-1327-12",
    bbox: {
      east: -2.109375,
      north: 53.38332836757154,
      west: -2.197265625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "2024-1342-12",
    bbox: {
      east: -2.021484375,
      north: 52.589700768717805,
      west: -2.109375,
      south: 52.536273041459474
    }
  },
  {
    tilename: "2024-1343-12",
    bbox: {
      east: -2.021484375,
      north: 52.536273041459474,
      west: -2.109375,
      south: 52.48278022207821
    }
  },
  {
    tilename: "2024-1344-12",
    bbox: {
      east: -2.021484375,
      north: 52.48278022207821,
      west: -2.109375,
      south: 52.429222277955134
    }
  },
  {
    tilename: "2024-1345-12",
    bbox: {
      east: -2.021484375,
      north: 52.429222277955134,
      west: -2.109375,
      south: 52.3755991766591
    }
  },
  {
    tilename: "2025-1342-12",
    bbox: {
      east: -1.93359375,
      north: 52.589700768717805,
      west: -2.021484375,
      south: 52.536273041459474
    }
  },
  {
    tilename: "2025-1343-12",
    bbox: {
      east: -1.93359375,
      north: 52.536273041459474,
      west: -2.021484375,
      south: 52.48278022207821
    }
  },
  {
    tilename: "2025-1344-12",
    bbox: {
      east: -1.93359375,
      north: 52.48278022207821,
      west: -2.021484375,
      south: 52.429222277955134
    }
  },
  {
    tilename: "2025-1345-12",
    bbox: {
      east: -1.93359375,
      north: 52.429222277955134,
      west: -2.021484375,
      south: 52.3755991766591
    }
  },
  {
    tilename: "2026-1342-12",
    bbox: {
      east: -1.845703125,
      north: 52.589700768717805,
      west: -1.93359375,
      south: 52.536273041459474
    }
  },
  {
    tilename: "2026-1343-12",
    bbox: {
      east: -1.845703125,
      north: 52.536273041459474,
      west: -1.93359375,
      south: 52.48278022207821
    }
  },
  {
    tilename: "2026-1344-12",
    bbox: {
      east: -1.845703125,
      north: 52.48278022207821,
      west: -1.93359375,
      south: 52.429222277955134
    }
  },
  {
    tilename: "2026-1345-12",
    bbox: {
      east: -1.845703125,
      north: 52.429222277955134,
      west: -1.93359375,
      south: 52.3755991766591
    }
  },
  {
    tilename: "2027-1342-12",
    bbox: {
      east: -1.7578125,
      north: 52.589700768717805,
      west: -1.845703125,
      south: 52.536273041459474
    }
  },
  {
    tilename: "2027-1343-12",
    bbox: {
      east: -1.7578125,
      north: 52.536273041459474,
      west: -1.845703125,
      south: 52.48278022207821
    }
  },
  {
    tilename: "2027-1344-12",
    bbox: {
      east: -1.7578125,
      north: 52.48278022207821,
      west: -1.845703125,
      south: 52.429222277955134
    }
  },
  {
    tilename: "2027-1345-12",
    bbox: {
      east: -1.7578125,
      north: 52.429222277955134,
      west: -1.845703125,
      south: 52.3755991766591
    }
  },
  {
    tilename: "2028-1318-12",
    bbox: {
      east: -1.669921875,
      north: 53.85252660044952,
      west: -1.7578125,
      south: 53.80065082633022
    }
  },
  {
    tilename: "2028-1319-12",
    bbox: {
      east: -1.669921875,
      north: 53.80065082633022,
      west: -1.7578125,
      south: 53.74871079689899
    }
  },
  {
    tilename: "2029-1318-12",
    bbox: {
      east: -1.58203125,
      north: 53.85252660044952,
      west: -1.669921875,
      south: 53.80065082633022
    }
  },
  {
    tilename: "2029-1319-12",
    bbox: {
      east: -1.58203125,
      north: 53.80065082633022,
      west: -1.669921875,
      south: 53.74871079689899
    }
  },
  {
    tilename: "2030-1296-12",
    bbox: {
      east: -1.494140625,
      north: 54.97761367069626,
      west: -1.58203125,
      south: 54.92714186454644
    }
  },
  {
    tilename: "2030-1297-12",
    bbox: {
      east: -1.494140625,
      north: 54.92714186454644,
      west: -1.58203125,
      south: 54.876606654108684
    }
  },
  {
    tilename: "2030-1318-12",
    bbox: {
      east: -1.494140625,
      north: 53.85252660044952,
      west: -1.58203125,
      south: 53.80065082633022
    }
  },
  {
    tilename: "2030-1319-12",
    bbox: {
      east: -1.494140625,
      north: 53.80065082633022,
      west: -1.58203125,
      south: 53.74871079689899
    }
  },
  {
    tilename: "2030-1326-12",
    bbox: {
      east: -1.494140625,
      north: 53.4357192066942,
      west: -1.58203125,
      south: 53.38332836757154
    }
  },
  {
    tilename: "2030-1327-12",
    bbox: {
      east: -1.494140625,
      north: 53.38332836757154,
      west: -1.58203125,
      south: 53.33087298301704
    }
  },
  {
    tilename: "2030-1344-12",
    bbox: {
      east: -1.494140625,
      north: 52.48278022207821,
      west: -1.58203125,
      south: 52.429222277955134
    }
  },
  {
    tilename: "2030-1345-12",
    bbox: {
      east: -1.494140625,
      north: 52.429222277955134,
      west: -1.58203125,
      south: 52.3755991766591
    }
  },
  {
    tilename: "2031-1296-12",
    bbox: {
      east: -1.40625,
      north: 54.97761367069626,
      west: -1.494140625,
      south: 54.92714186454644
    }
  },
  {
    tilename: "2031-1297-12",
    bbox: {
      east: -1.40625,
      north: 54.92714186454644,
      west: -1.494140625,
      south: 54.876606654108684
    }
  },
  {
    tilename: "2031-1318-12",
    bbox: {
      east: -1.40625,
      north: 53.85252660044952,
      west: -1.494140625,
      south: 53.80065082633022
    }
  },
  {
    tilename: "2031-1319-12",
    bbox: {
      east: -1.40625,
      north: 53.80065082633022,
      west: -1.494140625,
      south: 53.74871079689899
    }
  },
  {
    tilename: "2031-1326-12",
    bbox: {
      east: -1.40625,
      north: 53.4357192066942,
      west: -1.494140625,
      south: 53.38332836757154
    }
  },
  {
    tilename: "2031-1327-12",
    bbox: {
      east: -1.40625,
      north: 53.38332836757154,
      west: -1.494140625,
      south: 53.33087298301704
    }
  },
  {
    tilename: "2031-1344-12",
    bbox: {
      east: -1.40625,
      north: 52.48278022207821,
      west: -1.494140625,
      south: 52.429222277955134
    }
  },
  {
    tilename: "2031-1345-12",
    bbox: {
      east: -1.40625,
      north: 52.429222277955134,
      west: -1.494140625,
      south: 52.3755991766591
    }
  },
  {
    tilename: "2034-1334-12",
    bbox: {
      east: -1.142578125,
      north: 53.01478324585923,
      west: -1.23046875,
      south: 52.961875059076014
    }
  },
  {
    tilename: "2034-1335-12",
    bbox: {
      east: -1.142578125,
      north: 52.961875059076014,
      west: -1.23046875,
      south: 52.908902047770255
    }
  },
  {
    tilename: "2034-1340-12",
    bbox: {
      east: -1.142578125,
      north: 52.69636107827448,
      west: -1.23046875,
      south: 52.64306343665891
    }
  },
  {
    tilename: "2034-1341-12",
    bbox: {
      east: -1.142578125,
      north: 52.64306343665891,
      west: -1.23046875,
      south: 52.589700768717805
    }
  },
  {
    tilename: "2035-1334-12",
    bbox: {
      east: -1.0546875,
      north: 53.01478324585923,
      west: -1.142578125,
      south: 52.961875059076014
    }
  },
  {
    tilename: "2035-1335-12",
    bbox: {
      east: -1.0546875,
      north: 52.961875059076014,
      west: -1.142578125,
      south: 52.908902047770255
    }
  },
  {
    tilename: "2035-1340-12",
    bbox: {
      east: -1.0546875,
      north: 52.69636107827448,
      west: -1.142578125,
      south: 52.64306343665891
    }
  },
  {
    tilename: "2035-1341-12",
    bbox: {
      east: -1.0546875,
      north: 52.64306343665891,
      west: -1.142578125,
      south: 52.589700768717805
    }
  },
  {
    tilename: "2042-1360-12",
    bbox: {
      east: -0.439453125,
      north: 51.6180165487737,
      west: -0.52734375,
      south: 51.563412328675874
    }
  },
  {
    tilename: "2042-1361-12",
    bbox: {
      east: -0.439453125,
      north: 51.563412328675874,
      west: -0.52734375,
      south: 51.50874245880333
    }
  },
  {
    tilename: "2042-1362-12",
    bbox: {
      east: -0.439453125,
      north: 51.50874245880333,
      west: -0.52734375,
      south: 51.45400691005982
    }
  },
  {
    tilename: "2042-1363-12",
    bbox: {
      east: -0.439453125,
      north: 51.45400691005982,
      west: -0.52734375,
      south: 51.39920565355378
    }
  },
  {
    tilename: "2043-1360-12",
    bbox: {
      east: -0.3515625,
      north: 51.6180165487737,
      west: -0.439453125,
      south: 51.563412328675874
    }
  },
  {
    tilename: "2043-1361-12",
    bbox: {
      east: -0.3515625,
      north: 51.563412328675874,
      west: -0.439453125,
      south: 51.50874245880333
    }
  },
  {
    tilename: "2043-1362-12",
    bbox: {
      east: -0.3515625,
      north: 51.50874245880333,
      west: -0.439453125,
      south: 51.45400691005982
    }
  },
  {
    tilename: "2043-1363-12",
    bbox: {
      east: -0.3515625,
      north: 51.45400691005982,
      west: -0.439453125,
      south: 51.39920565355378
    }
  },
  {
    tilename: "2044-1360-12",
    bbox: {
      east: -0.263671875,
      north: 51.6180165487737,
      west: -0.3515625,
      south: 51.563412328675874
    }
  },
  {
    tilename: "2044-1361-12",
    bbox: {
      east: -0.263671875,
      north: 51.563412328675874,
      west: -0.3515625,
      south: 51.50874245880333
    }
  },
  {
    tilename: "2044-1362-12",
    bbox: {
      east: -0.263671875,
      north: 51.50874245880333,
      west: -0.3515625,
      south: 51.45400691005982
    }
  },
  {
    tilename: "2044-1363-12",
    bbox: {
      east: -0.263671875,
      north: 51.45400691005982,
      west: -0.3515625,
      south: 51.39920565355378
    }
  },
  {
    tilename: "2044-1364-12",
    bbox: {
      east: -0.263671875,
      north: 51.39920565355378,
      west: -0.3515625,
      south: 51.34433866059923
    }
  },
  {
    tilename: "2044-1365-12",
    bbox: {
      east: -0.263671875,
      north: 51.34433866059923,
      west: -0.3515625,
      south: 51.28940590271679
    }
  },
  {
    tilename: "2045-1360-12",
    bbox: {
      east: -0.17578125,
      north: 51.6180165487737,
      west: -0.263671875,
      south: 51.563412328675874
    }
  },
  {
    tilename: "2045-1363-12",
    bbox: {
      east: -0.17578125,
      north: 51.45400691005982,
      west: -0.263671875,
      south: 51.39920565355378
    }
  },
  {
    tilename: "2045-1364-12",
    bbox: {
      east: -0.17578125,
      north: 51.39920565355378,
      west: -0.263671875,
      south: 51.34433866059923
    }
  },
  {
    tilename: "2045-1365-12",
    bbox: {
      east: -0.17578125,
      north: 51.34433866059923,
      west: -0.263671875,
      south: 51.28940590271679
    }
  },
  {
    tilename: "2046-1358-12",
    bbox: {
      east: -0.087890625,
      north: 51.727028157047734,
      west: -0.17578125,
      south: 51.67255514839676
    }
  },
  {
    tilename: "2046-1359-12",
    bbox: {
      east: -0.087890625,
      north: 51.67255514839676,
      west: -0.17578125,
      south: 51.6180165487737
    }
  },
  {
    tilename: "2046-1360-12",
    bbox: {
      east: -0.087890625,
      north: 51.6180165487737,
      west: -0.17578125,
      south: 51.563412328675874
    }
  },
  {
    tilename: "2046-1364-12",
    bbox: {
      east: -0.087890625,
      north: 51.39920565355378,
      west: -0.17578125,
      south: 51.34433866059923
    }
  },
  {
    tilename: "2046-1365-12",
    bbox: {
      east: -0.087890625,
      north: 51.34433866059923,
      west: -0.17578125,
      south: 51.28940590271679
    }
  },
  {
    tilename: "2047-1358-12",
    bbox: {
      east: 0,
      north: 51.727028157047734,
      west: -0.087890625,
      south: 51.67255514839676
    }
  },
  {
    tilename: "2047-1359-12",
    bbox: {
      east: 0,
      north: 51.67255514839676,
      west: -0.087890625,
      south: 51.6180165487737
    }
  },
  {
    tilename: "2047-1360-12",
    bbox: {
      east: 0,
      north: 51.6180165487737,
      west: -0.087890625,
      south: 51.563412328675874
    }
  },
  {
    tilename: "2047-1363-12",
    bbox: {
      east: 0,
      north: 51.45400691005982,
      west: -0.087890625,
      south: 51.39920565355378
    }
  },
  {
    tilename: "2047-1364-12",
    bbox: {
      east: 0,
      north: 51.39920565355378,
      west: -0.087890625,
      south: 51.34433866059923
    }
  },
  {
    tilename: "2047-1365-12",
    bbox: {
      east: 0,
      north: 51.34433866059923,
      west: -0.087890625,
      south: 51.28940590271679
    }
  },
  {
    tilename: "2048-1360-12",
    bbox: {
      east: 0.087890625,
      north: 51.6180165487737,
      west: 0,
      south: 51.563412328675874
    }
  },
  {
    tilename: "2048-1361-12",
    bbox: {
      east: 0.087890625,
      north: 51.563412328675874,
      west: 0,
      south: 51.50874245880333
    }
  },
  {
    tilename: "2048-1362-12",
    bbox: {
      east: 0.087890625,
      north: 51.50874245880333,
      west: 0,
      south: 51.45400691005982
    }
  },
  {
    tilename: "2048-1363-12",
    bbox: {
      east: 0.087890625,
      north: 51.45400691005982,
      west: 0,
      south: 51.39920565355378
    }
  },
  {
    tilename: "2049-1360-12",
    bbox: {
      east: 0.17578125,
      north: 51.6180165487737,
      west: 0.087890625,
      south: 51.563412328675874
    }
  },
  {
    tilename: "2049-1361-12",
    bbox: {
      east: 0.17578125,
      north: 51.563412328675874,
      west: 0.087890625,
      south: 51.50874245880333
    }
  },
  {
    tilename: "2049-1362-12",
    bbox: {
      east: 0.17578125,
      north: 51.50874245880333,
      west: 0.087890625,
      south: 51.45400691005982
    }
  },
  {
    tilename: "2049-1363-12",
    bbox: {
      east: 0.17578125,
      north: 51.45400691005982,
      west: 0.087890625,
      south: 51.39920565355378
    }
  },
  {
    tilename: "4090-2722-13",
    bbox: {
      east: -0.2197265625,
      north: 51.563412328675874,
      west: -0.263671875,
      south: 51.53608560178475
    }
  },
  {
    tilename: "4090-2723-13",
    bbox: {
      east: -0.2197265625,
      north: 51.53608560178475,
      west: -0.263671875,
      south: 51.50874245880333
    }
  },
  {
    tilename: "4090-2724-13",
    bbox: {
      east: -0.2197265625,
      north: 51.50874245880333,
      west: -0.263671875,
      south: 51.481382896100975
    }
  },
  {
    tilename: "4090-2725-13",
    bbox: {
      east: -0.2197265625,
      north: 51.481382896100975,
      west: -0.263671875,
      south: 51.45400691005982
    }
  },
  {
    tilename: "4091-2722-13",
    bbox: {
      east: -0.17578125,
      north: 51.563412328675874,
      west: -0.2197265625,
      south: 51.53608560178475
    }
  },
  {
    tilename: "4091-2723-13",
    bbox: {
      east: -0.17578125,
      north: 51.53608560178475,
      west: -0.2197265625,
      south: 51.50874245880333
    }
  },
  {
    tilename: "4091-2724-13",
    bbox: {
      east: -0.17578125,
      north: 51.50874245880333,
      west: -0.2197265625,
      south: 51.481382896100975
    }
  },
  {
    tilename: "4091-2725-13",
    bbox: {
      east: -0.17578125,
      north: 51.481382896100975,
      west: -0.2197265625,
      south: 51.45400691005982
    }
  },
  {
    tilename: "4092-2722-13",
    bbox: {
      east: -0.1318359375,
      north: 51.563412328675874,
      west: -0.17578125,
      south: 51.53608560178475
    }
  },
  {
    tilename: "4092-2723-13",
    bbox: {
      east: -0.1318359375,
      north: 51.53608560178475,
      west: -0.17578125,
      south: 51.50874245880333
    }
  },
  {
    tilename: "4092-2724-13",
    bbox: {
      east: -0.1318359375,
      north: 51.50874245880333,
      west: -0.17578125,
      south: 51.481382896100975
    }
  },
  {
    tilename: "4092-2725-13",
    bbox: {
      east: -0.1318359375,
      north: 51.481382896100975,
      west: -0.17578125,
      south: 51.45400691005982
    }
  },
  {
    tilename: "4092-2726-13",
    bbox: {
      east: -0.1318359375,
      north: 51.45400691005982,
      west: -0.17578125,
      south: 51.42661449707482
    }
  },
  {
    tilename: "4092-2727-13",
    bbox: {
      east: -0.1318359375,
      north: 51.42661449707482,
      west: -0.17578125,
      south: 51.39920565355378
    }
  },
  {
    tilename: "4093-2722-13",
    bbox: {
      east: -0.087890625,
      north: 51.563412328675874,
      west: -0.1318359375,
      south: 51.53608560178475
    }
  },
  {
    tilename: "4093-2723-13",
    bbox: {
      east: -0.087890625,
      north: 51.53608560178475,
      west: -0.1318359375,
      south: 51.50874245880333
    }
  },
  {
    tilename: "4093-2724-13",
    bbox: {
      east: -0.087890625,
      north: 51.50874245880333,
      west: -0.1318359375,
      south: 51.481382896100975
    }
  },
  {
    tilename: "4093-2725-13",
    bbox: {
      east: -0.087890625,
      north: 51.481382896100975,
      west: -0.1318359375,
      south: 51.45400691005982
    }
  },
  {
    tilename: "4093-2726-13",
    bbox: {
      east: -0.087890625,
      north: 51.45400691005982,
      west: -0.1318359375,
      south: 51.42661449707482
    }
  },
  {
    tilename: "4093-2727-13",
    bbox: {
      east: -0.087890625,
      north: 51.42661449707482,
      west: -0.1318359375,
      south: 51.39920565355378
    }
  },
  {
    tilename: "4094-2722-13",
    bbox: {
      east: -0.0439453125,
      north: 51.563412328675874,
      west: -0.087890625,
      south: 51.53608560178475
    }
  },
  {
    tilename: "4094-2723-13",
    bbox: {
      east: -0.0439453125,
      north: 51.53608560178475,
      west: -0.087890625,
      south: 51.50874245880333
    }
  },
  {
    tilename: "4094-2724-13",
    bbox: {
      east: -0.0439453125,
      north: 51.50874245880333,
      west: -0.087890625,
      south: 51.481382896100975
    }
  },
  {
    tilename: "4094-2725-13",
    bbox: {
      east: -0.0439453125,
      north: 51.481382896100975,
      west: -0.087890625,
      south: 51.45400691005982
    }
  },
  {
    tilename: "4095-2722-13",
    bbox: {
      east: 0,
      north: 51.563412328675874,
      west: -0.0439453125,
      south: 51.53608560178475
    }
  },
  {
    tilename: "4095-2723-13",
    bbox: {
      east: 0,
      north: 51.53608560178475,
      west: -0.0439453125,
      south: 51.50874245880333
    }
  },
  {
    tilename: "4095-2724-13",
    bbox: {
      east: 0,
      north: 51.50874245880333,
      west: -0.0439453125,
      south: 51.481382896100975
    }
  },
  {
    tilename: "4095-2725-13",
    bbox: {
      east: 0,
      north: 51.481382896100975,
      west: -0.0439453125,
      south: 51.45400691005982
    }
  }
];
const quadsDataTileGrid = {
  lad,
  msoa,
  lsoa,
  oa
};
const doBboxesIntersect = (args) => {
  const bbox1Feature = bboxPolygon([args.bbox1.south, args.bbox1.west, args.bbox1.north, args.bbox1.east]);
  const bbox2Feature = bboxPolygon([args.bbox2.south, args.bbox2.west, args.bbox2.north, args.bbox2.east]);
  return booleanIntersects(bbox1Feature, bbox2Feature);
};
const bboxToDataTiles = (bbox, geoType2, dataTileGrid = quadsDataTileGrid) => {
  return dataTileGrid[geoType2].filter((dataTile) => {
    return doBboxesIntersect({ bbox1: bbox, bbox2: dataTile.bbox });
  });
};
const englandAndWales = {
  meta: {
    name: "England and Wales",
    code: "K04000001",
    geotype: "ew"
  },
  geo_json: {
    type: "FeatureCollection",
    features: [
      {
        id: "bbox",
        type: "blah",
        geometry: {
          type: "blah",
          coordinates: [
            [2, 58],
            [-6, 48]
          ]
          // coordinates: [
          //   [2.08, 55.68],
          //   [-6.59, 48.53],
          // ],
        }
      }
    ]
  }
};
const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(
  " "
);
const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
function number2words(n) {
  if (n < 20)
    return num[n];
  const digit = n % 10;
  if (n < 100)
    return tens[~~(n / 10) - 2] + (digit ? "-" + num[digit] : "");
  if (n < 1e3)
    return num[~~(n / 100)] + " hundred" + (n % 100 == 0 ? "" : " " + number2words(n % 100));
  return number2words(~~(n / 1e3)) + " thousand" + (n % 1e3 != 0 ? " " + number2words(n % 1e3) : "");
}
function roundNumber(args) {
  const roundingFactor = 10 ** args.decimalPlaces;
  return Math.round(args.number * roundingFactor) / roundingFactor;
}
function uniqueRoundedNumbers(args) {
  return [
    ...new Set(
      args.numbers.map((n) => {
        return roundNumber({ number: n, decimalPlaces: args.decimalPlaces });
      })
    )
  ];
}
const isNumeric = (num2) => (typeof num2 === "number" || typeof num2 === "string" && num2.trim() !== "") && !isNaN(num2);
const twoDecimalPlaceClassifications = [
  "main_language_detailed",
  "main_language_detailed_23a",
  "gender_identity_4a",
  "gender_identity_8a",
  "sexual_orientation_4a",
  "sexual_orientation_6a",
  "sexual_orientation_9a"
];
const classificationDataDisplayConfig = (classificationCode, mode) => {
  if (classificationCode === "population_density") {
    return {
      suffix: mode === "change" ? "%" : "",
      // special-case for change-over-time
      round: (r) => roundNumber({ number: r, decimalPlaces: mode === "change" ? 1 : 0 }),
      roundToString: (r) => mode === "change" ? r.toFixed(1) : Math.round(r).toLocaleString(),
      roundBreaks: (breaks) => uniqueRoundedNumbers({ numbers: breaks, decimalPlaces: mode === "change" ? 1 : 0 })
    };
  } else if (classificationCode === "median_age") {
    return {
      suffix: mode === "change" ? " years" : "",
      // special-case for change-over-time
      round: (r) => roundNumber({ number: r, decimalPlaces: 0 }),
      roundToString: (r) => parseInt(r.toFixed(0)).toLocaleString(),
      roundBreaks: (breaks) => uniqueRoundedNumbers({ numbers: breaks, decimalPlaces: 0 })
    };
  } else if (twoDecimalPlaceClassifications.includes(classificationCode)) {
    return {
      suffix: getStandardSuffixForMode(mode),
      round: (r) => roundNumber({ number: r, decimalPlaces: 2 }),
      roundToString: (r) => r.toFixed(2),
      roundBreaks: (breaks) => uniqueRoundedNumbers({ numbers: breaks, decimalPlaces: 2 })
    };
  } else {
    return {
      suffix: getStandardSuffixForMode(mode),
      round: (r) => roundNumber({ number: r, decimalPlaces: 1 }),
      roundToString: (r) => r.toFixed(1),
      roundBreaks: (breaks) => uniqueRoundedNumbers({ numbers: breaks, decimalPlaces: 1 })
    };
  }
};
const getStandardSuffixForMode = (mode) => {
  switch (mode) {
    case "choropleth":
    case "dotdensity":
      return "%";
    case "change":
      return "pp";
    default:
      never();
  }
};
const getClassificationDataSuffix = (classificationCode, mode) => {
  return classificationDataDisplayConfig(classificationCode, mode).suffix;
};
const roundedClassificationDataToString = (classificationCode, mode, r) => {
  return classificationDataDisplayConfig(classificationCode, mode).roundToString(r);
};
const uniqueRoundedClassificationBreaks = (classificationCode, mode, breaks) => {
  return classificationDataDisplayConfig(classificationCode, mode).roundBreaks(breaks);
};
const geoBaseUrl = "https://cdn.ons.gov.uk/maptiles/cm-geos/v2";
const getSingleCategoryUrl = (args) => `${args.baseUrl}/tiles/${args.geoType}/${args.tile.tilename}/${args.category.code}.csv`;
const getMultiCategoryUrl = (args) => {
  return `${args.baseUrl}/tiles/${args.geoType}/${args.tile.tilename}/${args.classification.code}.csv`;
};
const fetchSingleCategoryDataForBbox = async (args) => {
  const data = await fetchTileDataForBbox(args, getSingleCategoryUrl);
  return data.map((row) => parseSingleCategoryData(row, args.category.code));
};
const fetchMultiCategoryDataForBbox = async (args) => {
  const data = await fetchTileDataForBbox(args, getMultiCategoryUrl);
  return data.map(
    (row) => parseMultiCategoryData(
      row,
      args.classification.categories.map((c) => c.code)
    )
  );
};
const fetchTileDataForBbox = async (args, getUrl) => {
  const dataTiles = bboxToDataTiles(args.bbox, args.geoType);
  const fetched = await Promise.all(
    dataTiles.map((tile) => {
      const url = getUrl({ ...args, tile });
      return fetchTileData(url);
    })
  );
  return fetched.flat();
};
const fetchTileData = async (url) => {
  const response = await fetch(url);
  const csv = await response.text();
  return dsv.csvParse(csv);
};
const parseSingleCategoryData = (row, categoryCode) => {
  const geoCode2 = row.geography_code;
  const categoryValue = parseFloat(row[categoryCode]);
  return { geoCode: geoCode2, categoryValue };
};
const parseMultiCategoryData = (row, categoryCodes) => {
  const geoCode2 = row.geography_code;
  const categoryValues = categoryCodes.map((c) => ({ code: c, value: parseFloat(row[c]) }));
  return { geoCode: geoCode2, categoryValues };
};
const fetchBreaks = async (args) => {
  const url = `${args.baseUrl}/breaksCkmeans/${args.geoType}/${args.category.code}.json`;
  const response = await fetch(url);
  const breaksRaw = await response.json();
  const breaks = uniqueRoundedClassificationBreaks(args.classification.code, args.mode, breaksRaw);
  return { breaks };
};
const fetchMultiCategoryDataForEnglandAndWales = async (args) => {
  const url = `${args.baseUrl}/ew/${args.classification.code}.json`;
  const response = await fetch(url);
  const data = await response.json();
  return { data };
};
const fetchGeography = async (geoCode2) => {
  const url = `${geoBaseUrl}/${geoCode2}.geojson`;
  const response = await fetch(url);
  return await response.json();
};
const getMode = (params2) => {
  const maybeMode = modes.find((m) => m === params2["mode"]);
  return maybeMode ?? "choropleth";
};
const getSelectedGeography = (params2) => {
  for (const param of GeoTypes) {
    if (params2.has(param)) {
      return {
        geoType: param,
        geoCode: params2.get(param)
      };
    }
  }
  return { geoType: englandAndWales.meta.geotype, geoCode: englandAndWales.meta.code };
};
const getGeoLock = (params2) => {
  if (params2.has("geoLock")) {
    return { geoLock: params2.get("geoLock") };
  }
  return {};
};
const getEmbedCode = (url, embedParams) => {
  const params2 = new URLSearchParams({
    ...Object.fromEntries(url.searchParams),
    ...Object.fromEntries(Object.entries(embedParams)),
    embedView: embedParams.embedView
    // avoid type error
  });
  const embedUrl = url.origin + url.pathname + "?" + params2.toString();
  return {
    url: embedUrl,
    html: `<iframe height="600px" width="100%" title="ONS Census Maps" frameborder="0" src="${embedUrl}" />`
  };
};
const cleanUnusedParams = (pageUrl, embedSelectGeo, doGeoLock) => {
  const cleanedUrl = new URL(pageUrl);
  if (!embedSelectGeo) {
    GeoTypes.forEach((geoParam) => {
      if (cleanedUrl.searchParams.has(geoParam)) {
        cleanedUrl.searchParams.delete(geoParam);
      }
    });
  }
  if (!doGeoLock) {
    if (cleanedUrl.searchParams.has("geoLock")) {
      cleanedUrl.searchParams.delete("geoLock");
    }
  }
  return cleanedUrl;
};
const parseEmbedParams = (params2) => {
  const view = params2.get("embedView") === "viewport" ? "viewport" : "geography";
  return {
    embed: params2.get("embed") === "true" ? {
      interactive: params2.get("embedInteractive") === "true",
      areaSearch: params2.get("embedAreaSearch") === "true",
      categorySelection: params2.get("embedCategorySelection") === "true",
      view,
      bounds: view === "viewport" ? parseBounds(params2) : void 0
    } : void 0
  };
};
function parseBounds(params2) {
  const array = params2.get("embedBounds")?.split(",")?.map((b) => parseFloat(b));
  return isNumberQuadruple(array) ? array : void 0;
}
function isNumberQuadruple(input) {
  return Array.isArray(input) && input.length === 4 && input.every((x) => isNumeric(x));
}
const params = derived([page, content], ([$page, $content]) => {
  const mode = getMode($page.params);
  const variableGroup = $content?.[mode]?.variableGroups.find((vg) => vg.slug === $page.params.variableGroup);
  const variable = variableGroup?.variables.find((v) => v.slug === $page.params.variable);
  const classification = variable?.classifications.find((c) => c.slug === $page.params.classification);
  const category = classification?.categories.find((c) => c.slug === $page.params.category) ?? classification?.categories[0];
  const categories = classification?.categories.filter((c) => $page.params.category.split("~").includes(c.code));
  return {
    mode,
    variableGroup,
    variable,
    classification,
    category,
    categories,
    ...getSelectedGeography($page.url.searchParams),
    ...getGeoLock($page.url.searchParams),
    ...parseEmbedParams($page.url.searchParams)
  };
});
const geoCode = derived(params, ($params) => $params.geoCode);
const geoType = derived(params, ($params) => $params.geoType);
const geography = asyncDerived([geoCode, geoType], async ([$geoCode, $geoType]) => {
  const data = $geoType === "ew" ? englandAndWales : await fetchGeography($geoCode);
  return getGeographyInfo(data);
});
function getGeographyInfo(data) {
  return {
    geoType: data.meta.geotype.toLowerCase(),
    geoCode: data.meta.code,
    displayName: data.meta.name,
    bbox: data.geo_json.features.find((f) => f.id === "bbox").geometry.coordinates,
    boundary: data.geo_json.features.find((f) => f.id === "boundary")
  };
}
const nav = writable({ open: false });
const geoTypePluralNames = {
  ew: "England & Wales",
  lad: "Local Authority Districts",
  msoa: "Middle Layer Super Output Areas",
  oa: "Output Areas"
};
const geoTypeSingularDescriptions = {
  ew: "England & Wales",
  lad: "Local Authority Districts are large, named areas of the country administered by a local government body",
  msoa: "Middle Layer Super Output Areas are medium-sized, aggregated areas of census statistics, contained within local authorities",
  oa: "Output Areas are the smallest, lowest-level areas of census statistics"
};
const maxPostcodeResults = 10;
const isSearchableQuery = (query) => {
  return query.length >= 3;
};
const fetchGeoPostcodeSearchItems = async (q) => {
  if (isSearchableQuery(q)) {
    const fetched = await Promise.all([fetchGeographySearchItems(q), fetchPostcodeSearchItems(q)]);
    return fetched.flat();
  }
  return [];
};
const fetchGeographySearchItems = async (q) => {
  try {
    const response = await fetch(`${appBasePath}/api/geo?q=${q}`);
    const json = await response.json();
    return json.map((geo) => ({ kind: "Geography", value: geo.en, ...geo }));
  } catch (err) {
    console.error(err);
    return [];
  }
};
const fetchPostcodeSearchItems = async (q) => {
  try {
    const pcdPrefix = q.toUpperCase().replace(/\s/g, "").slice(0, 4);
    const response = await fetch(`https://cdn.ons.gov.uk/maptiles/postcode-oa-lookup/2022-08/${pcdPrefix}.json`);
    const json = await response.json();
    const postcodeResults = json.map((postcode) => ({ kind: "Postcode", value: postcode.pcd, oa: postcode.oa }));
    return filterPostcodeResults(q, postcodeResults);
  } catch (err) {
    console.error(err);
    return [];
  }
};
const filterPostcodeResults = (q, postcodes) => {
  const matchesOriginalQuery = postcodes.filter((pcd) => pcd.value.toUpperCase().includes(q.toUpperCase())).slice(0, maxPostcodeResults);
  if (matchesOriginalQuery.length > 0) {
    return matchesOriginalQuery;
  }
  const matchesQueryWithSpacesRemoved = postcodes.filter((pcd) => pcd.value.toUpperCase().replace(/\s/g, "").includes(q.toUpperCase().replace(/\s/g, ""))).slice(0, maxPostcodeResults);
  return matchesQueryWithSpacesRemoved;
};
function isOutOfViewport(parent, container) {
  const parentBounding = parent.getBoundingClientRect();
  const boundingContainer = container.getBoundingClientRect();
  const out = {};
  out.top = parentBounding.top < 0;
  out.left = parentBounding.left < 0;
  out.bottom = parentBounding.bottom + boundingContainer.height > (window.innerHeight || document.documentElement.clientHeight);
  out.right = parentBounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  return out;
}
const Item_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".item.svelte-ybdqo9{cursor:default;height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--itemPadding, 0 20px);color:var(--itemColor, inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.groupHeader.svelte-ybdqo9{text-transform:var(--groupTitleTextTransform, uppercase)}.groupItem.svelte-ybdqo9{padding-left:var(--groupItemPaddingLeft, 40px)}.item.svelte-ybdqo9:active{background:var(--itemActiveBackground, #b9daff)}.item.active.svelte-ybdqo9{background:var(--itemIsActiveBG, #007aff);color:var(--itemIsActiveColor, #fff)}.item.notSelectable.svelte-ybdqo9{color:var(--itemIsNotSelectableColor, #999)}.item.first.svelte-ybdqo9{border-radius:var(--itemFirstBorderRadius, 4px 4px 0 0)}.item.hover.svelte-ybdqo9:not(.active){background:var(--itemHoverBG, #e7f2ff);color:var(--itemHoverColor, inherit)}",
  map: null
};
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isActive = false } = $$props;
  let { isFirst = false } = $$props;
  let { isHover = false } = $$props;
  let { isSelectable = false } = $$props;
  let { getOptionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  let { filterText = "" } = $$props;
  let itemClasses = "";
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.isFirst === void 0 && $$bindings.isFirst && isFirst !== void 0)
    $$bindings.isFirst(isFirst);
  if ($$props.isHover === void 0 && $$bindings.isHover && isHover !== void 0)
    $$bindings.isHover(isHover);
  if ($$props.isSelectable === void 0 && $$bindings.isSelectable && isSelectable !== void 0)
    $$bindings.isSelectable(isSelectable);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  $$result.css.add(css$7);
  {
    {
      const classes = [];
      if (isActive) {
        classes.push("active");
      }
      if (isFirst) {
        classes.push("first");
      }
      if (isHover) {
        classes.push("hover");
      }
      if (item.isGroupHeader) {
        classes.push("groupHeader");
      }
      if (item.isGroupItem) {
        classes.push("groupItem");
      }
      if (!isSelectable) {
        classes.push("notSelectable");
      }
      itemClasses = classes.join(" ");
    }
  }
  return `<div class="${"item " + escape(itemClasses, true) + " svelte-ybdqo9"}"><!-- HTML_TAG_START -->${getOptionLabel(item, filterText)}<!-- HTML_TAG_END --></div>`;
});
const List_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".listContainer.svelte-1mmk1xt{box-shadow:var(--listShadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));border-radius:var(--listBorderRadius, 4px);max-height:var(--listMaxHeight, 250px);overflow-y:auto;background:var(--listBackground, #fff);border:var(--listBorder, none);position:var(--listPosition, absolute);z-index:var(--listZIndex, 2);width:100%;left:var(--listLeft, 0);right:var(--listRight, 0)}.virtualList.svelte-1mmk1xt{height:var(--virtualListHeight, 200px)}.listGroupTitle.svelte-1mmk1xt{color:var(--groupTitleColor, #8f8f8f);cursor:default;font-size:var(--groupTitleFontSize, 12px);font-weight:var(--groupTitleFontWeight, 600);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--groupTitlePadding, 0 20px);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;text-transform:var(--groupTitleTextTransform, uppercase)}.empty.svelte-1mmk1xt{text-align:var(--listEmptyTextAlign, center);padding:var(--listEmptyPadding, 20px 0);color:var(--listEmptyColor, #78848f)}",
  map: null
};
function isItemActive(item, value, optionIdentifier) {
  return value && value[optionIdentifier] === item[optionIdentifier];
}
function isItemFirst(itemIndex) {
  return itemIndex === 0;
}
function isItemHover(hoverItemIndex, item, itemIndex, items) {
  return isItemSelectable(item) && (hoverItemIndex === itemIndex || items.length === 1);
}
function isItemSelectable(item) {
  return item.isGroupHeader && item.isSelectable || item.selectable || !item.hasOwnProperty("selectable");
}
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { container = void 0 } = $$props;
  let { VirtualList: VirtualList2 = null } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { isVirtualList = false } = $$props;
  let { items = [] } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    if (option)
      return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { getGroupHeaderLabel = null } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { value = void 0 } = $$props;
  let { optionIdentifier = "value" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { isMulti = false } = $$props;
  let { activeItemIndex = 0 } = $$props;
  let { filterText = "" } = $$props;
  let { parent = null } = $$props;
  let { listPlacement = null } = $$props;
  let { listAutoWidth = null } = $$props;
  let { listOffset = 5 } = $$props;
  let listStyle;
  function computePlacement() {
    const { height, width } = parent.getBoundingClientRect();
    listStyle = "";
    listStyle += `min-width:${width}px;width:${listAutoWidth ? "auto" : "100%"};`;
    if (listPlacement === "top" || listPlacement === "auto" && isOutOfViewport(parent, container).bottom) {
      listStyle += `bottom:${height + listOffset}px;`;
    } else {
      listStyle += `top:${height + listOffset}px;`;
    }
  }
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList2 !== void 0)
    $$bindings.VirtualList(VirtualList2);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier !== void 0)
    $$bindings.optionIdentifier(optionIdentifier);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.activeItemIndex === void 0 && $$bindings.activeItemIndex && activeItemIndex !== void 0)
    $$bindings.activeItemIndex(activeItemIndex);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  $$result.css.add(css$6);
  {
    {
      if (parent && container)
        computePlacement();
    }
  }
  return `

<div class="${["listContainer svelte-1mmk1xt", isVirtualList ? "virtualList" : ""].join(" ").trim()}"${add_attribute("style", listStyle, 0)}${add_attribute("this", container, 0)}>${isVirtualList ? `${validate_component(VirtualList2 || missing_component, "svelte:component").$$render($$result, { items, itemHeight }, {}, {
    default: ({ item, i }) => {
      return `<div class="listItem">${validate_component(Item$1 || missing_component, "svelte:component").$$render(
        $$result,
        {
          item,
          filterText,
          getOptionLabel,
          isFirst: isItemFirst(i),
          isActive: isItemActive(item, value, optionIdentifier),
          isHover: isItemHover(hoverItemIndex, item, i, items),
          isSelectable: isItemSelectable(item)
        },
        {},
        {}
      )}</div>`;
    }
  })}` : `${items.length ? each(items, (item, i) => {
    return `${item.isGroupHeader && !item.isSelectable ? `<div class="listGroupTitle svelte-1mmk1xt">${escape(getGroupHeaderLabel(item))}</div>` : `<div class="listItem" tabindex="-1">${validate_component(Item$1 || missing_component, "svelte:component").$$render(
      $$result,
      {
        item,
        filterText,
        getOptionLabel,
        isFirst: isItemFirst(i),
        isActive: isItemActive(item, value, optionIdentifier),
        isHover: isItemHover(hoverItemIndex, item, i, items),
        isSelectable: isItemSelectable(item)
      },
      {},
      {}
    )}
                </div>`}`;
  }) : `${!hideEmptyState ? `<div class="empty svelte-1mmk1xt">${escape(noOptionsMessage)}</div>` : ``}`}`}</div>`;
});
const Selection_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".selection.svelte-1be6cx3{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}",
  map: null
};
const Selection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { getSelectionLabel = void 0 } = $$props;
  let { item = void 0 } = $$props;
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$5);
  return `<div class="selection svelte-1be6cx3"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>`;
});
const MultiSelection_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".multiSelectItem.svelte-j22aje.svelte-j22aje{background:var(--multiItemBG, #ebedef);margin:var(--multiItemMargin, 5px 5px 0 0);border-radius:var(--multiItemBorderRadius, 16px);height:var(--multiItemHeight, 32px);line-height:var(--multiItemHeight, 32px);display:flex;cursor:default;padding:var(--multiItemPadding, 0 10px 0 15px);max-width:100%}.multiSelectItem_label.svelte-j22aje.svelte-j22aje{margin:var(--multiLabelMargin, 0 5px 0 0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiSelectItem.svelte-j22aje.svelte-j22aje:hover,.multiSelectItem.active.svelte-j22aje.svelte-j22aje{background-color:var(--multiItemActiveBG, #006fff);color:var(--multiItemActiveColor, #fff)}.multiSelectItem.disabled.svelte-j22aje.svelte-j22aje:hover{background:var(--multiItemDisabledHoverBg, #ebedef);color:var(--multiItemDisabledHoverColor, #c1c6cc)}.multiSelectItem_clear.svelte-j22aje.svelte-j22aje{border-radius:var(--multiClearRadius, 50%);background:var(--multiClearBG, #52616f);min-width:var(--multiClearWidth, 16px);max-width:var(--multiClearWidth, 16px);height:var(--multiClearHeight, 16px);position:relative;top:var(--multiClearTop, 8px);text-align:var(--multiClearTextAlign, center);padding:var(--multiClearPadding, 1px)}.multiSelectItem_clear.svelte-j22aje.svelte-j22aje:hover,.active.svelte-j22aje .multiSelectItem_clear.svelte-j22aje{background:var(--multiClearHoverBG, #fff)}.multiSelectItem_clear.svelte-j22aje:hover svg.svelte-j22aje,.active.svelte-j22aje .multiSelectItem_clear svg.svelte-j22aje{fill:var(--multiClearHoverFill, #006fff)}.multiSelectItem_clear.svelte-j22aje svg.svelte-j22aje{fill:var(--multiClearFill, #ebedef);vertical-align:top}",
  map: null
};
const MultiSelection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value = [] } = $$props;
  let { activeValue = void 0 } = $$props;
  let { isDisabled = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { getSelectionLabel = void 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.activeValue === void 0 && $$bindings.activeValue && activeValue !== void 0)
    $$bindings.activeValue(activeValue);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  $$result.css.add(css$4);
  return `${each(value, (item, i) => {
    return `<div class="${"multiSelectItem " + escape(activeValue === i ? "active" : "", true) + " " + escape(isDisabled ? "disabled" : "", true) + " svelte-j22aje"}"><div class="multiSelectItem_label svelte-j22aje"><!-- HTML_TAG_START -->${getSelectionLabel(item)}<!-- HTML_TAG_END --></div>
        ${!isDisabled && !multiFullItemClearable ? `<div class="multiSelectItem_clear svelte-j22aje"><svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-j22aje"><path d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>
            </div>` : ``}
    </div>`;
  })}`;
});
const VirtualList_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "svelte-virtual-list-viewport.svelte-yyenik{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-yyenik,svelte-virtual-list-row.svelte-yyenik{display:block}svelte-virtual-list-row.svelte-yyenik{overflow:hidden}",
  map: null
};
const VirtualList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = void 0 } = $$props;
  let { height = "100%" } = $$props;
  let { itemHeight = 40 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { start = 0 } = $$props;
  let { end = 0 } = $$props;
  let viewport;
  let contents;
  let visible;
  let top = 0;
  let bottom = 0;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  $$result.css.add(css$3);
  visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  return `<svelte-virtual-list-viewport style="${"height: " + escape(height, true) + ";"}" class="svelte-yyenik"${add_attribute("this", viewport, 0)}><svelte-virtual-list-contents style="${"padding-top: " + escape(top, true) + "px; padding-bottom: " + escape(bottom, true) + "px;"}" class="svelte-yyenik"${add_attribute("this", contents, 0)}>${each(visible, (row) => {
    return `<svelte-virtual-list-row class="svelte-yyenik">${slots.default ? slots.default({
      item: row.data,
      i: row.index,
      hoverItemIndex
    }) : `Missing template`}
            </svelte-virtual-list-row>`;
  })}</svelte-virtual-list-contents></svelte-virtual-list-viewport>`;
});
const ClearIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`;
});
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
}
const Select_svelte_svelte_type_style_lang$1 = "";
const { Object: Object_1 } = globals;
const css$2 = {
  code: ".selectContainer.svelte-11kk7oj.svelte-11kk7oj{--internalPadding:0 16px;border:var(--border, 1px solid #d8dbdf);border-radius:var(--borderRadius, 3px);box-sizing:border-box;height:var(--height, 42px);position:relative;display:flex;align-items:center;padding:var(--padding, var(--internalPadding));background:var(--background, #fff);margin:var(--margin, 0)}.selectContainer.svelte-11kk7oj input.svelte-11kk7oj{cursor:default;border:none;color:var(--inputColor, #3f4f5f);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--inputPadding, var(--padding, var(--internalPadding)));width:100%;background:transparent;font-size:var(--inputFontSize, 14px);letter-spacing:var(--inputLetterSpacing, -0.08px);position:absolute;left:var(--inputLeft, 0);margin:var(--inputMargin, 0)}.selectContainer.svelte-11kk7oj input.svelte-11kk7oj::-moz-placeholder{color:var(--placeholderColor, #78848f);opacity:var(--placeholderOpacity, 1)}.selectContainer.svelte-11kk7oj input.svelte-11kk7oj::placeholder{color:var(--placeholderColor, #78848f);opacity:var(--placeholderOpacity, 1)}.selectContainer.svelte-11kk7oj input.svelte-11kk7oj:focus{outline:none}.selectContainer.svelte-11kk7oj.svelte-11kk7oj:hover{border-color:var(--borderHoverColor, #b2b8bf)}.selectContainer.focused.svelte-11kk7oj.svelte-11kk7oj{border-color:var(--borderFocusColor, #006fe8)}.selectContainer.disabled.svelte-11kk7oj.svelte-11kk7oj{background:var(--disabledBackground, #ebedef);border-color:var(--disabledBorderColor, #ebedef);color:var(--disabledColor, #c1c6cc)}.selectContainer.disabled.svelte-11kk7oj input.svelte-11kk7oj::-moz-placeholder{color:var(--disabledPlaceholderColor, #c1c6cc);opacity:var(--disabledPlaceholderOpacity, 1)}.selectContainer.disabled.svelte-11kk7oj input.svelte-11kk7oj::placeholder{color:var(--disabledPlaceholderColor, #c1c6cc);opacity:var(--disabledPlaceholderOpacity, 1)}.selectedItem.svelte-11kk7oj.svelte-11kk7oj{line-height:var(--height, 42px);height:var(--height, 42px);overflow-x:hidden;padding:var(--selectedItemPadding, 0 20px 0 0)}.selectedItem.svelte-11kk7oj.svelte-11kk7oj:focus{outline:none}.clearSelect.svelte-11kk7oj.svelte-11kk7oj{position:absolute;right:var(--clearSelectRight, 10px);top:var(--clearSelectTop, 11px);bottom:var(--clearSelectBottom, 11px);width:var(--clearSelectWidth, 20px);color:var(--clearSelectColor, #c5cacf);flex:none !important}.clearSelect.svelte-11kk7oj.svelte-11kk7oj:hover{color:var(--clearSelectHoverColor, #2c3e50)}.selectContainer.focused.svelte-11kk7oj .clearSelect.svelte-11kk7oj{color:var(--clearSelectFocusColor, #3f4f5f)}.indicator.svelte-11kk7oj.svelte-11kk7oj{position:absolute;right:var(--indicatorRight, 10px);top:var(--indicatorTop, 11px);width:var(--indicatorWidth, 20px);height:var(--indicatorHeight, 20px);color:var(--indicatorColor, #c5cacf)}.indicator.svelte-11kk7oj svg.svelte-11kk7oj{display:inline-block;fill:var(--indicatorFill, currentcolor);line-height:1;stroke:var(--indicatorStroke, currentcolor);stroke-width:0}.spinner.svelte-11kk7oj.svelte-11kk7oj{position:absolute;right:var(--spinnerRight, 10px);top:var(--spinnerLeft, 11px);width:var(--spinnerWidth, 20px);height:var(--spinnerHeight, 20px);color:var(--spinnerColor, #51ce6c);animation:svelte-11kk7oj-rotate 0.75s linear infinite}.spinner_icon.svelte-11kk7oj.svelte-11kk7oj{display:block;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transform:none}.spinner_path.svelte-11kk7oj.svelte-11kk7oj{stroke-dasharray:90;stroke-linecap:round}.multiSelect.svelte-11kk7oj.svelte-11kk7oj{display:flex;padding:var(--multiSelectPadding, 0 35px 0 16px);height:auto;flex-wrap:wrap;align-items:stretch}.multiSelect.svelte-11kk7oj>.svelte-11kk7oj{flex:1 1 50px}.selectContainer.multiSelect.svelte-11kk7oj input.svelte-11kk7oj{padding:var(--multiSelectInputPadding, 0);position:relative;margin:var(--multiSelectInputMargin, 0)}.hasError.svelte-11kk7oj.svelte-11kk7oj{border:var(--errorBorder, 1px solid #ff2d55);background:var(--errorBackground, #fff)}.a11yText.svelte-11kk7oj.svelte-11kk7oj{z-index:9999;border:0px;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0px;white-space:nowrap}@keyframes svelte-11kk7oj-rotate{100%{transform:rotate(360deg)}}",
  map: null
};
function convertStringItemsToObjects(_items) {
  return _items.map((item, index) => {
    return { index, value: item, label: `${item}` };
  });
}
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredItems;
  let showSelectedItem;
  let showClearIcon;
  let placeholderText;
  let showMultiSelect;
  let listProps;
  let ariaSelection;
  let ariaContext;
  const dispatch = createEventDispatcher();
  let { id = null } = $$props;
  let { container = void 0 } = $$props;
  let { input = void 0 } = $$props;
  let { isMulti = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { isDisabled = false } = $$props;
  let { isCreatable = false } = $$props;
  let { isFocused = false } = $$props;
  let { value = null } = $$props;
  let { filterText = "" } = $$props;
  let { placeholder = "Select..." } = $$props;
  let { placeholderAlwaysShow = false } = $$props;
  let { items = null } = $$props;
  let { itemFilter = (label, filterText2, option) => `${label}`.toLowerCase().includes(filterText2.toLowerCase()) } = $$props;
  let { groupBy = void 0 } = $$props;
  let { groupFilter = (groups) => groups } = $$props;
  let { isGroupHeaderSelectable = false } = $$props;
  let { getGroupHeaderLabel = (option) => {
    return option[labelIdentifier] || option.id;
  } } = $$props;
  let { labelIdentifier = "label" } = $$props;
  let { getOptionLabel = (option, filterText2) => {
    return option.isCreator ? `Create "${filterText2}"` : option[labelIdentifier];
  } } = $$props;
  let { optionIdentifier = "value" } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { hasError = false } = $$props;
  let { containerStyles = "" } = $$props;
  let { getSelectionLabel = (option) => {
    if (option)
      return option[labelIdentifier];
    else
      return null;
  } } = $$props;
  let { createGroupHeaderItem = (groupValue) => {
    return { value: groupValue, label: groupValue };
  } } = $$props;
  let { createItem = (filterText2) => {
    return { value: filterText2, label: filterText2 };
  } } = $$props;
  const getFilteredItems = () => {
    return filteredItems;
  };
  let { isSearchable = true } = $$props;
  let { inputStyles = "" } = $$props;
  let { isClearable = true } = $$props;
  let { isWaiting = false } = $$props;
  let { listPlacement = "auto" } = $$props;
  let { listOpen = false } = $$props;
  let { isVirtualList = false } = $$props;
  let { loadOptionsInterval = 300 } = $$props;
  let { noOptionsMessage = "No options" } = $$props;
  let { hideEmptyState = false } = $$props;
  let { inputAttributes = {} } = $$props;
  let { listAutoWidth = true } = $$props;
  let { itemHeight = 40 } = $$props;
  let { Icon = void 0 } = $$props;
  let { iconProps = {} } = $$props;
  let { showChevron = false } = $$props;
  let { showIndicator = false } = $$props;
  let { containerClasses = "" } = $$props;
  let { indicatorSvg = void 0 } = $$props;
  let { listOffset = 5 } = $$props;
  let { ClearIcon: ClearIcon$1 = ClearIcon } = $$props;
  let { Item: Item$1 = Item } = $$props;
  let { List: List$1 = List } = $$props;
  let { Selection: Selection$1 = Selection } = $$props;
  let { MultiSelection: MultiSelection$1 = MultiSelection } = $$props;
  let { VirtualList: VirtualList$1 = VirtualList } = $$props;
  function filterMethod(args) {
    if (args.loadOptions && args.filterText.length > 0)
      return;
    if (!args.items)
      return [];
    if (args.items && args.items.length > 0 && typeof args.items[0] !== "object") {
      args.items = convertStringItemsToObjects(args.items);
    }
    let filterResults = args.items.filter((item) => {
      let matchesFilter = itemFilter(getOptionLabel(item, args.filterText), args.filterText, item);
      if (matchesFilter && args.isMulti && args.value && Array.isArray(args.value)) {
        matchesFilter = !args.value.some((x) => {
          return x[args.optionIdentifier] === item[args.optionIdentifier];
        });
      }
      return matchesFilter;
    });
    if (args.groupBy) {
      filterResults = filterGroupedItems(filterResults);
    }
    if (args.isCreatable) {
      filterResults = addCreatableItem(filterResults, args.filterText);
    }
    return filterResults;
  }
  function addCreatableItem(_items, _filterText) {
    if (_filterText.length === 0)
      return _items;
    const itemToCreate = createItem(_filterText);
    if (_items[0] && _filterText === _items[0][labelIdentifier])
      return _items;
    itemToCreate.isCreator = true;
    return [..._items, itemToCreate];
  }
  let { selectedValue = null } = $$props;
  let activeValue;
  let prev_value;
  let prev_filterText;
  let prev_isFocused;
  let hoverItemIndex;
  const getItems = debounce(
    async () => {
      isWaiting = true;
      let res = await loadOptions(filterText).catch((err) => {
        console.warn("svelte-select loadOptions error :>> ", err);
        dispatch("error", { type: "loadOptions", details: err });
      });
      if (res && !res.cancelled) {
        if (res) {
          if (res && res.length > 0 && typeof res[0] !== "object") {
            res = convertStringItemsToObjects(res);
          }
          filteredItems = [...res];
          dispatch("loaded", { items: filteredItems });
        } else {
          filteredItems = [];
        }
        if (isCreatable) {
          filteredItems = addCreatableItem(filteredItems, filterText);
        }
        isWaiting = false;
        isFocused = true;
        listOpen = true;
      }
    },
    loadOptionsInterval
  );
  function setValue() {
    if (typeof value === "string") {
      value = { [optionIdentifier]: value, label: value };
    } else if (isMulti && Array.isArray(value) && value.length > 0) {
      value = value.map((item) => typeof item === "string" ? { value: item, label: item } : item);
    }
  }
  let _inputAttributes;
  function assignInputAttributes() {
    _inputAttributes = Object.assign(
      {
        autocapitalize: "none",
        autocomplete: "off",
        autocorrect: "off",
        spellcheck: false,
        tabindex: 0,
        type: "text",
        "aria-autocomplete": "list"
      },
      inputAttributes
    );
    if (id) {
      _inputAttributes.id = id;
    }
    if (!isSearchable) {
      _inputAttributes.readonly = true;
    }
  }
  function filterGroupedItems(_items) {
    const groupValues = [];
    const groups = {};
    _items.forEach((item) => {
      const groupValue = groupBy(item);
      if (!groupValues.includes(groupValue)) {
        groupValues.push(groupValue);
        groups[groupValue] = [];
        if (groupValue) {
          groups[groupValue].push(Object.assign(createGroupHeaderItem(groupValue, item), {
            id: groupValue,
            isGroupHeader: true,
            isSelectable: isGroupHeaderSelectable
          }));
        }
      }
      groups[groupValue].push(Object.assign({ isGroupItem: !!groupValue }, item));
    });
    const sortedGroupedItems = [];
    groupFilter(groupValues).forEach((groupValue) => {
      sortedGroupedItems.push(...groups[groupValue]);
    });
    return sortedGroupedItems;
  }
  function dispatchSelectedItem() {
    if (isMulti) {
      if (JSON.stringify(value) !== JSON.stringify(prev_value)) {
        if (checkValueForDuplicates()) {
          dispatch("select", value);
        }
      }
      return;
    }
    {
      dispatch("select", value);
    }
  }
  function setupFocus() {
    if (isFocused || listOpen) {
      handleFocus();
    } else {
      if (input)
        input.blur();
    }
  }
  function setupMulti() {
    if (value) {
      if (Array.isArray(value)) {
        value = [...value];
      } else {
        value = [value];
      }
    }
  }
  function setupFilterText() {
    if (filterText.length === 0)
      return;
    isFocused = true;
    listOpen = true;
    if (loadOptions) {
      getItems();
    } else {
      listOpen = true;
      if (isMulti) {
        activeValue = void 0;
      }
    }
  }
  function checkValueForDuplicates() {
    let noDuplicates = true;
    if (value) {
      const ids = [];
      const uniqueValues = [];
      value.forEach((val) => {
        if (!ids.includes(val[optionIdentifier])) {
          ids.push(val[optionIdentifier]);
          uniqueValues.push(val);
        } else {
          noDuplicates = false;
        }
      });
      if (!noDuplicates)
        value = uniqueValues;
    }
    return noDuplicates;
  }
  function findItem(selection) {
    let matchTo = selection ? selection[optionIdentifier] : value[optionIdentifier];
    return items.find((item) => item[optionIdentifier] === matchTo);
  }
  function updateValueDisplay(items2) {
    if (!items2 || items2.length === 0 || items2.some((item) => typeof item !== "object"))
      return;
    if (!value || (isMulti ? value.some((selection) => !selection || !selection[optionIdentifier]) : !value[optionIdentifier]))
      return;
    if (Array.isArray(value)) {
      value = value.map((selection) => findItem(selection) || selection);
    } else {
      value = findItem() || value;
    }
  }
  function handleFocus() {
    isFocused = true;
    if (input)
      input.focus();
  }
  function handleClear() {
    value = void 0;
    listOpen = false;
    dispatch("clear", value);
    handleFocus();
  }
  let { ariaValues = (values) => {
    return `Option ${values}, selected.`;
  } } = $$props;
  let { ariaListOpen = (label, count) => {
    return `You are currently focused on option ${label}. There are ${count} results available.`;
  } } = $$props;
  let { ariaFocused = () => {
    return `Select is focused, type to refine list, press down to open the menu.`;
  } } = $$props;
  function handleAriaSelection() {
    let selected = void 0;
    if (isMulti && value.length > 0) {
      selected = value.map((v) => getSelectionLabel(v)).join(", ");
    } else {
      selected = getSelectionLabel(value);
    }
    return ariaValues(selected);
  }
  function handleAriaContent() {
    if (!isFocused || !filteredItems || filteredItems.length === 0)
      return "";
    let _item = filteredItems[hoverItemIndex];
    if (listOpen && _item) {
      let label = getSelectionLabel(_item);
      let count = filteredItems ? filteredItems.length : 0;
      return ariaListOpen(label, count);
    } else {
      return ariaFocused();
    }
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.isMulti === void 0 && $$bindings.isMulti && isMulti !== void 0)
    $$bindings.isMulti(isMulti);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.isCreatable === void 0 && $$bindings.isCreatable && isCreatable !== void 0)
    $$bindings.isCreatable(isCreatable);
  if ($$props.isFocused === void 0 && $$bindings.isFocused && isFocused !== void 0)
    $$bindings.isFocused(isFocused);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderAlwaysShow === void 0 && $$bindings.placeholderAlwaysShow && placeholderAlwaysShow !== void 0)
    $$bindings.placeholderAlwaysShow(placeholderAlwaysShow);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.itemFilter === void 0 && $$bindings.itemFilter && itemFilter !== void 0)
    $$bindings.itemFilter(itemFilter);
  if ($$props.groupBy === void 0 && $$bindings.groupBy && groupBy !== void 0)
    $$bindings.groupBy(groupBy);
  if ($$props.groupFilter === void 0 && $$bindings.groupFilter && groupFilter !== void 0)
    $$bindings.groupFilter(groupFilter);
  if ($$props.isGroupHeaderSelectable === void 0 && $$bindings.isGroupHeaderSelectable && isGroupHeaderSelectable !== void 0)
    $$bindings.isGroupHeaderSelectable(isGroupHeaderSelectable);
  if ($$props.getGroupHeaderLabel === void 0 && $$bindings.getGroupHeaderLabel && getGroupHeaderLabel !== void 0)
    $$bindings.getGroupHeaderLabel(getGroupHeaderLabel);
  if ($$props.labelIdentifier === void 0 && $$bindings.labelIdentifier && labelIdentifier !== void 0)
    $$bindings.labelIdentifier(labelIdentifier);
  if ($$props.getOptionLabel === void 0 && $$bindings.getOptionLabel && getOptionLabel !== void 0)
    $$bindings.getOptionLabel(getOptionLabel);
  if ($$props.optionIdentifier === void 0 && $$bindings.optionIdentifier && optionIdentifier !== void 0)
    $$bindings.optionIdentifier(optionIdentifier);
  if ($$props.loadOptions === void 0 && $$bindings.loadOptions && loadOptions !== void 0)
    $$bindings.loadOptions(loadOptions);
  if ($$props.hasError === void 0 && $$bindings.hasError && hasError !== void 0)
    $$bindings.hasError(hasError);
  if ($$props.containerStyles === void 0 && $$bindings.containerStyles && containerStyles !== void 0)
    $$bindings.containerStyles(containerStyles);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  if ($$props.createGroupHeaderItem === void 0 && $$bindings.createGroupHeaderItem && createGroupHeaderItem !== void 0)
    $$bindings.createGroupHeaderItem(createGroupHeaderItem);
  if ($$props.createItem === void 0 && $$bindings.createItem && createItem !== void 0)
    $$bindings.createItem(createItem);
  if ($$props.getFilteredItems === void 0 && $$bindings.getFilteredItems && getFilteredItems !== void 0)
    $$bindings.getFilteredItems(getFilteredItems);
  if ($$props.isSearchable === void 0 && $$bindings.isSearchable && isSearchable !== void 0)
    $$bindings.isSearchable(isSearchable);
  if ($$props.inputStyles === void 0 && $$bindings.inputStyles && inputStyles !== void 0)
    $$bindings.inputStyles(inputStyles);
  if ($$props.isClearable === void 0 && $$bindings.isClearable && isClearable !== void 0)
    $$bindings.isClearable(isClearable);
  if ($$props.isWaiting === void 0 && $$bindings.isWaiting && isWaiting !== void 0)
    $$bindings.isWaiting(isWaiting);
  if ($$props.listPlacement === void 0 && $$bindings.listPlacement && listPlacement !== void 0)
    $$bindings.listPlacement(listPlacement);
  if ($$props.listOpen === void 0 && $$bindings.listOpen && listOpen !== void 0)
    $$bindings.listOpen(listOpen);
  if ($$props.isVirtualList === void 0 && $$bindings.isVirtualList && isVirtualList !== void 0)
    $$bindings.isVirtualList(isVirtualList);
  if ($$props.loadOptionsInterval === void 0 && $$bindings.loadOptionsInterval && loadOptionsInterval !== void 0)
    $$bindings.loadOptionsInterval(loadOptionsInterval);
  if ($$props.noOptionsMessage === void 0 && $$bindings.noOptionsMessage && noOptionsMessage !== void 0)
    $$bindings.noOptionsMessage(noOptionsMessage);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.inputAttributes === void 0 && $$bindings.inputAttributes && inputAttributes !== void 0)
    $$bindings.inputAttributes(inputAttributes);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.Icon === void 0 && $$bindings.Icon && Icon !== void 0)
    $$bindings.Icon(Icon);
  if ($$props.iconProps === void 0 && $$bindings.iconProps && iconProps !== void 0)
    $$bindings.iconProps(iconProps);
  if ($$props.showChevron === void 0 && $$bindings.showChevron && showChevron !== void 0)
    $$bindings.showChevron(showChevron);
  if ($$props.showIndicator === void 0 && $$bindings.showIndicator && showIndicator !== void 0)
    $$bindings.showIndicator(showIndicator);
  if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0)
    $$bindings.containerClasses(containerClasses);
  if ($$props.indicatorSvg === void 0 && $$bindings.indicatorSvg && indicatorSvg !== void 0)
    $$bindings.indicatorSvg(indicatorSvg);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  if ($$props.ClearIcon === void 0 && $$bindings.ClearIcon && ClearIcon$1 !== void 0)
    $$bindings.ClearIcon(ClearIcon$1);
  if ($$props.Item === void 0 && $$bindings.Item && Item$1 !== void 0)
    $$bindings.Item(Item$1);
  if ($$props.List === void 0 && $$bindings.List && List$1 !== void 0)
    $$bindings.List(List$1);
  if ($$props.Selection === void 0 && $$bindings.Selection && Selection$1 !== void 0)
    $$bindings.Selection(Selection$1);
  if ($$props.MultiSelection === void 0 && $$bindings.MultiSelection && MultiSelection$1 !== void 0)
    $$bindings.MultiSelection(MultiSelection$1);
  if ($$props.VirtualList === void 0 && $$bindings.VirtualList && VirtualList$1 !== void 0)
    $$bindings.VirtualList(VirtualList$1);
  if ($$props.selectedValue === void 0 && $$bindings.selectedValue && selectedValue !== void 0)
    $$bindings.selectedValue(selectedValue);
  if ($$props.handleClear === void 0 && $$bindings.handleClear && handleClear !== void 0)
    $$bindings.handleClear(handleClear);
  if ($$props.ariaValues === void 0 && $$bindings.ariaValues && ariaValues !== void 0)
    $$bindings.ariaValues(ariaValues);
  if ($$props.ariaListOpen === void 0 && $$bindings.ariaListOpen && ariaListOpen !== void 0)
    $$bindings.ariaListOpen(ariaListOpen);
  if ($$props.ariaFocused === void 0 && $$bindings.ariaFocused && ariaFocused !== void 0)
    $$bindings.ariaFocused(ariaFocused);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredItems = filterMethod({
      loadOptions,
      filterText,
      items,
      value,
      isMulti,
      optionIdentifier,
      groupBy,
      isCreatable
    });
    {
      {
        if (selectedValue)
          console.warn("selectedValue is no longer used. Please use value instead.");
      }
    }
    {
      updateValueDisplay(items);
    }
    {
      {
        if (value)
          setValue();
      }
    }
    {
      {
        if (inputAttributes || !isSearchable)
          assignInputAttributes();
      }
    }
    {
      {
        if (isMulti) {
          setupMulti();
        }
      }
    }
    {
      {
        if (isMulti && value && value.length > 1) {
          checkValueForDuplicates();
        }
      }
    }
    {
      {
        if (value)
          dispatchSelectedItem();
      }
    }
    {
      {
        if (!value && isMulti && prev_value) {
          dispatch("select", value);
        }
      }
    }
    {
      {
        if (isFocused !== prev_isFocused) {
          setupFocus();
        }
      }
    }
    {
      {
        if (filterText !== prev_filterText) {
          setupFilterText();
        }
      }
    }
    showSelectedItem = value && filterText.length === 0;
    showClearIcon = showSelectedItem && isClearable && !isDisabled && !isWaiting;
    placeholderText = placeholderAlwaysShow && isMulti ? placeholder : value ? "" : placeholder;
    showMultiSelect = isMulti && value && value.length > 0;
    listProps = {
      Item: Item$1,
      filterText,
      optionIdentifier,
      noOptionsMessage,
      hideEmptyState,
      isVirtualList,
      VirtualList: VirtualList$1,
      value,
      isMulti,
      getGroupHeaderLabel,
      items: filteredItems,
      itemHeight,
      getOptionLabel,
      listPlacement,
      parent: container,
      listAutoWidth,
      listOffset
    };
    ariaSelection = value ? handleAriaSelection() : "";
    ariaContext = handleAriaContent();
    $$rendered = `

<div class="${[
      "selectContainer " + escape(containerClasses, true) + " svelte-11kk7oj",
      (hasError ? "hasError" : "") + " " + (isMulti ? "multiSelect" : "") + " " + (isDisabled ? "disabled" : "") + " " + (isFocused ? "focused" : "")
    ].join(" ").trim()}"${add_attribute("style", containerStyles, 0)}${add_attribute("this", container, 0)}><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11yText svelte-11kk7oj">${isFocused ? `<span id="aria-selection">${escape(ariaSelection)}</span>
            <span id="aria-context">${escape(ariaContext)}</span>` : ``}</span>

    ${Icon ? `${validate_component(Icon || missing_component, "svelte:component").$$render($$result, Object_1.assign({}, iconProps), {}, {})}` : ``}

    ${showMultiSelect ? `${validate_component(MultiSelection$1 || missing_component, "svelte:component").$$render(
      $$result,
      {
        value,
        getSelectionLabel,
        activeValue,
        isDisabled,
        multiFullItemClearable
      },
      {},
      {}
    )}` : ``}

    <input${spread(
      [
        { readonly: !isSearchable || null },
        escape_object(_inputAttributes),
        {
          placeholder: escape_attribute_value(placeholderText)
        },
        {
          style: escape_attribute_value(inputStyles)
        },
        { disabled: isDisabled || null }
      ],
      { classes: "svelte-11kk7oj" }
    )}${add_attribute("this", input, 0)}${add_attribute("value", filterText, 0)}>

    ${!isMulti && showSelectedItem ? `<div class="selectedItem svelte-11kk7oj">${validate_component(Selection$1 || missing_component, "svelte:component").$$render($$result, { item: value, getSelectionLabel }, {}, {})}</div>` : ``}

    ${showClearIcon ? `<div class="clearSelect svelte-11kk7oj" aria-hidden="true">${validate_component(ClearIcon$1 || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``}

    ${!showClearIcon && (showIndicator || showChevron && !value || !isSearchable && !isDisabled && !isWaiting && (showSelectedItem && !isClearable || !showSelectedItem)) ? `<div class="indicator svelte-11kk7oj" aria-hidden="true">${indicatorSvg ? `<!-- HTML_TAG_START -->${indicatorSvg}<!-- HTML_TAG_END -->` : `<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-11kk7oj"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`}</div>` : ``}

    ${isWaiting ? `<div class="spinner svelte-11kk7oj"><svg class="spinner_icon svelte-11kk7oj" viewBox="25 25 50 50"><circle class="spinner_path svelte-11kk7oj" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg></div>` : ``}

    ${listOpen ? `${validate_component(List$1 || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign({}, listProps, { hoverItemIndex }),
      {
        hoverItemIndex: ($$value) => {
          hoverItemIndex = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

    ${!isMulti || isMulti && !showMultiSelect ? `<input${add_attribute("name", inputAttributes.name, 0)} type="hidden"${add_attribute("value", value ? getSelectionLabel(value) : null, 0)} class="svelte-11kk7oj">` : ``}

    ${isMulti && showMultiSelect ? `${each(value, (item) => {
      return `<input${add_attribute("name", inputAttributes.name, 0)} type="hidden"${add_attribute("value", item ? getSelectionLabel(item) : null, 0)} class="svelte-11kk7oj">`;
    })}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Select_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".selectbox.svelte-oxngd3{box-sizing:border-box;margin:0;border:0;--border:2px solid var(--borderColor, #206095);--borderRadius:0;--listBorderRadius:0;--itemFirstBorderRadius:0;--padding:0 8px;--clearSelectBottom:auto;--clearSelectRight:8px;--clearSelectTop:auto;--clearSelectWidth:24px;--clearSelectColor:#206095;--indicatorWidth:22px;--indicatorHeight:22px;--indicatorRight:11px;--borderHoverColor:var(--borderColor, #206095);--borderFocusColor:var(--borderColor, #206095);--inputColor:#206095;--itemColor:#206095;--placeholderColor:#9ca3af;--itemIsActiveBG:#206095;--itemHoverBG:#3875d7;--itemHoverColor:white;--clearSelectColor:white;--clearSelectFocusColor:white;--clearSelectHoverColor:white;--indicatorColor:white;--spinnerColor:rgba(255, 255, 255, 0)}.selectbox, .selectbox input, .selectbox .item, .selectbox svg{cursor:pointer !important}.selectbox input:focus{cursor:default !important}.selectbox > .selectContainer{box-shadow:inset -46px 0px #206095}.selectbox.focused > .selectContainer{outline:4px solid #fbc900}.selectbox.selected > .selectContainer{background-color:#206095 !important}.selectbox.selected .selectedItem{color:white !important;font-weight:bold}.selectbox .selectedItem .group{display:none}.selectbox .item > .group{color:white;background-color:rgb(144, 32, 130);padding:0 4px;margin-left:8px;border-radius:2px;font-weight:bold;font-size:smaller;opacity:0.7}.selectbox .indicator svg{fill:white}.selectbox .clearSelect{height:24px}.selectbox .clearSelect:focus{outline:4px solid #fbc900}.selectbox .indicator{width:24px;height:24px;line-height:1}",
  map: null
};
const Select_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let noOptionsMessage;
  let hideEmptyState;
  const searchIcon = `<svg viewBox="0 0 20 20" fill-rule="evenodd"><path d="M0,8a8,8,0,1,0,16,0a8,8,0,1,0,-16,0ZM3,8a5,5,0,1,0,10,0a5,5,0,1,0,-10,0Z"/><path d="M18,20L20,18L14,12L12,14Z"/></svg>`;
  const chevronIcon = `<svg viewBox="0 0 20 20"><path d="M1,6L19,6L10,15Z"/></svg>`;
  createEventDispatcher();
  let { id = "" } = $$props;
  let { container = void 0 } = $$props;
  let { mode = "default" } = $$props;
  let { items } = $$props;
  let { placeholder = "Select one..." } = $$props;
  let { value = null } = $$props;
  let { filterText = "" } = $$props;
  let { isSearchable = true } = $$props;
  let { isClearable = true } = $$props;
  let { autoClear = false } = $$props;
  let { idKey = "value" } = $$props;
  let { labelKey = "label" } = $$props;
  let { groupKey = null } = $$props;
  let { groupItems = false } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { fontSize = "1.1em" } = $$props;
  let { fontSizeInput = ".91em" } = $$props;
  let { height = 48 } = $$props;
  const maxSelected = 4;
  const getOptionLabel = groupKey && !groupItems ? (option) => `${option[labelKey]}${option[groupKey] ? `<span class="group">${option[groupKey]}</span>` : ""}` : (option) => option[labelKey];
  let { getSelectionLabel = (option) => {
    if (option)
      return getOptionLabel(option);
    else
      return null;
  } } = $$props;
  const groupBy = groupItems && groupKey ? (item) => item[groupKey] : void 0;
  const indicatorSvg = mode == "search" ? searchIcon : chevronIcon;
  const containerStyles = `--inputFontSize: ${fontSizeInput}; --groupTitleFontSize: ${fontSize}; --height: ${height}px; font-size: ${fontSize};`;
  const ariaValues = (values) => `${values}, selected.`;
  const ariaListOpen = (label, count) => `You are currently focused on ${label}. There are ${count} results available.`;
  const ariaFocused = () => `Select is focused, type to refine list, press down to open the menu.`;
  const itemFilter = (label, filterText2, option) => label.toLowerCase().replace(/\s/g, "").includes(filterText2.toLowerCase().replace(/\s/g, ""));
  let el;
  let isFocused;
  let listOpen;
  let isWaiting;
  let handleClear;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.isSearchable === void 0 && $$bindings.isSearchable && isSearchable !== void 0)
    $$bindings.isSearchable(isSearchable);
  if ($$props.isClearable === void 0 && $$bindings.isClearable && isClearable !== void 0)
    $$bindings.isClearable(isClearable);
  if ($$props.autoClear === void 0 && $$bindings.autoClear && autoClear !== void 0)
    $$bindings.autoClear(autoClear);
  if ($$props.idKey === void 0 && $$bindings.idKey && idKey !== void 0)
    $$bindings.idKey(idKey);
  if ($$props.labelKey === void 0 && $$bindings.labelKey && labelKey !== void 0)
    $$bindings.labelKey(labelKey);
  if ($$props.groupKey === void 0 && $$bindings.groupKey && groupKey !== void 0)
    $$bindings.groupKey(groupKey);
  if ($$props.groupItems === void 0 && $$bindings.groupItems && groupItems !== void 0)
    $$bindings.groupItems(groupItems);
  if ($$props.loadOptions === void 0 && $$bindings.loadOptions && loadOptions !== void 0)
    $$bindings.loadOptions(loadOptions);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.fontSizeInput === void 0 && $$bindings.fontSizeInput && fontSizeInput !== void 0)
    $$bindings.fontSizeInput(fontSizeInput);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.maxSelected === void 0 && $$bindings.maxSelected && maxSelected !== void 0)
    $$bindings.maxSelected(maxSelected);
  if ($$props.getSelectionLabel === void 0 && $$bindings.getSelectionLabel && getSelectionLabel !== void 0)
    $$bindings.getSelectionLabel(getSelectionLabel);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    noOptionsMessage = isWaiting && isSearchableQuery(filterText) ? "Loading..." : `No results match ${filterText}`;
    hideEmptyState = !isWaiting && !isSearchableQuery(filterText);
    $$rendered = `<div class="${[
      "selectbox svelte-oxngd3",
      (isFocused ? "focused" : "") + " " + (value && !listOpen ? "selected" : "")
    ].join(" ").trim()}"${add_attribute("this", el, 0)}>${validate_component(Select, "Select").$$render(
      $$result,
      {
        id,
        container,
        items,
        placeholder,
        isSearchable,
        groupBy,
        loadOptions,
        getSelectionLabel,
        getOptionLabel,
        itemFilter,
        ariaValues,
        ariaListOpen,
        ariaFocused,
        noOptionsMessage,
        hideEmptyState,
        indicatorSvg,
        containerStyles,
        isClearable,
        optionIdentifier: idKey,
        showIndicator: true,
        isFocused,
        value,
        listOpen,
        filterText,
        isWaiting,
        handleClear
      },
      {
        isFocused: ($$value) => {
          isFocused = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        listOpen: ($$value) => {
          listOpen = $$value;
          $$settled = false;
        },
        filterText: ($$value) => {
          filterText = $$value;
          $$settled = false;
        },
        isWaiting: ($$value) => {
          isWaiting = $$value;
          $$settled = false;
        },
        handleClear: ($$value) => {
          handleClear = $$value;
          $$settled = false;
        }
      },
      {}
    )}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const AreaSearch_svelte_svelte_type_style_lang = "";
const css = {
  code: ".themed.svelte-1yjvsal{--border:2px solid black;--borderHoverColor:black;--borderFocusColor:black;--borderRadius:2px;--height:3rem;--listEmptyPadding:10px}.selectbox .empty{font-size:90%}",
  map: null
};
const AreaSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { embedded = false } = $$props;
  let { onSelected = void 0 } = $$props;
  if ($$props.embedded === void 0 && $$bindings.embedded && embedded !== void 0)
    $$bindings.embedded(embedded);
  if ($$props.onSelected === void 0 && $$bindings.onSelected && onSelected !== void 0)
    $$bindings.onSelected(onSelected);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="themed max-w-[30rem] svelte-1yjvsal">${validate_component(Select_1, "Select").$$render(
    $$result,
    {
      id: "area-input",
      mode: "search",
      placeholder: "Search England and Wales",
      items: [],
      loadOptions: fetchGeoPostcodeSearchItems,
      idKey: "value",
      labelKey: "value",
      groupKey: "geoType",
      autoClear: true
    },
    {},
    {}
  )}</div>

${!embedded ? `<div class="mt-2 text-sm text-onsdark">For example, your home town, a postcode or district</div>` : ``}`;
});
export {
  AreaSearch as A,
  geoTypePluralNames as a,
  geoTypeSingularDescriptions as b,
  getClassificationDataSuffix as c,
  nav as d,
  number2words as e,
  cleanUnusedParams as f,
  geography as g,
  getEmbedCode as h,
  asyncDerived as i,
  fetchMultiCategoryDataForBbox as j,
  fetchMultiCategoryDataForEnglandAndWales as k,
  fetchSingleCategoryDataForBbox as l,
  fetchBreaks as m,
  never as n,
  params as p,
  quadsDataTileGrid as q,
  roundedClassificationDataToString as r
};
