import { c as create_ssr_component, b as add_attribute, a as subscribe, v as validate_component, e as escape, o as onDestroy, d as each, f as add_styles } from "../../../chunks/index3.js";
import "pym.js";
import { p as page } from "../../../chunks/stores.js";
import { c as content } from "../../../chunks/content.js";
import { p as params, g as geography, n as never, a as geoTypePluralNames, b as geoTypeSingularDescriptions, A as AreaSearch, r as roundedClassificationDataToString, c as getClassificationDataSuffix, d as nav } from "../../../chunks/AreaSearch.js";
import "mapbox-gl";
import { v as viewport, a as viz, s as selected } from "../../../chunks/OnsAnalyticsBanner.svelte_svelte_type_style_lang.js";
import { G as GeoTypes, M as MaterialIcon } from "../../../chunks/MaterialIcon.js";
import { w as writable } from "../../../chunks/index2.js";
import { u as unCapitalizeFirstLetter } from "../../../chunks/stringUtil.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const mapboxGl = "";
const tippy = "";
const app = "";
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-screen flex justify-center items-center"><div class="" role="alert" aria-live="assertive"><p class="sr-only">Loading...</p>
    <div class="animate-delayedfadein"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-ons-census" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div></div></div>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fill = void 0 } = $$props;
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  return `<svg class="ons-svg-logo" xmlns="http://www.w3.org/2000/svg" width="197" height="19" viewBox="33 2 552 60"><title id="ons-logo-en-alt">Office for National Statistics logo</title><g${add_attribute("class", `${fill ?? "fill-[#a8bd3a]"}`, 0)}><path d="M0,34.6c.8-1.69,1.39-3,2.32-4.6A38.28,38.28,0,0,1,0,23.4V34.6M5,3S0,3,0,9.25v1A62.12,62.12,0,0,0,4.2,27a43.77,43.77,0,0,1,9.42-10.79C21.69,9.21,31.16,5.13,45.9,3Z"></path></g><g${add_attribute("class", `${fill ?? "fill-[#003c57]"}`, 0)}><path d="M53.06,6.42C36.2,8,24.68,12.92,16.43,20.07A41.46,41.46,0,0,0,6.4,32.2C12.87,44.93,28.88,57,46.6,57H47s6.32.21,6.32-6.91V6.36a1.22,1.22,0,0,1-.26.06M9.72,42.67a44.25,44.25,0,0,1-5-7.42A80.59,80.59,0,0,0,0,46.38V56.91L31.06,57c-9.83-3-15.74-7.64-21.34-14.3"></path></g><g${add_attribute("class", `${fill ?? "fill-[#003c57]"}`, 0)}><path d="M82,47.49c-9.07,0-13.13-7.51-13.13-16.77S72.91,14,82,14s13.1,7.61,13.1,16.77S91.1,47.54,82,47.54m0-30.91c-6.69,0-9.07,7.33-9.07,14.05s2.16,13.9,9.07,13.9,9-7.28,9-13.9-2.34-14-9-14"></path><path d="M106.36,23.81V46.88h-3.67V23.81H98.93V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.38,0,.86.05.86.05v2.35h-.43c-2.55,0-4.84,1.64-4.84,5.12v4.09h5.27v2.25Z"></path><path d="M121.53,23.81V46.88h-3.67V23.81H114.1V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.38,0,.86.05.86.05v2.35h-.43c-2.55,0-4.84,1.64-4.84,5.12v4.09h5.27v2.25Z"></path><path d="M132.85,16.72a2.28,2.28,0,0,1-2.33-2.23v0a2.34,2.34,0,0,1,4.67,0,2.28,2.28,0,0,1-2.3,2.26h0M131,21.56h3.71V46.88H131Z"></path><path d="M150.53,47.49c-6,0-10.63-5.16-10.63-13.29S144.52,21,150.66,21a9.76,9.76,0,0,1,6.17,1.74l-1,2.25a7.53,7.53,0,0,0-4.4-1.36c-5.15,0-7.78,4.46-7.78,10.48,0,6.2,3,10.62,7.65,10.62a8,8,0,0,0,4.49-1.37l1,2.45a10.21,10.21,0,0,1-6.3,1.73"></path><path d="M162.84,35.75c.48,6,3.76,9,8.9,9a14.66,14.66,0,0,0,6.88-1.55l1.08,2.59a18,18,0,0,1-8.22,1.73c-7.12,0-12.18-4.23-12.18-13.34,0-8.69,4.67-13.2,11-13.2s10.37,3.95,10.37,12.4Zm7.35-12.41c-4.1,0-7.56,3.2-7.52,10.29l14.39-2c0-5.87-2.81-8.32-6.87-8.32"></path><path d="M198.57,23.81V46.88H194.9V23.81h-3.76V21.56h3.76V17.9c0-4.61,2.72-7.95,8.08-7.95.39,0,.87.05.87.05v2.35h-.44c-2.54,0-4.84,1.64-4.84,5.12v4.09h5.28v2.25Z"></path><path d="M217.28,47.49c-7.47,0-10.89-5.78-10.89-13.24S209.81,21,217.28,21s10.85,5.82,10.85,13.3-3.37,13.24-10.85,13.24m0-24c-5.53,0-7.13,5.59-7.13,10.81s1.73,10.56,7.13,10.56,7.13-5.35,7.13-10.56-1.6-10.81-7.13-10.81"></path><path d="M244.08,23.91c-2.34-.61-5.75-.52-7.35.47v22.5H233V22.69c2.67-1.13,5.36-1.74,10.11-1.74H245Z"></path><path d="M277.42,47.13,263.07,25a32.2,32.2,0,0,1-1.85-3.29h-.09s.13,1.88.13,3.85V47.13h-4.71V14.8h5.31l13.61,20.82A28.76,28.76,0,0,1,277.38,39h.08s-.17-1.84-.17-3.77V14.8H282V47.13Z"></path><path d="M297.52,47.79c-7.43,0-10.93-3-10.93-7.81,0-6.8,7.12-8.64,15.59-9.39V29.13c0-3.47-2.37-4.51-5.83-4.51a18,18,0,0,0-6.87,1.46L288.23,23a24,24,0,0,1,9.12-1.83c5.61,0,9.93,2.3,9.93,8.78V46a22.71,22.71,0,0,1-9.76,1.83m4.66-14.67c-6.26.67-10.45,1.84-10.45,6.73,0,3.42,2.42,4.88,6.22,4.88a10.09,10.09,0,0,0,4.23-.84Z"></path><path d="M322,47.69c-5.31,0-7.34-3.43-7.34-6.86V25.09h-3.55V21.81h3.55V16.12l5.4-1.5v7.19H325v3.28h-5V40.55a3.26,3.26,0,0,0,3,3.52h.5a5.5,5.5,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"></path><path d="M331.91,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.44V47.13h-5.44Z"></path><path d="M350.88,47.79c-7.73,0-11.57-5.74-11.57-13.3s3.84-13.34,11.57-13.34,11.54,5.78,11.54,13.34-3.8,13.3-11.54,13.3m0-23.17c-4.66,0-6.05,4.89-6.05,9.82s1.47,9.63,6.05,9.63,6.05-4.7,6.05-9.63-1.38-9.82-6.05-9.82"></path><path d="M382.52,47.13V29c0-3.24-2.77-4.47-5.88-4.47a12.3,12.3,0,0,0-4.37.76v21.8h-5.39V23a26.81,26.81,0,0,1,10.06-1.83c6.61,0,11,2.25,11,7.8V47.13Z"></path><path d="M403.18,47.79c-7.43,0-10.94-3-10.94-7.81,0-6.8,7.13-8.64,15.6-9.39V29.13c0-3.47-2.37-4.51-5.83-4.51a18,18,0,0,0-6.87,1.46L393.89,23A24,24,0,0,1,403,21.15c5.62,0,9.94,2.3,9.94,8.78V46a22.71,22.71,0,0,1-9.76,1.83m4.66-14.67c-6.27.67-10.46,1.84-10.46,6.73,0,3.42,2.43,4.88,6.23,4.88a10.09,10.09,0,0,0,4.23-.84Z"></path><polygon points="418.52 47.13 418.52 34.91 418.52 10.25 423.92 10.25 423.92 22.76 423.92 47.13 418.52 47.13"></polygon><path d="M445.39,47.79A19.11,19.11,0,0,1,436.58,46l1.51-4a13.48,13.48,0,0,0,6.22,1.55c3.76,0,6.44-2.21,6.44-5.41,0-7.09-13.44-4.36-13.44-14.42,0-5.13,4.15-9.59,10.72-9.59A15.82,15.82,0,0,1,455.8,16l-1.38,3.52a11.93,11.93,0,0,0-5.66-1.5c-3.5,0-5.79,2.11-5.79,5.12,0,7,13.74,3.94,13.74,14.65,0,5.74-4.71,10-11.32,10"></path><path d="M470.41,47.69c-5.31,0-7.34-3.43-7.34-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.92v3.28h-4.92V40.55a3.27,3.27,0,0,0,3,3.52h.48a5.12,5.12,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"></path><path d="M487.27,47.79c-7.44,0-10.93-3-10.93-7.81,0-6.8,7.13-8.64,15.6-9.39V29.13c0-3.47-2.38-4.51-5.84-4.51a18,18,0,0,0-6.87,1.46L478,23a23.94,23.94,0,0,1,9.11-1.83c5.62,0,9.94,2.3,9.94,8.78V46a22.71,22.71,0,0,1-9.76,1.83M492,33.16c-6.27.67-10.46,1.84-10.46,6.73,0,3.42,2.42,4.88,6.22,4.88a10,10,0,0,0,4.24-.84Z"></path><path d="M511.73,47.69c-5.32,0-7.35-3.43-7.35-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.92v3.28h-4.92V40.55a3.26,3.26,0,0,0,3,3.52h.5a5.5,5.5,0,0,0,1.46-.23v3.33a7.69,7.69,0,0,1-3,.52"></path><path d="M521.66,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.45V47.13h-5.45Z"></path><path d="M536.19,47.79A15.9,15.9,0,0,1,528.54,46L530,42.48a10.53,10.53,0,0,0,5.52,1.5c2.77,0,5-1.78,5-3.94,0-6-11.1-3.2-11.1-11.47,0-3.76,3.37-7.42,8.86-7.42A13.56,13.56,0,0,1,545.34,23l-1.42,3.14a8.47,8.47,0,0,0-4.62-1.45c-2.81,0-4.54,1.69-4.54,3.62,0,5.64,11.32,3.14,11.32,11.6,0,4-3.85,7.9-9.89,7.9"></path><path d="M559.83,47.69c-5.31,0-7.35-3.43-7.35-6.86V25.09h-3.54V21.81h3.54V16.12l5.4-1.5v7.19h4.93v3.28h-4.93V40.55a3.27,3.27,0,0,0,3,3.52h.48a5.64,5.64,0,0,0,1.47-.23v3.33a7.72,7.72,0,0,1-3,.52"></path><path d="M569.77,17.43a3,3,0,0,1-3.15-2.81,3.17,3.17,0,0,1,6.31,0,3,3,0,0,1-3.16,2.81m-2.72,4.38h5.44V47.13h-5.44Z"></path><path d="M588.14,47.79c-6.23,0-11-5.08-11-13.35s4.88-13.29,11-13.29A10.51,10.51,0,0,1,594.66,23l-1.21,3a6.87,6.87,0,0,0-4-1.22c-4.4,0-6.69,3.81-6.69,9.49s2.63,9.59,6.61,9.59a6.74,6.74,0,0,0,4-1.28L594.7,46c-1.12.94-3.33,1.84-6.56,1.84"></path><path d="M605.1,47.79A15.9,15.9,0,0,1,597.45,46l1.42-3.47A10.54,10.54,0,0,0,604.4,44c2.77,0,5-1.78,5-3.94,0-6-11.1-3.2-11.1-11.47,0-3.76,3.37-7.42,8.85-7.42a13.49,13.49,0,0,1,7.1,1.83l-1.42,3.14a8.42,8.42,0,0,0-4.63-1.45c-2.8,0-4.53,1.69-4.53,3.62,0,5.64,11.32,3.14,11.32,11.6,0,4-3.85,7.9-9.89,7.9"></path></g></svg>`;
});
const Census2021 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="ons-svg-logo" xmlns="http://www.w3.org/2000/svg" focusable="false" width="138.43" height="17" viewBox="0 8 228 28" role="img" aria-labelledby="census-logo-en-alt"><title id="census-logo-en-alt">Census 2021</title><path d="M35.85,10a12,12,0,0,0,0,24,2.73,2.73,0,0,0,0-5.45,6.57,6.57,0,0,1-6-3.82H45.12A2.73,2.73,0,0,0,47.85,22,12,12,0,0,0,35.85,10Zm-6,9.27a6.55,6.55,0,0,1,11.91,0Z"></path><path d="M62.42,10a12,12,0,0,0-12,12v9.12a2.73,2.73,0,0,0,5.45,0V22A6.55,6.55,0,1,1,69,22v9.12a2.73,2.73,0,0,0,5.45,0V22A12,12,0,0,0,62.42,10Z"></path><path d="M120.41,10a2.72,2.72,0,0,0-2.72,2.73v9.11a6.55,6.55,0,1,1-13.1,0V12.73a2.73,2.73,0,1,0-5.45,0v9.11a12,12,0,0,0,24,0V12.73A2.73,2.73,0,0,0,120.41,10Z"></path><path d="M88.64,19.78c-3.85-.82-5.4-1.15-5.4-2.55s2-2.17,4.15-2.17a8.87,8.87,0,0,1,3.15.63,3.2,3.2,0,0,0,1.12.24,2.55,2.55,0,0,0,2.55-2.55,2.58,2.58,0,0,0-1.79-2.47,14.64,14.64,0,0,0-5-.9c-6.27,0-9.83,3.56-9.83,7.13,0,4.33,4,6.26,8.48,7.22,3.47.72,4.53,1,4.53,2.5s-2,2.08-4.34,2.08a11,11,0,0,1-5.13-1.58,2.91,2.91,0,0,0-1-.22A2.57,2.57,0,0,0,79,32a14.84,14.84,0,0,0,7.47,2c5.83,0,10-3.13,10-7C96.39,22.24,93.17,20.75,88.64,19.78Z"></path><path d="M81.1,27.36Z"></path><path d="M129.43,27.34h0Z"></path><path d="M129.42,27.33Z"></path><path d="M137,19.78c-3.86-.82-5.4-1.15-5.4-2.55s2-2.17,4.14-2.17a8.78,8.78,0,0,1,3.15.63,3.18,3.18,0,0,0,1.13.24,2.55,2.55,0,0,0,2.54-2.55,2.61,2.61,0,0,0-1.79-2.47,14.59,14.59,0,0,0-5-.9c-6.26,0-9.82,3.56-9.82,7.13,0,4.33,3.95,6.26,8.47,7.22,3.47.72,4.53,1,4.53,2.5s-2,2.08-4.33,2.08a11.16,11.16,0,0,1-5.18-1.6,2.44,2.44,0,0,0-1-.2,2.57,2.57,0,0,0-2.58,2.57A2.64,2.64,0,0,0,127.33,32a14.81,14.81,0,0,0,7.47,2c5.83,0,10-3.13,10-7C144.77,22.24,141.54,20.75,137,19.78Z"></path><path d="M12,15.45a6.45,6.45,0,0,1,4.78,2.09,2.72,2.72,0,1,0,4-3.71,12,12,0,1,0,0,16.34,2.73,2.73,0,0,0-4-3.72A6.46,6.46,0,0,1,12,28.55a6.55,6.55,0,0,1,0-13.1Z"></path><path style="opacity:0.7" d="M166.51,30.35H154.9a4.74,4.74,0,0,1,.14-1c.6-2.45,3.08-3.72,6.09-5.06,3.46-1.6,6.72-3.22,6.72-7.33s-3-6.83-8-6.83a9.6,9.6,0,0,0-6.15,2,5.15,5.15,0,0,0-2.09,3.75c0,1.92,2.4,1.88,2.4,1.77a5.43,5.43,0,0,1,5.6-4.38c2.93,0,4.67,1.41,4.67,3.78s-2.69,3.61-5.7,5.1c-3.43,1.7-7.08,3.78-7.08,8.49v.88c0,1.46.67,2,2.27,2h12.74c1.2,0,1.73-.53,1.73-1.49v-.21C168.24,30.85,167.71,30.35,166.51,30.35Z"></path><path style="opacity:0.7" d="M207.91,30.35H196.3a4.74,4.74,0,0,1,.14-1c.6-2.45,3.08-3.72,6.09-5.06,3.47-1.6,6.72-3.22,6.72-7.33s-3-6.83-8-6.83a9.6,9.6,0,0,0-6.15,2A5.15,5.15,0,0,0,193,15.84c0,1.92,2.4,1.88,2.4,1.77a5.43,5.43,0,0,1,5.6-4.38c2.93,0,4.67,1.41,4.67,3.78s-2.69,3.61-5.7,5.1c-3.43,1.7-7.08,3.78-7.08,8.49v.88c0,1.46.67,2,2.27,2h12.74c1.2,0,1.73-.53,1.73-1.49v-.21C209.64,30.85,209.11,30.35,207.91,30.35Z"></path><path style="opacity:0.7" d="M226.17,30.39h-3.08l0-18.33a1.49,1.49,0,0,0-1.63-1.67h-1.23l-6.83,4.5a2,2,0,0,0,1.87,2.23,2.9,2.9,0,0,0,1.88-.78c.67-.53,1.24-1.17,2.62-2.27V30.39H216c-1.09,0-1.66.46-1.66,1.48v.18c0,1,.57,1.42,1.66,1.42h10.2c1.09,0,1.66-.43,1.66-1.42v-.18C227.83,30.85,227.26,30.39,226.17,30.39Z"></path><path style="opacity:0.7" d="M180.31,10.11c-5.88,0-9.52,4.14-9.52,10.76V23.2c0,6.62,3.57,10.73,9.52,10.73s9.55-4.18,9.55-10.8v-2.3C189.86,14.22,186.25,10.11,180.31,10.11Zm5.91,13.2c0,4.81-2.13,7.54-5.91,7.54s-5.84-2.76-5.84-7.57V20.69c0-4.81,2.12-7.57,5.84-7.57s5.91,2.83,5.91,7.64Z"></path></svg>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $params, $$unsubscribe_params;
  let $content, $$unsubscribe_content;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_params();
  $$unsubscribe_content();
  return `<header class="${[
    "flex items-center gap-1 md:gap-2 h-[46px] p-2 px-5 border-b-[1px] border-b-ons-grey-15",
    ($params.embed ? "hidden" : "") + " " + ($content.choropleth.fakeDataLoaded ? "bg-ons-ruby-red" : "")
  ].join(" ").trim()}"><div class=""><a href="https://www.ons.gov.uk" class="custom-ring">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</a></div>
  <div class="p-3"><a href="https://www.ons.gov.uk/census" class="fill-ons-census custom-ring">${validate_component(Census2021, "Census2021").$$render($$result, {}, {}, {})}</a></div>
  ${$content.choropleth.fakeDataLoaded ? `<div class="truncate"><strong class="text-white">WARNING! This is a prototype. Data is synthetic. It is NOT actual 2021 Census data.</strong></div>` : ``}</header>`;
});
const ServiceUnavailablePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="p-6 pt-5 pb-4 font-bold text-2xl text-slate-500">Sorry, Census Maps is currently unavailable.</div>`;
});
function parseSlug(slug) {
  let string = slug.replaceAll("-", " ").replace("uk", "UK");
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let url;
  let $page, $$unsubscribe_page;
  let $content, $$unsubscribe_content;
  let $geography, $$unsubscribe_geography;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_geography = subscribe(geography, (value) => $geography = value);
  function parseParam(code) {
    let slug = $page.params[code];
    return slug ? parseSlug(slug) : void 0;
  }
  title = $page.params.variable ? `${parseParam("variable")} - Census Maps, ONS` : "Census Maps - Census 2021 data interactive, ONS";
  url = "https://www.ons.gov.uk" + $page.url.pathname;
  $$unsubscribe_page();
  $$unsubscribe_content();
  $$unsubscribe_geography();
  return `${$$result.head += `<!-- HEAD_svelte-15sebod_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<link rel="canonical"${add_attribute("href", url, 0)}><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:type" content="website"><meta property="og:url"${add_attribute("content", url, 0)}><meta property="og:image" content="https://www.ons.gov.uk/census/maps/img/og-image.png"><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="940"><meta property="og:image:height" content="492"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:image" content="https://www.ons.gov.uk/census/maps/img/og-image.png"><meta property="og:description" content="Census maps is an interactive tool to explore Census 2021 data across England and Wales for different topics down to a neighbourhood level."><meta name="description" content="Census maps is an interactive tool to explore Census 2021 data across England and Wales for different topics down to a neighbourhood level."><!-- HEAD_svelte-15sebod_END -->`, ""}

${$content && $geography ? `${$content.choropleth.variableGroups.length > 0 ? `${slots.default ? slots.default({}) : ``}` : `${validate_component(ServiceUnavailablePage, "ServiceUnavailablePage").$$render($$result, {}, {}, {})}`}` : `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`}`;
});
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const EmbeddedHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $params, $$unsubscribe_params;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_params();
  return `${$params.embed ? `<header class="flex items-center gap-1 md:gap-2 h-[46px] p-2 px-5 border-b-[1px] border-b-ons-grey-15"><div class=""><a href="https://www.ons.gov.uk" target="_blank" rel="noreferrer" class="custom-ring">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</a></div>
    <div class="p-3"><a href="https://www.ons.gov.uk/census" target="_blank" rel="noreferrer" class="fill-ons-census custom-ring">${validate_component(Census2021, "Census2021").$$render($$result, {}, {}, {})}</a></div></header>` : ``}`;
});
const hovered = writable(void 0);
const densities = [5e4, 2e4, 1e4, 5e3, 2e3, 1e3, 500, 200, 100, 50, 20, 10, 5, 2, 1];
function getDensityForZoomLevel(zoom) {
  return zoom < 14 ? densities[Math.floor(zoom)] : 1;
}
function makeUnitSingular(str, zoom) {
  const singular = getDensityForZoomLevel(zoom) === 1;
  return singular ? str.replace("households", "household").replace("people", "person") : str;
}
const dotdensityColours = ["#27A0CC", "#F66068", "#003C57", "#FBB03B", "#ccc"];
const colours = {
  standard: ["#CDE594", "#80C6A3", "#1F9EB7", "#186290", "#080C54"],
  neg: ["#ce321f", "#e16a4a", "#f09977", "#fac6a6", "#fef4d7"],
  pos: ["#fef4d7", "#cad3c5", "#96b3b3", "#5f93a2", "#007590"]
};
const getColours = (mode, breaks) => {
  switch (mode) {
    case "choropleth":
    case "dotdensity":
      return colours.standard;
    case "change":
      return getChangeColours(breaks);
    case "binary":
      return getBinaryColours();
    default:
      never();
  }
};
const getBinaryColours = () => {
  return ["#e74c3c", "#27ae60", "#27ae60", "#27ae60", "#27ae60"];
};
const getChangeColours = (breaks) => {
  let result;
  if (breaks[0] >= 0) {
    result = colours.pos;
  } else if (breaks[breaks.length - 1] <= 0) {
    result = colours.neg;
  } else {
    const breaksNotIncludingMin = breaks.slice(1, breaks.length);
    const nBreaksBelowZero = breaksNotIncludingMin.filter((br) => br < 0).length;
    let nBreaksAboveZero = breaksNotIncludingMin.length - nBreaksBelowZero;
    const nBreaksWant = 5;
    const nBreaksGot = nBreaksBelowZero + 1 + nBreaksAboveZero;
    const nBreaksResidual = nBreaksWant - nBreaksGot;
    nBreaksAboveZero += nBreaksResidual;
    const mixedNeutral = colours.pos[0];
    const mixedNeg = colours.neg.slice(0, -1);
    const mixedPos = colours.pos.slice(1);
    const negColours = nBreaksBelowZero > 0 ? mixedNeg.slice(nBreaksBelowZero * -1) : [];
    const posColours = nBreaksAboveZero > 0 ? mixedPos.slice(0, nBreaksAboveZero) : [];
    result = [...negColours, mixedNeutral, ...posColours];
  }
  return [result[0], result[1], result[2], result[3], result[4]];
};
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mapContainer;
  onDestroy(() => {
  });
  return `<div class="w-full h-full"${add_attribute("this", mapContainer, 0)}></div>`;
});
const MapControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $viewport, $$unsubscribe_viewport;
  let $params, $$unsubscribe_params;
  let $$unsubscribe_page;
  $$unsubscribe_viewport = subscribe(viewport, (value) => $viewport = value);
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  const geoTypes = GeoTypes.filter((g) => g !== "ew");
  $$unsubscribe_viewport();
  $$unsubscribe_params();
  $$unsubscribe_page();
  return `${$viewport ? `<div class="absolute top-3 lg:top-5 xl:top-8 left-3 lg:left-5 xl:left-8 mr-16 lg:mr-20 gap-3 flex flex-col items-start justify-between flex-wrap">
    <div class="${[
    escape(`flex flex-wrap items-center gap-2 text-sm lg:text-base`, true),
    !$params.embed ? "md:hidden" : ""
  ].join(" ").trim()}"><div class="flex"><div class="flex items-center px-3 py-1 rounded-l bg-ons-census text-ons-grey-5 font-bold"><abbr${add_attribute("title", geoTypePluralNames[$viewport.geoType], 0)} class="no-underline">${escape($viewport.geoType.toUpperCase())}</abbr></div>
        <div${add_attribute("class", `px-3 py-1 last:rounded-r bg-ons-grey-75 text-ons-grey-5 `, 0)}>${escape(geoTypePluralNames[$viewport.geoType])}</div>
        ${$params.geoLock && !$params.embed ? `<div class="flex items-center p-1 last:rounded-r bg-ons-grey-100 text-ons-grey-15 text-xl">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "lock" }, {}, {})}</div>` : ``}</div></div>

    
    <div class="${[
    escape(`hidden flex-wrap items-stretch gap-y-1.5 text-sm lg:text-base`, true),
    !$params.embed ? "md:flex" : ""
  ].join(" ").trim()}">${each(geoTypes.filter((_, i) => i <= geoTypes.indexOf($viewport.idealGeoType)), (g, i) => {
    return `${i !== 0 ? `<div class="flex items-center text-xl px-1 text-ons-grey-100 select-none bg-ons-grey-15 bg-opacity-70">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "chevronRight" }, {}, {})}
          </div>` : ``}
        ${i < geoTypes.indexOf($viewport.geoType) ? `<div class="flex bg-ons-grey-15 bg-opacity-70 first:rounded-l last:rounded-r"><button class="flex custom-ring"${add_attribute("title", geoTypeSingularDescriptions[g], 0)}><div class="flex items-center px-3 py-1 rounded-l text-ons-grey-5 font-bold last:rounded-r bg-ons-grey-75 hover:bg-ons-census"><abbr class="no-underline">${escape(g.toUpperCase())}</abbr>
              </div></button>
          </div>` : `<div class="flex flex-nowrap"><div class="flex bg-ons-grey-15 bg-opacity-70 first:rounded-l last:rounded-r"><div class="${[
      "flex custom-ring",
      i > geoTypes.indexOf($viewport.geoType) ? "opacity-60" : ""
    ].join(" ").trim()}"${add_attribute("title", geoTypeSingularDescriptions[g], 0)}><div class="${[
      escape(
        `flex items-center px-3 py-1 rounded-l text-ons-grey-5 font-bold ${i < geoTypes.indexOf($viewport.geoType) ? "bg-ons-grey-75" : g === $viewport.geoType ? "bg-ons-census" : "bg-ons-grey-35"} `,
        true
      ),
      i < geoTypes.indexOf($viewport.geoType) ? "hover:bg-ons-census" : ""
    ].join(" ").trim()}"><abbr class="no-underline">${escape(g.toUpperCase())}</abbr></div>
              </div></div>
            ${g === $viewport.geoType || g === $viewport.idealGeoType ? `
              <button ${g !== $viewport.geoType ? "disabled" : ""}${add_attribute(
      "class",
      `px-3 py-0 last:rounded-r bg-ons-grey-75 custom-ring flex items-center flex-nowrap ${i > geoTypes.indexOf($viewport.geoType) ? "text-ons-white opacity-60" : "text-ons-grey-5"} ${g === $viewport.geoType ? "group hover:bg-ons-grey-100 focus-visible:bg-ons-grey-100" : ""}`,
      0
    )}><div class="relative"><div class="group-hover:invisible group-focus-visible:invisible">${escape(geoTypePluralNames[g])}</div>
                  <div class="hidden group-hover:flex group-focus-visible:flex items-center gap-1 absolute left-0 top-0">${!$params.geoLock ? `<div>${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "lock" }, {}, {})}</div>
                      <div>Lock</div>` : `<div>${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "lockOpen" }, {}, {})}</div>
                      <div>Unlock</div>`}
                  </div></div>
              </button>` : ``}
            ${i > geoTypes.indexOf($viewport.geoType) ? `<div class="flex items-center px-2 bg-ons-grey-100 text-ons-white text-sm last:rounded-r"><div class="">Unavailable</div>
              </div>` : ``}
            ${g === $viewport.geoType && $params.geoLock ? `<div class="flex items-center p-1 last:rounded-r bg-ons-grey-100 text-ons-grey-15 text-lg custom-ring" title="${"The map is locked to the " + escape(g.toUpperCase(), true) + " geography layer. This will limit the minimum zoom"}">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "lock" }, {}, {})}
              </div>` : ``}
          </div>`}`;
  })}</div>

    ${$params?.embed?.areaSearch ? `<div class="min-w-[19rem] md:w-[25rem] lg:w-[30rem] justify-self-center">${validate_component(AreaSearch, "AreaSearch").$$render($$result, { embedded: true }, {}, {})}</div>` : ``}</div>` : ``}`;
});
const MapTips = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $params, $$unsubscribe_params;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_params();
  return `${!$params.category ? `<div class="absolute top-[48%] left-1/2 -translate-x-1/2"><div class="px-3 py-1 rounded bg-ons-census-supporting text-ons-white"><div class="flex gap-2 items-center"><div class="hidden lg:flex text-2xl">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "keyboardBackspace" }, {}, {})}</div>
        <div>Select a topic to visualise</div></div></div></div>` : ``}`;
});
const GeoTypeBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { geoType } = $$props;
  if ($$props.geoType === void 0 && $$bindings.geoType && geoType !== void 0)
    $$bindings.geoType(geoType);
  return `${geoType && geoType !== "ew" ? `<div class="inline-block align-middle text-xs md:text-sm bg-ons-census text-white font-bold px-1 rounded-sm mx-0 md:mx-[3px] -mt-0.5 lg:-mt-[5px]">${escape(geoType.toUpperCase())}</div>` : ``}`;
});
const MultiCategoryMapLegendToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggleOpen } = $$props;
  let { open } = $$props;
  if ($$props.toggleOpen === void 0 && $$bindings.toggleOpen && toggleOpen !== void 0)
    $$bindings.toggleOpen(toggleOpen);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `<button class="ml-auto custom-ring"${add_attribute("title", "", 0)}${add_attribute("aria-label", "", 0)}><div class="text-2xl group-hover:scale-125 transition-all" style="line-height: 1">${validate_component(MaterialIcon, "Icon").$$render(
    $$result,
    {
      kind: "arrowForwardIos",
      orientation: open ? "e" : "w"
    },
    {},
    {}
  )}</div></button>`;
});
const legendTextClass$1 = "text-sm sm:text-base lg:text-lg xl:text-xl";
const MultiCategoryMapLegend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let valueForHoveredGeography;
  let active;
  let $viz, $$unsubscribe_viz;
  let $selected, $$unsubscribe_selected;
  let $hovered, $$unsubscribe_hovered;
  let $viewport, $$unsubscribe_viewport;
  $$unsubscribe_viz = subscribe(viz, (value) => $viz = value);
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_hovered = subscribe(hovered, (value) => $hovered = value);
  $$unsubscribe_viewport = subscribe(viewport, (value) => $viewport = value);
  const toggleOpen = () => {
    open = !open;
  };
  const getColourForCategory = (categoryCode) => {
    return $viz.params.classification.categories.map((c, i) => ({
      code: c.code,
      colour: dotdensityColours[i]
    })).find((c) => c.code === categoryCode).colour;
  };
  const shouldBeHorizontal = () => $viz.params.categories.filter((c) => c.name.length > 30).length < 3;
  const shouldBeCollapsable = () => $viz.params.categories.length > 2;
  open = true;
  valueForHoveredGeography = $viz?.places.find((p) => p.geoCode === $hovered?.geoCode)?.categoryValues;
  active = $hovered ? {
    geoType: $hovered.geoType,
    geoCode: $hovered.geoCode,
    displayName: $hovered.displayName,
    value: valueForHoveredGeography
  } : {
    geoType: $selected?.geoType,
    geoCode: $selected?.geoCode,
    displayName: $selected?.displayName,
    value: $selected && "values" in $selected ? $selected?.values : $viz && "englandAndWales" in $viz ? Object.entries($viz.englandAndWales).map(([code, value]) => ({ code, value })) : void 0
  };
  $$unsubscribe_viz();
  $$unsubscribe_selected();
  $$unsubscribe_hovered();
  $$unsubscribe_viewport();
  return `${$viz?.params?.categories || active.geoCode ? `<div${add_attribute("class", `absolute bottom-3 sm:bottom-5 lg:bottom-6 flex w-full justify-center`, 0)}><div class="w-full max-w-[50rem] mx-3 lg:mx-4 bg-white bg-opacity-90 px-3 lg:px-5 py-2 lg:py-3 border-[1px] lg:border-[1px] border-ons-grey-15">${$viz?.params?.categories && active?.value !== void 0 ? `
        <div class="${["flex flex-col gap-2 sm:gap-4", shouldBeHorizontal() ? "sm:flex-row" : ""].join(" ").trim()}"><div class="flex flex-col flex-1"><div class="flex gap-2 items-start justify-between"><div><div${add_attribute("class", `${legendTextClass$1} break-keep`, 0)}><span class="font-bold">${escape($viz.params.variable.name)}</span> in
                </div>
                <span${add_attribute("class", legendTextClass$1, 0)}>${escape(active.displayName)}</span>
                ${validate_component(GeoTypeBadge, "GeoTypeBadge").$$render($$result, { geoType: active.geoType }, {}, {})}</div>
              <div class="${["block", shouldBeHorizontal() && open ? "sm:hidden" : ""].join(" ").trim()}">${validate_component(MultiCategoryMapLegendToggle, "MultiCategoryMapLegendToggle").$$render($$result, { open, toggleOpen }, {}, {})}</div></div>
            <div class="grow"></div>
            ${shouldBeHorizontal() ? `<div class="text-sm mt-3">One dot represents ${escape(getDensityForZoomLevel($viewport.zoom).toLocaleString())}
                ${escape(makeUnitSingular($viz.params.variable.units, $viewport.zoom))}</div>` : ``}</div>
          ${open && $viz.params.categories.length > 0 ? `<div class="flex flex-1 flex-col gap-1">${each($viz.params.categories, (category, i) => {
    let value = active.value.find((v) => v.code === category.code).value, ewValue = $viz.englandAndWales[category.code];
    return `
                
                <div class=""><div class="flex gap-2 items-start sm:items-end justify-between"><div class="${["leading-[1.35rem]", "widows"].join(" ").trim()}">${escape(category.name)} <span class="ml-0.5 font-bold">${escape(value)}%
                      </span></div>
                    ${i === 0 && open && shouldBeCollapsable() ? `${shouldBeHorizontal() ? `<div class="hidden sm:block">${validate_component(MultiCategoryMapLegendToggle, "MultiCategoryMapLegendToggle").$$render($$result, { open, toggleOpen }, {}, {})}
                        </div>` : ``}` : ``}</div>
                  <div class="relative h-4"><div class="h-4 absolute left-0 top-0"${add_styles({
      "background-color": getColourForCategory(category.code),
      "width": `${value}%`
    })}></div>
                    <div class="h-4 w-1 absolute left-0 top-0 bg-ons-black"${add_styles({ "left": `${Math.max(ewValue - 0.1, 0)}%` })}></div></div>
                </div>`;
  })}
              <div class="flex gap-x-2 mt-2 justify-between"><div class="text-sm flex items-center gap-2"><div class="h-4 w-1 bg-ons-black inline-block"></div>
                  England and Wales average
                  </div>
                ${!shouldBeHorizontal() ? `<div class="text-sm">One dot represents ${escape(getDensityForZoomLevel($viewport.zoom).toLocaleString("en"))}
                    ${escape(makeUnitSingular($viz.params.variable.units, $viewport.zoom))}</div>` : ``}</div></div>` : ``}</div>` : `
        <div>${$viz?.params?.categories ? `<div><span${add_attribute("class", legendTextClass$1, 0)}>${escape(active.displayName)}</span>
              ${validate_component(GeoTypeBadge, "GeoTypeBadge").$$render($$result, { geoType: active.geoType }, {}, {})}</div>` : `<div class="text-center"><span${add_attribute("class", legendTextClass$1, 0)}>${escape(active.displayName)}</span>
              ${validate_component(GeoTypeBadge, "GeoTypeBadge").$$render($$result, { geoType: active.geoType }, {}, {})}</div>`}</div>`}</div></div>` : ``}`;
});
const formatTemplateString = (variable, category, location, templateStr) => {
  const stringReplaceMap = {
    "{variable_name}": unCapitalizeFirstLetter(variable.name),
    "{category_name}": unCapitalizeFirstLetter(category.name),
    "{category_unit}": unCapitalizeFirstLetter(variable.units),
    "{location}": location
  };
  Object.entries(stringReplaceMap).forEach(([strToReplace, replacementStr]) => {
    templateStr = templateStr.replace(new RegExp(strToReplace, "g"), replacementStr);
  });
  return templateStr;
};
const getSign = (mode, value) => {
  switch (mode) {
    case "choropleth":
    case "dotdensity":
      return "";
    case "change":
      return value > 0 ? "+" : "";
    default:
      never();
  }
};
const shouldShowPositiveSign = (mode) => {
  switch (mode) {
    case "choropleth":
    case "dotdensity":
      return false;
    case "change":
      return true;
    default:
      never();
  }
};
const getDropdownDisplayType = (mode) => {
  switch (mode) {
    case "choropleth":
    case "dotdensity":
      return "legendString";
    case "change":
      return "name";
    default:
      never();
  }
};
const BreaksMarker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ghost = false } = $$props;
  if ($$props.ghost === void 0 && $$bindings.ghost && ghost !== void 0)
    $$bindings.ghost(ghost);
  return `<svg class="${["h-7 w-7", ghost ? "opacity-50" : ""].join(" ").trim()}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="10,10 90,10 50,78" stroke="black" stroke-width="19" stroke-linejoin="round" fill="white"></polygon></svg>`;
});
const css$1 = {
  code: ".line.svelte-dgq9ri{position:absolute;top:0;border-left:solid 1px black}.tick.svelte-dgq9ri{position:absolute;z-index:1;top:calc(100% + 9px);text-align:center;transform:translateX(-50%)}.tick-suffix.svelte-dgq9ri{font-size:90%}",
  map: null
};
const BreaksChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ticks;
  let { hovered: hovered2 = void 0 } = $$props;
  let { selected: selected2 = void 0 } = $$props;
  let { breaks = [0, 20, 40, 60, 80, 100] } = $$props;
  let { colors = [
    "rgba(234,236,177)",
    "rgba(169,216,145)",
    "rgba(0,167,186)",
    "rgba(0,78,166)",
    "rgba(0,13,84)"
  ] } = $$props;
  let { suffix = "" } = $$props;
  let { snapTicks = true } = $$props;
  let { mode = "choropleth" } = $$props;
  let { classificationCode = "" } = $$props;
  let { showPositive = false } = $$props;
  const pos = (val, breaks2) => {
    if (val < breaks2[0]) {
      return 0;
    }
    if (val >= breaks2[breaks2.length - 1]) {
      return 100;
    } else {
      let i = 0;
      while (val > breaks2[i + 1])
        i += 1;
      let unit = 100 / (breaks2.length - 1);
      let offset = (val - breaks2[i]) / (breaks2[i + 1] - breaks2[i]);
      return (i + offset) * unit;
    }
  };
  const getPrefix = (val) => {
    if (showPositive && val > 0) {
      return "+";
    }
    return "";
  };
  if ($$props.hovered === void 0 && $$bindings.hovered && hovered2 !== void 0)
    $$bindings.hovered(hovered2);
  if ($$props.selected === void 0 && $$bindings.selected && selected2 !== void 0)
    $$bindings.selected(selected2);
  if ($$props.breaks === void 0 && $$bindings.breaks && breaks !== void 0)
    $$bindings.breaks(breaks);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.snapTicks === void 0 && $$bindings.snapTicks && snapTicks !== void 0)
    $$bindings.snapTicks(snapTicks);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.classificationCode === void 0 && $$bindings.classificationCode && classificationCode !== void 0)
    $$bindings.classificationCode(classificationCode);
  if ($$props.showPositive === void 0 && $$bindings.showPositive && showPositive !== void 0)
    $$bindings.showPositive(showPositive);
  $$result.css.add(css$1);
  ticks = breaks.length === 1 ? [breaks[0], breaks[0]] : breaks;
  return `<div class="mt-3 box-border relative w-full h-5 mb-8 text-xs sm:text-base">${each(ticks.slice(1), (brk, i) => {
    return `<div class="absolute top-0 h-full" style="${"width: " + escape(100 / (ticks.length - 1), true) + "%; left: " + escape(i * (100 / (ticks.length - 1)), true) + "%; background-color: " + escape(colors[i], true) + ";"}"></div>
    <div class="line svelte-dgq9ri" style="${"left: " + escape(i * (100 / (ticks.length - 1)), true) + "%;"}"></div>
    <div class="tick svelte-dgq9ri" style="${"left: " + escape(i * (100 / (ticks.length - 1)), true) + "%; transform: translateX(" + escape(i == 0 && snapTicks ? "-2px" : "-50%", true) + ");"}">${escape(getPrefix(ticks[i]))}${escape(roundedClassificationDataToString(classificationCode, mode, ticks[i]))}<span class="tick-suffix svelte-dgq9ri">${escape(suffix)}</span>
    </div>`;
  })}
  <div class="line svelte-dgq9ri" style="right: 0;"></div>
  <div class="tick svelte-dgq9ri" style="${"right: 0; transform: translateX(" + escape(snapTicks ? "2px" : "50%", true) + ");"}">${escape(getPrefix(ticks.length - 1))}${escape(roundedClassificationDataToString(classificationCode, mode, ticks[ticks.length - 1]))}<span class="tick-suffix svelte-dgq9ri">${escape(suffix)}</span></div>
  ${selected2 !== void 0 ? `<div class="absolute z-10 -top-2.5" style="${"left: calc(" + escape(pos(selected2, ticks), true) + "% - " + escape(28 / 2, true) + "px);"}">${validate_component(BreaksMarker, "BreaksMarker").$$render($$result, { ghost: hovered2 }, {}, {})}</div>` : ``}
  ${hovered2 !== void 0 ? `<div class="absolute z-10 -top-2.5" style="${"left: calc(" + escape(pos(hovered2, ticks), true) + "% - " + escape(28 / 2, true) + "px);"}">${validate_component(BreaksMarker, "BreaksMarker").$$render($$result, {}, {}, {})}</div>` : ``}
</div>`;
});
const CategorySelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $viz, $$unsubscribe_viz;
  let $$unsubscribe_page;
  $$unsubscribe_viz = subscribe(viz, (value) => $viz = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { selected: selected2 } = $$props;
  let { use } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected2 !== void 0)
    $$bindings.selected(selected2);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  $$unsubscribe_viz();
  $$unsubscribe_page();
  return `<div class="mt-1 mb-0.5"><select name="select" class="text-sm sm:text-base lg:text-lg font-bold p-1 custom-ring border-2 border-ons-ocean-blue max-w-[15rem] xs:max-w-[20rem] sm:max-w-[31rem] md:max-w-none">${each($viz.params.classification.categories, (category) => {
    return `${use === "legendString" ? `<option${add_attribute("value", category.slug, 0)}>${escape(category.legend_str_3)}</option>` : `${use === "name" ? `<option${add_attribute("value", category.slug, 0)}>${escape(category.name)}</option>` : ``}`}`;
  })}</select></div>`;
});
const MapLegendExplanation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $viz, $$unsubscribe_viz;
  $$unsubscribe_viz = subscribe(viz, (value) => $viz = value);
  let { mode } = $$props;
  let { classificationCode } = $$props;
  let { variableName } = $$props;
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.classificationCode === void 0 && $$bindings.classificationCode && classificationCode !== void 0)
    $$bindings.classificationCode(classificationCode);
  if ($$props.variableName === void 0 && $$bindings.variableName && variableName !== void 0)
    $$bindings.variableName(variableName);
  $$unsubscribe_viz();
  return `${mode === "change" ? `<div class="text-xs xs:text-sm pt-0.5 xs:pt-2.5">${classificationCode === "population_density" ? `Percentage change in persons per square kilometre between 2011 and 2021 census.` : `${classificationCode === "median_age" ? `Change in median age between 2011 and 2021 census.` : `${escape(variableName)}: change in
      <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/articles/censusmaps/2022-11-02#:~:text=A%20percentage%20point%20change%20is%20the%20difference%20between%20percentages" class="hyperlink-subdued">percentage points (pp)</a>
      for ${escape($viz.params.variable.units)} between 2011 and 2021 census.`}`}</div>` : ``}

${$viz?.params?.category?.slug === "white-binary" ? `<div class="text-xs xs:text-sm pt-0.5 xs:pt-2.5">Binary view showing areas where White ethnicity represents a majority (≥50%) or minority (&lt;50%) of the
    population.
  </div>` : ``}`;
});
const legendTextClass = "text-sm sm:text-base lg:text-lg xl:text-xl";
const SingleCategoryMapLegend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let valueForHoveredGeography;
  let suffix;
  let active;
  let $selected, $$unsubscribe_selected;
  let $hovered, $$unsubscribe_hovered;
  let $viz, $$unsubscribe_viz;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_hovered = subscribe(hovered, (value) => $hovered = value);
  $$unsubscribe_viz = subscribe(viz, (value) => $viz = value);
  valueForHoveredGeography = $viz?.places.find((p) => p.geoCode === $hovered?.geoCode)?.categoryValue;
  suffix = $viz && getClassificationDataSuffix($viz.params.classification.code, $viz.params.mode);
  active = $hovered ? {
    geoType: $hovered.geoType,
    geoCode: $hovered.geoCode,
    displayName: $hovered.displayName,
    value: valueForHoveredGeography
  } : {
    geoType: $selected?.geoType,
    geoCode: $selected?.geoCode,
    displayName: $selected?.displayName,
    value: $selected && "value" in $selected ? $selected?.value : void 0
  };
  $$unsubscribe_selected();
  $$unsubscribe_hovered();
  $$unsubscribe_viz();
  return `




${$viz?.params?.category || active.geoCode ? `<div${add_attribute("class", `absolute bottom-3 sm:bottom-5 lg:bottom-8 flex w-full justify-center`, 0)}><div class="w-full max-w-[50rem] mx-3 lg:mx-4 bg-white bg-opacity-90 px-3 lg:px-5 py-2 lg:py-3 border-[1px] lg:border-[1px] border-ons-grey-15">
      ${$viz?.params?.category && active?.value !== void 0 ? `
        <div class="flex gap-3 items-center"><div class="hidden xs:block whitespace-nowrap"><span class="xs:text-4xl sm:text-5xl font-bold">${escape(getSign($viz.params.mode, active.value))}${escape(roundedClassificationDataToString($viz.params.classification.code, $viz.params.mode, active.value))}</span><span class="${["xs:text-2xl sm:text-4xl font-bold", !suffix ? "pr-2" : ""].join(" ").trim()}">${escape(suffix)}</span></div>
          <div class="flex-grow md:leading-[0px]"><div class="mb-0.5 xs:mb-0 inline xs:block">
              <span class="xs:hidden font-bold text-2xl leading-6 sm:leading-normal mr-0.5"><span class="">${escape(getSign($viz.params.mode, active.value))}${escape(roundedClassificationDataToString($viz.params.classification.code, $viz.params.mode, active.value))}</span><span class="text-base">${escape(suffix)}</span></span>
              ${$viz.params.mode === "choropleth" ? `<span${add_attribute("class", legendTextClass, 0)}>${escape(formatTemplateString($viz.params.variable, $viz.params.category, active.displayName, $viz.params.category.legend_str_1))}</span>
                ${validate_component(GeoTypeBadge, "GeoTypeBadge").$$render($$result, { geoType: active.geoType }, {}, {})}
                <span${add_attribute("class", legendTextClass, 0)}>${escape(formatTemplateString($viz.params.variable, $viz.params.category, active.displayName, $viz.params.category.legend_str_2))}</span>` : `${$viz.params.mode === "change" ? `<span${add_attribute("class", legendTextClass, 0)}>ten year change in ${escape(active.displayName)}</span>
                ${validate_component(GeoTypeBadge, "GeoTypeBadge").$$render($$result, { geoType: active.geoType }, {}, {})}
                <span${add_attribute("class", legendTextClass, 0)}> </span>` : ``}`}</div>
            ${$viz?.params?.embed?.categorySelection ? `${validate_component(CategorySelector, "CategorySelector").$$render(
    $$result,
    {
      selected: $viz.params.category.slug,
      use: getDropdownDisplayType($viz.params.mode)
    },
    {},
    {}
  )}` : `${$viz.params.mode === "choropleth" ? `<div${add_attribute("class", `${legendTextClass} font-bold inline xs:block`, 0)}>${escape(formatTemplateString($viz.params.variable, $viz.params.category, active.displayName, $viz.params.category.legend_str_3))}</div>` : `${$viz.params.mode === "change" ? `<div${add_attribute("class", `${legendTextClass} font-bold inline xs:block`, 0)}>${escape($viz.params.category.name)}</div>` : ``}`}`}</div></div>` : `
        <div>${$viz?.params?.category ? `<div><span${add_attribute("class", legendTextClass, 0)}>${$viz.params.mode === "change" ? `Ten year change in` : `${$viz.params.mode === "binary" ? `Binary view:` : ``}`}
                ${escape(active.displayName)}</span>
              ${validate_component(GeoTypeBadge, "GeoTypeBadge").$$render($$result, { geoType: active.geoType }, {}, {})}</div>
            ${$viz?.params?.embed?.categorySelection ? `${validate_component(CategorySelector, "CategorySelector").$$render(
    $$result,
    {
      selected: $viz.params.category.slug,
      use: "name"
    },
    {},
    {}
  )}` : `<div${add_attribute("class", `${legendTextClass} font-bold`, 0)}>${escape($viz.params.category.name)}</div>`}` : `<div class="text-center"><span${add_attribute("class", legendTextClass, 0)}>${escape(active.displayName)}</span>
              ${validate_component(GeoTypeBadge, "GeoTypeBadge").$$render($$result, { geoType: active.geoType }, {}, {})}</div>`}</div>`}
      ${$viz ? `${$viz.params.category?.slug === "white-binary" ? `
          <div class="flex items-center justify-center gap-6 mt-3"><div class="flex items-center gap-2"><div class="w-6 h-6 border border-gray-300" style="background-color: #e74c3c"></div>
              <span class="text-sm font-medium">&lt; 50% White (Minority)</span></div>
            <div class="flex items-center gap-2"><div class="w-6 h-6 border border-gray-300" style="background-color: #27ae60"></div>
              <span class="text-sm font-medium">≥ 50% White (Majority)</span></div></div>` : `${validate_component(BreaksChart, "BreaksChart").$$render(
    $$result,
    {
      selected: $selected && "value" in $selected ? $selected?.value : void 0,
      hovered: active.value,
      suffix,
      breaks: $viz.breaks,
      colors: getColours($viz.params.mode, $viz.breaks),
      mode: $viz.params.mode,
      classificationCode: $viz.params.classification.code,
      showPositive: shouldShowPositiveSign($viz.params.mode)
    },
    {},
    {}
  )}`}
        ${validate_component(MapLegendExplanation, "MapLegendExplanation").$$render(
    $$result,
    {
      mode: $viz.params.mode,
      classificationCode: $viz.params.classification.code,
      variableName: $viz.params.variable.name
    },
    {},
    {}
  )}` : ``}</div></div>` : ``}`;
});
const MapLegend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $viz, $$unsubscribe_viz;
  $$unsubscribe_viz = subscribe(viz, (value) => $viz = value);
  $$unsubscribe_viz();
  return `${$viz?.kind === "single-category" ? `${validate_component(SingleCategoryMapLegend, "SingleCategoryMapLegend").$$render($$result, {}, {}, {})}` : `${validate_component(MultiCategoryMapLegend, "MultiCategoryMapLegend").$$render($$result, {}, {}, {})}`}`;
});
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $params, $$unsubscribe_params;
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  $$unsubscribe_params();
  return `<div class="px-6 py-4 sm:py-6 bg-ons-ocean-blue text-ons-grey-5"><h1 class="text-2xl sm:text-3xl font-semibold break-words">Census maps</h1>
  <div${add_attribute(
    "class",
    `mt-2 ${!$params.variableGroup && !$params.category ? "" : "hidden xs:block"}`,
    0
  )}>Use our maps to find out what people&#39;s lives were like across England and Wales in March 2021.
  </div></div>`;
});
const css = {
  code: '.wrapper.svelte-sq4fd9.svelte-sq4fd9{width:100%;margin:0 auto;padding:0 16px}@media(min-width: 768px){.wrapper.svelte-sq4fd9.svelte-sq4fd9{width:752px;padding:0}}@media(min-width: 992px){.wrapper.svelte-sq4fd9.svelte-sq4fd9{width:944px;padding:0}}.cookies-banner.svelte-sq4fd9.svelte-sq4fd9{background-color:#e5e5e5;padding:20px 0;box-sizing:border-box}@media(max-width: 768px){.cookies-banner.svelte-sq4fd9.svelte-sq4fd9{padding:10px 0}}.cookies-banner__wrapper.svelte-sq4fd9.svelte-sq4fd9{margin-left:auto;margin-right:auto}.cookies-banner__heading.svelte-sq4fd9.svelte-sq4fd9{font-weight:800}.cookies-banner__body.svelte-sq4fd9.svelte-sq4fd9{padding:0}.cookies-banner__buttons.svelte-sq4fd9.svelte-sq4fd9{display:flex;display:-ms-flexbox;justify-content:left;align-items:center;margin-top:1rem}@media(max-width: 768px){.cookies-banner__buttons.svelte-sq4fd9.svelte-sq4fd9{flex-direction:column;justify-content:center;align-items:center}}.cookies-banner__button.svelte-sq4fd9.svelte-sq4fd9{display:inline-block;margin-right:8px}@media(max-width: 768px){.cookies-banner__button.svelte-sq4fd9.svelte-sq4fd9{margin-top:8px;margin-right:0;width:100%;display:block}}.cookies-banner__button--hide.svelte-sq4fd9.svelte-sq4fd9{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:18px;line-height:1.25;outline:0;border:0;background:0 0;text-decoration:underline;color:#206095;padding:0;float:right}@media(max-width: 768px){.cookies-banner__button--hide.svelte-sq4fd9.svelte-sq4fd9{padding:1rem 0;display:block;float:none}}.cookies-banner.svelte-sq4fd9 a.svelte-sq4fd9{text-decoration:underline;color:#206095}.cookies-banner.svelte-sq4fd9 p.svelte-sq4fd9,.cookies-banner.svelte-sq4fd9 .markdown li p.svelte-sq4fd9:nth-of-type(2),.markdown li .cookies-banner.svelte-sq4fd9 p.svelte-sq4fd9:nth-of-type(2),.cookies-banner.svelte-sq4fd9 .section__content--markdown li p.svelte-sq4fd9:nth-of-type(2),.section__content--markdown li .cookies-banner.svelte-sq4fd9 p.svelte-sq4fd9:nth-of-type(2),.cookies-banner.svelte-sq4fd9 .section__content--static-markdown li p.svelte-sq4fd9:nth-of-type(2),.section__content--static-markdown li .cookies-banner.svelte-sq4fd9 p.svelte-sq4fd9:nth-of-type(2){padding:0;margin:8px 0}.wrapper.svelte-sq4fd9.svelte-sq4fd9,.col.svelte-sq4fd9.svelte-sq4fd9,.clearfix.svelte-sq4fd9.svelte-sq4fd9{*zoom:1}.wrapper.svelte-sq4fd9.svelte-sq4fd9:before,.col.svelte-sq4fd9.svelte-sq4fd9:before,.clearfix.svelte-sq4fd9.svelte-sq4fd9:before,.wrapper.svelte-sq4fd9.svelte-sq4fd9:after,.col.svelte-sq4fd9.svelte-sq4fd9:after,.clearfix.svelte-sq4fd9.svelte-sq4fd9:after{content:"";display:table}.wrapper.svelte-sq4fd9.svelte-sq4fd9:after,.col.svelte-sq4fd9.svelte-sq4fd9:after,.clearfix.svelte-sq4fd9.svelte-sq4fd9:after{clear:both}.font-size--18.svelte-sq4fd9.svelte-sq4fd9{font-size:18px}.font-size--17.svelte-sq4fd9.svelte-sq4fd9{font-size:17px !important}.font-size--h3.svelte-sq4fd9.svelte-sq4fd9{font-size:21px;line-height:24px;margin:16px 0 0;padding:3px 0 5px;orphans:3;widows:3}button.svelte-sq4fd9.svelte-sq4fd9{cursor:pointer}.btn.svelte-sq4fd9.svelte-sq4fd9{font-family:open sans, Helvetica, Arial, sans-serif;font-weight:400;font-size:14px;display:inline-block;width:auto;cursor:pointer;padding:6px 16px;border:0;text-align:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:background-color 0.25s ease-out;text-decoration:none;line-height:24px}.btn--primary.svelte-sq4fd9.svelte-sq4fd9{background-color:#0f8243;color:#fff}.btn--primary.svelte-sq4fd9.svelte-sq4fd9:hover,.btn--primary.svelte-sq4fd9.svelte-sq4fd9:focus{background-color:#0b5d30}.btn--full-width.svelte-sq4fd9.svelte-sq4fd9{display:block;width:100%}.btn--focus.svelte-sq4fd9.svelte-sq4fd9:focus{box-shadow:0 0 0 3px #f93;outline:0}.margin-right--2.svelte-sq4fd9.svelte-sq4fd9{margin-right:32px !important}.font-weight-700.svelte-sq4fd9.svelte-sq4fd9{font-weight:700 !important}.text-wrap.svelte-sq4fd9.svelte-sq4fd9{white-space:normal}',
  map: null
};
const OnsAnalyticsBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { analyticsId: analyticsId2 } = $$props;
  let { analyticsProps = {} } = $$props;
  let { usageCookies = false } = $$props;
  if ($$props.analyticsId === void 0 && $$bindings.analyticsId && analyticsId2 !== void 0)
    $$bindings.analyticsId(analyticsId2);
  if ($$props.analyticsProps === void 0 && $$bindings.analyticsProps && analyticsProps !== void 0)
    $$bindings.analyticsProps(analyticsProps);
  if ($$props.usageCookies === void 0 && $$bindings.usageCookies && usageCookies !== void 0)
    $$bindings.usageCookies(usageCookies);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${``}`;
});
const analyticsId = "GTM-MBCBVQS";
const CookieBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const analyticsProps = {
    contentTitle: "Census maps",
    releaseDate: "20221102",
    contentType: "exploratory",
    outputSeries: "censusmaps"
  };
  return `${validate_component(OnsAnalyticsBanner, "OnsAnalyticsBanner").$$render($$result, { analyticsId, analyticsProps }, {}, {})}`;
});
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $nav, $$unsubscribe_nav;
  $$unsubscribe_nav = subscribe(nav, (value) => $nav = value);
  $$unsubscribe_nav();
  return `<button class="relative flex flex-col justify-center items-center z-50 bg-ons-white w-[40px] h-[76px] py-3 rounded-r-md shadow-[6px_4px_10px_-1px_rgba(0,0,0,0.3)] transform-gpu hover:bg-ons-grey-55 active:bg-ons-white custom-ring">${$nav.open ? `<div class="text-2xl text-ons-grey-100">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "arrowLeftFill" }, {}, {})}</div>` : `<div class="flex items-center px-2 text-2xl">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "menu" }, {}, {})}</div>`}</button>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="px-6 pt-8 pb-10 bg-ons-grey-100 text-ons-grey-5 justify-self-end"><div class="mb-7 mt-1">${validate_component(Logo, "Logo").$$render($$result, { fill: "fill-ons-white" }, {}, {})}</div>

  <div class="flex flex-wrap gap-x-6 gap-y-1 mb-6"><div class=""><a href="https://www.ons.gov.uk/cookies" title="Cookies" class="hyperlink-reverse custom-ring">Cookies</a></div>
    <div class=""><a href="https://www.ons.gov.uk/help/accessibility" title="Accessibility statement" class="hyperlink-reverse custom-ring">Accessibility</a></div>
    <div class=""><a href="https://www.ons.gov.uk/help/privacynotice" title="Privacy and data protection" class="hyperlink-reverse custom-ring">Privacy</a></div>
    <div class=""><a href="https://www.ons.gov.uk/help/termsandconditions" title="Terms and conditons" class="hyperlink-reverse custom-ring">Terms</a></div></div>

  <div class="flex gap-3"><div class=""><img class="fill-ons-grey-5" alt="Open Government Licence logo" width="45" height="18.75" src="https://cdn.ons.gov.uk/assets/images/logo-ogl-footer.svg"></div></div>

  <div class="text-sm mt-2 text-ons-grey-35">All content is available under the <a class="hyperlink-reverse" href="http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank" rel="noreferrer">Open Government Licence v3.0</a>
    <span class="inline" aria-hidden="true">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "openInNew" }, {}, {})}
    </span>, except where otherwise stated
  </div>
  <div class="flex justify-end mt-1"></div>

  <div class="text-sm mt-3 text-ons-grey-35">House of Commons Library
    <a class="hyperlink-reverse" href="https://houseofcommonslibrary.github.io/msoanames/" target="_blank" rel="noreferrer">MSOA names</a>
    <span class="inline" aria-hidden="true">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "openInNew" }, {}, {})}</span>
    used under the
    <a class="hyperlink-reverse" href="https://www.parliament.uk/site-information/copyright-parliament/open-parliament-licence/" target="_blank" rel="noreferrer">Open Parliament Licence v3.0</a>
    <span class="inline" aria-hidden="true">${validate_component(MaterialIcon, "Icon").$$render($$result, { kind: "openInNew" }, {}, {})}</span></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $nav, $$unsubscribe_nav;
  let $params, $$unsubscribe_params;
  $$unsubscribe_nav = subscribe(nav, (value) => $nav = value);
  $$unsubscribe_params = subscribe(params, (value) => $params = value);
  let top;
  afterNavigate((navigation) => {
    if (navigation.type === "link")
      ;
  });
  $$unsubscribe_nav();
  $$unsubscribe_params();
  return `
<div class="absolute inset-0 flex flex-col min-w-[340px] text-ons-black text-sm md:text-base">${validate_component(CookieBanner, "CookieBanner").$$render($$result, {}, {}, {})}
  ${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  
  <div${add_attribute("class", `grow flex relative overflow-hidden`, 0)}>
    <div${add_attribute("class", `lg:hidden bg-ons-black absolute inset-0 z-20 cursor-pointer transition-opacity ${$nav.open ? "visible opacity-50" : "invisible opacity-0"}`, 0)}></div>
    
    <div${add_attribute(
    "class",
    `absolute flex inset-0 right-[3rem] sm:right-[5rem] md:right-[7rem] lg:relative lg:w-[27rem] xl:w-[32rem] transition-transform transform-gpu z-20 ${!$nav.open && $params.category ? "-translate-x-full delay-500" : ""} lg:translate-x-0 ${!$params.category ? "right-0 sm:right-0 md:right-0" : ""}`,
    0
  )}><div class="grow flex flex-col overflow-y-auto bg-ons-white"><div${add_attribute("this", top, 0)}></div>
        ${validate_component(EmbeddedHeader, "EmbeddedHeader").$$render($$result, {}, {}, {})}
        ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {})}
        ${slots.default ? slots.default({}) : ``}
        ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>
      
      ${!$params.embed ? `<div class="${[
    "lg:hidden absolute inset-0 left-[100%] my-auto h-24",
    !$params.category ? "hidden" : ""
  ].join(" ").trim()}">${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {})}</div>` : ``}</div>
    
    <div class="grow relative">${validate_component(Map, "Map").$$render($$result, {}, {}, {})}
      ${validate_component(MapControls, "MapControls").$$render($$result, {}, {}, {})}
      ${validate_component(MapTips, "MapTips").$$render($$result, {}, {}, {})}
      ${validate_component(MapLegend, "MapLegend").$$render($$result, {}, {}, {})}</div></div></div>

`;
});
const Layout_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(App, "App").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Layout, "Layout").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}`;
});
export {
  Layout_1 as default
};
