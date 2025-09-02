import { G as GeoTypes, a as appBasePath } from "./MaterialIcon.js";
const setGeographyParam = (params, g) => {
  const newer = new URLSearchParams(params);
  for (const param of GeoTypes) {
    newer.delete(param);
  }
  newer.set(g.geoType.toLowerCase(), g.geoCode);
  return newer;
};
const buildHyperlink = (url, urlParams, geography) => {
  const searchParams = geography ? setGeographyParam(url.searchParams, geography) : url.searchParams;
  const search = Array.from(searchParams).length > 0 ? "?" + searchParams.toString() : "";
  if (!urlParams) {
    return `${appBasePath}/${search}`;
  }
  let link = `${appBasePath}/${urlParams.mode}`;
  if ("variableGroup" in urlParams) {
    link = `${link}/${urlParams.variableGroup}`;
  }
  if ("variable" in urlParams) {
    if (urlParams.mode === "dotdensity") {
      link = `${link}/${urlParams.variable}`;
    } else {
      link = `${link}/${urlParams.variable}`;
    }
  }
  if ("category" in urlParams) {
    if ("category" in urlParams.category) {
      link = `${link}/${urlParams.category.classification}/${urlParams.category.category}`;
    } else {
      const categories = [...urlParams.category.categories].sort().join("~");
      link = `${link}/${urlParams.category.classification}/${categories === "" ? "none" : categories}`;
    }
  }
  return `${link}${search}`;
};
export {
  buildHyperlink as b
};
