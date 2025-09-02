import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/index3.js";
import { M as MaterialIcon } from "../../../chunks/MaterialIcon.js";
import { p as page } from "../../../chunks/stores.js";
import { b as buildHyperlink } from "../../../chunks/buildHyperlinkHelper.js";
const ErrorPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="px-6 py-4 sm:py-6"><div class="mb-6"><a${add_attribute("href", buildHyperlink($page.url), 0)} class="flex items-center gap-2 custom-ring hyperlink"><div>Home</div></a></div>

  ${$page.status === 404 ? `<h2 class="mb-3 text-2xl sm:text-3xl font-semibold break-words">Not found</h2>
    ${$page.error.message ? `<p>${escape($page.error.message)}
        ${$page.error.readMoreLink ? `<a${add_attribute("href", $page.error.readMoreLink, 0)} class="hyperlink custom-ring whitespace-nowrap">Read more</a>` : ``}</p>` : `<p>We couldn&#39;t find the page you asked for.</p>`}` : `<h2 class="mb-3 text-2xl sm:text-3xl font-semibold break-words">Something went wrong</h2>
    <p>We apologise for the inconvenience.</p>`}

  <div class="mt-8"><a href="https://www.ons.gov.uk/feedback" class="flex items-center gap-2 custom-ring hyperlink -ml-0.5"><div class="text-2xl text-ons-black">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "comment" }, {}, {})}</div>
      <div>Give us feedback</div></a></div></div>

<div class="grow"></div>`;
});
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ErrorPage, "ErrorPage").$$render($$result, {}, {}, {})}`;
});
export {
  Error as default
};
