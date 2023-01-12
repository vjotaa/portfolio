import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
/* empty css                   */import { G as GridImages } from "../../../chunks/GridImages.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shots = [];
  return `<div class="${"w-full p-10"}"><p class="${"bold text-3xl text-blackLight font-Fraunces font-bold"}">Dribbble projects
  </p>
  <p class="${"text-1xl mt-10 font-Fraunces"}">I am passionate about creating user interface (UI) designs, even though I am
    still a beginner. Despite not having a lot of experience or spending a long
    time without working on any new projects, I find that designing UI is an
    enjoyable and satisfying hobby. I love the process of taking an idea and
    bringing it to life on a screen, experimenting with different layouts,
    colors and typography.
  </p>
  <div class="${"mt-20"}"><div class="${"flex items-center justify-center w-full"}">${validate_component(GridImages, "GridImages").$$render($$result, { photos: shots, gridNumber: 3 }, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
