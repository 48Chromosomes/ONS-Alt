import { n as never } from "./AreaSearch.js";
const isInitialReleasePeriod = (content) => {
  return content.choropleth.variableGroups.length < 6;
};
const getDownloadUrl = (mode, classification) => {
  switch (mode) {
    case "choropleth":
    case "dotdensity":
      return classification.data_download;
    case "change":
      return classification.change_data_download;
    default:
      never();
  }
};
const getDataBaseUrlsForVariable = (variable) => {
  return {
    choropleth: variable.base_url_2021,
    dotdensity: variable.base_url_dot_density,
    change: variable.base_url_2011_2021_comparison
  };
};
const getDataBaseUrlForVariable = (mode, variable) => {
  return getDataBaseUrlsForVariable(variable)[mode];
};
const getAvailableModesForClassification = (variable, classification) => {
  return {
    choropleth: classification.available_geotypes.length > 0,
    dotdensity: classification.dot_density_default,
    change: variable.base_url_2011_2021_comparison && classification.comparison_2011_data_available_geotypes?.length > 0
  };
};
const getCategoriesInClassification = (classification, mode) => {
  return classification.categories.filter(
    (c) => c.restrict_to_modes === void 0 || c.restrict_to_modes.includes(mode)
  );
};
const getFirstCategoryInClassificationForMode = (classification, mode) => {
  return getCategoriesInClassification(classification, mode)[0];
};
const getBestMatchingCategoryInClassificationForMode = (category, classification, mode) => {
  const categories = getCategoriesInClassification(classification, mode);
  return categories.find((c) => c.code === category.code) ?? categories[0];
};
const getGeoTypeDataAvailable = (classification, mode) => {
  switch (mode) {
    case "choropleth":
    case "dotdensity": {
      return classification?.available_geotypes ?? [];
    }
    case "change": {
      return classification?.comparison_2011_data_available_geotypes ?? [];
    }
    default: {
      return never();
    }
  }
};
const isDataAvailable = (classification, mode, geoType) => {
  return getGeoTypeDataAvailable(classification, mode).includes(geoType);
};
const getDefaultClassification = (variable, mode) => {
  if (!variable) {
    throw "No variable argument provided.";
  }
  const choroplethDefault = variable.classifications.find((c) => c.choropleth_default);
  switch (mode) {
    case "choropleth":
      return choroplethDefault;
    case "dotdensity":
      return variable.classifications.find((c) => c.dot_density_default);
    case "change": {
      return choroplethDefault ?? variable?.classifications[0];
    }
    default:
      never();
  }
};
export {
  getFirstCategoryInClassificationForMode as a,
  getDownloadUrl as b,
  isDataAvailable as c,
  getDataBaseUrlForVariable as d,
  getAvailableModesForClassification as e,
  getBestMatchingCategoryInClassificationForMode as f,
  getDefaultClassification as g,
  isInitialReleasePeriod as i
};
