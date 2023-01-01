import { ssrRenderAttrs } from 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/ufo/dist/index.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/radix3/dist/index.mjs';

const _sfc_main = {
  name: "about"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h2${ssrRenderAttrs(_attrs)}>About</h2>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about.bca557e8.mjs.map
