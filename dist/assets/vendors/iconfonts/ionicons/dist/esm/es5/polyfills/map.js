/*! For license information please see map.js.LICENSE.txt */
export function applyPolyfill(e,t){!function(e){function t(e,t){function i(e){if(!this||this.constructor!==i)return new i(e);this._keys=[],this._values=[],this._itp=[],this.objectOnly=t,e&&n.call(this,e)}return t||_(e,"size",{get:p}),e.constructor=i,i.prototype=e,i}function n(e){this.add?e.forEach(this.add,this):e.forEach((function(e){this.set(e[0],e[1])}),this)}function i(e){return this.has(e)&&(this._keys.splice(d,1),this._values.splice(d,1),this._itp.forEach((function(e){d<e[0]&&e[0]--}))),-1<d}function s(e){return this.has(e)?this._values[d]:void 0}function u(e,t){if(this.objectOnly&&t!==Object(t))throw new TypeError("Invalid value used as weak collection key");if(t!=t||0===t)for(d=e.length;d--&&!y(e[d],t););else d=e.indexOf(t);return-1<d}function a(e){return u.call(this,this._values,e)}function h(e){return u.call(this,this._keys,e)}function r(e,t){return this.has(e)?this._values[d]=t:this._values[this._keys.push(e)-1]=t,this}function l(e){return this.has(e)||this._values.push(e),this}function o(){(this._keys||0).length=this._values.length=0}function c(){return f(this._itp,this._values)}function f(e,t,n){var i=[0],s=!1;return e.push(i),{next:function(){var u=i[0];if(!s&&u<t.length){var a=n?[t[u],n[u]]:t[u];i[0]++}else s=!0,e.splice(e.indexOf(i),1);return{done:s,value:a}}}}function p(){return this._values.length}function v(e,t){for(var n=this.entries();;){var i=n.next();if(i.done)break;e.call(t,i.value[1],i.value[0],this)}}var d,_=Object.defineProperty,y=function(e,t){return e===t||e!=e&&t!=t};"undefined"==typeof WeakMap&&(e.WeakMap=t({delete:i,clear:o,get:s,has:h,set:r},!0)),"undefined"!=typeof Map&&"function"==typeof(new Map).values&&(new Map).values().next||(e.Map=t({delete:i,has:h,get:s,set:r,keys:function(){return f(this._itp,this._keys)},values:c,entries:function(){return f(this._itp,this._keys,this._values)},forEach:v,clear:o})),"undefined"!=typeof Set&&"function"==typeof(new Set).values&&(new Set).values().next||(e.Set=t({has:a,add:l,delete:i,clear:o,keys:c,values:c,entries:function(){return f(this._itp,this._values,this._values)},forEach:v})),"undefined"==typeof WeakSet&&(e.WeakSet=t({delete:i,add:l,clear:o,has:a},!0))}(e)}