'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = {
  name: "YedaCartPreview",
  // vue component name
  data: function data() {
    return {};
  },
  computed: {
    cartItems: function cartItems() {
      return this.$store.getters.getCartData || [];
    },
    total: function total() {
      var total = 0;
      this.$store.getters.getCartData.forEach(function (element) {
        total = total + Number(element.item.price);
      });
      return total.toFixed(2);
    }
  },
  methods: {
    checkout: function checkout() {// console.log(this.$store.getters.getCartData);
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.cartItems.length > 0 ? _c('div', {
    staticClass: "yeda-cart-preview"
  }, [_vm._ssrNode("<h4 data-v-7475935f>Cart Preview</h4> " + _vm._ssrList(_vm.cartItems, function (item, index) {
    return _vm.cartItems.length > 0 ? "<div data-v-7475935f><b data-v-7475935f>" + _vm._ssrEscape(_vm._s(item.quantity)) + "</b>" + _vm._ssrEscape("\n    " + _vm._s(item.item.name + " $" + item.item.price) + "\n  ") + "</div>" : "<!---->";
  }) + " <div data-v-7475935f><b data-v-7475935f>Total</b>" + _vm._ssrEscape("\n    $" + _vm._s(_vm.total) + "\n  ") + "</div> <button class=\"btn btn-primary\" data-v-7475935f>Checkout</button>")]) : _vm._e();
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-7475935f_0", {
    source: ".yeda-cart-preview[data-v-7475935f]{display:block;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px;border-radius:8px}.yeda-cart-preview h4[data-v-7475935f]{margin:0 0 1em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-7475935f";
/* module identifier */

var __vue_module_identifier__ = "data-v-7475935f";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);var script$1 = {
  name: "YedaMenuSection",
  // vue component name
  data: function data() {
    return {};
  },
  computed: {},
  methods: {},
  props: {
    title: String
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "yeda-menu-section"
  }, [_vm._ssrNode("<h4 data-v-bc321016>" + _vm._ssrEscape(_vm._s(_vm.title || 'Menu Section')) + "</h4> <hr data-v-bc321016>")]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-bc321016_0", {
    source: ".yeda-menu-section h4[data-v-bc321016]{margin:0 0 1em}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-bc321016";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-bc321016";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);var script$2 = {
  name: "YedaMenuItem",
  // vue component name
  data: function data() {
    return {
      menuItem: {
        name: "Regular Slice",
        foodType: "pizza"
      }
    };
  },
  computed: {},
  methods: {
    addToCart: function addToCart(item) {
      this.$store.dispatch({
        type: "addToCart",
        item: item
      });
    }
  },
  props: {
    item: Object
  }
};/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.item ? _c('div', {
    staticClass: "yeda-menu-item"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.item.imgUrl) + " alt data-v-df7bc3f2> <h4 data-v-df7bc3f2>" + _vm._ssrEscape(_vm._s(_vm.item.name || 'Menu Item')) + "</h4>" + _vm._ssrEscape("\n  price: $" + _vm._s(_vm.item.price) + "\n  ") + "<br data-v-df7bc3f2> <button class=\"btn btn-danger\" data-v-df7bc3f2>Add to Cart</button>")]) : _vm._e();
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-df7bc3f2_0", {
    source: ".yeda-menu-item[data-v-df7bc3f2]{margin:2px;width:50%}.yeda-menu-item h4[data-v-df7bc3f2]{margin:0 0 1em}img[data-v-df7bc3f2]{width:196px;height:130px;object-fit:cover;object-position:50% 50%;border-radius:8px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$2 = "data-v-df7bc3f2";
/* module identifier */

var __vue_module_identifier__$2 = "data-v-df7bc3f2";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, createInjectorSSR, undefined);var script$3 = {
  name: "YedaMenu",
  // vue component name
  data: function data() {
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
    test: function test() {
      console.log(this.$store.getters.getMenuData);
    }
  }
};/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', _vm._l(_vm.menuData, function (menuCategory, j) {
    return _vm._ssrNode("<div class=\"yeda-menu\" data-v-31f44e78>", "</div>", [menuCategory.category ? _c('yeda-menu-section', {
      attrs: {
        "title": menuCategory.category
      }
    }) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"yeda-menu--container\" data-v-31f44e78>", "</div>", _vm._l(menuCategory.items, function (menuItem, i) {
      return _c('yeda-menu-item', {
        key: 'menuItem' + i,
        attrs: {
          "item": menuItem
        }
      });
    }), 1)], 2);
  }), 0);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-31f44e78_0", {
    source: ".yeda-menu[data-v-31f44e78]{display:block;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px;border-radius:8px}.yeda-menu h4[data-v-31f44e78]{margin:0 0 1em}.yeda-menu--container[data-v-31f44e78]{display:flex}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = "data-v-31f44e78";
/* module identifier */

var __vue_module_identifier__$3 = "data-v-31f44e78";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, createInjectorSSR, undefined);var script$4 = {
  name: "YedaMenuModal",
  // vue component name
  data: function data() {
    return {};
  },
  computed: {},
  methods: {}
};/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "yeda-menu-modal"
  }, [_vm._ssrNode("<div class=\"yeda-menu-modal-content\" data-v-34525a6e><a href data-v-34525a6e><span class=\"close\" data-v-34525a6e>×</span></a> <p data-v-34525a6e>Some text in the Modal..</p></div>")]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-34525a6e_0", {
    source: ".yeda-menu-modal[data-v-34525a6e]{display:none;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.yeda-menu-modal--show[data-v-34525a6e]{display:block}.yeda-menu-modal h4[data-v-34525a6e]{margin:0 0 1em}.yeda-menu-modal-content[data-v-34525a6e]{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:55%;min-height:400px}.close[data-v-34525a6e]{color:#aaa;float:right;font-size:28px;font-weight:700}.close[data-v-34525a6e]:focus,.close[data-v-34525a6e]:hover{color:#000;text-decoration:none;cursor:pointer}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = "data-v-34525a6e";
/* module identifier */

var __vue_module_identifier__$4 = "data-v-34525a6e";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, createInjectorSSR, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,YedaCartPreview: __vue_component__,YedaMenu: __vue_component__$3,YedaMenuItem: __vue_component__$2,YedaMenuModal: __vue_component__$4,YedaMenuSection: __vue_component__$1});var install = function installYeda(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    // console.log(component);
    if (!options.store) console.log("Please provide a store!!");

    if (options.store) {
      Vue.component(componentName, component);
      options.store.registerModule("".concat(componentName), component);
    }
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.YedaCartPreview=__vue_component__;exports.YedaMenu=__vue_component__$3;exports.YedaMenuItem=__vue_component__$2;exports.YedaMenuModal=__vue_component__$4;exports.YedaMenuSection=__vue_component__$1;exports.default=plugin;