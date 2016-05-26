function render_loading_invoice(e,t){var n=_.template(jQuery("#loading_invoice_template").html());jQuery(e).html(n(t))}function render_empty_invoice(e,t){var n=_.template(jQuery("#empty_invoice_template").html());jQuery(e).html(n(t))}function render_invoice_table(e,t){var n=_.template(jQuery("#invoice_table_template").html());jQuery(e).html(n(t))}function render_invoice_row(e,t){var n=_.template(jQuery("#invoice_row_template").html());jQuery(e).append(n({invoice:t}))}function render_payment_history(e,t){if(0==t.length)console.debug("Rendering empty invoices"),render_empty_invoice(e,{});else{var n="#invoice_table > tbody";console.debug("Rendering table"),render_invoice_table(e,{}),_.each(t,function(e){render_invoice_row(n,e)})}}function render_fail_invoice(e){var t=_.template(jQuery("#fail_invoice_template").html());jQuery(e).html(t({message:"Can not read payment history from Payment service"}))}(function(){var e=this,t=e._,n={},r=Array.prototype,o=Object.prototype,i=Function.prototype,a=r.push,s=r.slice,u=r.concat,c=o.toString,l=o.hasOwnProperty,p=r.forEach,d=r.map,f=r.reduce,h=r.reduceRight,m=r.filter,g=r.every,v=r.some,y=r.indexOf,b=r.lastIndexOf,C=Array.isArray,E=Object.keys,w=i.bind,x=function(e){return e instanceof x?e:this instanceof x?void(this._wrapped=e):new x(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=x),exports._=x):e._=x,x.VERSION="1.4.4";var R=x.each=x.forEach=function(e,t,r){if(null!=e)if(p&&e.forEach===p)e.forEach(t,r);else if(e.length===+e.length){for(var o=0,i=e.length;i>o;o++)if(t.call(r,e[o],o,e)===n)return}else for(var a in e)if(x.has(e,a)&&t.call(r,e[a],a,e)===n)return};x.map=x.collect=function(e,t,n){var r=[];return null==e?r:d&&e.map===d?e.map(t,n):(R(e,function(e,o,i){r[r.length]=t.call(n,e,o,i)}),r)};var _="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(e,t,n,r){var o=arguments.length>2;if(null==e&&(e=[]),f&&e.reduce===f)return r&&(t=x.bind(t,r)),o?e.reduce(t,n):e.reduce(t);if(R(e,function(e,i,a){o?n=t.call(r,n,e,i,a):(n=e,o=!0)}),!o)throw new TypeError(_);return n},x.reduceRight=x.foldr=function(e,t,n,r){var o=arguments.length>2;if(null==e&&(e=[]),h&&e.reduceRight===h)return r&&(t=x.bind(t,r)),o?e.reduceRight(t,n):e.reduceRight(t);var i=e.length;if(i!==+i){var a=x.keys(e);i=a.length}if(R(e,function(s,u,c){u=a?a[--i]:--i,o?n=t.call(r,n,e[u],u,c):(n=e[u],o=!0)}),!o)throw new TypeError(_);return n},x.find=x.detect=function(e,t,n){var r;return T(e,function(e,o,i){return t.call(n,e,o,i)?(r=e,!0):void 0}),r},x.filter=x.select=function(e,t,n){var r=[];return null==e?r:m&&e.filter===m?e.filter(t,n):(R(e,function(e,o,i){t.call(n,e,o,i)&&(r[r.length]=e)}),r)},x.reject=function(e,t,n){return x.filter(e,function(e,r,o){return!t.call(n,e,r,o)},n)},x.every=x.all=function(e,t,r){t||(t=x.identity);var o=!0;return null==e?o:g&&e.every===g?e.every(t,r):(R(e,function(e,i,a){return(o=o&&t.call(r,e,i,a))?void 0:n}),!!o)};var T=x.some=x.any=function(e,t,r){t||(t=x.identity);var o=!1;return null==e?o:v&&e.some===v?e.some(t,r):(R(e,function(e,i,a){return o||(o=t.call(r,e,i,a))?n:void 0}),!!o)};x.contains=x.include=function(e,t){return null==e?!1:y&&e.indexOf===y?-1!=e.indexOf(t):T(e,function(e){return e===t})},x.invoke=function(e,t){var n=s.call(arguments,2),r=x.isFunction(t);return x.map(e,function(e){return(r?t:e[t]).apply(e,n)})},x.pluck=function(e,t){return x.map(e,function(e){return e[t]})},x.where=function(e,t,n){return x.isEmpty(t)?n?null:[]:x[n?"find":"filter"](e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},x.findWhere=function(e,t){return x.where(e,t,!0)},x.max=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&65535>e.length)return Math.max.apply(Math,e);if(!t&&x.isEmpty(e))return-1/0;var r={computed:-1/0,value:-1/0};return R(e,function(e,o,i){var a=t?t.call(n,e,o,i):e;a>=r.computed&&(r={value:e,computed:a})}),r.value},x.min=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&65535>e.length)return Math.min.apply(Math,e);if(!t&&x.isEmpty(e))return 1/0;var r={computed:1/0,value:1/0};return R(e,function(e,o,i){var a=t?t.call(n,e,o,i):e;r.computed>a&&(r={value:e,computed:a})}),r.value},x.shuffle=function(e){var t,n=0,r=[];return R(e,function(e){t=x.random(n++),r[n-1]=r[t],r[t]=e}),r};var D=function(e){return x.isFunction(e)?e:function(t){return t[e]}};x.sortBy=function(e,t,n){var r=D(t);return x.pluck(x.map(e,function(e,t,o){return{value:e,index:t,criteria:r.call(n,e,t,o)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return e.index<t.index?-1:1}),"value")};var S=function(e,t,n,r){var o={},i=D(t||x.identity);return R(e,function(t,a){var s=i.call(n,t,a,e);r(o,s,t)}),o};x.groupBy=function(e,t,n){return S(e,t,n,function(e,t,n){(x.has(e,t)?e[t]:e[t]=[]).push(n)})},x.countBy=function(e,t,n){return S(e,t,n,function(e,t){x.has(e,t)||(e[t]=0),e[t]++})},x.sortedIndex=function(e,t,n,r){n=null==n?x.identity:D(n);for(var o=n.call(r,t),i=0,a=e.length;a>i;){var s=i+a>>>1;o>n.call(r,e[s])?i=s+1:a=s}return i},x.toArray=function(e){return e?x.isArray(e)?s.call(e):e.length===+e.length?x.map(e,x.identity):x.values(e):[]},x.size=function(e){return null==e?0:e.length===+e.length?e.length:x.keys(e).length},x.first=x.head=x.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:s.call(e,0,t)},x.initial=function(e,t,n){return s.call(e,0,e.length-(null==t||n?1:t))},x.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:s.call(e,Math.max(e.length-t,0))},x.rest=x.tail=x.drop=function(e,t,n){return s.call(e,null==t||n?1:t)},x.compact=function(e){return x.filter(e,x.identity)};var M=function(e,t,n){return R(e,function(e){x.isArray(e)?t?a.apply(n,e):M(e,t,n):n.push(e)}),n};x.flatten=function(e,t){return M(e,t,[])},x.without=function(e){return x.difference(e,s.call(arguments,1))},x.uniq=x.unique=function(e,t,n,r){x.isFunction(t)&&(r=n,n=t,t=!1);var o=n?x.map(e,n,r):e,i=[],a=[];return R(o,function(n,r){(t?r&&a[a.length-1]===n:x.contains(a,n))||(a.push(n),i.push(e[r]))}),i},x.union=function(){return x.uniq(u.apply(r,arguments))},x.intersection=function(e){var t=s.call(arguments,1);return x.filter(x.uniq(e),function(e){return x.every(t,function(t){return x.indexOf(t,e)>=0})})},x.difference=function(e){var t=u.apply(r,s.call(arguments,1));return x.filter(e,function(e){return!x.contains(t,e)})},x.zip=function(){for(var e=s.call(arguments),t=x.max(x.pluck(e,"length")),n=Array(t),r=0;t>r;r++)n[r]=x.pluck(e,""+r);return n},x.object=function(e,t){if(null==e)return{};for(var n={},r=0,o=e.length;o>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},x.indexOf=function(e,t,n){if(null==e)return-1;var r=0,o=e.length;if(n){if("number"!=typeof n)return r=x.sortedIndex(e,t),e[r]===t?r:-1;r=0>n?Math.max(0,o+n):n}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;o>r;r++)if(e[r]===t)return r;return-1},x.lastIndexOf=function(e,t,n){if(null==e)return-1;var r=null!=n;if(b&&e.lastIndexOf===b)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);for(var o=r?n:e.length;o--;)if(e[o]===t)return o;return-1},x.range=function(e,t,n){1>=arguments.length&&(t=e||0,e=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((t-e)/n),0),o=0,i=Array(r);r>o;)i[o++]=e,e+=n;return i},x.bind=function(e,t){if(e.bind===w&&w)return w.apply(e,s.call(arguments,1));var n=s.call(arguments,2);return function(){return e.apply(t,n.concat(s.call(arguments)))}},x.partial=function(e){var t=s.call(arguments,1);return function(){return e.apply(this,t.concat(s.call(arguments)))}},x.bindAll=function(e){var t=s.call(arguments,1);return 0===t.length&&(t=x.functions(e)),R(t,function(t){e[t]=x.bind(e[t],e)}),e},x.memoize=function(e,t){var n={};return t||(t=x.identity),function(){var r=t.apply(this,arguments);return x.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},x.delay=function(e,t){var n=s.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},x.defer=function(e){return x.delay.apply(x,[e,1].concat(s.call(arguments,1)))},x.throttle=function(e,t){var n,r,o,i,a=0,s=function(){a=new Date,o=null,i=e.apply(n,r)};return function(){var u=new Date,c=t-(u-a);return n=this,r=arguments,0>=c?(clearTimeout(o),o=null,a=u,i=e.apply(n,r)):o||(o=setTimeout(s,c)),i}},x.debounce=function(e,t,n){var r,o;return function(){var i=this,a=arguments,s=function(){r=null,n||(o=e.apply(i,a))},u=n&&!r;return clearTimeout(r),r=setTimeout(s,t),u&&(o=e.apply(i,a)),o}},x.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},x.wrap=function(e,t){return function(){var n=[e];return a.apply(n,arguments),t.apply(this,n)}},x.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},x.after=function(e,t){return 0>=e?t():function(){return 1>--e?t.apply(this,arguments):void 0}},x.keys=E||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)x.has(e,n)&&(t[t.length]=n);return t},x.values=function(e){var t=[];for(var n in e)x.has(e,n)&&t.push(e[n]);return t},x.pairs=function(e){var t=[];for(var n in e)x.has(e,n)&&t.push([n,e[n]]);return t},x.invert=function(e){var t={};for(var n in e)x.has(e,n)&&(t[e[n]]=n);return t},x.functions=x.methods=function(e){var t=[];for(var n in e)x.isFunction(e[n])&&t.push(n);return t.sort()},x.extend=function(e){return R(s.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},x.pick=function(e){var t={},n=u.apply(r,s.call(arguments,1));return R(n,function(n){n in e&&(t[n]=e[n])}),t},x.omit=function(e){var t={},n=u.apply(r,s.call(arguments,1));for(var o in e)x.contains(n,o)||(t[o]=e[o]);return t},x.defaults=function(e){return R(s.call(arguments,1),function(t){if(t)for(var n in t)null==e[n]&&(e[n]=t[n])}),e},x.clone=function(e){return x.isObject(e)?x.isArray(e)?e.slice():x.extend({},e):e},x.tap=function(e,t){return t(e),e};var O=function(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof x&&(e=e._wrapped),t instanceof x&&(t=t._wrapped);var o=c.call(e);if(o!=c.call(t))return!1;switch(o){case"[object String]":return e==t+"";case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var i=n.length;i--;)if(n[i]==e)return r[i]==t;n.push(e),r.push(t);var a=0,s=!0;if("[object Array]"==o){if(a=e.length,s=a==t.length)for(;a--&&(s=O(e[a],t[a],n,r)););}else{var u=e.constructor,l=t.constructor;if(u!==l&&!(x.isFunction(u)&&u instanceof u&&x.isFunction(l)&&l instanceof l))return!1;for(var p in e)if(x.has(e,p)&&(a++,!(s=x.has(t,p)&&O(e[p],t[p],n,r))))break;if(s){for(p in t)if(x.has(t,p)&&!a--)break;s=!a}}return n.pop(),r.pop(),s};x.isEqual=function(e,t){return O(e,t,[],[])},x.isEmpty=function(e){if(null==e)return!0;if(x.isArray(e)||x.isString(e))return 0===e.length;for(var t in e)if(x.has(e,t))return!1;return!0},x.isElement=function(e){return!(!e||1!==e.nodeType)},x.isArray=C||function(e){return"[object Array]"==c.call(e)},x.isObject=function(e){return e===Object(e)},R(["Arguments","Function","String","Number","Date","RegExp"],function(e){x["is"+e]=function(t){return c.call(t)=="[object "+e+"]"}}),x.isArguments(arguments)||(x.isArguments=function(e){return!(!e||!x.has(e,"callee"))}),"function"!=typeof/./&&(x.isFunction=function(e){return"function"==typeof e}),x.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},x.isNaN=function(e){return x.isNumber(e)&&e!=+e},x.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==c.call(e)},x.isNull=function(e){return null===e},x.isUndefined=function(e){return void 0===e},x.has=function(e,t){return l.call(e,t)},x.noConflict=function(){return e._=t,this},x.identity=function(e){return e},x.times=function(e,t,n){for(var r=Array(e),o=0;e>o;o++)r[o]=t.call(n,o);return r},x.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var k={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};k.unescape=x.invert(k.escape);var N={escape:RegExp("["+x.keys(k.escape).join("")+"]","g"),unescape:RegExp("("+x.keys(k.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(e){x[e]=function(t){return null==t?"":(""+t).replace(N[e],function(t){return k[e][t]})}}),x.result=function(e,t){if(null==e)return null;var n=e[t];return x.isFunction(n)?n.call(e):n},x.mixin=function(e){R(x.functions(e),function(t){var n=x[t]=e[t];x.prototype[t]=function(){var e=[this._wrapped];return a.apply(e,arguments),L.call(this,n.apply(x,e))}})};var I=0;x.uniqueId=function(e){var t=++I+"";return e?e+t:t},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var P=/(.)^/,A={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},j=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(e,t,n){var r;n=x.defaults({},n,x.templateSettings);var o=RegExp([(n.escape||P).source,(n.interpolate||P).source,(n.evaluate||P).source].join("|")+"|$","g"),i=0,a="__p+='";e.replace(o,function(t,n,r,o,s){return a+=e.slice(i,s).replace(j,function(e){return"\\"+A[e]}),n&&(a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(a+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),o&&(a+="';\n"+o+"\n__p+='"),i=s+t.length,t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=Function(n.variable||"obj","_",a)}catch(s){throw s.source=a,s}if(t)return r(t,x);var u=function(e){return r.call(this,e,x)};return u.source="function("+(n.variable||"obj")+"){\n"+a+"}",u},x.chain=function(e){return x(e).chain()};var L=function(e){return this._chain?x(e).chain():e};x.mixin(x),R(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];x.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!=e&&"splice"!=e||0!==n.length||delete n[0],L.call(this,n)}}),R(["concat","join","slice"],function(e){var t=r[e];x.prototype[e]=function(){return L.call(this,t.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this),jQuery(document).ready(function(){if(jQuery("#payment_history").length){console.debug("Going to render payment history..."),_.templateSettings={interpolate:/\{\{\=(.+?)\}\}/g,evaluate:/\{\{(.+?)\}\}/g};var e="#payment_history";render_loading_invoice(e);var t=jQuery.getJSON("/settings/payments.json");t.done(function(t,n){console.debug("Got invoices: "+n),render_payment_history(e,t)}),t.fail(function(t,n){console.debug("Failed invoices: "+n),render_fail_invoice(e,t)})}});