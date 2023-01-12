import { c as create_ssr_component } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1g55rwy{transition:300ms all}a.svelte-1g55rwy:hover{animation:svelte-1g55rwy-moveToa 300ms}@keyframes svelte-1g55rwy-moveToa{0%{transform:scale(1)}50%{transform:scale(1.1)}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"flex justify-end w-full my-10 px-10"}"><div class="${"flex justify-between max-sm:w-full max-sm:flex-col max-sm:gap-6 sm:w-full md:w-full lg:w-1/2"}"><a href="${"/"}" class="${"bold cursor-aointer svelte-1g55rwy"}">Home</a>
    <a href="${"/about"}" class="${"bold cursor-aointer svelte-1g55rwy"}">About</a>
    <a href="${"/illustrations"}" class="${"bold cursor-aointer svelte-1g55rwy"}">Illutrations</a>
    <a href="${"/designs"}" class="${"bold cursor-aointer svelte-1g55rwy"}">UI designs</a></div></div>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
