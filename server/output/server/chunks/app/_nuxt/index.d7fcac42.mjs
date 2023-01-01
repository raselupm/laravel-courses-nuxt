import { useSSRContext, mergeProps } from 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs } from 'file:///Users/rasel/Documents/vue-projects/laravel-courses-nuxt/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main$1 = {
  name: "Button"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "bg-blue-500" }, _attrs))}>Test</button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "index"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_0;
  _push(`<!--[--><h2>Home</h2>`);
  _push(ssrRenderComponent(_component_Button, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.d7fcac42.mjs.map
