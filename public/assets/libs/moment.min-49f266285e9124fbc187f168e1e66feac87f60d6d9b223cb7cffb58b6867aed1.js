(function(e){function t(e,t){return function(n){return u(e.call(this,n),t)}}function n(e){return function(t){return this.lang().ordinal(e.call(this,t))}}function r(){}function i(e){a(this,e)}function o(e){var t=this._data={},n=e.years||e.year||e.y||0,r=e.months||e.month||e.M||0,i=e.weeks||e.week||e.w||0,o=e.days||e.day||e.d||0,a=e.hours||e.hour||e.h||0,u=e.minutes||e.minute||e.m||0,l=e.seconds||e.second||e.s||0,c=e.milliseconds||e.millisecond||e.ms||0;this._milliseconds=c+1e3*l+6e4*u+36e5*a,this._days=o+7*i,this._months=r+12*n,t.milliseconds=c%1e3,l+=s(c/1e3),t.seconds=l%60,u+=s(l/60),t.minutes=u%60,a+=s(u/60),t.hours=a%24,o+=s(a/24),o+=7*i,t.days=o%30,r+=s(o/30),t.months=r%12,n+=s(r/12),t.years=n}function a(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function s(e){return 0>e?Math.ceil(e):Math.floor(e)}function u(e,t){for(var n=e+"";n.length<t;)n="0"+n;return n}function l(e,t,n){var r,i=t._milliseconds,o=t._days,a=t._months;i&&e._d.setTime(+e+i*n),o&&e.date(e.date()+o*n),a&&(r=e.date(),e.date(1).month(e.month()+a*n).date(Math.min(r,e.daysInMonth())))}function c(e){return"[object Array]"===Object.prototype.toString.call(e)}function p(e,t){var n,r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),o=0;for(n=0;r>n;n++)~~e[n]!==~~t[n]&&o++;return o+i}function f(e,t){return t.abbr=e,P[e]||(P[e]=new r),P[e].set(t),P[e]}function h(e){return e?(!P[e]&&j&&require("./lang/"+e),P[e]):R.fn._lang}function d(e){return e.match(/\[.*\]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function m(e){var t,n,r=e.match($);for(t=0,n=r.length;n>t;t++)ie[r[t]]?r[t]=ie[r[t]]:r[t]=d(r[t]);return function(i){var o="";for(t=0;n>t;t++)o+="function"==typeof r[t].call?r[t].call(i,e):r[t];return o}}function g(e,t){function n(t){return e.lang().longDateFormat(t)||t}for(var r=5;r--&&F.test(t);)t=t.replace(F,n);return te[t]||(te[t]=m(t)),te[t](e)}function v(e){switch(e){case"DDDD":return H;case"YYYY":return q;case"YYYYY":return z;case"S":case"SS":case"SSS":case"DDD":return U;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return V;case"X":return X;case"Z":case"ZZ":return W;case"T":return Q;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return B;default:return new RegExp(e.replace("\\",""))}}function y(e,t,n){var r,i=n._a;switch(e){case"M":case"MM":i[1]=null==t?0:~~t-1;break;case"MMM":case"MMMM":r=h(n._l).monthsParse(t),null!=r?i[1]=r:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=t&&(i[2]=~~t);break;case"YY":i[0]=~~t+(~~t>68?1900:2e3);break;case"YYYY":case"YYYYY":i[0]=~~t;break;case"a":case"A":n._isPm="pm"===(t+"").toLowerCase();break;case"H":case"HH":case"h":case"hh":i[3]=~~t;break;case"m":case"mm":i[4]=~~t;break;case"s":case"ss":i[5]=~~t;break;case"S":case"SS":case"SSS":i[6]=~~(1e3*("0."+t));break;case"X":n._d=new Date(1e3*parseFloat(t));break;case"Z":case"ZZ":n._useUTC=!0,r=(t+"").match(J),r&&r[1]&&(n._tzh=~~r[1]),r&&r[2]&&(n._tzm=~~r[2]),r&&"+"===r[0]&&(n._tzh=-n._tzh,n._tzm=-n._tzm)}null==t&&(n._isValid=!1)}function b(e){var t,n,r=[];if(!e._d){for(t=0;7>t;t++)e._a[t]=r[t]=null==e._a[t]?2===t?1:0:e._a[t];r[3]+=e._tzh||0,r[4]+=e._tzm||0,n=new Date(0),e._useUTC?(n.setUTCFullYear(r[0],r[1],r[2]),n.setUTCHours(r[3],r[4],r[5],r[6])):(n.setFullYear(r[0],r[1],r[2]),n.setHours(r[3],r[4],r[5],r[6])),e._d=n}}function x(e){var t,n,r=e._f.match($),i=e._i;for(e._a=[],t=0;t<r.length;t++)n=(v(r[t]).exec(i)||[])[0],n&&(i=i.slice(i.indexOf(n)+n.length)),ie[r[t]]&&y(r[t],n,e);e._isPm&&e._a[3]<12&&(e._a[3]+=12),e._isPm===!1&&12===e._a[3]&&(e._a[3]=0),b(e)}function w(e){for(var t,n,r,o,s=99;e._f.length;){if(t=a({},e),t._f=e._f.pop(),x(t),n=new i(t),n.isValid()){r=n;break}o=p(t._a,n.toArray()),s>o&&(s=o,r=n)}a(e,r)}function C(e){var t,n=e._i;if(Y.exec(n)){for(e._f="YYYY-MM-DDT",t=0;4>t;t++)if(K[t][1].exec(n)){e._f+=K[t][0];break}W.exec(n)&&(e._f+=" Z"),x(e)}else e._d=new Date(n)}function E(t){var n=t._i,r=L.exec(n);n===e?t._d=new Date:r?t._d=new Date(+r[1]):"string"==typeof n?C(t):c(n)?(t._a=n.slice(0),b(t)):t._d=n instanceof Date?new Date(+n):new Date(n)}function S(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function _(e,t,n){var r=N(Math.abs(e)/1e3),i=N(r/60),o=N(i/60),a=N(o/24),s=N(a/365),u=45>r&&["s",r]||1===i&&["m"]||45>i&&["mm",i]||1===o&&["h"]||22>o&&["hh",o]||1===a&&["d"]||25>=a&&["dd",a]||45>=a&&["M"]||345>a&&["MM",N(a/30)]||1===s&&["y"]||["yy",s];return u[2]=t,u[3]=e>0,u[4]=n,S.apply({},u)}function T(e,t,n){var r=n-t,i=n-e.day();return i>r&&(i-=7),r-7>i&&(i+=7),Math.ceil(R(e).add("d",i).dayOfYear()/7)}function k(e){var t=e._i,n=e._f;return null===t||""===t?null:("string"==typeof t&&(e._i=t=h().preparse(t)),R.isMoment(t)?(e=a({},t),e._d=new Date(+t._d)):n?c(n)?w(e):x(e):E(e),new i(e))}function M(e,t){R.fn[e]=R.fn[e+"s"]=function(e){var n=this._isUTC?"UTC":"";return null!=e?(this._d["set"+n+t](e),this):this._d["get"+n+t]()}}function A(e){R.duration.fn[e]=function(){return this._data[e]}}function D(e,t){R.duration.fn["as"+e]=function(){return+this/t}}for(var R,O,I="2.0.0",N=Math.round,P={},j="undefined"!=typeof module&&module.exports,L=/^\/?Date\((\-?\d+)/i,$=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,F=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,B=/\d\d?/,U=/\d{1,3}/,H=/\d{3}/,q=/\d{1,4}/,z=/[+\-]?\d{1,6}/,V=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,W=/Z|[\+\-]\d\d:?\d\d/i,Q=/T/i,X=/[\+\-]?\d+(\.\d{1,3})?/,Y=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,G="YYYY-MM-DDTHH:mm:ssZ",K=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],J=/([\+\-]|\d\d)/gi,Z="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),ee={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},te={},ne="DDD w W M D d".split(" "),re="M D H h m s w W".split(" "),ie={M:function(){return this.month()+1},MMM:function(e){return this.lang().monthsShort(this,e)},MMMM:function(e){return this.lang().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.lang().weekdaysMin(this,e)},ddd:function(e){return this.lang().weekdaysShort(this,e)},dddd:function(e){return this.lang().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return u(this.year()%100,2)},YYYY:function(){return u(this.year(),4)},YYYYY:function(){return u(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return u(~~(this.milliseconds()/10),2)},SSS:function(){return u(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+u(~~(e/60),2)+":"+u(~~e%60,2)},ZZ:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+u(~~(10*e/6),4)},X:function(){return this.unix()}};ne.length;)O=ne.pop(),ie[O+"o"]=n(ie[O]);for(;re.length;)O=re.pop(),ie[O+O]=t(ie[O],2);for(ie.DDDD=t(ie.DDD,3),r.prototype={set:function(e){var t,n;for(n in e)t=e[n],"function"==typeof t?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var t,n,r;for(this._monthsParse||(this._monthsParse=[]),t=0;12>t;t++)if(this._monthsParse[t]||(n=R([2e3,t]),r="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[t]=new RegExp(r.replace(".",""),"i")),this._monthsParse[t].test(e))return t},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return"function"==typeof n?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,r){var i=this._relativeTime[n];return"function"==typeof i?i(e,t,n,r):i.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return"function"==typeof n?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return T(e,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}},R=function(e,t,n){return k({_i:e,_f:t,_l:n,_isUTC:!1})},R.utc=function(e,t,n){return k({_useUTC:!0,_isUTC:!0,_l:n,_i:e,_f:t})},R.unix=function(e){return R(1e3*e)},R.duration=function(e,t){var n,r=R.isDuration(e),i="number"==typeof e,a=r?e._data:i?{}:e;return i&&(t?a[t]=e:a.milliseconds=e),n=new o(a),r&&e.hasOwnProperty("_lang")&&(n._lang=e._lang),n},R.version=I,R.defaultFormat=G,R.lang=function(e,t){return e?(t?f(e,t):P[e]||h(e),void(R.duration.fn._lang=R.fn._lang=h(e))):R.fn._lang._abbr},R.langData=function(e){return e&&e._lang&&e._lang._abbr&&(e=e._lang._abbr),h(e)},R.isMoment=function(e){return e instanceof i},R.isDuration=function(e){return e instanceof o},R.fn=i.prototype={clone:function(){return R(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return R.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return null==this._isValid&&(this._a?this._isValid=!p(this._a,(this._isUTC?R.utc(this._a):R(this._a)).toArray()):this._isValid=!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(e){var t=g(this,e||R.defaultFormat);return this.lang().postformat(t)},add:function(e,t){var n;return n="string"==typeof e?R.duration(+t,e):R.duration(e,t),l(this,n,1),this},subtract:function(e,t){var n;return n="string"==typeof e?R.duration(+t,e):R.duration(e,t),l(this,n,-1),this},diff:function(e,t,n){var r,i,o=this._isUTC?R(e).utc():R(e).local(),a=6e4*(this.zone()-o.zone());return t&&(t=t.replace(/s$/,"")),"year"===t||"month"===t?(r=432e5*(this.daysInMonth()+o.daysInMonth()),i=12*(this.year()-o.year())+(this.month()-o.month()),i+=(this-R(this).startOf("month")-(o-R(o).startOf("month")))/r,"year"===t&&(i/=12)):(r=this-o-a,i="second"===t?r/1e3:"minute"===t?r/6e4:"hour"===t?r/36e5:"day"===t?r/864e5:"week"===t?r/6048e5:r),n?i:s(i)},from:function(e,t){return R.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)},fromNow:function(e){return this.from(R(),e)},calendar:function(){var e=this.diff(R().startOf("day"),"days",!0),t=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse";return this.format(this.lang().calendar(t,this))},isLeapYear:function(){var e=this.year();return e%4===0&&e%100!==0||e%400===0},isDST:function(){return this.zone()<R([this.year()]).zone()||this.zone()<R([this.year(),5]).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null==e?t:this.add({d:e-t})},startOf:function(e){switch(e=e.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.day(0),this},endOf:function(e){return this.startOf(e).add(e.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)>+R(e).startOf(t)},isBefore:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)<+R(e).startOf(t)},isSame:function(e,t){return t="undefined"!=typeof t?t:"millisecond",+this.clone().startOf(t)===+R(e).startOf(t)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return R.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(e){var t=N((R(this).startOf("day")-R(this).startOf("year"))/864e5)+1;return null==e?t:this.add("d",e-t)},isoWeek:function(e){var t=T(this,1,4);return null==e?t:this.add("d",7*(e-t))},week:function(e){var t=this.lang().week(this);return null==e?t:this.add("d",7*(e-t))},lang:function(t){return t===e?this._lang:(this._lang=h(t),this)}},O=0;O<Z.length;O++)M(Z[O].toLowerCase().replace(/s$/,""),Z[O]);M("year","FullYear"),R.fn.days=R.fn.day,R.fn.weeks=R.fn.week,R.fn.isoWeeks=R.fn.isoWeek,R.duration.fn=o.prototype={weeks:function(){return s(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*this._months},humanize:function(e){var t=+this,n=_(t,!e,this.lang());return e&&(n=this.lang().pastFuture(t,n)),this.lang().postformat(n)},lang:R.fn.lang};for(O in ee)ee.hasOwnProperty(O)&&(D(O,ee[O]),A(O.toLowerCase()));D("Weeks",6048e5),R.lang("en",{ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),j&&(module.exports=R),"undefined"==typeof ender&&(this.moment=R),"function"==typeof define&&define.amd&&define("moment",[],function(){return R})}).call(this);