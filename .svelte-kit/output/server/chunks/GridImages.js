import { c as create_ssr_component, e as escape, f as each, d as add_attribute } from "./index.js";
const GridImages_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-14yadnn{border-radius:10px;-o-object-fit:contain;object-fit:contain;transition:300ms all}.card.svelte-14yadnn:hover{transform:scale(1.05)}",
  map: null
};
const GridImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { gridNumber } = $$props;
  let { photos } = $$props;
  if ($$props.gridNumber === void 0 && $$bindings.gridNumber && gridNumber !== void 0)
    $$bindings.gridNumber(gridNumber);
  if ($$props.photos === void 0 && $$bindings.photos && photos !== void 0)
    $$bindings.photos(photos);
  $$result.css.add(css);
  return `<div class="${"grid lg:grid-cols-" + escape(gridNumber, true) + " md:grid-cols-2 max-sm:grid-cols-1 gap-10 svelte-14yadnn"}">${each(photos, (photo) => {
    return `${!photos.url ? `<a${add_attribute("href", photo.url, 0)}${add_attribute("target", !photo.noRedirect ? "_blank" : "_self", 0)} rel="${"noreferrer"}"><img class="${"rounded card svelte-14yadnn"}"${add_attribute("src", photo.src, 0)} alt="${"img"}">
      </a>` : `<img class="${"rounded card svelte-14yadnn"}"${add_attribute("src", photo.src, 0)} alt="${"img"}">`}`;
  })}
</div>`;
});
export {
  GridImages as G
};
