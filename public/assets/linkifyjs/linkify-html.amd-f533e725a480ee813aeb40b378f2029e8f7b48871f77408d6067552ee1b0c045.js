define("simple-html-tokenizer/entity-parser",["module","exports"],function(e,t){"use strict";function n(e){this.named=e}try{Object.defineProperty(t,"__esModule",{value:!0})}catch(r){t.__esModule=!0}var i=/^#[xX]([A-Fa-f0-9]+)$/,o=/^#([0-9]+)$/,a=/^([A-Za-z0-9]+)$/;n.prototype.parse=function(e){if(e){var t=e.match(i);return t?"&#x"+t[1]+";":(t=e.match(o))?"&#"+t[1]+";":(t=e.match(a),t?"&"+t[1]+";":void 0)}},t["default"]=n,e.exports=t["default"]}),define("simple-html-tokenizer/evented-tokenizer",["module","exports","./utils"],function(e,t,n){"use strict";function r(e,t){this.delegate=e,this.entityParser=t,this.state=null,this.input=null,this.index=-1,this.line=-1,this.column=-1,this.tagLine=-1,this.tagColumn=-1,this.reset()}try{Object.defineProperty(t,"__esModule",{value:!0})}catch(i){t.__esModule=!0}r.prototype={reset:function(){this.state="beforeData",this.input="",this.index=0,this.line=1,this.column=0,this.tagLine=-1,this.tagColumn=-1,this.delegate.reset()},tokenize:function(e){this.reset(),this.tokenizePart(e),this.tokenizeEOF()},tokenizePart:function(e){for(this.input+=(0,n.preprocessInput)(e);this.index<this.input.length;)this.states[this.state].call(this)},tokenizeEOF:function(){this.flushData()},flushData:function(){"data"===this.state&&(this.delegate.finishData(),this.state="beforeData")},peek:function(){return this.input.charAt(this.index)},consume:function(){var e=this.peek();return this.index++,"\n"===e?(this.line++,this.column=0):this.column++,e},consumeCharRef:function(){var e=this.input.indexOf(";",this.index);if(-1!==e){var t=this.input.slice(this.index,e),n=this.entityParser.parse(t);return n?(this.index=e+1,n):void 0}},markTagStart:function(){this.tagLine=this.line,this.tagColumn=this.column},states:{beforeData:function(){var e=this.peek();"<"===e?(this.state="tagOpen",this.markTagStart(),this.consume()):(this.state="data",this.delegate.beginData())},data:function(){var e=this.peek();"<"===e?(this.delegate.finishData(),this.state="tagOpen",this.markTagStart(),this.consume()):"&"===e?(this.consume(),this.delegate.appendToData(this.consumeCharRef()||"&")):(this.consume(),this.delegate.appendToData(e))},tagOpen:function(){var e=this.consume();"!"===e?this.state="markupDeclaration":"/"===e?this.state="endTagOpen":(0,n.isAlpha)(e)&&(this.state="tagName",this.delegate.beginStartTag(),this.delegate.appendToTagName(e.toLowerCase()))},markupDeclaration:function(){var e=this.consume();"-"===e&&"-"===this.input.charAt(this.index)&&(this.index++,this.state="commentStart",this.delegate.beginComment())},commentStart:function(){var e=this.consume();"-"===e?this.state="commentStartDash":">"===e?(this.delegate.finishComment(),this.state="beforeData"):(this.delegate.appendToCommentData(e),this.state="comment")},commentStartDash:function(){var e=this.consume();"-"===e?this.state="commentEnd":">"===e?(this.delegate.finishComment(),this.state="beforeData"):(this.delegate.appendToCommentData("-"),this.state="comment")},comment:function(){var e=this.consume();"-"===e?this.state="commentEndDash":this.delegate.appendToCommentData(e)},commentEndDash:function(){var e=this.consume();"-"===e?this.state="commentEnd":(this.delegate.appendToCommentData("-"+e),this.state="comment")},commentEnd:function(){var e=this.consume();">"===e?(this.delegate.finishComment(),this.state="beforeData"):(this.delegate.appendToCommentData("--"+e),this.state="comment")},tagName:function(){var e=this.consume();(0,n.isSpace)(e)?this.state="beforeAttributeName":"/"===e?this.state="selfClosingStartTag":">"===e?(this.delegate.finishTag(),this.state="beforeData"):this.delegate.appendToTagName(e)},beforeAttributeName:function(){var e=this.consume();(0,n.isSpace)(e)||("/"===e?this.state="selfClosingStartTag":">"===e?(this.delegate.finishTag(),this.state="beforeData"):(this.state="attributeName",this.delegate.beginAttribute(),this.delegate.appendToAttributeName(e)))},attributeName:function(){var e=this.consume();(0,n.isSpace)(e)?this.state="afterAttributeName":"/"===e?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.state="selfClosingStartTag"):"="===e?this.state="beforeAttributeValue":">"===e?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.delegate.finishTag(),this.state="beforeData"):this.delegate.appendToAttributeName(e)},afterAttributeName:function(){var e=this.consume();(0,n.isSpace)(e)||("/"===e?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.state="selfClosingStartTag"):"="===e?this.state="beforeAttributeValue":">"===e?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.delegate.finishTag(),this.state="beforeData"):(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.state="attributeName",this.delegate.beginAttribute(),this.delegate.appendToAttributeName(e)))},beforeAttributeValue:function(){var e=this.consume();(0,n.isSpace)(e)||('"'===e?(this.state="attributeValueDoubleQuoted",this.delegate.beginAttributeValue(!0)):"'"===e?(this.state="attributeValueSingleQuoted",this.delegate.beginAttributeValue(!0)):">"===e?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.delegate.finishTag(),this.state="beforeData"):(this.state="attributeValueUnquoted",this.delegate.beginAttributeValue(!1),this.delegate.appendToAttributeValue(e)))},attributeValueDoubleQuoted:function(){var e=this.consume();'"'===e?(this.delegate.finishAttributeValue(),this.state="afterAttributeValueQuoted"):"&"===e?this.delegate.appendToAttributeValue(this.consumeCharRef('"')||"&"):this.delegate.appendToAttributeValue(e)},attributeValueSingleQuoted:function(){var e=this.consume();"'"===e?(this.delegate.finishAttributeValue(),this.state="afterAttributeValueQuoted"):"&"===e?this.delegate.appendToAttributeValue(this.consumeCharRef("'")||"&"):this.delegate.appendToAttributeValue(e)},attributeValueUnquoted:function(){var e=this.consume();(0,n.isSpace)(e)?(this.delegate.finishAttributeValue(),this.state="beforeAttributeName"):"&"===e?this.delegate.appendToAttributeValue(this.consumeCharRef(">")||"&"):">"===e?(this.delegate.finishAttributeValue(),this.delegate.finishTag(),this.state="beforeData"):this.delegate.appendToAttributeValue(e)},afterAttributeValueQuoted:function(){var e=this.peek();(0,n.isSpace)(e)?(this.consume(),this.state="beforeAttributeName"):"/"===e?(this.consume(),this.state="selfClosingStartTag"):">"===e?(this.consume(),this.delegate.finishTag(),this.state="beforeData"):this.state="beforeAttributeName"},selfClosingStartTag:function(){var e=this.peek();">"===e?(this.consume(),this.delegate.markTagAsSelfClosing(),this.delegate.finishTag(),this.state="beforeData"):this.state="beforeAttributeName"},endTagOpen:function(){var e=this.consume();(0,n.isAlpha)(e)&&(this.state="tagName",this.delegate.beginEndTag(),this.delegate.appendToTagName(e.toLowerCase()))}}},t["default"]=r,e.exports=t["default"]}),define("simple-html-tokenizer/html5-named-char-refs",["module","exports"],function(e,t){"use strict";try{Object.defineProperty(t,"__esModule",{value:!0})}catch(n){t.__esModule=!0}var r={};t["default"]=r,e.exports=t["default"]}),define("simple-html-tokenizer/index",["exports","./html5-named-char-refs","./entity-parser","./evented-tokenizer","./tokenizer","./tokenize"],function(e,t,n,r,i,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}try{Object.defineProperty(e,"__esModule",{value:!0})}catch(s){e.__esModule=!0}Object.defineProperty(e,"HTML5NamedCharRefs",{enumerable:!0,get:function(){return a(t)["default"]}}),Object.defineProperty(e,"EntityParser",{enumerable:!0,get:function(){return a(n)["default"]}}),Object.defineProperty(e,"EventedTokenizer",{enumerable:!0,get:function(){return a(r)["default"]}}),Object.defineProperty(e,"Tokenizer",{enumerable:!0,get:function(){return a(i)["default"]}}),Object.defineProperty(e,"tokenize",{enumerable:!0,get:function(){return a(o)["default"]}})}),define("simple-html-tokenizer/tokenize",["module","exports","./tokenizer","./entity-parser","./html5-named-char-refs"],function(e,t,n,r,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n=new u["default"](new l["default"](c["default"]),t);return n.tokenize(e)}try{Object.defineProperty(t,"__esModule",{value:!0})}catch(s){t.__esModule=!0}t["default"]=a;var u=o(n),l=o(r),c=o(i);e.exports=t["default"]}),define("simple-html-tokenizer/tokenizer",["module","exports","./evented-tokenizer"],function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){this.token=null,this.startLine=1,this.startColumn=0,this.options=t||{},this.tokenizer=new a["default"](this,e)}try{Object.defineProperty(t,"__esModule",{value:!0})}catch(o){t.__esModule=!0}var a=r(n);i.prototype={tokenize:function(e){return this.tokens=[],this.tokenizer.tokenize(e),this.tokens},tokenizePart:function(e){return this.tokens=[],this.tokenizer.tokenizePart(e),this.tokens},tokenizeEOF:function(){return this.tokens=[],this.tokenizer.tokenizeEOF(),this.tokens[0]},reset:function(){this.token=null,this.startLine=1,this.startColumn=0},addLocInfo:function(){this.options.loc&&(this.token.loc={start:{line:this.startLine,column:this.startColumn},end:{line:this.tokenizer.line,column:this.tokenizer.column}}),this.startLine=this.tokenizer.line,this.startColumn=this.tokenizer.column},beginData:function(){this.token={type:"Chars",chars:""},this.tokens.push(this.token)},appendToData:function(e){this.token.chars+=e},finishData:function(){this.addLocInfo()},beginComment:function(){this.token={type:"Comment",chars:""},this.tokens.push(this.token)},appendToCommentData:function(e){this.token.chars+=e},finishComment:function(){this.addLocInfo()},beginStartTag:function(){this.token={type:"StartTag",tagName:"",attributes:[],selfClosing:!1},this.tokens.push(this.token)},beginEndTag:function(){this.token={type:"EndTag",tagName:""},this.tokens.push(this.token)},finishTag:function(){this.addLocInfo()},markTagAsSelfClosing:function(){this.token.selfClosing=!0},appendToTagName:function(e){this.token.tagName+=e},beginAttribute:function(){this._currentAttribute=["","",null],this.token.attributes.push(this._currentAttribute)},appendToAttributeName:function(e){this._currentAttribute[0]+=e},beginAttributeValue:function(e){this._currentAttribute[2]=e},appendToAttributeValue:function(e){this._currentAttribute[1]=this._currentAttribute[1]||"",this._currentAttribute[1]+=e},finishAttributeValue:function(){}},t["default"]=i,e.exports=t["default"]}),define("simple-html-tokenizer/utils",["exports"],function(e){"use strict";function t(e){return o.test(e)}function n(e){return a.test(e)}function r(e){return e.replace(s,"\n")}try{Object.defineProperty(e,"__esModule",{value:!0})}catch(i){e.__esModule=!0}e.isSpace=t,e.isAlpha=n,e.preprocessInput=r;var o=/[\t\n\f ]/,a=/[A-Za-z]/,s=/\r\n?/g}),define("simple-html-tokenizer",["module","exports","./simple-html-tokenizer/html5-named-char-refs","./simple-html-tokenizer/entity-parser","./simple-html-tokenizer/evented-tokenizer","./simple-html-tokenizer/tokenizer","./simple-html-tokenizer/tokenize"],function(e,t,n,r,i,o,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}try{Object.defineProperty(t,"__esModule",{value:!0})}catch(u){t.__esModule=!0}var l=s(n),c=s(r),p=s(i),h=s(o),d=s(a),f={HTML5NamedCharRefs:l["default"],EntityParser:c["default"],EventedTokenizer:p["default"],Tokenizer:h["default"],tokenize:d["default"]};t["default"]=f,e.exports=t["default"]}),define("linkify-html",["module","exports","./simple-html-tokenizer","./linkify"],function(e,t,n,r){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t,n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=d["default"].tokenize(e),i=[],o=[];for(n=f.options.normalize(n),t=0;t<r.length;t++){var a=r[t];if(a.type!==g)if(a.type===y){var c=s(a.chars,n);i.push.apply(i,c)}else i.push(a);else{i.push(a);var h=a.tagName.toUpperCase(),w="A"===h||m.contains(n.ignoreTags,h);if(!w)continue;var x=i.length;u(h,r,++t,i),t+=i.length-x-1}}for(t=0;t<i.length;t++){var C=i[t];switch(C.type){case g:var E="<"+C.tagName;if(C.attributes.length>0){var _=p(C.attributes);E+=" "+_.join(" ")}E+=">",o.push(E);break;case v:o.push("</"+C.tagName+">");break;case y:o.push(l(C.chars));break;case b:o.push("<!--"+l(C.chars)+"-->")}}return o.join("")}function s(e,t){for(var n=f.tokenize(e),r=[],i=0;i<n.length;i++){var o=n[i],a=o.isLink&&f.options.resolve(t.validate,o.toString(),o.type);if("nl"===o.type&&t.nl2br)r.push({type:g,tagName:"br",attributes:[],selfClosing:!0});else if(o.isLink&&a){var s=o.toHref(t.defaultProtocol),u=f.options.resolve(t.format,o.toString(),o.type),l=f.options.resolve(t.formatHref,s,o.type),c=f.options.resolve(t.attributes,s,o.type),p=f.options.resolve(t.tagName,s,o.type),h=f.options.resolve(t.linkClass,s,o.type),d=f.options.resolve(t.target,s,o.type),m=[["href",l],["class",h]];d&&m.push(["target",d]);for(var b in c)m.push([b,c[b]]);r.push({type:g,tagName:p,attributes:m,selfClosing:!1}),r.push({type:y,chars:u}),r.push({type:v,tagName:p})}else r.push({type:y,chars:o.toString()})}return r}function u(e,t,n,r){for(var i=1;n<t.length&&i>0;){var o=t[n];o.type===g&&o.tagName.toUpperCase()===e?i++:o.type===v&&o.tagName.toUpperCase()===e&&i--,r.push(o),n++}return r}function l(e){return e}function c(e){return e.replace(/"/g,"&quot;")}function p(e){for(var t=[],n=0;n<e.length;n++){var r=e[n],i=r[0],o=r[1];t.push(i+'="'+c(o)+'"')}return t}try{Object.defineProperty(t,"__esModule",{value:!0})}catch(h){t.__esModule=!0}t["default"]=a;var d=o(n),f=i(r),m=f.options,g="StartTag",v="EndTag",y="Chars",b="Comment";e.exports=t["default"]});