/*! Version= 2.0.0 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Clooca", [], factory);
	else if(typeof exports === 'object')
		exports["Clooca"] = factory();
	else
		root["Clooca"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*! Version= 2.0.0 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define("CloocaDiagramEditor", [], factory);else if (typeof exports === 'object') exports["CloocaDiagramEditor"] = factory();else root["CloocaDiagramEditor"] = factory();
})(this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // identity function for calling harmony imports with the correct context
      /******/__webpack_require__.i = function (value) {
        return value;
      };
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 10);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      class Element {

        constructor(el) {
          this.el = el;
        }

        getEl() {
          return this.el;
        }

        appendChild(el) {
          this.el.appendChild(el.getEl());
        }

        removeChild(el) {
          this.el.removeChild(el.getEl());
        }

        attr(options) {
          this.setAttr(options);
        }

        setAttr(options) {
          //el.setAttributeNS(null, 'transform', 'translate('+0+','+0+')')
          Object.keys(options).forEach(key => {
            this.el.setAttributeNS(null, key, options[key]);
          });
          return this;
        }

        setStyle(options) {
          this.el.style = options;
        }

        className(className) {
          this.el.setAttributeNS(null, 'class', className);
        }

        transform(translate) {
          this.el.setAttributeNS(null, 'transform', translate);
        }

        getTextContent(text) {
          return this.el.textContent;
        }

        setTextContent(text) {
          this.el.textContent = text;
        }

        setInnerHTML(html) {
          this.el.innerHTML = html;
        }

        click(onClick) {
          this.el.addEventListener('click', e => {
            onClick(e);
          });
        }
      }

      class DraggableElement extends Element {

        mouseMoveHandler(onDragging, e) {
          if (e.changedTouches && e.changedTouches.length > 0) {
            e = e.changedTouches[0];
          }
          const x = e.clientX;
          const y = e.clientY;
          if (this.isDragging) {
            const transform = this.el.getAttributeNS(null, 'transform');
            onDragging(x - this.draggingX, y - this.draggingY, x, y, e);
          }
        }

        mouseDownHandler(onDragging, onStart, onEnd, e) {
          if (e.changedTouches && e.changedTouches.length > 0) {
            e = e.changedTouches[0];
          }
          this.isDragging = true;
          this.draggingX = e.clientX;
          this.draggingY = e.clientY;
          onStart(this.draggingX, this.draggingY);
          window.addEventListener('mousemove', this.mouseMoveHandler.bind(this, onDragging), false);
          window.addEventListener('touchmove', this.mouseMoveHandler.bind(this, onDragging), false);
          window.addEventListener('mouseup', this.mouseUpHandler.bind(this, onDragging, onEnd), false);
          window.addEventListener('touchend', this.mouseUpHandler.bind(this, onDragging, onEnd), false);
        }

        mouseUpHandler(onDragging, onEnd, e) {
          if (this.isDragging) {
            this.isDragging = false;
            onEnd(e);
            window.removeEventListener('mousemove', this.mouseMoveHandler.bind(this, onDragging), false);
            window.removeEventListener('touchmove', this.mouseMoveHandler.bind(this, onDragging), false);
            window.removeEventListener('mouseup', this.mouseUpHandler.bind(this, onEnd), false);
            window.removeEventListener('touchend', this.mouseUpHandler.bind(this, onEnd), false);
          }
        }

        drag(onDragging, onStart, onEnd) {
          //dammy dragging elementが必要？
          this.el.addEventListener('mousedown', this.mouseDownHandler.bind(this, onDragging, onStart, onEnd), false);
          this.el.addEventListener('touchstart', this.mouseDownHandler.bind(this, onDragging, onStart, onEnd), false);
        }

      }

      const createElement = function (type, _options, style) {
        let options = _options || {};
        const el = window.document.createElementNS('http://www.w3.org/2000/svg', type);
        //el.setAttributeNS(null, 'transform', 'translate('+0+','+0+')')
        Object.keys(options).forEach(key => {
          el.setAttributeNS(null, key, options[key]);
        });
        if (style) {
          //el.style = style
        }
        return new Element(el);
      };

      const createDraggableElement = function (type, options, style) {
        const el = window.document.createElementNS('http://www.w3.org/2000/svg', type);
        //el.setAttributeNS(null, 'transform', 'translate('+0+','+0+')')
        Object.keys(options).forEach(key => {
          el.setAttributeNS(null, key, options[key]);
        });
        if (style) {
          el.style = style;
        }
        return new DraggableElement(el);
      };

      const SVGUtil = {
        Element,
        DraggableElement,
        createElement,
        createDraggableElement
      };

      /* harmony default export */__webpack_exports__["a"] = SVGUtil;

      /***/
    },
    /* 1 */
    /***/function (module, exports) {

      // Copyright Joyent, Inc. and other Node contributors.
      //
      // Permission is hereby granted, free of charge, to any person obtaining a
      // copy of this software and associated documentation files (the
      // "Software"), to deal in the Software without restriction, including
      // without limitation the rights to use, copy, modify, merge, publish,
      // distribute, sublicense, and/or sell copies of the Software, and to permit
      // persons to whom the Software is furnished to do so, subject to the
      // following conditions:
      //
      // The above copyright notice and this permission notice shall be included
      // in all copies or substantial portions of the Software.
      //
      // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
      // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
      // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
      // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
      // USE OR OTHER DEALINGS IN THE SOFTWARE.

      function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
      }
      module.exports = EventEmitter;

      // Backwards-compat with node 0.10.x
      EventEmitter.EventEmitter = EventEmitter;

      EventEmitter.prototype._events = undefined;
      EventEmitter.prototype._maxListeners = undefined;

      // By default EventEmitters will print a warning if more than 10 listeners are
      // added to it. This is a useful default which helps finding memory leaks.
      EventEmitter.defaultMaxListeners = 10;

      // Obviously not all Emitters should be limited to 10. This function allows
      // that to be increased. Set to zero for unlimited.
      EventEmitter.prototype.setMaxListeners = function (n) {
        if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
        this._maxListeners = n;
        return this;
      };

      EventEmitter.prototype.emit = function (type) {
        var er, handler, len, args, i, listeners;

        if (!this._events) this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === 'error') {
          if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];
            if (er instanceof Error) {
              throw er; // Unhandled 'error' event
            } else {
              // At least give some kind of context to the user
              var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
              err.context = er;
              throw err;
            }
          }
        }

        handler = this._events[type];

        if (isUndefined(handler)) return false;

        if (isFunction(handler)) {
          switch (arguments.length) {
            // fast cases
            case 1:
              handler.call(this);
              break;
            case 2:
              handler.call(this, arguments[1]);
              break;
            case 3:
              handler.call(this, arguments[1], arguments[2]);
              break;
            // slower
            default:
              args = Array.prototype.slice.call(arguments, 1);
              handler.apply(this, args);
          }
        } else if (isObject(handler)) {
          args = Array.prototype.slice.call(arguments, 1);
          listeners = handler.slice();
          len = listeners.length;
          for (i = 0; i < len; i++) listeners[i].apply(this, args);
        }

        return true;
      };

      EventEmitter.prototype.addListener = function (type, listener) {
        var m;

        if (!isFunction(listener)) throw TypeError('listener must be a function');

        if (!this._events) this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

        if (!this._events[type])
          // Optimize the case of one listener. Don't need the extra array object.
          this._events[type] = listener;else if (isObject(this._events[type]))
          // If we've already got an array, just append.
          this._events[type].push(listener);else
          // Adding the second element, need to change to array.
          this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
          if (!isUndefined(this._maxListeners)) {
            m = this._maxListeners;
          } else {
            m = EventEmitter.defaultMaxListeners;
          }

          if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
            if (typeof console.trace === 'function') {
              // not supported in IE 10
              console.trace();
            }
          }
        }

        return this;
      };

      EventEmitter.prototype.on = EventEmitter.prototype.addListener;

      EventEmitter.prototype.once = function (type, listener) {
        if (!isFunction(listener)) throw TypeError('listener must be a function');

        var fired = false;

        function g() {
          this.removeListener(type, g);

          if (!fired) {
            fired = true;
            listener.apply(this, arguments);
          }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
      };

      // emits a 'removeListener' event iff the listener was removed
      EventEmitter.prototype.removeListener = function (type, listener) {
        var list, position, length, i;

        if (!isFunction(listener)) throw TypeError('listener must be a function');

        if (!this._events || !this._events[type]) return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener || isFunction(list.listener) && list.listener === listener) {
          delete this._events[type];
          if (this._events.removeListener) this.emit('removeListener', type, listener);
        } else if (isObject(list)) {
          for (i = length; i-- > 0;) {
            if (list[i] === listener || list[i].listener && list[i].listener === listener) {
              position = i;
              break;
            }
          }

          if (position < 0) return this;

          if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
          } else {
            list.splice(position, 1);
          }

          if (this._events.removeListener) this.emit('removeListener', type, listener);
        }

        return this;
      };

      EventEmitter.prototype.removeAllListeners = function (type) {
        var key, listeners;

        if (!this._events) return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
          if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          for (key in this._events) {
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = {};
          return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
          this.removeListener(type, listeners);
        } else if (listeners) {
          // LIFO order
          while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
      };

      EventEmitter.prototype.listeners = function (type) {
        var ret;
        if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
        return ret;
      };

      EventEmitter.prototype.listenerCount = function (type) {
        if (this._events) {
          var evlistener = this._events[type];

          if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
        }
        return 0;
      };

      EventEmitter.listenerCount = function (emitter, type) {
        return emitter.listenerCount(type);
      };

      function isFunction(arg) {
        return typeof arg === 'function';
      }

      function isNumber(arg) {
        return typeof arg === 'number';
      }

      function isObject(arg) {
        return typeof arg === 'object' && arg !== null;
      }

      function isUndefined(arg) {
        return arg === void 0;
      }

      /***/
    },
    /* 2 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__ = __webpack_require__(0);

      class Property extends __WEBPACK_IMPORTED_MODULE_0_events__["EventEmitter"] {

        constructor(options) {
          super();
          this.gElement = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createDraggableElement('g', {});
          this.gElement.transform("translate(0,20)");
          //this.clearText()
          this.fontSize = 14;
          this.options = options;
        }

        clearText() {
          if (this.gElement2) this.gElement.removeChild(this.gElement2);
          this.gElement2 = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createDraggableElement('g', {
            'font-family': "sans-serif",
            'font-size': this.fontSize
          });
          this.gElement.appendChild(this.gElement2);
          /*
          this.textElement = SVGUtil.createDraggableElement('text', {
            "y": 0,
            "fill": "#333"
          })
          this.gElement2.appendChild(this.textElement)
          this.textElement.click(() => {
            console.log('click')
            this.showTextarea()
          })
          */
        }

        updateText(text) {
          this.currentText = text;
          this.clearText();
          let lines = text.split("\n");
          let elements = lines.map((line, i) => {
            let textElement = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createDraggableElement('text', {
              "x": 2,
              "y": 20 * i,
              "fill": "#333"
            });
            textElement.setTextContent(line);
            textElement.click(() => {
              console.log('click');
              this.showTextarea();
            });
            this.gElement2.appendChild(textElement);
            return textElement;
          });
        }

        showTextarea() {
          if (this.textAreaDisplayed) return;
          this.textAreaDisplayed = true;
          this.foreignObject = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createElement('foreignObject', {
            width: this.options.node.getWidth(),
            height: this.options.node.getHeight(),
            y: 0
            //requiredExtensions: "http://www.w3.org/1999/xhtml"
          });
          const textArea = document.createElement('textarea');
          textArea.value = this.currentText;
          textArea.style['font-size'] = this.fontSize;
          textArea.style['margin-top'] = '0px';
          textArea.style['width'] = this.options.node.getWidth() + 'px';
          //textArea.style['height'] = this.options.node.getHeight() + 'px'

          this.foreignObject.el.appendChild(textArea);
          this.options.editGroup.appendChild(this.foreignObject);
          textArea.addEventListener('change', () => {
            this.updateText(textArea.value);
            this.hideTextarea();
            this.textAreaDisplayed = false;
            this.emit('change', this);
          });
          textArea.addEventListener('blur', () => {
            this.updateText(textArea.value);
            this.hideTextarea();
            this.textAreaDisplayed = false;
          });
          textArea.addEventListener('keydown', () => {
            textArea.rows = textArea.value.split('\n').length + 1;
          });
          textArea.rows = textArea.value.split('\n').length + 1;
        }

        hideTextarea() {
          if (this.foreignObject) this.options.editGroup.removeChild(this.foreignObject);
          this.foreignObject = null;
        }

        getHeight() {
          return this.currentText.split("\n").length * 20;
        }

        getEl() {
          return this.gElement;
        }

      }
      /* harmony export (immutable) */__webpack_exports__["a"] = Property;

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__(11);
      if (typeof content === 'string') content = [[module.i, content, '']];
      // Prepare cssTransformation
      var transform;

      var options = {};
      options.transform = transform;
      // add the styles to the DOM
      var update = __webpack_require__(13)(content, options);
      if (content.locals) module.exports = content.locals;
      // Hot Module Replacement
      if (false) {
        // When the styles change, update the <style> tags
        if (!content.locals) {
          module.hot.accept("!!../../node_modules/css-loader/index.js?modules!./icon.css", function () {
            var newContent = require("!!../../node_modules/css-loader/index.js?modules!./icon.css");
            if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
            update(newContent);
          });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function () {
          update();
        });
      }

      /***/
    },
    /* 4 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(9);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__edge__ = __webpack_require__(8);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__ui_svg_util__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3_events__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_events__);

      class Diagram extends __WEBPACK_IMPORTED_MODULE_3_events__["EventEmitter"] {

        constructor(rootElement) {
          super();
          this.base = __WEBPACK_IMPORTED_MODULE_2__ui_svg_util__["a" /* default */].createElement('g', {});
          rootElement.appendChild(this.base.getEl());
          this.nodes = {};
          this.connections = {};
        }

        getGroup() {
          return this.base;
        }

        addNode(id, bound, options) {

          var node = new __WEBPACK_IMPORTED_MODULE_0__node__["a" /* default */](id, this, bound, options);
          node.on('click', () => {
            this.emit("nodeClicked", { node: node });
          });
          this.nodes[id] = node;
          return node;
        }

        removeNode(id) {
          delete this.nodes[id];
        }

        updateNode(id, bound) {
          var self = this;
          this.nodes[id].setPos(bound.x, bound.y);
          this.nodes[id].setSize(bound.w, bound.h);
        }

        addConnection(id, start, end) {

          var conn = new __WEBPACK_IMPORTED_MODULE_1__edge__["a" /* default */](id, this.snap, this, start, end);
          conn.on('click', () => {
            this.emit("connClicked", { conn: conn });
          });
          this.connections[id] = conn;
        }

        updateConnection(id, start, end) {
          var self = this;
          this.connections[id].setStartPos(start.x, start.y);
          this.connections[id].setEndPos(end.x, end.y);
        }

        getNode(id) {
          return this.nodes[id];
        }

      }
      /* harmony export (immutable) */__webpack_exports__["a"] = Diagram;

      /***/
    },
    /* 5 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__svg_util__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__icon_css__ = __webpack_require__(3);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__icon_css__);

      const CursorRange = 6;
      const CursorOffset = 10;

      const MODE_NORMAL = 0;
      const MODE_RUBBERBAND = 1;

      class Selector extends __WEBPACK_IMPORTED_MODULE_0_events__["EventEmitter"] {
        constructor() {
          super();
          this.mode = MODE_NORMAL;
          this.pos = {
            x: 0,
            y: 0
          };
          this.target = null;
          this.listeners = {
            changed: [],
            removed: []
          };
          const start = () => {};
          const end = () => {
            this.emit('change', this.target);
            this.setTarget(this.target);
          };
          const onRubberBundStart = () => {
            console.log("start");
          };
          const onRubberBundEnd = e => {
            console.log(e.target);
            const startId = this.target.getId();
            const endId = e.target.dataset.cid;
            this.emit('rubberbundend', {
              startId: startId,
              endId: endId,
              event: event
            });
          };

          this.group = __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createElement('g', {});
          const baseAttrs = {
            fill: "#3030ff",
            stroke: "#fff",
            strokeWidth: 3,
            r: CursorRange
          };
          this.cursor = {
            n: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('circle', Object.assign(baseAttrs, { x: 50, y: 0 })),
            s: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('circle', Object.assign(baseAttrs, { x: 50, y: 100 })),
            w: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('circle', Object.assign(baseAttrs, { x: 0, y: 50 })),
            e: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('circle', Object.assign(baseAttrs, { x: 100, y: 50 })),
            nw: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('circle', Object.assign(baseAttrs, { x: 0, y: 0 })),
            ne: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('circle', Object.assign(baseAttrs, { x: 100, y: 0 })),
            sw: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('circle', Object.assign(baseAttrs, { x: 0, y: 100 })),
            se: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('circle', Object.assign(baseAttrs, { x: 100, y: 100 })),
            remove: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('g', Object.assign(baseAttrs, { x: 120, y: 50 })),
            conn: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('g', Object.assign(baseAttrs, { x: 146, y: 50 })),
            edit: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('g', Object.assign(baseAttrs, { x: 172, y: 50 }))
          };

          {
            const foreignObject = __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createElement('foreignObject', {
              x: 6,
              y: -40,
              width: 20,
              height: 20
            });
            const div = document.createElement('div');
            foreignObject.el.appendChild(div);
            div.classList.add(__WEBPACK_IMPORTED_MODULE_2__icon_css___default.a['removeIcon']);
            this.cursor.remove.appendChild(foreignObject);
          }
          {
            const foreignObject = __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createElement('foreignObject', {
              x: 32,
              y: -40,
              width: 20,
              height: 20
            });
            const div = document.createElement('div');
            foreignObject.el.appendChild(div);
            div.classList.add(__WEBPACK_IMPORTED_MODULE_2__icon_css___default.a['connIcon']);
            this.cursor.conn.appendChild(foreignObject);
          }
          {
            const foreignObject = __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createElement('foreignObject', {
              x: 58,
              y: -40,
              width: 20,
              height: 20
            });
            const div = document.createElement('div');
            foreignObject.el.appendChild(div);
            div.classList.add(__WEBPACK_IMPORTED_MODULE_2__icon_css___default.a['editIcon']);
            this.cursor.edit.appendChild(foreignObject);
          }
          for (var key in this.cursor) {
            this.group.appendChild(this.cursor[key]);
          }

          this.cursor["n"].drag((dx, dy, x, y, e) => {
            this.target.setPos(this.target_bound.x, this.target_bound.y + dy);
            this.target.setSize(this.target_bound.w, this.target_bound.h - dy);
            this.refresh();
          }, start, end);
          this.cursor["s"].drag((dx, dy, x, y, e) => {
            this.target.setSize(this.target_bound.w, this.target_bound.h + dy);
            this.refresh();
          }, start, end);
          this.cursor["w"].drag((dx, dy, x, y, e) => {
            this.target.setPos(this.target_bound.x + dx, this.target_bound.y);
            this.target.setSize(this.target_bound.w - dx, this.target_bound.h);
            this.refresh();
          }, start, end);
          this.cursor["e"].drag((dx, dy, x, y, e) => {
            this.target.setSize(this.target_bound.w + dx, this.target_bound.h);
            this.refresh();
          }, start, end);
          this.cursor["nw"].drag((dx, dy, x, y, e) => {
            this.target.setPos(this.target_bound.x + dx, this.target_bound.y + dy);
            this.target.setSize(this.target_bound.w - dx, this.target_bound.h - dy);
            this.refresh();
          }, start, end);
          this.cursor["ne"].drag((dx, dy, x, y, e) => {
            this.target.setPos(this.target_bound.x, this.target_bound.y + dy);
            this.target.setSize(this.target_bound.w + dx, this.target_bound.h - dy);
            this.refresh();
          }, start, end);
          this.cursor["sw"].drag((dx, dy, x, y, e) => {
            this.target.setPos(this.target_bound.x + dx, this.target_bound.y);
            this.target.setSize(this.target_bound.w - dx, this.target_bound.h + dy);
            this.refresh();
          }, start, end);
          this.cursor["se"].drag((dx, dy, x, y, e) => {
            this.target.setSize(this.target_bound.w + dx, this.target_bound.h + dy);
            this.refresh();
          }, start, end);
          this.cursor["remove"].click(() => {
            this.onRemove();
            this.clear();
          }, start, end);
          this.cursor["conn"].drag(() => {
            this.onConn();
            this.clear();
          }, onRubberBundStart, onRubberBundEnd);
          this.cursor["edit"].click(() => {
            this.onEdit();
            this.clear();
          }, start, end);

          this.clear();
        }

        clear() {
          //this.target = null;
          this.group.attr({
            visibility: "hidden"
          });
        }

        setTarget(node) {

          this.group.attr({
            visibility: "visible"
          });
          if (this.target) this.target.removeListener("move", this.refresh.bind(this));
          this.target = node;
          this.target_bound = {
            x: this.target.getBound().x,
            y: this.target.getBound().y,
            w: this.target.getBound().w,
            h: this.target.getBound().h
          };
          this.pos.x = node.getX();
          this.pos.y = node.getY();
          this.refresh();
          this.target.on('move', this.refresh.bind(this));
        }

        getEl() {
          return this.group.getEl();
        }

        refresh() {

          if (!this.target) return;
          this.group.transform("translate(" + this.target.getBound().x + "," + this.target.getBound().y + ")");
          this.cursor.n.attr({
            cx: this.target.getBound().w / 2,
            cy: -CursorOffset
          });
          this.cursor.s.attr({
            cx: this.target.getBound().w / 2,
            cy: this.target.getBound().h + CursorOffset
          });
          this.cursor.w.attr({
            cx: -CursorOffset,
            cy: this.target.getBound().h / 2
          });
          this.cursor.e.attr({
            cx: this.target.getBound().w + CursorOffset,
            cy: this.target.getBound().h / 2
          });
          this.cursor.nw.attr({
            cx: -CursorOffset,
            cy: -CursorOffset
          });
          this.cursor.ne.attr({
            cx: this.target.getBound().w + CursorOffset,
            cy: -CursorOffset
          });
          this.cursor.sw.attr({
            cx: -CursorOffset,
            cy: this.target.getBound().h + CursorOffset
          });
          this.cursor.se.attr({
            cx: this.target.getBound().w + CursorOffset,
            cy: this.target.getBound().h + CursorOffset
          });
        }

        onRemove() {
          this.emit('remove', this.target);
          this.target.removeSelf();
        }

        onConn() {
          this.mode = MODE_RUBBERBAND;
        }

        onEdit() {
          this.target.edit();
        }

      }
      /* harmony export (immutable) */__webpack_exports__["a"] = Selector;

      class ConnectionSelector extends __WEBPACK_IMPORTED_MODULE_0_events__["EventEmitter"] {
        constructor() {
          super();
          this.pos = {
            x: 0,
            y: 0
          };
          this.target = null;
          this.listeners = {
            changed: []
          };
          function onstart() {}
          const onend = () => {
            this.fireOnChanged(this.target);
            this.setTarget(this.target);
          };

          this.group = __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createElement('g', {});
          const baseAttrs = {
            fill: "#3030ff",
            stroke: "#fff",
            strokeWidth: 3
          };
          this.cursor = {
            start: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('circle', Object.assign(baseAttrs, { x: 50, y: 0, r: CursorRange })),
            end: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('circle', Object.assign(baseAttrs, { x: 50, y: 100, r: CursorRange })),
            remove: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('g', Object.assign(baseAttrs, { x: 120, y: 50 })),
            edit: __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createDraggableElement('g', Object.assign(baseAttrs, { x: 172, y: 50 }))
          };
          {
            const foreignObject = __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createElement('foreignObject', {
              x: 6,
              y: -40,
              width: 20,
              height: 20
            });
            const div = document.createElement('div');
            foreignObject.el.appendChild(div);
            div.classList.add(__WEBPACK_IMPORTED_MODULE_2__icon_css___default.a['removeIcon']);
            this.cursor.remove.appendChild(foreignObject);
          }
          {
            const foreignObject = __WEBPACK_IMPORTED_MODULE_1__svg_util__["a" /* default */].createElement('foreignObject', {
              x: 58,
              y: -40,
              width: 20,
              height: 20
            });
            const div = document.createElement('div');
            foreignObject.el.appendChild(div);
            div.classList.add(__WEBPACK_IMPORTED_MODULE_2__icon_css___default.a['editIcon']);
            this.cursor.edit.appendChild(foreignObject);
          }

          for (var key in this.cursor) {
            this.group.appendChild(this.cursor[key]);
          }

          /*
          this.cursor["start"].drag((dx, dy, x, y, e) => {
          this.target.setStartPos(this.target_start.x + dx, this.target_start.y + dy);
          this.refresh();
          }, onstart, onend);
          this.cursor["end"].drag((dx, dy, x, y, e)  => {
          this.target.setEndPos(this.target_end.x + dx, this.target_end.y + dy);
          this.refresh();
          }, onstart, onend);
          */
          this.cursor["edit"].click(() => {
            this.onEdit();
            this.clear();
          });
          this.clear();
        }

        getEl() {
          return this.group.getEl();
        }

        clear() {

          this.target = null;
          this.group.attr({
            visibility: "hidden"
          });
        }

        onEdit() {
          this.target.edit();
        }

        setTarget(connection) {
          console.log('setTarget', connection);
          this.group.attr({
            visibility: "visible"
          });
          if (this.target) this.target.removeListener("move");
          this.target = connection;
          this.target_start = {
            x: this.target.getStartPos().x,
            y: this.target.getStartPos().y
          };
          this.target_end = {
            x: this.target.getEndPos().x,
            y: this.target.getEndPos().y
          };
          this.refresh();
          this.target.on('move', function () {
            this.refresh();
          });
        }

        refresh() {

          if (!this.target) return;
          const xx = (this.target.getStartPos().x + this.target.getEndPos().x) / 2;
          const yy = (this.target.getStartPos().y + this.target.getEndPos().y) / 2;
          this.cursor.remove.transform("translate(" + (xx - 20) + "," + yy + ")");
          this.cursor.edit.transform("translate(" + (xx - 20) + "," + yy + ")");
          this.cursor.start.attr({
            cx: this.target.getStartPos().x,
            cy: this.target.getStartPos().y
          });
          this.cursor.end.attr({
            cx: this.target.getEndPos().x,
            cy: this.target.getEndPos().y
          });
        }

      }
      /* harmony export (immutable) */__webpack_exports__["b"] = ConnectionSelector;

      /***/
    },
    /* 6 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__svg_util__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__icon_css__ = __webpack_require__(3);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__icon_css__);

      class ToolPalletUI {
        constructor() {
          this.el = __WEBPACK_IMPORTED_MODULE_0__svg_util__["a" /* default */].createElement('g', {
            transform: 'translate(' + 0 + ',' + 0 + ')'

          });
          const rect = __WEBPACK_IMPORTED_MODULE_0__svg_util__["a" /* default */].createElement('rect', {
            x: 0,
            y: 0,
            width: 240,
            height: 80,
            stroke: '#000',
            fill: '#fff'
          }, {
            'stroke-width': 1
          });
          this.el.appendChild(rect);
          this.length = 0;
          this.items = [];
        }

        addItem(name, className, shape) {
          const group = __WEBPACK_IMPORTED_MODULE_0__svg_util__["a" /* default */].createElement('g', {});
          const rect = __WEBPACK_IMPORTED_MODULE_0__svg_util__["a" /* default */].createElement('rect', {
            x: 0,
            y: 20,
            width: 40,
            height: 40,
            fill: '#555',
            opacity: 0.5,
            'stroke-width': 2
          });
          group.appendChild(rect);

          if (shape) {
            const inner = __WEBPACK_IMPORTED_MODULE_0__svg_util__["a" /* default */].createElement('g', {});
            group.appendChild(inner);
            inner.setInnerHTML(shape.svg);
            inner.transform('scale(' + 40 / 120 + ',' + 40 / 120 + ')');
          } else {
            const foreignObject = __WEBPACK_IMPORTED_MODULE_0__svg_util__["a" /* default */].createElement('foreignObject', {
              x: 0,
              y: 20,
              width: 40,
              height: 40
              //stroke: '#000',
              //fill: `url(${selectIcon})`
              //opacity: 0,
              //"background-image": `url(${selectIcon})`
            });
            const div = document.createElement('div');
            foreignObject.el.appendChild(div);
            div.classList.add(__WEBPACK_IMPORTED_MODULE_1__icon_css___default.a[className || 'selectIcon']);
            group.appendChild(foreignObject);
          }

          group.click(() => {
            this.selectedToolName = name;
            this.selectedShape = shape;
            this._select(rect);
          });
          this.items.push(rect);
          this._select(rect);
          /*
          const text = SVGUtil.createElement('text', {
            x: 0,
            y: 40,
            text: name
          })
          text.el.textContent = name
          */
          group.transform('translate(' + this.items.length * 42 + ',0)');
          //group.appendChild(text)
          this.el.appendChild(group);
          this.selectedToolName = name;
        }

        _select(target) {
          this.items.forEach(item => {
            item.attr({
              stroke: '#333'
            });
          });
          target.attr({
            stroke: '#55e'
          });
        }

        getSelectedToolName() {
          return this.selectedToolName;
        }

        getSelectedShape() {
          return this.selectedShape;
        }

        getEl() {
          return this.el.getEl();
        }
      }
      /* harmony export (immutable) */__webpack_exports__["a"] = ToolPalletUI;

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      //     uuid.js
      //
      //     Copyright (c) 2010-2012 Robert Kieffer
      //     MIT License - http://opensource.org/licenses/mit-license.php

      // Unique ID creation requires a high quality random # generator.  We feature
      // detect to determine the best RNG source, normalizing to a function that
      // returns 128-bits of randomness, since that's what's usually required
      var _rng = __webpack_require__(20);

      // Maps for number <-> hex string conversion
      var _byteToHex = [];
      var _hexToByte = {};
      for (var i = 0; i < 256; i++) {
        _byteToHex[i] = (i + 0x100).toString(16).substr(1);
        _hexToByte[_byteToHex[i]] = i;
      }

      // **`parse()` - Parse a UUID into it's component bytes**
      function parse(s, buf, offset) {
        var i = buf && offset || 0,
            ii = 0;

        buf = buf || [];
        s.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct) {
          if (ii < 16) {
            // Don't overflow!
            buf[i + ii++] = _hexToByte[oct];
          }
        });

        // Zero out remaining bytes if string was short
        while (ii < 16) {
          buf[i + ii++] = 0;
        }

        return buf;
      }

      // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
      function unparse(buf, offset) {
        var i = offset || 0,
            bth = _byteToHex;
        return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
      }

      // **`v1()` - Generate time-based UUID**
      //
      // Inspired by https://github.com/LiosK/UUID.js
      // and http://docs.python.org/library/uuid.html

      // random #'s we need to init node and clockseq
      var _seedBytes = _rng();

      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      var _nodeId = [_seedBytes[0] | 0x01, _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]];

      // Per 4.2.2, randomize (14 bit) clockseq
      var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

      // Previous uuid creation time
      var _lastMSecs = 0,
          _lastNSecs = 0;

      // See https://github.com/broofa/node-uuid for API details
      function v1(options, buf, offset) {
        var i = buf && offset || 0;
        var b = buf || [];

        options = options || {};

        var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

        // UUID timestamps are 100 nano-second units since the Gregorian epoch,
        // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
        // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
        // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
        var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

        // Per 4.2.1.2, use count of uuid's generated during the current clock
        // cycle to simulate higher resolution clock
        var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

        // Time since last uuid creation (in msecs)
        var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;

        // Per 4.2.1.2, Bump clockseq on clock regression
        if (dt < 0 && options.clockseq === undefined) {
          clockseq = clockseq + 1 & 0x3fff;
        }

        // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
        // time interval
        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
          nsecs = 0;
        }

        // Per 4.2.1.2 Throw error if too many uuids are requested
        if (nsecs >= 10000) {
          throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
        }

        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq;

        // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
        msecs += 12219292800000;

        // `time_low`
        var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
        b[i++] = tl >>> 24 & 0xff;
        b[i++] = tl >>> 16 & 0xff;
        b[i++] = tl >>> 8 & 0xff;
        b[i++] = tl & 0xff;

        // `time_mid`
        var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
        b[i++] = tmh >>> 8 & 0xff;
        b[i++] = tmh & 0xff;

        // `time_high_and_version`
        b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
        b[i++] = tmh >>> 16 & 0xff;

        // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
        b[i++] = clockseq >>> 8 | 0x80;

        // `clock_seq_low`
        b[i++] = clockseq & 0xff;

        // `node`
        var node = options.node || _nodeId;
        for (var n = 0; n < 6; n++) {
          b[i + n] = node[n];
        }

        return buf ? buf : unparse(b);
      }

      // **`v4()` - Generate random UUID**

      // See https://github.com/broofa/node-uuid for API details
      function v4(options, buf, offset) {
        // Deprecated - 'format' argument, as supported in v1.2
        var i = buf && offset || 0;

        if (typeof options == 'string') {
          buf = options == 'binary' ? new Array(16) : null;
          options = null;
        }
        options = options || {};

        var rnds = options.random || (options.rng || _rng)();

        // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
        rnds[6] = rnds[6] & 0x0f | 0x40;
        rnds[8] = rnds[8] & 0x3f | 0x80;

        // Copy bytes to buffer, if provided
        if (buf) {
          for (var ii = 0; ii < 16; ii++) {
            buf[i + ii] = rnds[ii];
          }
        }

        return buf || unparse(rnds);
      }

      // Export public API
      var uuid = v4;
      uuid.v1 = v1;
      uuid.v4 = v4;
      uuid.parse = parse;
      uuid.unparse = unparse;

      module.exports = uuid;

      /***/
    },
    /* 8 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__property__ = __webpack_require__(2);

      class Connection extends __WEBPACK_IMPORTED_MODULE_0_events__["EventEmitter"] {
        constructor(id, s, diagram, start, end) {
          super();
          this.id = id;
          this.start = {};
          this.end = {};
          this.points = [{}, {}];

          this.group = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createElement('g');
          this.propertyGroup = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createElement('g');
          this.editGroup = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createElement('g');

          this.elem = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createElement('path', {
            d: "M0 0L0 0",
            fill: "none",
            stroke: "#333",
            strokeWidth: 4
          });

          this.coll = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createDraggableElement('path', {
            d: "M0 0L0 0",
            visibility: "hidden",
            "pointer-events": "stroke",
            'stroke-width': 20
          });

          this.coll.className("node");

          this.group.appendChild(this.elem);
          this.group.appendChild(this.propertyGroup);
          this.group.appendChild(this.coll);
          this.group.appendChild(this.editGroup);
          diagram.getGroup().appendChild(this.group);

          this.setStartPos(start, end);
          this.setEndPos(start, end);

          start.addConnection(this);
          end.addConnection(this);
          start.on('move', () => {
            this.setStartPos(start, end);
            this.setEndPos(start, end);
            this.refresh();
          });
          end.on('move', () => {
            this.setStartPos(start, end);
            this.setEndPos(start, end);
            this.refresh();
          });

          this.base_start = {};
          this.base_end = {};
          /*
          this.coll.drag((dx, dy, x, y, e) => {
            this.setStartPos(this.base_start.x + dx, this.base_start.y + dy);
            this.setEndPos(this.base_end.x + dx, this.base_end.y + dy);
            this.emit('move', {})
          }, (x, y) => {
            this.base_start.x = this.start.x;
            this.base_start.y = this.start.y;
            this.base_end.x = this.end.x;
            this.base_end.y = this.end.y;
          }, (e) => {
            //diagram.fireOnConUpdate(this);
          });
          */
          this.coll.click(() => {
            console.log('click', this);

            this.emit('click', this);
          });

          this.initProperty();
        }

        checkRelPos(start, end) {

          let area;
          if (start.getX() + start.getWidth() < end.getX()) {
            area = 2;
          } else if (start.getX() > end.getX() + end.getWidth()) {
            area = 1;
          } else {
            if (start.getY() + start.getHeight() < end.getY()) {
              area = 4;
            } else if (start.getY() > end.getY()) {
              area = 3;
            } else {
              area = 3;
            }
          }
          return area;
        }

        setStartPos(start, end) {
          let area = this.checkRelPos(start, end);
          if (area == 1) {
            this.start.x = start.getX();
            this.start.y = start.getY() + start.getHeight() / 2;
          } else if (area == 2) {
            this.start.x = start.getX() + start.getWidth();
            this.start.y = start.getY() + start.getHeight() / 2;
          } else if (area == 3) {
            this.start.x = start.getX() + start.getWidth() / 2;
            this.start.y = start.getY();
          } else if (area == 4) {
            this.start.x = start.getX() + start.getWidth() / 2;
            this.start.y = start.getY() + start.getHeight();
          }
          this.points[0].x = this.start.x;
          this.points[0].y = this.start.y;
          this.refresh();
        }

        setEndPos(start, end) {

          let area = this.checkRelPos(end, start);
          if (area == 1) {
            this.end.x = end.getX();
            this.end.y = end.getY() + end.getHeight() / 2;
          } else if (area == 2) {
            this.end.x = end.getX() + end.getWidth();
            this.end.y = end.getY() + end.getHeight() / 2;
          } else if (area == 3) {
            this.end.x = end.getX() + end.getWidth() / 2;
            this.end.y = end.getY();
          } else if (area == 4) {
            this.end.x = end.getX() + end.getWidth() / 2;
            this.end.y = end.getY() + end.getHeight();
          }
          const length = this.points.length;
          this.points[length - 1].x = this.end.x;
          this.points[length - 1].y = this.end.y;
          this.refresh();
        }

        getStartPos() {
          return this.start;
        }

        getEndPos() {
          return this.end;
        }

        refresh() {

          const startPoint = this.points[0];
          const points = this.points.slice(1);
          let str = "M" + startPoint.x + ' ' + startPoint.y;
          points.forEach(p => {
            str += "L" + p.x + " " + p.y;
          });
          this.elem.attr({
            d: str
          });
          this.coll.attr({
            d: str
          });
          const textPoint = this.points.reduce((c, acc) => {
            return {
              x: c.x + acc.x,
              y: c.y + acc.y
            };
          }, { x: 0, y: 0 });
          textPoint.x = textPoint.x / this.points.length;
          textPoint.y = textPoint.y / this.points.length;
          this.propertyGroup.transform("translate(" + (textPoint.x - 20) + "," + textPoint.y + ")");
          this.editGroup.transform("translate(" + (textPoint.x - 20) + "," + textPoint.y + ")");
        }

        getWidth() {
          return 100;
        }

        getHeight() {
          return 100;
        }

        initProperty() {
          const newProperty = new __WEBPACK_IMPORTED_MODULE_2__property__["a" /* default */]({
            node: this,
            editGroup: this.editGroup
          });
          newProperty.updateText("default");
          this.property = newProperty;
          this.propertyGroup.appendChild(newProperty.getEl());
        }

        edit() {
          console.log("edit");
          this.property.showTextarea();
        }
      }
      /* harmony export (immutable) */__webpack_exports__["a"] = Connection;

      /***/
    },
    /* 9 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__property__ = __webpack_require__(2);

      class Shape {
        constructor(options, w, h) {
          this.options = options || {};
          this.color = this.options.color || "#fff";
          if (this.options.svg) {
            this.el = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createElement('g');
            this.el.setInnerHTML(this.options.svg);
          } else {
            this.el = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createElement('rect', {
              x: 0,
              y: 0,
              width: w,
              height: h
            });
          }
          this.el.attr({
            fill: this.color,
            stroke: "#000",
            strokeWidth: 1
          });
          this._isCustom = !!this.options.svg;
        }

        isCustom() {
          return this._isCustom;
        }

        getEl() {
          return this.el;
        }

        setSize(w, h) {
          if (this.isCustom()) {
            const ww = w / this.options.width;
            const hh = h / this.options.height;
            this.el.transform("scale(" + ww + "," + hh + ")");
          } else {
            this.el.attr({
              width: w,
              height: h
            });
          }
        }
      }

      class Node extends __WEBPACK_IMPORTED_MODULE_0_events__["EventEmitter"] {

        constructor(id, diagram, bound, options) {
          super();
          var self = this;
          this.id = id;
          this.diagram = diagram;
          this.properties = [];
          if (typeof bound.w != "number" || bound.w <= 1) bound.w = 2;
          if (typeof bound.h != "number" || bound.h <= 1) bound.h = 2;
          this.bound = {
            x: bound.x,
            y: bound.y,
            w: bound.w,
            h: bound.h
          };
          this.color = "#fff";
          this.options = options || {};
          this.connections = [];
          this.elem = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createElement('g');
          this.shape = new Shape(this.options.shape, bound.w, bound.h);
          this.propertyGroup = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createElement('g');
          this.coll = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createDraggableElement('rect', {
            x: 0,
            y: 0,
            width: this.bound.w,
            height: this.bound.h,
            'data-cid': this.id,
            'visibility': 'hidden',
            'pointer-events': 'fill'
          });
          this.editGroup = __WEBPACK_IMPORTED_MODULE_1__ui_svg_util__["a" /* default */].createElement('g');
          this.elem.appendChild(this.shape.getEl());
          this.elem.appendChild(this.propertyGroup);
          this.elem.appendChild(this.coll);
          this.elem.appendChild(this.editGroup);

          diagram.getGroup().appendChild(this.elem);
          this.start_pos = {
            x: 0,
            y: 0
          };
          this.coll.drag((dx, dy, x, y, e) => {
            this.setPos(this.start_pos.x + dx, this.start_pos.y + dy);
            this.emit('move');
          }, (x, y) => {
            this.start_pos.x = this.bound.x;
            this.start_pos.y = this.bound.y;
          }, e => {
            diagram.emit('nodeupdate', this);
          });
          this.coll.click(() => {
            this.emit('click');
          });
          this.init();
        }

        getId() {
          return this.id;
        }

        init(onclick) {

          this.elem.className("node");
          this.refresh();

          this.addProperty();
        }

        removeSelf() {
          this.diagram.getGroup().removeChild(this.elem);
          this.diagram.removeNode(this.id);
        }

        setPos(x, y) {
          this.bound.x = x;
          this.bound.y = y;
          this.refresh();
        }

        getBound() {
          return this.bound;
        }

        getX() {
          return this.bound.x;
        }

        getY() {
          return this.bound.y;
        }

        getWidth() {
          return this.bound.w;
        }

        getHeight() {
          return this.bound.h;
        }

        setSize(w, h) {
          if (typeof w != "number" || w <= 1) w = 2;
          if (typeof h != "number" || h <= 1) h = 2;
          this.bound.w = w;
          this.bound.h = h;
          this.refresh();
        }

        setW(w) {
          if (typeof w != "number" || w <= 1) w = 2;
          this.bound.w = w;
          this.refresh();
        }

        setH(h) {
          if (typeof h != "number" || h <= 1) h = 2;
          this.bound.h = h;
          this.refresh();
        }

        addConnection(c) {
          this.connections.push(c);
        }

        addProperty() {
          const newProperty = new __WEBPACK_IMPORTED_MODULE_2__property__["a" /* default */]({
            node: this,
            editGroup: this.editGroup
          });
          newProperty.updateText("default");
          newProperty.on('change', e => {
            this.setH(newProperty.getHeight() + 20);
          });
          this.properties.push(newProperty);
          this.propertyGroup.appendChild(newProperty.getEl());
        }

        edit() {
          this.properties[0].showTextarea();
        }

        updateText(text) {
          this.properties[0].updateText(text);
          if (!this.shape.isCustom()) this.setH(this.properties[0].getHeight() + 20);
        }

        refresh() {
          this.elem.transform("translate(" + this.bound.x + "," + this.bound.y + ")");
          this.shape.setSize(this.bound.w, this.bound.h);

          this.coll.attr({
            width: this.bound.w,
            height: this.bound.h
          });
          /*
          if(this.type == "rect" || this.type == "rectangle") {
          }else if(this.type == "ellipse") {
          this.shape.attr({
          cx : this.bound.w/2,
          cy : this.bound.h/2,
          rx : this.bound.w/2,
          ry : this.bound.h/2
          });
          }else{
          }
          */
        }

      }
      /* harmony export (immutable) */__webpack_exports__["a"] = Node;

      /***/
    },
    /* 10 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "DiagramEditor", function () {
        return DiagramEditor;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__diagram_diagram__ = __webpack_require__(4);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__(7);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2_events__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_events__);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__ui_toolpallet__ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__ui_selector__ = __webpack_require__(5);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__ui_svg_util__ = __webpack_require__(0);

      class DiagramEditor extends __WEBPACK_IMPORTED_MODULE_2_events__["EventEmitter"] {
        constructor(el) {
          super();
          this.wrapper = window.document.getElementById(el);
          this.el = window.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          this.browserSize = {
            width: window.innerWidth || document.body.clientWidth,
            height: window.innerHeight || document.body.clientHeight
          };
          this.el.style.width = this.browserSize.width + 'px';
          this.el.style.height = this.browserSize.height + 'px';
          //this.el.setAttributeNS('http://www.w3.org/2000/svg', 'width', 500)
          //this.el.setAttributeNS('http://www.w3.org/2000/svg', 'height', 500)
          this.wrapper.appendChild(this.el);

          this.selector = new __WEBPACK_IMPORTED_MODULE_4__ui_selector__["a" /* Selector */]();
          this.connection_selector = new __WEBPACK_IMPORTED_MODULE_4__ui_selector__["b" /* ConnectionSelector */]();
          this.addGUILayer();
          this.diagram = new __WEBPACK_IMPORTED_MODULE_0__diagram_diagram__["a" /* default */](this.el);
          this.addTopGUILayer();

          this.diagram.on('nodeClicked', e => {
            this.selector.setTarget(e.node);
          });
          this.diagram.on('connClicked', e => {

            this.connection_selector.setTarget(e.conn);
          });

          this.selector.on('rubberbundend', e => {
            const start = this.diagram.getNode(e.startId);
            if (e.endId) {
              const end = this.diagram.getNode(e.endId);
              this.addConnection(start, end, {});
            } else {
              const newNode = this.addNode({
                bound: {
                  x: e.event.x,
                  y: e.event.y,
                  w: 100,
                  h: 100
                }
              });
              this.addConnection(start, newNode, {});
            }
          });
        }

        addGUILayer() {
          const layer = window.document.createElementNS('http://www.w3.org/2000/svg', 'g');
          const layerClicker = window.document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          layer.setAttributeNS(null, 'transform', 'translate(' + 0 + ',' + 0 + ')');
          layerClicker.setAttributeNS(null, 'x', 0);
          layerClicker.setAttributeNS(null, 'y', 0);
          layerClicker.setAttributeNS(null, 'width', this.browserSize.width);
          layerClicker.setAttributeNS(null, 'height', this.browserSize.height);
          layerClicker.setAttributeNS(null, 'stroke', '#000');
          layerClicker.setAttributeNS(null, 'fill', '#fff');
          layerClicker.setAttributeNS(null, 'visibility', 'hidden');
          layerClicker.setAttributeNS(null, 'pointer-events', 'fill');
          /*
          base_rect.attr({
            visibility : "hidden",
            "pointer-events" : "fill"
          });
          */

          layer.appendChild(layerClicker);
          layerClicker.addEventListener('click', e => {
            console.log(e);
            this.emit('click', {
              x: e.clientX,
              y: e.clientY
            });
            this.selector.clear();
            this.connection_selector.clear();
          }, false);
          this.el.appendChild(layer);

          this.selector.on("changed", node => {
            this.emit('nodeupdate', node);
          });
          this.selector.on("removed", function (node) {
            this.emit('noderemove', node);
          });
          this.connection_selector.on("changed", function (con) {
            this.emit('conupdate', con);
          });
          this.on('click', e => {
            let toolName = this.toolpallet.getSelectedToolName();
            let shape = this.toolpallet.getSelectedShape();
            if (toolName == "select") {} else {
              this.addNode({
                bound: {
                  x: e.x,
                  y: e.y,
                  w: 100,
                  h: 100
                },
                shape: shape
              });
            }
          });
        }

        addTopGUILayer() {
          this.topGUILayer = __WEBPACK_IMPORTED_MODULE_5__ui_svg_util__["a" /* default */].createElement('g', {});
          this.topGUILayer.appendChild(this.selector);
          this.topGUILayer.appendChild(this.connection_selector);
          this.el.appendChild(this.topGUILayer.getEl());
        }

        addNode(_options) {
          var options = _options || {};
          var id = options.id || __WEBPACK_IMPORTED_MODULE_1_uuid___default()();
          var bound = options.bound || { x: 0, y: 0, w: 100, h: 40 };
          var node = this.diagram.addNode(id, bound, options);
          this.emit('addNode', { node: node });
          return node;
        }

        addConnection(src, target, _options) {
          var options = _options || {};
          var id = options.id || __WEBPACK_IMPORTED_MODULE_1_uuid___default()();
          this.diagram.addConnection(id, src, target);
        }

        createToolPallet(toolpallet) {
          this.toolpallet = new __WEBPACK_IMPORTED_MODULE_3__ui_toolpallet__["a" /* default */]();
          this.el.appendChild(this.toolpallet.getEl());
          //this.toolpallet.onSelect()
          return this.toolpallet;
        }
      }

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      exports = module.exports = __webpack_require__(12)(undefined);
      // imports


      // module
      exports.push([module.i, ".dgF-o1ZUTv_AfRTOpLuNd {\n  width: 40;\n  height: 40;\n  background: url(" + __webpack_require__(19) + ");\n}\n\n\n._1VhS5DDjd6dVoTWmKHTcR0 {\n  width: 40;\n  height: 40;\n  background: url(" + __webpack_require__(17) + ");\n}\n\n._1ylgUu5npeNByBmH2B96uT {\n  width: 20;\n  height: 20;\n  background: url(" + __webpack_require__(18) + ");\n}\n\n.LlWczh3uSWmHSxgUIj4-6 {\n  width: 20;\n  height: 20;\n  background: url(" + __webpack_require__(15) + ");\n}\n\n._3ctP2MM1zBAiHNPmrgwHn9 {\n  width: 20;\n  height: 20;\n  background: url(" + __webpack_require__(16) + ");\n}", ""]);

      // exports
      exports.locals = {
        "selectIcon": "dgF-o1ZUTv_AfRTOpLuNd",
        "rectIcon": "_1VhS5DDjd6dVoTWmKHTcR0",
        "removeIcon": "_1ylgUu5npeNByBmH2B96uT",
        "connIcon": "LlWczh3uSWmHSxgUIj4-6",
        "editIcon": "_3ctP2MM1zBAiHNPmrgwHn9"
      };

      /***/
    },
    /* 12 */
    /***/function (module, exports) {

      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      module.exports = function (useSourceMap) {
        var list = [];

        // return the list of modules as css string
        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
              return "@media " + item[2] + "{" + content + "}";
            } else {
              return content;
            }
          }).join("");
        };

        // import a list of modules into the list
        list.i = function (modules, mediaQuery) {
          if (typeof modules === "string") modules = [[null, modules, ""]];
          var alreadyImportedModules = {};
          for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (typeof id === "number") alreadyImportedModules[id] = true;
          }
          for (i = 0; i < modules.length; i++) {
            var item = modules[i];
            // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            //  when a module is imported multiple times with different media queries.
            //  I hope this will never occur (Hey this way we have smaller bundles)
            if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
              if (mediaQuery && !item[2]) {
                item[2] = mediaQuery;
              } else if (mediaQuery) {
                item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
              }
              list.push(item);
            }
          }
        };
        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || '';
        var cssMapping = item[3];
        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
          });

          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      }

      // Adapted from convert-source-map (MIT)
      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

        return '/*# ' + data + ' */';
      }

      /***/
    },
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */

      var stylesInDom = {};

      var memoize = function (fn) {
        var memo;

        return function () {
          if (typeof memo === "undefined") memo = fn.apply(this, arguments);
          return memo;
        };
      };

      var isOldIE = memoize(function () {
        // Test for IE <= 9 as proposed by Browserhacks
        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
        // Tests for existence of standard globals is to allow style-loader
        // to operate correctly into non-standard environments
        // @see https://github.com/webpack-contrib/style-loader/issues/177
        return window && document && document.all && !window.atob;
      });

      var getElement = function (fn) {
        var memo = {};

        return function (selector) {
          if (typeof memo[selector] === "undefined") {
            memo[selector] = fn.call(this, selector);
          }

          return memo[selector];
        };
      }(function (target) {
        return document.querySelector(target);
      });

      var singleton = null;
      var singletonCounter = 0;
      var stylesInsertedAtTop = [];

      var fixUrls = __webpack_require__(14);

      module.exports = function (list, options) {
        if (typeof DEBUG !== "undefined" && DEBUG) {
          if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        }

        options = options || {};

        options.attrs = typeof options.attrs === "object" ? options.attrs : {};

        // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page
        if (!options.singleton) options.singleton = isOldIE();

        // By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

        // By default, add <style> tags to the bottom of the target
        if (!options.insertAt) options.insertAt = "bottom";

        var styles = listToStyles(list, options);

        addStylesToDom(styles, options);

        return function update(newList) {
          var mayRemove = [];

          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];

            domStyle.refs--;
            mayRemove.push(domStyle);
          }

          if (newList) {
            var newStyles = listToStyles(newList, options);
            addStylesToDom(newStyles, options);
          }

          for (var i = 0; i < mayRemove.length; i++) {
            var domStyle = mayRemove[i];

            if (domStyle.refs === 0) {
              for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

              delete stylesInDom[domStyle.id];
            }
          }
        };
      };

      function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs++;

            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j](item.parts[j]);
            }

            for (; j < item.parts.length; j++) {
              domStyle.parts.push(addStyle(item.parts[j], options));
            }
          } else {
            var parts = [];

            for (var j = 0; j < item.parts.length; j++) {
              parts.push(addStyle(item.parts[j], options));
            }

            stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
          }
        }
      }

      function listToStyles(list, options) {
        var styles = [];
        var newStyles = {};

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var css = item[1];
          var media = item[2];
          var sourceMap = item[3];
          var part = { css: css, media: media, sourceMap: sourceMap };

          if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
        }

        return styles;
      }

      function insertStyleElement(options, style) {
        var target = getElement(options.insertInto);

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        }

        var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

        if (options.insertAt === "top") {
          if (!lastStyleElementInsertedAtTop) {
            target.insertBefore(style, target.firstChild);
          } else if (lastStyleElementInsertedAtTop.nextSibling) {
            target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
          } else {
            target.appendChild(style);
          }
          stylesInsertedAtTop.push(style);
        } else if (options.insertAt === "bottom") {
          target.appendChild(style);
        } else {
          throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        }
      }

      function removeStyleElement(style) {
        if (style.parentNode === null) return false;
        style.parentNode.removeChild(style);

        var idx = stylesInsertedAtTop.indexOf(style);
        if (idx >= 0) {
          stylesInsertedAtTop.splice(idx, 1);
        }
      }

      function createStyleElement(options) {
        var style = document.createElement("style");

        options.attrs.type = "text/css";

        addAttrs(style, options.attrs);
        insertStyleElement(options, style);

        return style;
      }

      function createLinkElement(options) {
        var link = document.createElement("link");

        options.attrs.type = "text/css";
        options.attrs.rel = "stylesheet";

        addAttrs(link, options.attrs);
        insertStyleElement(options, link);

        return link;
      }

      function addAttrs(el, attrs) {
        Object.keys(attrs).forEach(function (key) {
          el.setAttribute(key, attrs[key]);
        });
      }

      function addStyle(obj, options) {
        var style, update, remove, result;

        // If a transform function was defined, run it on the css
        if (options.transform && obj.css) {
          result = options.transform(obj.css);

          if (result) {
            // If transform returns a value, use that instead of the original css.
            // This allows running runtime transformations on the css.
            obj.css = result;
          } else {
            // If the transform function returns a falsy value, don't add this css.
            // This allows conditional loading of css
            return function () {
              // noop
            };
          }
        }

        if (options.singleton) {
          var styleIndex = singletonCounter++;

          style = singleton || (singleton = createStyleElement(options));

          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);
        } else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
          style = createLinkElement(options);
          update = updateLink.bind(null, style, options);
          remove = function () {
            removeStyleElement(style);

            if (style.href) URL.revokeObjectURL(style.href);
          };
        } else {
          style = createStyleElement(options);
          update = applyToTag.bind(null, style);
          remove = function () {
            removeStyleElement(style);
          };
        }

        update(obj);

        return function updateStyle(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }

            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      var replaceText = function () {
        var textStore = [];

        return function (index, replacement) {
          textStore[index] = replacement;

          return textStore.filter(Boolean).join('\n');
        };
      }();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? "" : obj.css;

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;

          if (childNodes[index]) style.removeChild(childNodes[index]);

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, obj) {
        var css = obj.css;
        var media = obj.media;

        if (media) {
          style.setAttribute("media", media);
        }

        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      function updateLink(link, options, obj) {
        var css = obj.css;
        var sourceMap = obj.sourceMap;

        /*
        	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
        	and there is no publicPath defined then lets turn convertToAbsoluteUrls
        	on by default.  Otherwise default to the convertToAbsoluteUrls option
        	directly
        */
        var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

        if (options.convertToAbsoluteUrls || autoFixUrls) {
          css = fixUrls(css);
        }

        if (sourceMap) {
          // http://stackoverflow.com/a/26603875
          css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }

        var blob = new Blob([css], { type: "text/css" });

        var oldSrc = link.href;

        link.href = URL.createObjectURL(blob);

        if (oldSrc) URL.revokeObjectURL(oldSrc);
      }

      /***/
    },
    /* 14 */
    /***/function (module, exports) {

      /**
       * When source maps are enabled, `style-loader` uses a link element with a data-uri to
       * embed the css on the page. This breaks all relative urls because now they are relative to a
       * bundle instead of the current page.
       *
       * One solution is to only use full urls, but that may be impossible.
       *
       * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
       *
       * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
       *
       */

      module.exports = function (css) {
        // get current location
        var location = typeof window !== "undefined" && window.location;

        if (!location) {
          throw new Error("fixUrls requires window.location");
        }

        // blank or null?
        if (!css || typeof css !== "string") {
          return css;
        }

        var baseUrl = location.protocol + "//" + location.host;
        var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

        // convert each url(...)
        /*
        This regular expression is just a way to recursively match brackets within
        a string.
        	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
           (  = Start a capturing group
             (?:  = Start a non-capturing group
                 [^)(]  = Match anything that isn't a parentheses
                 |  = OR
                 \(  = Match a start parentheses
                     (?:  = Start another non-capturing groups
                         [^)(]+  = Match anything that isn't a parentheses
                         |  = OR
                         \(  = Match a start parentheses
                             [^)(]*  = Match anything that isn't a parentheses
                         \)  = Match a end parentheses
                     )  = End Group
                     *\) = Match anything and then a close parens
                 )  = Close non-capturing group
                 *  = Match anything
              )  = Close capturing group
         \)  = Match a close parens
        	 /gi  = Get all matches, not the first.  Be case insensitive.
         */
        var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
          // strip quotes (if they exist)
          var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
            return $1;
          }).replace(/^'(.*)'$/, function (o, $1) {
            return $1;
          });

          // already a full url? no change
          if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
            return fullMatch;
          }

          // convert the url to a full url
          var newUrl;

          if (unquotedOrigUrl.indexOf("//") === 0) {
            //TODO: should we add protocol?
            newUrl = unquotedOrigUrl;
          } else if (unquotedOrigUrl.indexOf("/") === 0) {
            // path should be relative to the base url
            newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
          } else {
            // path should be relative to current directory
            newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
          }

          // send back the fixed url(...)
          return "url(" + JSON.stringify(newUrl) + ")";
        });

        // send back the fixed css
        return fixedCss;
      };

      /***/
    },
    /* 15 */
    /***/function (module, exports) {

      module.exports = "\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E %3Cg%3E %3Cellipse ry='20' rx='20' id='svg_1' cy='20' cx='20' stroke-width='1.5' stroke='%235fbf00' fill='%237fff00'/%3E %3Cellipse ry='93' id='svg_2' cy='93.75' cx='1.75' stroke-width='1.5' stroke='%23000' fill='%23fff'/%3E %3Cpath stroke='%23ff0000' transform='rotate%2890 21.704938888549805,20.405801773071293%29 ' id='svg_4' d='m11.901005,20l9.803934,-9.780397l9.803934,9.780397l-4.901967,0l0,9.827458l-9.803934,0l0,-9.827458l-4.901967,0z' stroke-opacity='null' stroke-width='0' fill='%23ffffff'/%3E %3C/g%3E %3C/svg%3E\"";

      /***/
    },
    /* 16 */
    /***/function (module, exports) {

      module.exports = "\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E %3Cg%3E %3Cellipse ry='20' rx='20' id='svg_1' cy='20' cx='20' stroke-width='1.5' stroke='%23005fbf' fill='%23007fff'/%3E %3Cellipse ry='93' id='svg_2' cy='93.75' cx='1.75' stroke-width='1.5' stroke='%23000' fill='%23fff'/%3E %3Cpath id='svg_5' d='m-213.507947,29.895818l0.742506,-0.740012l0.742506,0.740012l-0.371253,0l0,0.743573l-0.742506,0l0,-0.743573l-0.371253,0z' stroke-opacity='null' stroke-width='0' stroke='%23ff0000' fill='%23ffffff'/%3E %3Cpath stroke='%23ff0000' id='svg_7' d='m28.736926,9.700307l-3.135192,-1.73397c-0.791019,-0.437057 -1.833324,-0.226701 -2.331748,0.469492l-1.235756,1.730734l5.997755,3.314778l1.236731,-1.729931c0.496532,-0.697022 0.259556,-1.615021 -0.53179,-2.051104l0,0zm-17.375722,15.419012l5.998082,3.314744l9.77588,-13.693967l-6.000937,-3.31561l-9.773025,13.694832l0.000001,0.000001zm-0.916206,4.211506l-0.132476,3.113482l3.130383,-1.456968l2.909015,-1.351543l-5.786542,-3.199862l-0.120378,2.894892l0,0l-0.000001,-0.000001z' fill-opacity='null' stroke-opacity='null' stroke-width='0' fill='%23ffffff'/%3E %3C/g%3E %3C/svg%3E\"";

      /***/
    },
    /* 17 */
    /***/function (module, exports) {

      module.exports = "\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E %3Cg%3E %3Crect id='svg_1' height='48' width='56' y='6' x='2' stroke-width='1.5' stroke='%23000' fill='%23fff'/%3E %3C/g%3E %3C/svg%3E\"";

      /***/
    },
    /* 18 */
    /***/function (module, exports) {

      module.exports = "\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E %3Cg%3E %3Cellipse ry='20' rx='20' id='svg_1' cy='20' cx='20' stroke-width='1.5' stroke='%23ff0000' fill='%23ff5656'/%3E %3Cellipse ry='93' id='svg_2' cy='93.75' cx='1.75' stroke-width='1.5' stroke='%23000' fill='%23fff'/%3E %3Cpath stroke='%23ff0000' id='svg_3' d='m7.914208,14.126632l5.514531,-6.039724l5.858,6.415853l5.858,-6.415853l5.514582,6.039724l-5.858002,6.415905l5.858002,6.415905l-5.514582,6.039781l-5.858,-6.415907l-5.858,6.415907l-5.514531,-6.039781l5.857952,-6.415905l-5.857952,-6.415905z' stroke-width='0' fill='%23ffffff'/%3E %3C/g%3E %3C/svg%3E\"";

      /***/
    },
    /* 19 */
    /***/function (module, exports) {

      module.exports = "\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='2 2 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath stroke='%23000' transform='rotate%28-40.575660705566406 32.45265197753906,33.954856872558594%29' id='svg_1' d='m22.055768,33.904453l10.396884,-20.949598l10.396884,20.949598l-5.198442,0l0,21.050403l-10.396883,0l0,-21.050403l-5.198442,0z' stroke-width='1.5' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E\"";

      /***/
    },
    /* 20 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (global) {
        var rng;

        var crypto = global.crypto || global.msCrypto; // for IE 11
        if (crypto && crypto.getRandomValues) {
          // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
          // Moderately fast, high quality
          var _rnds8 = new Uint8Array(16);
          rng = function whatwgRNG() {
            crypto.getRandomValues(_rnds8);
            return _rnds8;
          };
        }

        if (!rng) {
          // Math.random()-based (RNG)
          //
          // If all else fails, use Math.random().  It's fast, but is of unspecified
          // quality.
          var _rnds = new Array(16);
          rng = function () {
            for (var i = 0, r; i < 16; i++) {
              if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
              _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
            }

            return _rnds;
          };
        }

        module.exports = rng;

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(21));

      /***/
    },
    /* 21 */
    /***/function (module, exports) {

      var g;

      // This works in non-strict mode
      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;

      /***/
    }]
    /******/)
  );
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = __webpack_require__(4);
var RequestBase = __webpack_require__(6);
var isObject = __webpack_require__(0);
var ResponseBase = __webpack_require__(7);
var Agent = __webpack_require__(5);

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
}

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only version of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

request.serializeObject = serialize;

/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify,
};

/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse,
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    if (index === -1) { // could be empty line, just skip it
      continue;
    }
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  return /[\/+]json\b/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str) {
  var parse = request.parse[this.type];
  if (this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch(custom_err) {
      new_err = custom_err; // ok() callback can throw
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (1 === arguments.length) pass = '';
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    };
  }

  var encoder = function(string) {
    if ('function' === typeof btoa) {
      return btoa(string);
    }
    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
}

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var self = this;
  var xhr = (this.xhr = request.getXHR());
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field))
      xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

request.agent = function() {
  return new Agent();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
  Agent.prototype[method.toLowerCase()] = function(url, fn) {
    var req = new request.Request(method, url);
    this._setDefaults(req);
    if (fn) {
      req.end(fn);
    }
    return req;
  };
});

Agent.prototype.del = Agent.prototype['delete'];

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clooca_diagram_editor__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clooca_diagram_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__clooca_diagram_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_superagent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_superagent__);



class Clooca {
  constructor(el) {
    var diagramEditor = new __WEBPACK_IMPORTED_MODULE_0__clooca_diagram_editor__["DiagramEditor"](el);
    var toolpallet = diagramEditor.createToolPallet();
    toolpallet.addItem('select', 'selectIcon');
    toolpallet.addItem('rect', 'rectIcon');
    diagramEditor.on('addNode', () => {
      this.save(diagramEditor.diagram);
    });
  }

  save(diagram) {
    __WEBPACK_IMPORTED_MODULE_1_superagent___default.a.post('/api/v1/save').send({ diagram: diagram.toJson() }).end((err, res) => {
      // Calling the end function will send the request
    });
  }

}
/* harmony export (immutable) */ __webpack_exports__["Clooca"] = Clooca;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects",
 "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function(/*varargs*/) {
    this._defaults.push({fn:fn, arguments:arguments});
    return this;
  }
});

Agent.prototype._setDefaults = function(req) {
    this._defaults.forEach(function(def) {
      req[def.fn].apply(req, def.arguments);
    });
};

module.exports = Agent;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(0);

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count, fn){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
RequestBase.prototype._shouldRetry = function(err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }
  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);
      if (override === true) return true;
      if (override === false) return false;
      // undefined falls back to defaults
    } catch(e) {
      console.error(e);
    }
  }
  if (res && res.status && res.status >= 500 && res.status != 501) return true;
  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
    // Superagent timeout
    if (err.timeout && err.code == 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }
  return false;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {

  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {
      self.end(function(err, res) {
        if (err) innerReject(err);
        else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function(n){
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }
  this._maxResponseSize = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function() {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header,
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }
  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = function() {console.trace("Unsupported");}

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var utils = __webpack_require__(8);

/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) this[key] = params[key];

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function(header, changesOrigin){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  // secuirty
  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }
  return header;
};


/***/ })
/******/ ]);
});