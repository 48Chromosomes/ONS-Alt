import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape, d as each } from "../../../../../../chunks/index3.js";
import { p as params, e as number2words } from "../../../../../../chunks/AreaSearch.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { c as capitalizeFirstLetter } from "../../../../../../chunks/stringUtil.js";
import { b as buildHyperlink } from "../../../../../../chunks/buildHyperlinkHelper.js";
import { A as AreaPanel } from "../../../../../../chunks/AreaPanel.js";
const VariablePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $params, $$unsubscribe_params;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_page();
  $$unsubscribe_params();
  return `

<div class="h-full flex flex-col"><div class="px-6 border-t-[1px] border-t-ons-grey-15">${validate_component(AreaPanel, "AreaPanel").$$render($$result, {}, {}, {})}
    <section class="mb-8"><h2 class="pt-3 font-bold text-slate-500">Topic</h2>
      <nav class="flex flex-wrap items-center gap-2 text-xl" aria-label="Breadcrumb"><a class="hyperlink"${add_attribute("href", buildHyperlink($page.url, { mode: $params.mode }), 0)}>Home</a>
        <div class="text-sm font-extrabold text-slate-500" aria-hidden>&gt;</div>
        <a class="hyperlink"${add_attribute(
    "href",
    buildHyperlink($page.url, {
      mode: $params.mode,
      variableGroup: $params.variableGroup.slug
    }),
    0
  )}>${escape($params.variableGroup.name)}</a>
        <div class="text-sm font-extrabold text-slate-500" aria-hidden>&gt;</div>
        <div class="">${escape($params.variable.name)}</div></nav>
      <div class="mt-4 mb-2">This variable is available in ${escape(number2words($params.variable.classifications.length))} classifications
      </div>

      <div class="flex flex-col mb-6 last:border-b-[1px] border-b-slate-300">${each($params.variable.classifications, (classification) => {
    return `<a class="border-t-[1px] border-t-slate-300 py-2 group"${add_attribute(
      "href",
      buildHyperlink($page.url, {
        mode: $params.mode,
        variableGroup: $params.variableGroup.slug,
        variable: $params.variable.slug,
        category: {
          classification: classification.slug,
          category: classification.categories[0].slug
        }
      }),
      0
    )}><div class="flex justify-between"><div class="hyperlink">${escape(capitalizeFirstLetter(number2words(classification.categories.length)))} categories
              </div>
              <div class="text-onsblue stroke-2 group-hover:stroke-[2px]"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
              </div></div>
            <div class="">${escape($params.variable.name)} in ${escape(classification.categories.length)} categories.
            </div>
          </a>`;
  })}</div></section></div>

  ${$params.variable.classifications.length === 1 ? `<div class="px-6">This is the only classification available</div>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $params, $$unsubscribe_params;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_params();
  return `${$params.variable ? `${validate_component(VariablePage, "VariablePage").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Page as default
};
