import { q as quadsDataTileGrid, i as asyncDerived, p as params, n as never, j as fetchMultiCategoryDataForBbox, k as fetchMultiCategoryDataForEnglandAndWales, l as fetchSingleCategoryDataForBbox, m as fetchBreaks, g as geography } from "./AreaSearch.js";
import { w as writable } from "./index2.js";
import { c as isDataAvailable, d as getDataBaseUrlForVariable } from "./contentHelpers.js";
function quadsToGeojson(quads) {
  const geojson = { type: "FeatureCollection", features: [] };
  geojson.features = quads.map((q) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [(q.bbox.east + q.bbox.west) / 2, (q.bbox.north + q.bbox.south) / 2]
    }
  }));
  return geojson;
}
({
  type: "geojson",
  data: quadsToGeojson(quadsDataTileGrid.oa)
});
const viewport = writable(void 0);
const viz = asyncDerived([params, viewport], async ([$params, $viewport]) => {
  if (!$params?.category && !$params?.categories || !viewport || !isDataAvailable($params.classification, $params.mode, $viewport.geoType)) {
    return void 0;
  } else {
    const args = {
      mode: $params.mode,
      classification: $params.classification,
      category: $params.category,
      categories: $params.categories,
      geoType: $viewport.geoType,
      bbox: $viewport.bbox,
      baseUrl: getDataBaseUrlForVariable($params.mode, $params.variable)
    };
    const data = await getDataForMode($params.mode, args);
    return {
      ...data,
      geoType: args.geoType,
      params: { ...$params }
      // make available the params used for the api call, to avoid race conditions
    };
  }
});
const getDataForMode = async (mode, args) => {
  switch (mode) {
    case "choropleth":
    case "change": {
      const [data, breaks] = await Promise.all([fetchSingleCategoryDataForBbox(args), fetchBreaks(args)]);
      const isBinaryCategory = args.category?.slug === "white-binary";
      if (isBinaryCategory) {
        const threshold = 50;
        const binaryData = data.map((place) => ({
          ...place,
          isMajority: place.categoryValue >= threshold
        }));
        return {
          kind: "single-category",
          places: binaryData,
          breaks: [0, 50, 100],
          // Binary breaks for percentage data
          isBinary: true
        };
      }
      return {
        kind: "single-category",
        places: data,
        breaks: breaks.breaks
      };
    }
    case "dotdensity": {
      const [data, ew] = await Promise.all([
        fetchMultiCategoryDataForBbox(args),
        fetchMultiCategoryDataForEnglandAndWales(args)
      ]);
      return {
        kind: "multi-category",
        places: data,
        englandAndWales: ew.data
      };
    }
    default: {
      return never();
    }
  }
};
const selected = asyncDerived([geography, viz], async ([$geography, $viz]) => {
  if (!$geography) {
    return void 0;
  }
  if (!$viz || $geography.geoType === "ew" || !isDataAvailable($viz.params.classification, $viz.params.mode, $geography.geoType)) {
    return {
      ...$geography,
      value: void 0
    };
  } else {
    const [[west, south], [east, north]] = $geography.bbox;
    const args = {
      geoType: $geography.geoType,
      bbox: { south, west, north, east },
      baseUrl: getDataBaseUrlForVariable($viz.params.mode, $viz.params.variable)
    };
    if ($viz.kind === "single-category") {
      const data = await fetchSingleCategoryDataForBbox({ ...args, category: $viz.params.category });
      return {
        ...$geography,
        value: data.find((p) => p.geoCode === $geography.geoCode)?.categoryValue
      };
    } else {
      const data = await fetchMultiCategoryDataForBbox({ ...args, classification: $viz.params.classification });
      return {
        ...$geography,
        values: data.find((p) => p.geoCode === $geography.geoCode)?.categoryValues
      };
    }
  }
});
const BreaksChart_svelte_svelte_type_style_lang = "";
const OnsAnalyticsBanner_svelte_svelte_type_style_lang = "";
export {
  viz as a,
  selected as s,
  viewport as v
};
