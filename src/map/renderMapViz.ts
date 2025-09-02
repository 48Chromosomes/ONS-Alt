import { getColours } from "../helpers/choroplethHelpers";
import type { LoadedGeographies, MultiCategoryVizData, SingleCategoryVizData } from "../types";
import { layers } from "./layers";

// TODO: this file has become very confusing and needs refactoring

let loadedGeographies: LoadedGeographies = undefined;

export const renderMapViz = (
  map: mapboxgl.Map,
  data: SingleCategoryVizData | MultiCategoryVizData | undefined,
) => {
  removeOldFeatureStates(map, data);

  if (!data) {
    return;
  }

  if (data.kind === "single-category") {
    const layer = layers.find((l) => l.name == data.geoType);
    
    // Check if this is a binary category
    const isBinary = data.isBinary || data.params.category.slug === "white-binary";
    
    if (isBinary) {
      // Binary rendering: red for <50%, green for >=50%
      const binaryColors = ["#e74c3c", "#27ae60"]; // red, green
      
      // Debug: count red vs green areas
      let redCount = 0;
      let greenCount = 0;
      
      data.places.forEach((p) => {
        // Census data is in percentage format (0-100), so compare to 50, not 0.5
        const threshold = 50; // 50%
        const isMajority = p.isMajority !== undefined ? p.isMajority : p.categoryValue >= threshold;
        const color = isMajority ? binaryColors[1] : binaryColors[0];
        
        // Debug: log some sample values
        if (redCount + greenCount < 5) {
          console.log(`Area ${p.geoCode}: ${p.categoryValue.toFixed(1)}% white -> ${isMajority ? 'GREEN' : 'RED'}`);
        }
        
        if (isMajority) {
          greenCount++;
        } else {
          redCount++;
        }
        
        map.setFeatureState(
          { source: layer.name, sourceLayer: layer.sourceLayer, id: p.geoCode },
          { colour: color },
        );
      });
      
      console.log(`Binary rendering: ${greenCount} green areas (≥50% white), ${redCount} red areas (<50% white)`);
      if (redCount === 0) {
        console.log("No red areas found - this might indicate all areas in current view have ≥50% white population");
      }
    } else {
      // Normal choropleth rendering
      const colours = getColours(data.params.mode, data.breaks);
      
      data.places.forEach((p) => {
        map.setFeatureState(
          { source: layer.name, sourceLayer: layer.sourceLayer, id: p.geoCode },
          { colour: getChoroplethColour(p.categoryValue, data.breaks, colours) },
        );
      });
    }
  }
};

const getChoroplethColour = (value: number, breaks: number[], colours: string[]) => {
  let upperBreakBounds;
  if (breaks.length === 1) {
    upperBreakBounds = breaks;
  } else {
    upperBreakBounds = breaks.slice(1);
  }
  for (const b of upperBreakBounds.map((b, i) => ({ breakpoint: b, colour: colours[i] }))) {
    if (value <= b.breakpoint) return b.colour;
  }
};

const removeOldFeatureStates = (
  map: mapboxgl.Map,
  data: SingleCategoryVizData | MultiCategoryVizData | undefined,
) => {
  const categoryCode = data?.params?.category?.code;
  const geoCodes = data ? new Set(data.places.map((d) => d.geoCode)) : new Set([]);

  if (!loadedGeographies) {
    rememberLoadedGeographies(data);
  } else if (loadedGeographies.categoryCode !== categoryCode || !data) {
    // purge loaded features
    for (const layerId in loadedGeographies.geoCodes) {
      const geoCodes = Array.from(loadedGeographies.geoCodes[layerId]);
      geoCodes.forEach((geoCode: string) => {
        map.removeFeatureState({ source: layerId, sourceLayer: layerId, id: geoCode });
      });
    }
    rememberLoadedGeographies(data);
  } else if (data) {
    // remember newly loaded geos
    const loadedCodes = Array.from(loadedGeographies.geoCodes[data.geoType]);
    loadedGeographies.geoCodes[data.geoType] = new Set([...loadedCodes, ...geoCodes]);
  }
};

const rememberLoadedGeographies = (data: SingleCategoryVizData | MultiCategoryVizData | undefined) => {
  const catCode = data?.params?.category?.code;
  const geoType = data?.geoType;
  const geoCodes = data ? data.places.map((d) => d.geoCode) : [];

  loadedGeographies = {
    categoryCode: catCode,
    geoCodes: {
      lad: geoType === "lad" ? new Set(geoCodes) : new Set([]),
      msoa: geoType === "msoa" ? new Set(geoCodes) : new Set([]),
      oa: geoType === "oa" ? new Set(geoCodes) : new Set([]),
    },
  };
};
