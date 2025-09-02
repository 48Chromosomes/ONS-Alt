import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component, d as each } from "./index3.js";
import { M as MaterialIcon, m as modes } from "./MaterialIcon.js";
import { c as content } from "./content.js";
import { p as params } from "./AreaSearch.js";
import { p as page } from "./stores.js";
import { b as buildHyperlink } from "./buildHyperlinkHelper.js";
import { e as getAvailableModesForClassification, f as getBestMatchingCategoryInClassificationForMode } from "./contentHelpers.js";
const modeInfo = {
  choropleth: { name: "Census 2021", desc: "Simple map of Census 2021 results" },
  dotdensity: { name: "Dot-density 2021", desc: "Dot-density map of Census 2021 results" },
  change: { name: "Change since 2011", desc: "Ten year change since Census 2011" }
};
const ModePanelItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let disabled;
  let $params, $$unsubscribe_params;
  let $page, $$unsubscribe_page;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { mode } = $$props;
  let { toggleOpen } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.toggleOpen === void 0 && $$bindings.toggleOpen && toggleOpen !== void 0)
    $$bindings.toggleOpen(toggleOpen);
  disabled = $params.category && !getAvailableModesForClassification($params.variable, $params.classification)[mode];
  $$unsubscribe_params();
  $$unsubscribe_page();
  return `<li class="ml-4">${disabled ? `<div class=""><div class="text-xl text-ons-grey-75">${escape(modeInfo[mode].name)}</div>
      <div class="">${escape(modeInfo[mode].desc)}</div></div>` : `<a class="group custom-ring block"${add_attribute(
    "href",
    buildHyperlink($page.url, {
      mode,
      ...$params.variableGroup && {
        variableGroup: $params.variableGroup.slug
      },
      ...$params.variable && { variable: $params.variable.slug },
      ...$params.category && {
        category: mode === "dotdensity" ? {
          classification: $params.classification.slug,
          categories: $params.classification.categories.map((c) => c.code)
        } : {
          classification: $params.classification.slug,
          category: getBestMatchingCategoryInClassificationForMode($params.category, $params.classification, mode).slug
        }
      }
    }),
    0
  )}><div class=""><div class="hyperlink text-xl">${escape(modeInfo[mode].name)}</div>
        <div class="">${escape(modeInfo[mode].desc)}</div></div></a>`}</li>`;
});
const ModePanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let $params, $$unsubscribe_params;
  let $content, $$unsubscribe_content;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  const toggleOpen = () => {
    open = !open;
  };
  open = false;
  $$unsubscribe_params();
  $$unsubscribe_content();
  return `<section class="pt-3 pb-2.5 border-b-2"><h2 class="font-bold text-slate-500">Map</h2>
  
  
  <label for="area-input" class="group w-full text-left hoverable custom-ring"><div class="flex items-center gap-1"><div class="text-xl">${escape(modeInfo[$params.mode].name)}</div>
      <button class="ml-auto custom-ring"${add_attribute("title", "Toggle mode panel", 0)}${add_attribute("aria-label", "Toggle mode panel", 0)}><div class="text-2xl group-hover:scale-125 transition-all ml-2">${validate_component(MaterialIcon, "Icon").$$render(
    $$result,
    {
      kind: "arrowForwardIos",
      orientation: open ? "w" : "e"
    },
    {},
    {}
  )}</div></button></div></label>

  ${open ? `<div class="-mt-0.5">${escape(modeInfo[$params.mode].desc)}</div>
    <ul class="my-3 ml-0 flex flex-col gap-2 border-l-[6px] border-l-ons-grey-15">${each(modes.filter((m) => m !== $params.mode && $content[m].variableGroups.length > 0), (mode) => {
    return `${validate_component(ModePanelItem, "ModePanelItem").$$render($$result, { mode, toggleOpen }, {}, {})}`;
  })}</ul>` : ``}</section>`;
});
export {
  ModePanel as M
};
