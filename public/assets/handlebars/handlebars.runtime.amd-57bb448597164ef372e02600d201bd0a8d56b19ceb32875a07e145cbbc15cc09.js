/*!

 handlebars v4.0.5

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
define("handlebars/utils",["exports"],function(t){"use strict";function e(t){return l[t]}function n(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}function r(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1}function i(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}return p.test(t)?t.replace(c,e):t}function o(t){return t||0===t?!(!d(t)||0!==t.length):!0}function a(t){var e=n({},t);return e._parent=t,e}function s(t,e){return t.path=e,t}function u(t,e){return(t?t+".":"")+e}t.__esModule=!0,t.extend=n,t.indexOf=r,t.escapeExpression=i,t.isEmpty=o,t.createFrame=a,t.blockParams=s,t.appendContextPath=u;var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},c=/[&<>"'`=]/g,p=/[&<>"'`=]/,h=Object.prototype.toString;t.toString=h;var f=function(t){return"function"==typeof t};f(/x/)&&(t.isFunction=f=function(t){return"function"==typeof t&&"[object Function]"===h.call(t)}),t.isFunction=f;var d=Array.isArray||function(t){return t&&"object"==typeof t?"[object Array]"===h.call(t):!1};t.isArray=d}),define("handlebars/exception",["exports","module"],function(t,e){"use strict";function n(t,e){var i=e&&e.loc,o=void 0,a=void 0;i&&(o=i.start.line,a=i.start.column,t+=" - "+o+":"+a);for(var s=Error.prototype.constructor.call(this,t),u=0;u<r.length;u++)this[r[u]]=s[r[u]];Error.captureStackTrace&&Error.captureStackTrace(this,n),i&&(this.lineNumber=o,this.column=a)}var r=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error,e.exports=n}),define("handlebars/helpers/block-helper-missing",["exports","module","../utils"],function(t,e,n){"use strict";e.exports=function(t){t.registerHelper("blockHelperMissing",function(e,r){var i=r.inverse,o=r.fn;if(e===!0)return o(this);if(e===!1||null==e)return i(this);if(n.isArray(e))return e.length>0?(r.ids&&(r.ids=[r.name]),t.helpers.each(e,r)):i(this);if(r.data&&r.ids){var a=n.createFrame(r.data);a.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:a}}return o(e,r)})}}),define("handlebars/helpers/each",["exports","module","../utils","../exception"],function(t,e,n,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var o=i(r);e.exports=function(t){t.registerHelper("each",function(t,e){function r(e,r,o){l&&(l.key=e,l.index=r,l.first=0===r,l.last=!!o,c&&(l.contextPath=c+e)),u+=i(t[e],{data:l,blockParams:n.blockParams([t[e],e],[c+e,null])})}if(!e)throw new o["default"]("Must pass iterator to #each");var i=e.fn,a=e.inverse,s=0,u="",l=void 0,c=void 0;if(e.data&&e.ids&&(c=n.appendContextPath(e.data.contextPath,e.ids[0])+"."),n.isFunction(t)&&(t=t.call(this)),e.data&&(l=n.createFrame(e.data)),t&&"object"==typeof t)if(n.isArray(t))for(var p=t.length;p>s;s++)s in t&&r(s,s,s===t.length-1);else{var h=void 0;for(var f in t)t.hasOwnProperty(f)&&(void 0!==h&&r(h,s-1),h=f,s++);void 0!==h&&r(h,s-1,!0)}return 0===s&&(u=a(this)),u})}}),define("handlebars/helpers/helper-missing",["exports","module","../exception"],function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i=r(n);e.exports=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new i["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})}}),define("handlebars/helpers/if",["exports","module","../utils"],function(t,e,n){"use strict";e.exports=function(t){t.registerHelper("if",function(t,e){return n.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||n.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers["if"].call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})})}}),define("handlebars/helpers/log",["exports","module"],function(t,e){"use strict";e.exports=function(t){t.registerHelper("log",function(){for(var e=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),e[0]=i,t.log.apply(t,e)})}}),define("handlebars/helpers/lookup",["exports","module"],function(t,e){"use strict";e.exports=function(t){t.registerHelper("lookup",function(t,e){return t&&t[e]})}}),define("handlebars/helpers/with",["exports","module","../utils"],function(t,e,n){"use strict";e.exports=function(t){t.registerHelper("with",function(t,e){n.isFunction(t)&&(t=t.call(this));var r=e.fn;if(n.isEmpty(t))return e.inverse(this);var i=e.data;return e.data&&e.ids&&(i=n.createFrame(e.data),i.contextPath=n.appendContextPath(e.data.contextPath,e.ids[0])),r(t,{data:i,blockParams:n.blockParams([t],[i&&i.contextPath])})})}}),define("handlebars/helpers",["exports","./helpers/block-helper-missing","./helpers/each","./helpers/helper-missing","./helpers/if","./helpers/log","./helpers/lookup","./helpers/with"],function(t,e,n,r,i,o,a,s){"use strict";function u(t){return t&&t.__esModule?t:{"default":t}}function l(t){c["default"](t),p["default"](t),h["default"](t),f["default"](t),d["default"](t),m["default"](t),g["default"](t)}t.__esModule=!0,t.registerDefaultHelpers=l;var c=u(e),p=u(n),h=u(r),f=u(i),d=u(o),m=u(a),g=u(s)}),define("handlebars/decorators/inline",["exports","module","../utils"],function(t,e,n){"use strict";e.exports=function(t){t.registerDecorator("inline",function(t,e,r,i){var o=t;return e.partials||(e.partials={},o=function(i,o){var a=r.partials;r.partials=n.extend({},a,e.partials);var s=t(i,o);return r.partials=a,s}),e.partials[i.args[0]]=i.fn,o})}}),define("handlebars/decorators",["exports","./decorators/inline"],function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t){i["default"](t)}t.__esModule=!0,t.registerDefaultDecorators=r;var i=n(e)}),define("handlebars/logger",["exports","module","./utils"],function(t,e,n){"use strict";var r={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=n.indexOf(r.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=r.lookupLevel(t),"undefined"!=typeof console&&r.lookupLevel(r.level)<=t){var e=r.methodMap[t];console[e]||(e="log");for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;n>o;o++)i[o-1]=arguments[o];console[e].apply(console,i)}}};e.exports=r}),define("handlebars/base",["exports","./utils","./exception","./helpers","./decorators","./logger"],function(t,e,n,r,i,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},r.registerDefaultHelpers(this),i.registerDefaultDecorators(this)}t.__esModule=!0,t.HandlebarsEnvironment=s;var u=a(n),l=a(o),c="4.0.5";t.VERSION=c;var p=7;t.COMPILER_REVISION=p;var h={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};t.REVISION_CHANGES=h;var f="[object Object]";s.prototype={constructor:s,logger:l["default"],log:l["default"].log,registerHelper:function(t,n){if(e.toString.call(t)===f){if(n)throw new u["default"]("Arg not supported with multiple helpers");e.extend(this.helpers,t)}else this.helpers[t]=n},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,n){if(e.toString.call(t)===f)e.extend(this.partials,t);else{if("undefined"==typeof n)throw new u["default"]('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=n}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,n){if(e.toString.call(t)===f){if(n)throw new u["default"]("Arg not supported with multiple decorators");e.extend(this.decorators,t)}else this.decorators[t]=n},unregisterDecorator:function(t){delete this.decorators[t]}};var d=l["default"].log;t.log=d,t.createFrame=e.createFrame,t.logger=l["default"]}),define("handlebars/safe-string",["exports","module"],function(t,e){"use strict";function n(t){this.string=t}n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},e.exports=n}),define("handlebars/runtime",["exports","./utils","./exception","./base"],function(t,e,n,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t){var e=t&&t[0]||1,n=r.COMPILER_REVISION;if(e!==n){if(n>e){var i=r.REVISION_CHANGES[n],o=r.REVISION_CHANGES[e];throw new f["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+o+").")}throw new f["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}}function a(t,n){function r(r,i,o){o.hash&&(i=e.extend({},i,o.hash),o.ids&&(o.ids[0]=!0)),r=n.VM.resolvePartial.call(this,r,i,o);var a=n.VM.invokePartial.call(this,r,i,o);if(null==a&&n.compile&&(o.partials[o.name]=n.compile(r,t.compilerOptions,n),a=o.partials[o.name](i,o)),null!=a){if(o.indent){for(var s=a.split("\n"),u=0,l=s.length;l>u&&(s[u]||u+1!==l);u++)s[u]=o.indent+s[u];a=s.join("\n")}return a}throw new f["default"]("The partial "+o.name+" could not be compiled when running in runtime-only mode")}function i(e){function n(e){return""+t.main(o,e,o.helpers,o.partials,a,u,s)}var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=r.data;i._setup(r),!r.partial&&t.useData&&(a=p(e,a));var s=void 0,u=t.useBlockParams?[]:void 0;return t.useDepths&&(s=r.depths?e!==r.depths[0]?[e].concat(r.depths):r.depths:[e]),(n=h(t.main,n,o,r.depths||[],a,u))(e,r)}if(!n)throw new f["default"]("No environment passed to template");if(!t||!t.main)throw new f["default"]("Unknown template object: "+typeof t);t.main.decorator=t.main_d,n.VM.checkRevision(t.compiler);var o={strict:function(t,e){if(!(e in t))throw new f["default"]('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var n=t.length,r=0;n>r;r++)if(t[r]&&null!=t[r][e])return t[r][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:e.escapeExpression,invokePartial:r,fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,r,i){var o=this.programs[t],a=this.fn(t);return e||i||r||n?o=s(this,t,a,e,n,r,i):o||(o=this.programs[t]=s(this,t,a)),o},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,n){var r=t||n;return t&&n&&t!==n&&(r=e.extend({},n,t)),r},noop:n.VM.noop,compilerInfo:t.compiler};return i.isTop=!0,i._setup=function(e){e.partial?(o.helpers=e.helpers,o.partials=e.partials,o.decorators=e.decorators):(o.helpers=o.merge(e.helpers,n.helpers),t.usePartial&&(o.partials=o.merge(e.partials,n.partials)),(t.usePartial||t.useDecorators)&&(o.decorators=o.merge(e.decorators,n.decorators)))},i._child=function(e,n,r,i){if(t.useBlockParams&&!r)throw new f["default"]("must pass block params");if(t.useDepths&&!i)throw new f["default"]("must pass parent depths");return s(o,e,t[e],n,0,r,i)},i}function s(t,e,n,r,i,o,a){function s(e){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=a;return a&&e!==a[0]&&(s=[e].concat(a)),n(t,e,t.helpers,t.partials,i.data||r,o&&[i.blockParams].concat(o),s)}return s=h(n,s,t,a,r,o),s.program=e,s.depth=a?a.length:0,s.blockParams=i||0,s}function u(t,e,n){return t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],t}function l(t,n,i){i.partial=!0,i.ids&&(i.data.contextPath=i.ids[0]||i.data.contextPath);var o=void 0;if(i.fn&&i.fn!==c&&(i.data=r.createFrame(i.data),o=i.data["partial-block"]=i.fn,o.partials&&(i.partials=e.extend({},i.partials,o.partials))),void 0===t&&o&&(t=o),void 0===t)throw new f["default"]("The partial "+i.name+" could not be found");return t instanceof Function?t(n,i):void 0}function c(){return""}function p(t,e){return e&&"root"in e||(e=e?r.createFrame(e):{},e.root=t),e}function h(t,n,r,i,o,a){if(t.decorator){var s={};n=t.decorator(n,s,r,i&&i[0],o,a,i),e.extend(n,s)}return n}t.__esModule=!0,t.checkRevision=o,t.template=a,t.wrapProgram=s,t.resolvePartial=u,t.invokePartial=l,t.noop=c;var f=i(n)}),define("handlebars/no-conflict",["exports","module"],function(t,e){"use strict";e.exports=function(t){var e="undefined"!=typeof global?global:window,n=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=n),t}}}),define("handlebars.runtime",["exports","module","./handlebars/base","./handlebars/safe-string","./handlebars/exception","./handlebars/utils","./handlebars/runtime","./handlebars/no-conflict"],function(t,e,n,r,i,o,a,s){"use strict";function u(t){return t&&t.__esModule?t:{"default":t}}function l(){var t=new n.HandlebarsEnvironment;return o.extend(t,n),t.SafeString=c["default"],t.Exception=p["default"],t.Utils=o,t.escapeExpression=o.escapeExpression,t.VM=a,t.template=function(e){return a.template(e,t)},t}var c=u(r),p=u(i),h=u(s),f=l();f.create=l,h["default"](f),f["default"]=f,e.exports=f});