import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
/* empty css                   */import { G as GridImages } from "../../../chunks/GridImages.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [
    {
      src: new URL("../../../static/1.jpg", import.meta.url).href
    },
    {
      src: new URL("../../../static/2.jpg", import.meta.url).href
    },
    {
      src: new URL("../../../static/yazz.gif", import.meta.url).href
    },
    {
      src: new URL("../../../static/3.jpg", import.meta.url).href
    },
    {
      src: new URL("../../../static/4.jpg", import.meta.url).href
    },
    {
      src: new URL("../../../static/monster.gif", import.meta.url).href
    },
    {
      src: new URL("../../../static/room.gif", import.meta.url).href
    },
    {
      src: new URL("../../../static/5.jpg", import.meta.url).href
    },
    {
      src: new URL("../../../static/vjotaa.gif", import.meta.url).href
    },
    {
      src: new URL("../../../static/6.jpg", import.meta.url).href
    },
    {
      src: new URL("../../../static/bear.gif", import.meta.url).href
    },
    {
      src: new URL("../../../static/frog.gif", import.meta.url).href
    },
    {
      src: new URL("../../../static/meme.gif", import.meta.url).href
    }
  ];
  return `<div class="${"w-full p-10"}"><p class="${"bold text-3xl text-blackLight font-Fraunces font-bold"}">Illustrations
  </p>
  <p class="${"text-1xl mt-10 font-Fraunces"}">I love to create illustrations, even though I am still a beginner. There&#39;s
    something about the process of bringing an idea to life on paper or on a
    screen that is incredibly satisfying. I find it relaxing to sit down with a
    pencil or stylus and let my imagination take over. Even though I may not
    have the same level of skill as more experienced illustrators, I am
    constantly learning and improving with each new piece I create.
  </p>
  <div class="${"mt-20"}"><div class="${"flex items-center justify-center w-full"}">${validate_component(GridImages, "GridImages").$$render($$result, { photos: images, gridNumber: 4 }, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
