"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}!function(t){var e=function(){function t(t){var e=t.scanner.TOKENS,n=t.parser.TOKENS,r=n.Base,i=t.parser.start,o=void 0,a=void 0,s=function(t){function e(n){_classCallCheck(this,e);var r=_possibleConstructorReturn(this,t.call(this,n));return r.type="hashtag",r.isLink=!0,r}return _inherits(e,t),e}(r);o=new t.parser.State,a=new t.parser.State(s),i.on(e.POUND,o),o.on(e.DOMAIN,a),o.on(e.TLD,a)}return t}();e(t)}(linkify);