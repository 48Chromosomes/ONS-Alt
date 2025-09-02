import { c as create_ssr_component, a as subscribe, e as escape } from "../../../../../chunks/index3.js";
import { c as content } from "../../../../../chunks/content.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $content, $$unsubscribe_content;
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_content();
  return `<pre>  ${escape(JSON.stringify($content, null, 2))}
</pre>`;
});
export {
  Page as default
};
