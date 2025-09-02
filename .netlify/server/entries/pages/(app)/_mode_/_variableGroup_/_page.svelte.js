import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape, d as each } from "../../../../../chunks/index3.js";
import { p as params } from "../../../../../chunks/AreaSearch.js";
import { p as page } from "../../../../../chunks/stores.js";
import { b as buildHyperlink } from "../../../../../chunks/buildHyperlinkHelper.js";
import { g as getDefaultClassification } from "../../../../../chunks/contentHelpers.js";
import { A as AreaPanel } from "../../../../../chunks/AreaPanel.js";
import { M as ModePanel } from "../../../../../chunks/ModePanel.js";
const VariableGroupPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $params, $$unsubscribe_params;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_page();
  $$unsubscribe_params();
  return `<div class="px-6 mb-6">${validate_component(ModePanel, "ModePanel").$$render($$result, {}, {}, {})}
  ${validate_component(AreaPanel, "AreaPanel").$$render($$result, {}, {}, {})}
  <div class="pt-3 flex"><div class="font-bold text-slate-500">Topic</div></div>
  <div class="flex items-center gap-2 text-xl"><a class="hyperlink"${add_attribute("href", buildHyperlink($page.url, { mode: $params.mode }), 0)}>Home</a>
    <div class="text-sm font-extrabold text-slate-500 select-none">&gt;</div>
    <div class="">${escape($params.variableGroup.name)}</div></div>
  <div class="mt-4 mb-2">${escape($params.variableGroup.desc)}</div>
  <div class="flex flex-col mb-6 last:border-b-[1px] border-b-slate-300">${each($params.variableGroup.variables, (variable) => {
    let defaultClassification = getDefaultClassification(variable, $params.mode);
    return `
      <a class="border-t-[1px] border-t-slate-300 py-2 group custom-ring"${add_attribute(
      "href",
      buildHyperlink($page.url, {
        mode: $params.mode,
        variableGroup: $params.variableGroup.slug,
        variable: variable.slug,
        category: $params.mode === "dotdensity" ? {
          classification: defaultClassification.slug,
          categories: defaultClassification.categories.map((c) => c.code)
        } : {
          classification: defaultClassification.slug,
          category: defaultClassification.categories[0].slug
        }
      }),
      0
    )}><div class="flex justify-between"><div class="hyperlink">${escape(variable.name)}</div>
          <div class="text-onsblue stroke-2 group-hover:stroke-[2px]"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
          </div></div>
        <div class="">${escape(variable.desc)}</div>
      </a>`;
  })}</div></div>

<div class="grow"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $params, $$unsubscribe_params;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_params();
  return `${$params.variableGroup ? `${validate_component(VariableGroupPage, "VariableGroupPage").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Page as default
};
