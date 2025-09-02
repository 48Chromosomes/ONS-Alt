import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape, d as each } from "../../../../../../../../chunks/index3.js";
import { g as geography, f as cleanUnusedParams, h as getEmbedCode, p as params } from "../../../../../../../../chunks/AreaSearch.js";
import "mapbox-gl";
import { v as viewport } from "../../../../../../../../chunks/OnsAnalyticsBanner.svelte_svelte_type_style_lang.js";
import { M as MaterialIcon } from "../../../../../../../../chunks/MaterialIcon.js";
import { p as page } from "../../../../../../../../chunks/stores.js";
import { b as buildHyperlink } from "../../../../../../../../chunks/buildHyperlinkHelper.js";
import { a as getFirstCategoryInClassificationForMode, b as getDownloadUrl } from "../../../../../../../../chunks/contentHelpers.js";
import { A as AreaPanel } from "../../../../../../../../chunks/AreaPanel.js";
import { M as ModePanel } from "../../../../../../../../chunks/ModePanel.js";
const EmbedThis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let geoLock;
  let pageUrlForEmbed;
  let embedCode;
  let $page, $$unsubscribe_page;
  let $viewport, $$unsubscribe_viewport;
  let $geography, $$unsubscribe_geography;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_viewport = subscribe(viewport, (value) => $viewport = value);
  $$unsubscribe_geography = subscribe(geography, (value) => $geography = value);
  let dialog;
  let button;
  let embedInteractive = true;
  let embedAreaSearch = false;
  let embedCategorySelection = false;
  let embedView = "geography";
  let embedSelectGeo = true;
  let doGeoLock = false;
  open = false;
  geoLock = $viewport?.geoType || "ew";
  [
    $viewport?.bbox.west,
    $viewport?.bbox.south,
    $viewport?.bbox.east,
    $viewport?.bbox.north
  ];
  pageUrlForEmbed = cleanUnusedParams($page.url, embedSelectGeo, doGeoLock);
  embedCode = getEmbedCode(pageUrlForEmbed, {
    embed: true,
    embedInteractive,
    embedAreaSearch,
    embedCategorySelection,
    embedView,
    ...embedView === "viewport",
    ...doGeoLock
    // don't include geoLock unless we need to!
  });
  $$unsubscribe_page();
  $$unsubscribe_viewport();
  $$unsubscribe_geography();
  return `<div class=""><button class="flex items-center gap-2 custom-ring hyperlink"><div class="text-2xl text-ons-black">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "code" }, {}, {})}</div>
    <div>Embed this map</div></button></div>

<dialog class="m-auto max-w-5xl p-6"${add_attribute("this", dialog, 0)}><form method="dialog"><div class="flex justify-between"><h2 class="mb-4 text-xl font-semibold md:text-2xl">Embed this map</h2>
      <div class="text-3xl"><button class="custom-ring" title="Close dialog" value="cancel">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "close" }, {}, {})}</button></div></div></form>
  <div class="mb-4">Select your preferred embed options and copy the HTML code. There is a preview of the embedded map below.
  </div>
  <section class="flex gap-8 px-2 py-1"><div class=""><label class="hoverable"><input type="checkbox" class="custom-ring mr-1"${add_attribute("checked", embedInteractive, 1)}>
        Interactivity
      </label></div>
    <div class=""><label class="hoverable"><input type="checkbox" class="custom-ring mr-1"${add_attribute("checked", embedAreaSearch, 1)}>
        Area search
      </label></div>
    <div class=""><label class="hoverable"><input type="checkbox" class="custom-ring mr-1"${add_attribute("checked", embedCategorySelection, 1)}>
        Category selection
      </label></div>
    <div class=""><label class="hoverable"><input type="checkbox" class="custom-ring mr-1"${add_attribute("checked", doGeoLock, 1)}>
        Lock area type to ${escape(geoLock.toUpperCase())}</label></div></section>
  <section class="flex gap-8 px-2 py-1 mb-5"><div class="flex gap-4">${$geography.geoType !== "ew" ? `<div class=""><label class="hoverable"><input type="checkbox" class="custom-ring mr-1"${add_attribute("checked", embedSelectGeo, 1)}>
            ${escape($geography.displayName)} selected
          </label></div>` : ``}
      <label class="hoverable"><input type="radio" name="embedView"${add_attribute("value", "geography", 0)} class="custom-ring"${add_attribute("checked", true, 1)}>
        ${`Fit map to ${escape($geography.displayName)}`}</label>
      <label class="hoverable"><input type="radio" name="embedView"${add_attribute("value", "viewport", 0)} class="custom-ring"${""}>
        Fit map to current view
      </label></div></section>
  <section class="flex gap-6"><div class="px-4 border-y-8 border-ons-grey-5 bg-ons-grey-5 text-sm font-mono break-all h-24 overflow-y-scroll">${escape(embedCode.html)}</div>
    <div class="flex flex-col gap-3 pt-1"><button class="flex items-center justify-center gap-2 custom-ring bg-ons-leaf-green hover:bg-[#0d753c] shadow shadow-[#073d20] text-onswhite font-semibold rounded py-3 px-4 whitespace-nowrap" style="text-rendering: optimizeLegibility"${add_attribute("this", button, 0)}><div>Copy to clipboard</div>
        <div class="text-2xl">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "contentCopy" }, {}, {})}</div></button>
      ${``}</div></section>

  ${open ? `<section class="mt-5"><iframe height="600px" width="100%" title="ONS Census Maps" frameborder="0"${add_attribute("src", embedCode.url, 0)}></iframe></section>` : ``}</dialog>`;
});
const Share = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_geography;
  let $$unsubscribe_params;
  let $$unsubscribe_page;
  $$unsubscribe_geography = subscribe(geography, (value) => value);
  $$unsubscribe_params = subscribe(params, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_geography();
  $$unsubscribe_params();
  $$unsubscribe_page();
  return `<button class="${["flex items-center gap-2 custom-ring -ml-0.5", "hyperlink"].join(" ").trim()}"><div class="text-2xl text-ons-black">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "share" }, {}, {})}</div>
  ${`${slots.default ? slots.default({}) : `Share this map`}`}</button>`;
});
const CategoryPageLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $params, $$unsubscribe_params;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  let { dataDownloadUrl } = $$props;
  if ($$props.dataDownloadUrl === void 0 && $$bindings.dataDownloadUrl && dataDownloadUrl !== void 0)
    $$bindings.dataDownloadUrl(dataDownloadUrl);
  $$unsubscribe_params();
  return `<section class="p-6 pt-5 bg-ons-grey-5 border-t-ons-grey-15 border-t-[1px]"><h2 class="mb-2 text-base font-semibold">Use and share</h2>
  <div class="flex items-center gap-x-6 gap-y-0.5 lg:gap-x-8 flex-wrap"><div>${validate_component(Share, "Share").$$render($$result, {}, {}, {})}</div>

    <a href="https://www.ons.gov.uk/feedback" class="flex items-center gap-2 custom-ring hyperlink -ml-0.5"><div class="text-2xl text-ons-black">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "comment" }, {}, {})}</div>
      <div>Give us feedback</div></a>

    ${dataDownloadUrl ? `<a${add_attribute("href", dataDownloadUrl, 0)} class="flex items-center gap-2 custom-ring hyperlink -ml-0.5" data-gtm-type="data-download"><div class="text-2xl text-ons-black">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "fileDownload" }, {}, {})}</div>
        <div>Download data</div></a>` : ``}

    ${!$params.embed ? `<div class="hidden md:block">${validate_component(EmbedThis, "EmbedThis").$$render($$result, {}, {}, {})}</div>` : ``}</div></section>`;
});
const RadioButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selected = false } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  return `<div><div class="w-5 h-5 bg-ons-ocean-blue rounded-full flex items-center justify-center"><div class="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">${selected ? `<div class="w-2 h-2 bg-ons-ocean-blue rounded-full"></div>` : ``}</div></div></div>`;
});
const CheckBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selected = false } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  return `<div class="bg-white border-[3px] border-ons-ocean-blue w-[22px] h-[22px] mr-[1px] rounded-sm flex flex-shrink-0 justify-center items-center focus-within:border-blue-500">${selected ? `
    <svg xmlns="http://www.w3.org/2000/svg" fill="#000" width="80%" height="80%" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path></svg>` : ``}</div>`;
});
const VariableDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { shortDescription } = $$props;
  let { longDescription } = $$props;
  if ($$props.shortDescription === void 0 && $$bindings.shortDescription && shortDescription !== void 0)
    $$bindings.shortDescription(shortDescription);
  if ($$props.longDescription === void 0 && $$bindings.longDescription && longDescription !== void 0)
    $$bindings.longDescription(longDescription);
  return `
<div class="flex items-end gap-1 group hoverable"><div class="flex-grow">${escape(shortDescription)}</div>

  <button class="flex-none text-xl mb-0.5 group-hover:scale-125 duration-75 transition-all custom-ring" title="More information" aria-label="More information">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "info" }, {}, {})}</button></div>
${``}`;
});
const ClassificationPager = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classifications;
  let indexOfCurrent;
  let next;
  let prev;
  let $params, $$unsubscribe_params;
  let $page, $$unsubscribe_page;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  classifications = $params.variable.classifications;
  indexOfCurrent = classifications.indexOf($params.classification);
  next = classifications.length > indexOfCurrent + 1 ? classifications[indexOfCurrent + 1] : void 0;
  prev = indexOfCurrent > 0 ? classifications[indexOfCurrent - 1] : void 0;
  $$unsubscribe_params();
  $$unsubscribe_page();
  return `<div class="flex gap-3 mb-8">${prev ? `<div class="flex items-center gap-1.5 whitespace-nowrap"><span class="select-none">&lt; </span>
      <a class="hyperlink-without-group-hover"${add_attribute(
    "href",
    buildHyperlink($page.url, {
      mode: $params.mode,
      variableGroup: $params.variableGroup.slug,
      variable: $params.variable.slug,
      category: {
        classification: prev.slug,
        category: getFirstCategoryInClassificationForMode(prev, $params.mode).slug
      }
    }),
    0
  )}>Fewer categories
      </a></div>` : ``}
  ${next ? `<div class="flex items-center gap-1.5 whitespace-nowrap"><a class="hyperlink-without-group-hover group-hover:decoration-[3px]"${add_attribute(
    "href",
    buildHyperlink($page.url, {
      mode: $params.mode,
      variableGroup: $params.variableGroup.slug,
      variable: $params.variable.slug,
      category: {
        classification: next.slug,
        category: getFirstCategoryInClassificationForMode(next, $params.mode).slug
      }
    }),
    0
  )}>More categories
      </a>
      <span class="select-none">&gt; </span></div>` : ``}</div>`;
});
const CaveatWarning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { link } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<div class="flex items-center gap-3 mt-5 sm:mt-6 bg-ons-grey-5 px-3"><div class="self-start py-3" aria-hidden="true"><div class="w-7 h-7 bg-ons-black rounded-full flex items-center justify-center"><div class="text-xl text-ons-white flex items-center justify-center">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "priorityHigh" }, {}, {})}</div></div></div>
  <div class="py-3" style="white-space:pre-wrap"><span class="sr-only">Warning</span>${escape(text)}
    ${link ? `<a${add_attribute("href", link, 0)} class="hyperlink custom-ring whitespace-nowrap">Read more</a>` : ``}</div></div>`;
});
const CaveatInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { link } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<div class="flex items-center gap-3 mt-5 sm:mt-6 bg-ons-grey-5 px-3"><div class="self-start py-3" aria-hidden="true"><div class="w-7 h-7 bg-ons-black rounded-full flex items-center justify-center"><div class="text-base text-ons-white flex items-center justify-center font-extrabold">i</div></div></div>
  <div class="sr-only">Info</div>
  <div class="py-3" style="white-space:pre-wrap">${escape(text)}
    ${link ? `<a${add_attribute("href", link, 0)} class="hyperlink custom-ring whitespace-nowrap">Read more</a>` : ``}</div></div>`;
});
const CategoryPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $params, $$unsubscribe_params;
  let $page, $$unsubscribe_page;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const buildCategoryLink = (category) => {
    return buildHyperlink($page.url, {
      mode: $params.mode,
      variableGroup: $params.variableGroup.slug,
      variable: $params.variable.slug,
      category: {
        classification: $params.classification.slug,
        category: category.slug
      }
    });
  };
  const buildCategoriesLink = (category, selected) => {
    const categories = [...new Set($params.categories.map((c) => c.code).concat(category.code))].filter((c) => !(c === category.code && selected));
    return buildHyperlink($page.url, {
      mode: $params.mode,
      variableGroup: $params.variableGroup.slug,
      variable: $params.variable.slug,
      category: {
        classification: $params.classification.slug,
        categories
      }
    });
  };
  $$unsubscribe_params();
  $$unsubscribe_page();
  return `<div class="grow flex flex-col mb-6"><div class="px-6">${validate_component(ModePanel, "ModePanel").$$render($$result, {}, {}, {})}
    ${validate_component(AreaPanel, "AreaPanel").$$render($$result, {}, {}, {})}
    <section class="mb-8"><h2 class="pt-3 font-bold text-slate-500">Topic</h2>
      <nav class="flex flex-wrap items-center gap-2 text-xl" aria-label="Breadcrumb"><a class="hyperlink"${add_attribute("href", buildHyperlink($page.url, { mode: $params.mode }), 0)}>Home</a>
        <div class="text-sm font-extrabold text-ons-grey-75 select-none" aria-hidden>&gt;</div>
        <a class="hyperlink"${add_attribute(
    "href",
    buildHyperlink($page.url, {
      mode: $params.mode,
      variableGroup: $params.variableGroup.slug
    }),
    0
  )}>${escape($params.variableGroup.name)}</a>
        <div class="text-sm font-extrabold text-ons-grey-75 select-none" aria-hidden>&gt;</div>
        <div class="">${escape($params.variable.name)}</div></nav>
      ${$params.variable.caveat_text ? `${validate_component(CaveatWarning, "CaveatWarning").$$render(
    $$result,
    {
      text: $params.variable.caveat_text,
      link: $params.variable.caveat_link
    },
    {},
    {}
  )}` : ``}
      <div class="mt-4 mb-2">${validate_component(VariableDescription, "VariableDescription").$$render(
    $$result,
    {
      shortDescription: $params.variable.desc,
      longDescription: $params.variable.long_desc
    },
    {},
    {}
  )}</div>
      ${$params.mode === "dotdensity" ? `<ul class="flex flex-col last:border-b-[1px] mb-4">${each($params.classification.categories, (category) => {
    let selected = $params.categories.includes(category), link = buildCategoriesLink(category, selected);
    return `
            
            <li><a${add_attribute("href", link, 0)} class="${[
      "flex gap-2 items-center p-2 border-t-[1px] border-t-slate-300 cursor-pointer custom-ring",
      !selected ? "bg-ons-grey-5" : ""
    ].join(" ").trim()}">${validate_component(CheckBox, "CheckBox").$$render($$result, { selected }, {}, {})}
                <div>${escape(category.name)}</div></a>
            </li>`;
  })}</ul>` : `<ul class="flex flex-col last:border-b-[1px] mb-4">${each($params.classification.categories, (category) => {
    let link = buildCategoryLink(category);
    return `
            <li><a${add_attribute("href", link, 0)} class="${[
      "flex gap-2 items-center p-2 border-t-[1px] border-t-slate-300 cursor-pointer custom-ring",
      category === $params.category ? "bg-ons-grey-5" : ""
    ].join(" ").trim()}">${validate_component(RadioButton, "RadioButton").$$render($$result, { selected: category === $params.category }, {}, {})}
                <div>${escape(category.name)}</div></a>
            </li>`;
  })}</ul>`}
      ${$params.variable.classifications.length > 1 ? `${validate_component(ClassificationPager, "ClassificationPager").$$render($$result, {}, {}, {})}` : ``}
      ${$params.classification.change_notes && $params.mode === "change" ? `${validate_component(CaveatInfo, "CaveatInfo").$$render(
    $$result,
    {
      text: $params.classification.change_notes,
      link: $params.classification.change_notes_link
    },
    {},
    {}
  )}` : ``}
      ${$params.mode === "dotdensity" ? `${validate_component(CaveatInfo, "CaveatInfo").$$render(
    $$result,
    {
      text: "The dots on this map broadly represent the data in each area, but they are distributed randomly, so do not identify people or relate to the buildings where they appear.",
      link: ""
    },
    {},
    {}
  )}` : ``}</section></div></div>

<div class="grow"></div>

${validate_component(CategoryPageLinks, "CategoryPageLinks").$$render(
    $$result,
    {
      dataDownloadUrl: getDownloadUrl($params.mode, $params.classification)
    },
    {},
    {}
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $params, $$unsubscribe_params;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_params();
  return `${$params.category ? `${validate_component(CategoryPage, "CategoryPage").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Page as default
};
