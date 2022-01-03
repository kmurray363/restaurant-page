(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(81),o=t.n(r),c=t(645),i=t.n(c)()(o());i.push([e.id,"body{\r\n    background-color: black;\r\n}\r\n\r\nli{\r\n    list-style: none;\r\n}\r\n\r\n.nav{\r\n    display: flex;\r\n}\r\n\r\n.nav li{\r\n    color: white;\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n    margin-top: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav li:hover{\r\n    color: red;\r\n    text-decoration: underline;\r\n}\r\n#content{\r\n    color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#content *{\r\n    width: 25vw;\r\n    max-width: 750px;\r\n}",""]);const a=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},i=[],a=0;a<e.length;a++){var s=e[a],l=r.base?s[0]+r.base:s[0],d=c[l]||0,u="".concat(l," ").concat(d);c[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=a,n.splice(a,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=t(c[i]);n[a].references--}for(var s=r(e,o),l=0;l<c.length;l++){var d=t(c[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}c=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},380:(e,n,t)=>{e.exports=t.p+"49eb1733c864dbd9f502.PNG"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={id:r,exports:{}};return e[r](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),c=t(569),i=t.n(c),a=t(565),s=t.n(a),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=function(e){const n=document.getElementById(`${e}`);for(;n.firstChild;)n.removeChild(n.lastChild)};var v=t(380);const y=function(){const e=document.getElementById("content"),n=document.createElement("p");n.innerHTML="I'm the menu page",e.appendChild(n)};function g(e,n,t,r){const o=document.createElement(`${e}`);return o.innerHTML=`${t}`,n&&o.classList.add(`${n}`),r.appendChild(o),o}!function(...e){const n=document.createElement("header"),t=document.createElement("ul");n.classList.add("nav"),n.appendChild(t);let r=0;e.forEach((e=>{r++;const n=document.createElement("li");n.innerHTML=e,n.classList.add(`heading-${r}`),t.appendChild(n)})),document.body.appendChild(n)}("STELLA'S LOUNGE","MENU","CONTACT"),(()=>{const e=document.createElement("div");e.setAttribute("id","content"),document.body.appendChild(e)})(),document.querySelectorAll("header li").forEach((e=>{e.addEventListener("click",(e=>{switch(m("content"),e.srcElement.innerHTML){case"STELLA'S LOUNGE":!function(){document.querySelector(".heading-1").setAttribute("style","color : red;");const e=document.getElementById("content"),n=new Image;n.src=v,e.appendChild(n);const t=document.createElement("p");t.innerHTML="STELLA'S LOUNGE (BAR + RESTAURANT)",e.appendChild(t);const r=g("ul","hours-list","",e);g("li",!1,"Monday-Thursday: 4 PM - 11 PM",r),g("li",!1,"Friday: 4PM - 1AM",r),g("li",!1,"Saturday: 11 AM - 1 AM",r),g("li",!1,"Sunday: 1 PM - 11 PM",r),g("p","list-header","HOLIDAY HOURS",e);const o=g("ul","holiday-hours","",e);g("li",!1,"11/24: CLOSED",o),g("li",!1,"12/25: CLOSED",o),g("li",!1,"12/31: 4 PM - 1 AM",o),g("li",!1,"1/1: 11 AM - 11 PM",o),g("button","menu-button","VIEW MENU",e).addEventListener("click",(()=>{m("content"),y()})),g("p","list-header","CHRONIC HOUR AT STELLA'S",e),g("p","chronic-header","MONDAY - THURSDAY 4 PM - 5:30 PM",e);const c=g("ul","chronic-list","",e);g("li",!1,"1/2 off Chronic Fry Appetizer",c),g("li",!1,"$5.00 Nachos",c),g("li",!1,"$3.00 wells",c),g("li",!1,"$2.00 Draft PBR's",c)}();break;case"MENU":y();break;case"CONTACT":!function(){const e=document.getElementById("content"),n=document.createElement("p");n.innerHTML="I'm the contact page",e.appendChild(n)}()}}))}))})()})();