import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component, f as add_styles } from "./index3.js";
import { p as page } from "./stores.js";
import { g as geography, b as geoTypeSingularDescriptions, A as AreaSearch, d as nav } from "./AreaSearch.js";
import { M as MaterialIcon } from "./MaterialIcon.js";
const AreaPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let openOrCloseAreaSearchPanelText;
  let $$unsubscribe_page;
  let $geography, $$unsubscribe_geography;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_geography = subscribe(geography, (value) => $geography = value);
  open = false;
  openOrCloseAreaSearchPanelText = open ? "Close area search" : "Open area search";
  $$unsubscribe_page();
  $$unsubscribe_geography();
  return `<section class="py-2.5 border-b-2"><h2 class="font-bold text-slate-500">Area</h2>
  
  
  <label for="area-input" class="group w-full text-left hoverable custom-ring"><div class="flex items-center gap-1"><div class="text-xl">${escape($geography.displayName)}</div>
      ${$geography?.geoType.toUpperCase() !== "EW" ? `<div class="ml-1 text-sm bg-ons-census text-white font-bold px-1 rounded-sm"${add_attribute("title", geoTypeSingularDescriptions[$geography.geoType], 0)}>${escape($geography.geoType.toUpperCase())}</div>
        <button title="Clear selected area" aria-label="Clear selected area" class="flex ml-2.5 text-2xl hover:scale-105 custom-ring bg-ons-grey-15 hover:bg-ons-grey-35 rounded">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "close" }, {}, {})}</button>` : ``}
      <button class="ml-auto custom-ring"${add_attribute("title", openOrCloseAreaSearchPanelText, 0)}${add_attribute("aria-label", openOrCloseAreaSearchPanelText, 0)}><div class="text-2xl group-hover:scale-125 transition-all ml-2">${validate_component(MaterialIcon, "Icon").$$render(
    $$result,
    {
      kind: "arrowForwardIos",
      orientation: open ? "w" : "e"
    },
    {},
    {}
  )}</div></button></div></label>

  <div class="mt-3 mb-1"${add_styles({ "display": open ? "block" : "none" })}>${validate_component(AreaSearch, "AreaSearch").$$render(
    $$result,
    {
      onSelected: () => {
        open = false;
        nav.set({ open: false });
      }
    },
    {},
    {}
  )}</div></section>`;
});
export {
  AreaPanel as A
};
