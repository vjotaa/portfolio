import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
/* empty css                      */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-7ibw65{text-decoration:none;color:#59a5d8 !important}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  new URL("../../../../static/tradersplanet_project.png", import.meta.url).href;
  new URL("../../../../static/tradersplanet_chatroom.png", import.meta.url).href;
  new URL("../../../../static/ipac_pay_web.png", import.meta.url).href;
  new URL("../../../../static/ipacpay_mobile.png", import.meta.url).href;
  let project = {};
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${project.length !== 0 ? `<div class="${"w-full px-10 mb-20"}"><div class="${"flex justify-center flex-col items-center"}"><p class="${"text-3xl text-center font-Fraunces text-blackLight mt-10"}">${escape(project.title)}</p>
      <p class="${"text-3xl text-center font-Fraunces text-blackLight mb-10"}">(${escape(project.role)})
      </p>
      <div class="${"flex justify-center"}"><div class="${"grid grid-cols-1sm:justify-items-center sm:w-full lg:w-8/12 "}"><img${add_attribute("src", project.src, 0)} class="${"rounded"}" alt="${"me"}"></div></div>
      <div class="${"lg:w-8/12 mt-10"}"><p class="${"font-Fraunces font-light"}">${escape(project.description)}</p>
        <p class="${"font-Fraunces mt-3 font-light"}">${escape(project.aboutRole)}</p>

        <p class="${"font-Fraunces mt-3 font-light"}">${escape(project.whatILearned)}</p></div>
      <p class="${"text-2xl font-Fraunces text-blackLight my-10"}">If you want to learn more about the project, you can email me at <a href="${"mailto:victorjmanrique@gmail.com"}" class="${"text-blue-500 svelte-7ibw65"}">victorjmanrique@gmail.com</a></p></div></div>` : ``}`;
});
export {
  Page as default
};
