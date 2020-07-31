var script = {
  name: "YedaCartPreview",

  // vue component name
  data() {
    return {};
  },

  computed: {
    cartItems() {
      return this.$store.getters.getCartData || [];
    },

    total() {
      let total = 0;
      this.$store.getters.getCartData.forEach(element => {
        total = total + Number(element.item.price);
      });
      return total.toFixed(2);
    }

  },
  methods: {
    checkout: function () {// console.log(this.$store.getters.getCartData);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.cartItems.length > 0 ? _c('div', {
    staticClass: "yeda-cart-preview"
  }, [_c('h4', [_vm._v("Cart Preview")]), _vm._v(" "), _vm._l(_vm.cartItems, function (item, index) {
    return _vm.cartItems.length > 0 ? _c('div', {
      key: 'cartItem' + index
    }, [_c('b', [_vm._v(_vm._s(item.quantity))]), _vm._v("\n    " + _vm._s(item.item.name + " $" + item.item.price) + "\n  ")]) : _vm._e();
  }), _vm._v(" "), _c('div', [_c('b', [_vm._v("Total")]), _vm._v("\n    $" + _vm._s(_vm.total) + "\n  ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function ($event) {
        return _vm.checkout();
      }
    }
  }, [_vm._v("Checkout")])], 2) : _vm._e();
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-7475935f_0", {
    source: ".yeda-cart-preview[data-v-7475935f]{display:block;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px;border-radius:8px}.yeda-cart-preview h4[data-v-7475935f]{margin:0 0 1em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-7475935f";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

var script$1 = {
  name: "YedaMenuSection",

  // vue component name
  data() {
    return {};
  },

  computed: {},
  methods: {},
  props: {
    title: String
  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "yeda-menu-section"
  }, [_c('h4', [_vm._v(_vm._s(_vm.title || 'Menu Section'))]), _vm._v(" "), _c('hr')]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-bc321016_0", {
    source: ".yeda-menu-section h4[data-v-bc321016]{margin:0 0 1em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-bc321016";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

var script$2 = {
  name: "YedaMenuItem",

  // vue component name
  data() {
    return {
      menuItem: {
        name: "Regular Slice",
        foodType: "pizza"
      }
    };
  },

  computed: {},
  methods: {
    addToCart: function (item) {
      this.$store.dispatch({
        type: "addToCart",
        item
      });
    }
  },
  props: {
    item: Object
  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.item ? _c('div', {
    staticClass: "yeda-menu-item"
  }, [_c('img', {
    attrs: {
      "src": _vm.item.imgUrl,
      "alt": ""
    }
  }), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.item.name || 'Menu Item'))]), _vm._v("\n  price: $" + _vm._s(_vm.item.price) + "\n  "), _c('br'), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger",
    on: {
      "click": function ($event) {
        return _vm.addToCart(_vm.item);
      }
    }
  }, [_vm._v("Add to Cart")])]) : _vm._e();
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-df7bc3f2_0", {
    source: ".yeda-menu-item[data-v-df7bc3f2]{margin:2px;width:50%}.yeda-menu-item h4[data-v-df7bc3f2]{margin:0 0 1em}img[data-v-df7bc3f2]{width:196px;height:130px;object-fit:cover;object-position:50% 50%;border-radius:8px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$2 = "data-v-df7bc3f2";
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);

var script$3 = {
  name: "YedaMenu",

  // vue component name
  data() {
    return {
      menuData: this.$store.getters.getMenuData
    };
  },

  components: {
    YedaMenuSection: __vue_component__$1,
    YedaMenuItem: __vue_component__$2
  },
  computed: {},
  methods: {
    test: function () {
      console.log(this.$store.getters.getMenuData);
    }
  }
};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', _vm._l(_vm.menuData, function (menuCategory, j) {
    return _c('div', {
      key: 'categoryIndex' + j,
      staticClass: "yeda-menu"
    }, [menuCategory.category ? _c('yeda-menu-section', {
      attrs: {
        "title": menuCategory.category
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "yeda-menu--container"
    }, _vm._l(menuCategory.items, function (menuItem, i) {
      return _c('yeda-menu-item', {
        key: 'menuItem' + i,
        attrs: {
          "item": menuItem
        }
      });
    }), 1)], 1);
  }), 0);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = function (inject) {
  if (!inject) return;
  inject("data-v-31f44e78_0", {
    source: ".yeda-menu[data-v-31f44e78]{display:block;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px;border-radius:8px}.yeda-menu h4[data-v-31f44e78]{margin:0 0 1em}.yeda-menu--container[data-v-31f44e78]{display:flex}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$3 = "data-v-31f44e78";
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, createInjector, undefined, undefined);

var script$4 = {
  name: "YedaMenuModal",

  // vue component name
  data() {
    return {};
  },

  computed: {},
  methods: {}
};

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm._m(0);
};

var __vue_staticRenderFns__$4 = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "yeda-menu-modal"
  }, [_c('div', {
    staticClass: "yeda-menu-modal-content"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('span', {
    staticClass: "close"
  }, [_vm._v("×")])]), _vm._v(" "), _c('p', [_vm._v("Some text in the Modal..")])])]);
}];
/* style */

const __vue_inject_styles__$4 = function (inject) {
  if (!inject) return;
  inject("data-v-34525a6e_0", {
    source: ".yeda-menu-modal[data-v-34525a6e]{display:none;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.yeda-menu-modal--show[data-v-34525a6e]{display:block}.yeda-menu-modal h4[data-v-34525a6e]{margin:0 0 1em}.yeda-menu-modal-content[data-v-34525a6e]{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:55%;min-height:400px}.close[data-v-34525a6e]{color:#aaa;float:right;font-size:28px;font-weight:700}.close[data-v-34525a6e]:focus,.close[data-v-34525a6e]:hover{color:#000;text-decoration:none;cursor:pointer}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$4 = "data-v-34525a6e";
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, createInjector, undefined, undefined);

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  YedaCartPreview: __vue_component__,
  YedaMenu: __vue_component__$3,
  YedaMenuItem: __vue_component__$2,
  YedaMenuModal: __vue_component__$4,
  YedaMenuSection: __vue_component__$1
});

// Import vue components

const install = function installYeda(Vue, options = {}) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    // console.log(component);
    if (!options.store) console.log("Please provide a store!!");

    if (options.store) {
      Vue.component(componentName, component);
      options.store.registerModule(`${componentName}`, component);
    }
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found

export default plugin;
export { __vue_component__ as YedaCartPreview, __vue_component__$3 as YedaMenu, __vue_component__$2 as YedaMenuItem, __vue_component__$4 as YedaMenuModal, __vue_component__$1 as YedaMenuSection };
