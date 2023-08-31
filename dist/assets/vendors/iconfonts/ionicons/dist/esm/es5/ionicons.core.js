/*! For license information please see ionicons.core.js.LICENSE.txt */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,o=null,i=!1,s=!1,u=arguments.length;u-- >2;)k.push(arguments[u]);for(;k.length>0;){var c=k.pop();if(c&&void 0!==c.pop)for(u=c.length;u--;)k.push(c[u]);else"boolean"==typeof c&&(c=null),(s="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(s=!1)),s&&i?o[o.length-1].vtext+=c:null===o?o=[s?{vtext:c}:c]:o.push(s?{vtext:c}:c),i=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(u in t.class)t.class[u]&&k.push(u);t.class=k.join(" "),k.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,o||[],$):{vtag:n,vchildren:o,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],o=n.document,i=e.hydratedCssClass||"hydrated",s=e.exclude;s&&(r=r.filter((function(n){return-1===s.indexOf(n[0])})));var u=r.map((function(n){return n[0]}));if(u.length>0){var c=o.createElement("style");c.innerHTML=u.join()+"{visibility:hidden}."+i+"{visibility:inherit}",c.setAttribute("data-styles",""),o.head.insertBefore(c,o.head.firstChild)}var l=e.namespace||"ionicons";return F||(F=!0,function(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function(){function t(t){if(e.nodeName.indexOf("-")>0){for(var r=n["s-apps"],o=0,i=0;i<r.length;i++)if(n[r[i]].componentOnReady){if(n[r[i]].componentOnReady(e,t))return;o++}if(o<r.length)return void(n["s-cr"]=n["s-cr"]||[]).push([e,t])}t(null)}var e=this;return n.Promise?new n.Promise(t):{then:t}})}(n,l,n.HTMLElement.prototype)),applyPolyfills(n).then((function(){function t(){r.forEach((function(t){var e;!function(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),D[l].u(function(n){var t=A(n),e=t.s,r=p(n[0]);return t.s=function(n){var t=n.mode,o=n.scoped;return function(n,t,e){return import("./build/"+n+(t?".sc":"")+".entry.js").then((function(n){return n[e]}))}("string"==typeof e?e:e[t],o,r)},t}(t),e)}))}if(!D[l]){var s={},u=e.resourcesUrl||"./";f(l,s,n,o,u,i),D[l]=L(l,s,n,o,u,i,r)}if(window.customStyleShim)return D[l].l=window.customStyleShim,D[l].l.initShim().then(t);t()}))}this&&this.v;var i=this&&this.p||function(n,t,e,r){return new(e||(e=Promise))((function(o,i){function s(n){try{c(r.next(n))}catch(n){i(n)}}function u(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){n.done?o(n.value):new e((function(t){t(n.value)})).then(s,u)}c((r=r.apply(n,t||[])).next())}))},o=this&&this.m||function(n,t){function e(e){return function(s){return function(e){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,o&&(i=2&e[0]?o.return:e[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,e[1])).done)return i;switch(o=0,i&&(e=[2&e[0],i.value]),e[0]){case 0:case 1:i=e;break;case 4:return u.label++,{value:e[1],done:!1};case 5:u.label++,o=e[1],e=[0];continue;case 7:e=u.M.pop(),u.g.pop();continue;default:if(!(i=(i=u.g).length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){u=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){u.label=e[1];break}if(6===e[0]&&u.label<i[1]){u.label=i[1],i=e;break}if(i&&u.label<i[2]){u.label=i[2],u.M.push(e);break}i[2]&&u.M.pop(),u.g.pop();continue}e=t.call(n,u)}catch(n){e=[6,n],o=0}finally{r=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,s])}}var r,o,i,s,u={label:0,j:function(){if(1&i[0])throw i[1];return i[1]},g:[],M:[]};return s={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},u=this,f=function(){};function applyPolyfills(n){n.k=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<m;n+=2)(0,x[n])(x[n+1]),x[n]=void 0,x[n+1]=void 0;m=0}function r(n,t){var e=this,r=new this.constructor(i);void 0===r[L]&&d(r);var o=e.A;if(o){var s=arguments[o-1];C((function(){return v(o,r,s,e.C)}))}else h(e,r,n,t);return r}function o(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(i);return c(t,n),t}function i(){}function s(n){try{return n.then}catch(n){return P.error=n,P}}function u(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===o?function(n,t){t.A===W?a(n,t.C):t.A===N?f(n,t.C):h(t,void 0,(function(t){return c(n,t)}),(function(t){return f(n,t)}))}(n,t):e===P?(f(n,P.error),P.error=null):void 0===e?a(n,t):"function"==typeof e?function(n,t,e){C((function(n){var r=!1,o=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,(function(e){r||(r=!0,t!==e?c(n,e):a(n,e))}),(function(t){r||(r=!0,f(n,t))}),n.O);!r&&o&&(r=!0,f(n,o))}),n)}(n,t,e):a(n,t)}function c(n,t){if(n===t)f(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?a(n,t):u(n,t,s(t))}}function l(n){n.S&&n.S(n.C),p(n)}function a(n,t){n.A===R&&(n.C=t,n.A=W,0!==n._.length&&C(p,n))}function f(n,t){n.A===R&&(n.A=N,n.C=t,C(l,n))}function h(n,t,e,r){var o=n._,i=o.length;n.S=null,o[i]=t,o[i+W]=e,o[i+N]=r,0===i&&n.A&&C(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,o,i=n.C,s=0;s<t.length;s+=3)r=t[s],o=t[s+e],r?v(e,r,o,i):o(i);n._.length=0}}function v(n,t,e,r){var o="function"==typeof e,i=void 0,s=void 0,u=void 0,l=void 0;if(o){try{i=e(r)}catch(n){P.error=n,i=P}if(i===P?(l=!0,s=i.error,i.error=null):u=!0,t===i)return void f(t,new TypeError("Cannot return same promise"))}else i=r,u=!0;t.A===R&&(o&&u?c(t,i):l?f(t,s):n===W?a(t,i):n===N&&f(t,i))}function d(n){n[L]=T++,n.A=void 0,n.C=void 0,n._=[]}var y,g=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},m=0,b=void 0,w=void 0,C=function(n,t){x[m]=n,x[m+1]=t,2===(m+=2)&&(w?w(e):O())},k=(y=void 0!==n?n:void 0)||{},E=k.MutationObserver||k.WebKitMutationObserver;k="undefined"==typeof self;var A,M,j,S="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,x=Array(1e3),O=void 0;O=E?(A=0,M=new E(e),j=document.createTextNode(""),M.observe(j,{characterData:!0}),function(){j.data=A=++A%2}):S?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().T("vertx");return void 0!==(b=n.W||n.P)?function(){b(e)}:t()}catch(n){return t()}}():t();var L=Math.random().toString(36).substring(2),R=void 0,W=1,N=2,P={error:null},T=0,J=function(){function n(n,t){this.N=n,this.R=new n(i),this.R[L]||d(this.R),g(t)?(this.L=this.length=t.length,this.C=Array(this.length),0===this.length?a(this.R,this.C):(this.length=this.length||0,this.D(t),0===this.L&&a(this.R,this.C))):f(this.R,Error("Array Methods must be provided an Array"))}return n.prototype.D=function(n){for(var t=0;this.A===R&&t<n.length;t++)this.F(n[t],t)},n.prototype.F=function(n,t){var e=this.N,c=e.resolve;c===o?(c=s(n))===r&&n.A!==R?this.H(n.A,t,n.C):"function"!=typeof c?(this.L--,this.C[t]=n):e===q?(u(e=new e(i),n,c),this.q(e,t)):this.q(new e((function(t){return t(n)})),t):this.q(c(n),t)},n.prototype.H=function(n,t,e){var r=this.R;r.A===R&&(this.L--,n===N?f(r,e):this.C[t]=e),0===this.L&&a(r,this.C)},n.prototype.q=function(n,t){var e=this;h(n,void 0,(function(n){return e.H(W,t,n)}),(function(n){return e.H(N,t,n)}))},n}(),q=function(){function n(t){if(this[L]=T++,this.C=this.A=void 0,this._=[],i!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t((function(t){c(n,t)}),(function(t){f(n,t)}))}catch(t){f(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then((function(e){return t.resolve(n()).then((function(){return e}))}),(function(e){return t.resolve(n()).then((function(){throw e}))}))},n}();return q.prototype.then=r,q.all=function(n){return new J(this,n).R},q.race=function(n){var t=this;return g(n)?new t((function(e,r){for(var o=n.length,i=0;i<o;i++)t.resolve(n[i]).then(e,r)})):new t((function(n,t){return t(new TypeError("Must pass array to race"))}))},q.resolve=o,q.reject=function(n){var t=new this(i);return f(t,n),t},q.U=function(n){w=n},q.B=function(n){C=n},q.I=C,q.G=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=q},q.Promise=q,q.G(),q}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||t.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||t.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||t.push(import("./polyfills/string.js")),n.fetch||t.push(import("./polyfills/fetch.js")),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(import("./polyfills/css-shim.js")),function(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(import("./polyfills/url.js")),Promise.all(t).then((function(t){t.forEach((function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}}))}))}var c="$",a={},s=function(t,e,r,o){var i=r.t+c,s=r[i];if((2===r.Y||1===r.Y&&!t.J.Z)&&(o["s-sc"]=s?n(r,o.mode):n(r)),s){var u=e.K.head;if(e.Z)if(1===r.Y)u=o.shadowRoot;else{var l=o.getRootNode();l.host&&(u=l)}var a=t.V.get(u);if(a||t.V.set(u,a={}),!a[i]){var f=void 0;if(t.l?f=t.l.createHostStyle(o,i,s):((f=e.X("style")).innerHTML=s,a[i]=!0),f){var h=u.querySelectorAll("[data-styles]");e.nn(u,f,h.length&&h[h.length-1].nextSibling||u.firstChild)}}}},l=function(n){return null!=n},v=function(n){return n.toLowerCase()},p=function(n){return v(n).split("-").map((function(n){return n.charAt(0).toUpperCase()+n.slice(1)})).join("")},d=function(n,t,e,r,o){void 0===r&&(r="boolean"==typeof e),o=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?o?n.removeAttributeNS(h,v(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),o?n.setAttributeNS(h,v(t),e):n.setAttribute(t,e))},h="http://www.w3.org/1999/xlink",y=function(n,t,e,r,o,i,s){if("class"!==e||i)if("style"===e){for(var u in r)o&&null!=o[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in o)r&&o[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,o[u]):t.style[u]=o[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!i&&(e in t||-1!==["object","function"].indexOf(typeof o)&&null!==o)){var c=n.tn(t);c&&c.en&&c.en[e]?(b(t,e,o),s&&c.en[e].rn&&d(t,c.en[e].in,o,4===c.en[e].on)):"ref"!==e&&(b(t,e,null==o?"":o),null!=o&&!1!==o||n.J.un(t,e))}else null!=o&&"key"!==e?d(t,e,o):(i||n.J.fn(t,e)&&(null==o||!1===o))&&n.J.un(t,e);else e=v(e)in t?v(e.substring(2)):v(e[2])+e.substring(3),o?o!==r&&n.J.cn(t,e,o,0):n.J.an(t,e,0);else if(r!==o){var l=w(r),a=w(o),f=l.filter((function(n){return!a.includes(n)})),h=w(t.className).filter((function(n){return!f.includes(n)})),p=a.filter((function(n){return!l.includes(n)&&!h.includes(n)}));h.push.apply(h,p),t.className=h.join(" ")}},w=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},b=function(n,t,e){try{n[t]=e}catch(n){}},m=function(n,t,e,r,o){var i=11===e.i.nodeType&&e.i.host?e.i.host:e.i,s=t&&t.vattrs||a,u=e.vattrs||a;for(o in s)u&&null!=u[o]||null==s[o]||y(n,i,o,s[o],void 0,r,e.o);for(o in u)o in s&&u[o]===("value"===o||"checked"===o?i[o]:s[o])||y(n,i,o,s[o],u[o],r,e.o)},M=!1,g=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach((function(n){g(n,t)})))},j=function(n,t){var e=0,r=!1,o=function(){return t.performance.now()},i=!1!==n.asyncQueue,s=Promise.resolve(),u=[],c=[],l=[],a=[],f=function(t){return function(e){t.push(e),r||(r=!0,n.raf(v))}},h=function(n){for(var t=0;t<n.length;t++)try{n[t](o())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=o())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},v=function(){e++,h(c);var t=i?o()+7*Math.ceil(e*(1/22)):1/0;p(l,t),p(a,t),l.length>0&&(a.push.apply(a,l),l.length=0),(r=c.length+l.length+a.length>0)?n.raf(v):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){u.push(n),1===u.length&&s.then((function(){return h(u)}))},read:f(c),write:f(l)}},k=[],$={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},A=function(n,t,e){var r=n[0],o=n[1],i=n[3],s=n[4],u=n[5],c={color:{in:"color"}};if(i)for(t=0;t<i.length;t++)c[(e=i[t])[0]]={sn:e[1],rn:!!e[2],in:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,on:e[4]};return{t:r,s:o,en:Object.assign({},c),Y:s,ln:u?u.map(E):void 0}},E=function(n){return{vn:n[0],pn:n[1],dn:!!n[2],hn:!!n[3],yn:!!n[4]}},C=function(n,t){return l(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},O=function(n,t,e){n.wn.add(t),n.bn.has(t)||(n.bn.set(t,!0),n.mn?n.queue.write((function(){return S(n,t,e)})):n.queue.tick((function(){return S(n,t,e)})))},S=function(n,r,s,c,l,a){return i(u,void 0,void 0,(function(){var i,u;return o(this,(function(o){switch(o.label){case 0:if(n.bn.delete(r),n.Mn.has(r))return[3,12];if(l=n.gn.get(r))return[3,6];if((a=n.jn.get(r))&&!a["s-rn"])return(a["s-rc"]=a["s-rc"]||[]).push((function(){S(n,r,s)})),[2];if(!(l=P(n,r,n.kn.get(r),s)))return[3,5];o.label=1;case 1:return o.g.push([1,4,,5]),l.componentWillLoad?[4,l.componentWillLoad()]:[3,3];case 2:o.j(),o.label=3;case 3:return[3,5];case 4:return i=o.j(),n.$n(i,3,r),[3,5];case 5:case 6:return[3,11];case 7:return o.g.push([7,10,,11]),l.componentWillUpdate?[4,l.componentWillUpdate()]:[3,9];case 8:o.j(),o.label=9;case 9:return[3,11];case 10:return u=o.j(),n.$n(u,5,r),[3,11];case 11:(function(n,r,o,i){try{var s,u=r.An.host,c=r.An.encapsulation,l="shadow"===c&&n.J.Z,a=o;if(s=function(n,t,e){return n&&Object.keys(n).forEach((function(r){n[r].reflectToAttr&&((e=e||{})[r]=t[r])})),e}(r.An.properties,i),l&&(a=o.shadowRoot),!o["s-rn"]){n.En(n,n.J,r,o);var f=o["s-sc"];f&&(n.J.Cn(o,t(f,!0)),"scoped"===c&&n.J.Cn(o,t(f)))}if(i.render||i.hostData||u||s){n.On=!0;var h=i.render&&i.render(),p=void 0;p=i.hostData&&i.hostData(),s&&(p=p?Object.assign(p,s):s),n.On=!1;var v=e(null,p,h),d=n.Sn.get(o)||{};d.i=a,v.o=!0,n.Sn.set(o,n.render(o,d,v,l,c))}n.l&&n.l.updateHost(o),o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach((function(n){return n()})),o["s-rc"]=null)}catch(t){n.On=!1,n.$n(t,8,o,!0)}})(n,n.tn(r),r,l),r["s-init"](),o.label=12;case 12:return[2]}}))}))},_=function(n,t,e,r,o,i,s){(s=n._n.get(t))||n._n.set(t,s={});var u=s[e];if(r!==u&&(s[e]=r,i=n.gn.get(t))){var c=s[x+e];if(c)for(var l=0;l<c.length;l++)try{i[c[l]].call(i,r,u,e)}catch(n){console.error(n)}!n.On&&t["s-rn"]&&O(n,t,o)}},T=function(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})},W=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},x="wc-",P=function(n,t,e,r,o,i){try{o=new(i=n.tn(t).An),function(n,t,e,r,o,i){n.Tn.set(r,e),n._n.has(e)||n._n.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach((function(t){var s=t[0],u=t[1];!function(n,t,e,r,o,i,s,u,c){if(t.type||t.state){var a=n._n.get(e);t.state||(!t.attr||void 0!==a[o]&&""!==a[o]||(u=i&&i.Wn)&&l(c=u[t.attr])&&(a[o]=C(t.type,c)),e.hasOwnProperty(o)&&(void 0===a[o]&&(a[o]=C(t.type,e[o])),"mode"!==o&&delete e[o])),r.hasOwnProperty(o)&&void 0===a[o]&&(a[o]=r[o]),t.watchCallbacks&&(a[x+o]=t.watchCallbacks.slice()),W(r,o,(function(t){return(t=n._n.get(n.Tn.get(this)))&&t[o]}),(function(e,r){(r=n.Tn.get(this))&&(t.state||t.mutable)&&_(n,r,o,e,s)}))}else if(t.elementRef)T(r,o,e);else if(t.context){var f=n.xn(t.context);void 0!==f&&T(r,o,f.getContext&&f.getContext(e)||f)}}(n,u,e,r,s,o,i)}))}(n,i,t,o,e,r)}catch(e){o={},n.$n(e,7,t,!0)}return n.gn.set(t,o),o},N=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.tn(r)&&!n.Pn.has(r))return!1;if(!N(n,r))return!1}}return!0},R=function(n,t,e,r,o,i){if(n.wn.delete(t),(o=n.jn.get(t))&&((r=o["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||o["s-init"]&&o["s-init"]()),n.jn.delete(t)),n.Nn.length&&!n.wn.size)for(;i=n.Nn.shift();)i()},L=function(n,t,r,o,i,u){var a=r.performance,f={html:{}},h=r[n]=r[n]||{},p=function(n,t,e){var r=new WeakMap,o={K:e,Z:!!e.documentElement.attachShadow,Rn:!1,Ln:function(n){return n.nodeType},X:function(n){return e.createElement(n)},Dn:function(n,t){return e.createElementNS(n,t)},Fn:function(n){return e.createTextNode(n)},Hn:function(n){return e.createComment(n)},nn:function(n,t,e){return n.insertBefore(t,e)},qn:function(n){return n.remove()},Un:function(n,t){return n.appendChild(t)},Cn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},Bn:function(n){return n.childNodes},In:function(n){return n.parentNode},Gn:function(n){return n.nextSibling},Qn:function(n){return n.previousSibling},Yn:function(n){return v(n.nodeName)},Zn:function(n){return n.textContent},zn:function(n,t){return n.textContent=t},Jn:function(n,t){return n.getAttribute(t)},Kn:function(n,t,e){return n.setAttribute(t,e)},un:function(n,t){return n.removeAttribute(t)},fn:function(n,t){return n.hasAttribute(t)},Vn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Xn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?o.nt(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},cn:function(t,e,i,s,u,c,l,a,f,h){var p=t,v=i,d=r.get(t);h=e+s,d&&d[h]&&d[h](),"object"==typeof l&&(p=l),p&&(a=o.Rn?{capture:!!u,passive:!!c}:!!u,n.ael(p,e,v,a),d||r.set(t,d={}),d[h]=function(){p&&n.rel(p,e,v,a),d[h]=null})},an:function(n,t,e,o){(o=r.get(n))&&(t?o[t+e]&&o[t+e]():Object.keys(o).forEach((function(n){o[n]&&o[n]()})))},tt:function(n,e,r,o){return o=new t.CustomEvent(e,r),n&&n.dispatchEvent(o),o},nt:function(n,t){return(t=o.In(n))&&11===o.Ln(t)?t.host:t},et:function(n,t,e,r){return n.setAttributeNS(t,e,r)},rt:function(n,t){return n.attachShadow(t)}};return"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)}),o}(h,r,o),d=p.K.documentElement,y=r["s-defined"]=r["s-defined"]||{},b={J:p,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,o){if(e.connectedCallback=function(){!function(n,t,e){n.Mn.delete(e),n.Pn.has(e)||(n.it=!0,n.wn.add(e),n.Pn.set(e,!0),function(n,t,e){for(e=t;e=n.J.nt(e);)if(n.ot(e)){n.ut.has(t)||(n.jn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick((function(){n.kn.set(e,function(n,t,e,r,o){return e.mode||(e.mode=n.Vn(e)),e["s-cr"]||n.Jn(e,"ssrv")||n.Z&&1===t.Y||(e["s-cr"]=n.Fn(""),e["s-cr"]["s-cn"]=!0,n.nn(e,e["s-cr"],n.Bn(e)[0])),n.Z||1!==t.Y||!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e),1===t.Y&&n.Z&&!e.shadowRoot&&n.rt(e,{mode:"open"}),r={Wn:{}},t.en&&Object.keys(t.en).forEach((function(i){(o=t.en[i].in)&&(r.Wn[o]=n.Jn(e,o))})),r}(n.J,t,e)),n.ft(t,e)})))}(n,t,this)},e.disconnectedCallback=function(){!function(n,t){if(!n.ct&&function(n,t){for(;t;){if(!n.In(t))return 9!==n.Ln(t);t=n.In(t)}}(n.J,t)){n.Mn.set(t,!0),R(n,t),g(n.Sn.get(t),!0);var e=n.gn.get(t);e&&e.componentDidUnload&&e.componentDidUnload(),n.J.an(t),n.at.delete(t),n.l&&n.l.removeHost(t),[n.jn,n.st,n.kn].forEach((function(n){return n.delete(t)}))}}(n,this)},e["s-init"]=function(){!function(n,t,e,r,o,i){if(N(n,t)&&n.gn.get(t)&&!n.Mn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ut.set(t,!0),n.lt.has(t)||(n.lt.set(t,!0),t["s-ld"]=void 0,n.J.Cn(t,e));try{g(n.Sn.get(t)),(i=n.st.get(t))&&(i.forEach((function(n){return n(t)})),n.st.delete(t))}catch(e){n.$n(e,4,t)}R(n,t)}}(n,this,r)},e.forceUpdate=function(){O(n,this,o)},t.en){var i=Object.entries(t.en),s={};i.forEach((function(n){var t=n[0],e=n[1].in;e&&(s[e]=t)})),s=Object.assign({},s),e.attributeChangedCallback=function(n,t,e){!function(n,t,e,r){var o=n[v(e)];o&&(t[o]=r)}(s,this,n,e)},function(n,t,e,r){i.forEach((function(t){var o=t[0],i=t[1];3&i.sn&&W(e,o,(function(){return(n._n.get(this)||{})[o]}),(function(t){_(n,this,o,C(i.on,t),r)}))}))}(n,0,e,o)}}(b,f[n.t]=n,t.prototype,u,a),t.observedAttributes=Object.values(n.en).map((function(n){return n.in})).filter((function(n){return!!n})),r.customElements.define(n.t,t))},tn:function(n){return f[p.Yn(n)]},xn:function(n){return t[n]},isClient:!0,ot:function(n){return!(!y[p.Yn(n)]&&!b.tn(n))},$n:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=j(h,r),ft:function(n,t){var e=!p.Z,r={mode:t.mode,scoped:e};n.s(r).then((function(e){try{n.An=e,function(n,t,e,r,o){if(r){var i=t.t+(o||c);t[i]||(t[i]=r)}}(0,n,n.Y,e.style,e.styleMode)}catch(t){console.error(t),n.An=function(){}}O(b,t,a)}))},On:!1,mn:!1,ct:!1,En:s,jn:new WeakMap,V:new WeakMap,Pn:new WeakMap,at:new WeakMap,lt:new WeakMap,ut:new WeakMap,Tn:new WeakMap,kn:new WeakMap,gn:new WeakMap,Mn:new WeakMap,bn:new WeakMap,st:new WeakMap,vt:new WeakMap,Sn:new WeakMap,_n:new WeakMap,wn:new Set,Nn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=o,t.resourcesUrl=t.publicPath=i,h.h=e,h.Context=t,h.onReady=function(){return new Promise((function(n){return b.queue.write((function(){return b.wn.size?b.Nn.push(n):n()}))}))},b.render=function(n,t){var e,r,o,i,s,u,c,a=function(o,h,p,v,d,y,g,b,w){if(b=h.vchildren[p],e||(i=!0,"slot"===b.vtag&&(r&&t.Cn(v,r+"-s"),b.vchildren?b.pt=!0:b.dt=!0)),l(b.vtext))b.i=t.Fn(b.vtext);else if(b.dt)b.i=t.Fn("");else{if(y=b.i=M||"svg"===b.vtag?t.Dn("http://www.w3.org/2000/svg",b.vtag):t.X(b.pt?"slot-fb":b.vtag),n.ot(y)&&n.ut.delete(c),M="svg"===b.vtag||"foreignObject"!==b.vtag&&M,m(n,null,b,M),l(r)&&y["s-si"]!==r&&t.Cn(y,y["s-si"]=r),b.vchildren)for(d=0;d<b.vchildren.length;++d)(g=a(o,b,d,y))&&t.Un(y,g);"svg"===b.vtag&&(M=!1)}return b.i["s-hn"]=u,(b.pt||b.dt)&&(b.i["s-sr"]=!0,b.i["s-cr"]=s,b.i["s-sn"]=b.vname||"",(w=o&&o.vchildren&&o.vchildren[p])&&w.vtag===b.vtag&&o.i&&f(o.i)),b.i},f=function(e,r,o,s){n.ct=!0;var c=t.Bn(e);for(o=c.length-1;o>=0;o--)(s=c[o])["s-hn"]!==u&&s["s-ol"]&&(t.qn(s),t.nn(y(s),s,d(s)),t.qn(s["s-ol"]),s["s-ol"]=null,i=!0),r&&f(s,r);n.ct=!1},h=function(n,e,r,o,i,s,c,f){var h=n["s-cr"];for((c=h&&t.In(h)||n).shadowRoot&&t.Yn(c)===u&&(c=c.shadowRoot);i<=s;++i)o[i]&&(f=l(o[i].vtext)?t.Fn(o[i].vtext):a(null,r,i,n))&&(o[i].i=f,t.nn(c,f,d(e)))},p=function(n,e,r,i){for(;e<=r;++e)l(n[e])&&(i=n[e].i,o=!0,i["s-ol"]?t.qn(i["s-ol"]):f(i,!0),t.qn(i))},v=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},d=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.In(n["s-ol"]?n["s-ol"]:n)},g=function(e,r,o){var i=r.i=e.i,s=e.vchildren,u=r.vchildren;M=r.i&&l(t.nt(r.i))&&void 0!==r.i.ownerSVGElement,M="svg"===r.vtag||"foreignObject"!==r.vtag&&M,l(r.vtext)?(o=i["s-cr"])?t.zn(t.In(o),r.vtext):e.vtext!==r.vtext&&t.zn(i,r.vtext):("slot"!==r.vtag&&m(n,e,r,M),l(s)&&l(u)?function(n,e,r,o,i,s,u,c){for(var m=0,b=0,w=e.length-1,C=e[0],k=e[w],E=o.length-1,A=o[0],M=o[E];m<=w&&b<=E;)if(null==C)C=e[++m];else if(null==k)k=e[--w];else if(null==A)A=o[++b];else if(null==M)M=o[--E];else if(v(C,A))g(C,A),C=e[++m],A=o[++b];else if(v(k,M))g(k,M),k=e[--w],M=o[--E];else if(v(C,M))"slot"!==C.vtag&&"slot"!==M.vtag||f(t.In(C.i)),g(C,M),t.nn(n,C.i,t.Gn(k.i)),C=e[++m],M=o[--E];else if(v(k,A))"slot"!==C.vtag&&"slot"!==M.vtag||f(t.In(k.i)),g(k,A),t.nn(n,k.i,C.i),k=e[--w],A=o[++b];else{for(i=null,s=m;s<=w;++s)if(e[s]&&l(e[s].vkey)&&e[s].vkey===A.vkey){i=s;break}l(i)?((c=e[i]).vtag!==A.vtag?u=a(e&&e[b],r,i,n):(g(c,A),e[i]=void 0,u=c.i),A=o[++b]):(u=a(e&&e[b],r,b,n),A=o[++b]),u&&t.nn(y(C.i),u,d(C.i))}m>w?h(n,null==o[E+1]?null:o[E+1].i,r,o,b,E):b>E&&p(e,m,w)}(i,s,r,u):l(u)?(l(e.vtext)&&t.zn(i,""),h(i,null,r,u,0,u.length-1)):l(s)&&p(s,0,s.length-1)),M&&"svg"===r.vtag&&(M=!1)},b=function(n,e,r,o,i,s,u,c){for(o=0,i=(r=t.Bn(n)).length;o<i;o++)if(e=r[o],1===t.Ln(e)){if(e["s-sr"])for(u=e["s-sn"],e.hidden=!1,s=0;s<i;s++)if(r[s]["s-hn"]!==e["s-hn"])if(c=t.Ln(r[s]),""!==u){if(1===c&&u===t.Jn(r[s],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.Zn(r[s]).trim()){e.hidden=!0;break}b(e)}},w=[],C=function(n,e,r,i,s,u,c,l,a,f){for(s=0,u=(e=t.Bn(n)).length;s<u;s++){if((r=e[s])["s-sr"]&&(i=r["s-cr"]))for(l=t.Bn(t.In(i)),a=r["s-sn"],c=l.length-1;c>=0;c--)(i=l[c])["s-cn"]||i["s-nr"]||i["s-hn"]===r["s-hn"]||((3===(f=t.Ln(i))||8===f)&&""===a||1===f&&null===t.Jn(i,"slot")&&""===a||1===f&&t.Jn(i,"slot")===a)&&(w.some((function(n){return n.ht===i}))||(o=!0,i["s-sn"]=a,w.push({yt:r,ht:i})));1===t.Ln(r)&&C(r)}};return function(l,a,f,h,p,v,d,y,m,k,E,A){if(c=l,u=t.Yn(c),s=c["s-cr"],e=h,r=c["s-sc"],i=o=!1,g(a,f),i){for(C(f.i),d=0;d<w.length;d++)(y=w[d]).ht["s-ol"]||((m=t.Fn(""))["s-nr"]=y.ht,t.nn(t.In(y.ht),y.ht["s-ol"]=m,y.ht));for(n.ct=!0,d=0;d<w.length;d++){for(y=w[d],E=t.In(y.yt),A=t.Gn(y.yt),m=y.ht["s-ol"];m=t.Qn(m);)if((k=m["s-nr"])&&k&&k["s-sn"]===y.ht["s-sn"]&&E===t.In(k)&&(k=t.Gn(k))&&k&&!k["s-nr"]){A=k;break}(!A&&E!==t.In(y.ht)||t.Gn(y.ht)!==A)&&y.ht!==A&&(t.qn(y.ht),t.nn(E,y.ht,A))}n.ct=!1}return o&&b(f.i),w.length=0,f}}(b,p),d["s-ld"]=[],d["s-rn"]=!0,d["s-init"]=function(){b.ut.set(d,h.loaded=b.mn=!0),p.tt(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,o,i){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.tn(t);if(r)if(n.ut.has(t))e(t);else{var o=n.st.get(t)||[];o.push(e),n.st.set(t,o)}return!!r},o){for(i=o.length-1;i>=0;i--)t.componentOnReady(o[i][0],o[i][1])&&o.splice(i,1);for(i=0;i<r.length;i++)if(!e[r[i]].componentOnReady)return;for(i=0;i<o.length;i++)o[i][1](null);o.length=0}}(b,h,r,r["s-apps"],r["s-cr"]),h.initialized=!0,b},D={},F=!1;export{r as defineCustomElement,e as h};