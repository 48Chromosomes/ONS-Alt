import { c as create_ssr_component, a as subscribe, d as each, b as add_attribute, e as escape, g as add_classes, v as validate_component } from "./index3.js";
import { c as content } from "./content.js";
import { i as isInitialReleasePeriod } from "./contentHelpers.js";
import { p as page } from "./stores.js";
import { b as buildHyperlink } from "./buildHyperlinkHelper.js";
import { p as params, g as geography } from "./AreaSearch.js";
import { A as AreaPanel } from "./AreaPanel.js";
import { M as ModePanel } from "./ModePanel.js";
const VariableGroupList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $content, $$unsubscribe_content;
  let $params, $$unsubscribe_params;
  let $page, $$unsubscribe_page;
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_content();
  $$unsubscribe_params();
  $$unsubscribe_page();
  return `<div><div class="flex flex-wrap gap-x-8 gap-y-2 mb-5">${each($content[$params.mode].variableGroups, (variableGroup) => {
    return `<a class="flex-none w-48 flex-grow-[1] pb-3 border-b-[1px] border-b-slate-300 group custom-ring"${add_attribute(
      "href",
      buildHyperlink($page.url, {
        mode: $params.mode,
        variableGroup: variableGroup.slug
      }),
      0
    )}><div class="flex justify-between mb-0.5"><div class="hyperlink text-xl">${escape(variableGroup.name)}</div>
          <div class="text-onsblue stroke-2 group-hover:stroke-[2px]"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
          </div></div>
        <div class="pr-10">${escape(variableGroup.desc)}</div>
      </a>`;
  })}</div></div>`;
});
const searchCensus = (q, variableGroups) => {
  if (!variableGroups) {
    return {
      variableGroups: [],
      variables: [],
      categories: []
    };
  }
  const s = q.toLowerCase();
  const variableGroupResults = variableGroups.filter(
    (vg) => vg.name.toLowerCase().includes(s) || vg.desc.toLowerCase().includes(s)
  );
  const allVariables = variableGroups.flatMap((vg) => vg.variables.map((v) => ({ variableGroup: vg, variable: v })));
  const variableResults = allVariables.filter(
    (v) => v.variable.name.toLowerCase().includes(s) || v.variable.desc.toLowerCase().includes(s)
  );
  const allClassifications = allVariables.flatMap(
    (v) => v.variable.classifications.map((c) => ({ variableGroup: v.variableGroup, variable: v, classification: c }))
  );
  const allCategories = allClassifications.flatMap(
    (c) => c.classification.categories.map((cat) => ({
      variableGroup: c.variableGroup,
      variable: c.variable,
      classification: c,
      category: cat
    }))
  );
  const categoryResults = allCategories.filter(
    (c) => c.category.name.toLowerCase().includes(s)
    // || c.desc.toLowerCase().includes(s)
  );
  return {
    variableGroups: variableGroupResults,
    variables: variableResults,
    categories: categoryResults
  };
};
const SearchBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $params, $$unsubscribe_params;
  let $content, $$unsubscribe_content;
  let $$unsubscribe_page;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { name } = $$props;
  let val = "";
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  searchCensus(val, $content[$params.mode].variableGroups);
  $$unsubscribe_params();
  $$unsubscribe_content();
  $$unsubscribe_page();
  return `<div class=""><div class="flex max-w-[30rem]"><input id="${escape(name, true) + "-input"}"${add_attribute("name", name, 0)} type="search" placeholder="Search Census 2021" autocomplete="off" class="flex items-center justify-center h-12 p-2 w-full appearance-none border-l-2 border-t-2 border-b-2 border-black rounded-none bg-ons-white focus:border-4 custom-ring"${add_attribute("value", val, 0)}>
    <button tabindex="-1" type="submit" class="bg-onsblue px-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></div>

  ${``}</div>`;
});
const SogiExamples = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ewNotSelected;
  let $geography, $$unsubscribe_geography;
  let $page, $$unsubscribe_page;
  $$unsubscribe_geography = subscribe(geography, (value) => $geography = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { reverseType = false } = $$props;
  if ($$props.reverseType === void 0 && $$bindings.reverseType && reverseType !== void 0)
    $$bindings.reverseType(reverseType);
  ewNotSelected = $geography.geoType !== "ew";
  $$unsubscribe_geography();
  $$unsubscribe_page();
  return `<ul class="pl-4 list-disc list-outside">
  <li class="pb-2">View the percentages of people by
    <a${add_attribute(
    "href",
    buildHyperlink(
      $page.url,
      {
        mode: "choropleth",
        variableGroup: "identity",
        variable: "sexual-orientation",
        category: {
          classification: "sexual-orientation-4a",
          category: "straight-or-heterosexual"
        }
      },
      {
        geoType: ewNotSelected ? $geography.geoType : "lad",
        geoCode: ewNotSelected ? $geography.geoCode : "W06000015"
      }
    ),
    0
  )}${add_classes(((!reverseType ? "hyperlink" : "") + " " + (reverseType ? "hyperlink-reverse" : "")).trim())}>sexual orientation
    </a>
    across
    ${escape(ewNotSelected ? $geography.displayName : "Cardiff")}.
  </li>
  
  <li class="pb-2">Find out the percentage of
    <a${add_attribute(
    "href",
    buildHyperlink(
      $page.url,
      {
        mode: "choropleth",
        variableGroup: "work",
        variable: "economic-activity-status",
        category: {
          classification: "economic-activity-status-10a",
          category: "economically-active-excluding-full-time-students-in-employment"
        }
      },
      {
        geoType: ewNotSelected ? $geography.geoType : "lad",
        geoCode: ewNotSelected ? $geography.geoCode : "E07000137"
      }
    ),
    0
  )}${add_classes(((!reverseType ? "hyperlink" : "") + " " + (reverseType ? "hyperlink-reverse" : "")).trim())}>people in employment</a>
    in ${escape(ewNotSelected ? $geography.displayName : "East Lindsey")}.
  </li>
  
  <li class="pb-2">See what percentage of households use only
    <a${add_attribute(
    "href",
    buildHyperlink(
      $page.url,
      {
        mode: "choropleth",
        variableGroup: "housing",
        variable: "type-of-central-heating-in-household",
        category: {
          classification: "heating-type",
          category: "renewable-energy-only"
        }
      },
      {
        geoType: ewNotSelected ? $geography.geoType : "lad",
        geoCode: ewNotSelected ? $geography.geoCode : "E06000052"
      }
    ),
    0
  )}${add_classes(((!reverseType ? "hyperlink" : "") + " " + (reverseType ? "hyperlink-reverse" : "")).trim())}>renewable energy for their central heating
    </a>
    in different neighbourhoods of ${escape(ewNotSelected ? $geography.displayName : "Cornwall")}.
  </li></ul>`;
});
const HomePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $content, $$unsubscribe_content;
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_content();
  return `<div class="px-6">${validate_component(ModePanel, "ModePanel").$$render($$result, {}, {}, {})}
  ${validate_component(AreaPanel, "AreaPanel").$$render($$result, {}, {}, {})}
  <section><h2 class="pt-3 pb-2 font-bold text-slate-500">Topic</h2>
    <div class="mb-6">${validate_component(SearchBox, "SearchBox").$$render($$result, { name: "search-census" }, {}, {})}</div>
    ${validate_component(VariableGroupList, "VariableGroupList").$$render($$result, {}, {}, {})}

    ${isInitialReleasePeriod($content) ? `<div>Further topic data will be released according to the topic summaries <a href="https://census.gov.uk/census-2021-results/phase-one-topic-summaries" class="hyperlink">release schedule</a>.
      </div>` : ``}

    <div class="bg-ons-grey-5 p-6 mt-8 mb-9"><h3 class="pb-3 text-xl font-semibold">Examples</h3>
      <ul>${validate_component(SogiExamples, "SogiExamples").$$render($$result, {}, {}, {})}</ul></div></section></div>

<div class="grow"></div>`;
});
export {
  HomePage as H
};
