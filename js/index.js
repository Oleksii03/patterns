var a=Object.defineProperty;var u=(s,e,t)=>e in s?a(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(u(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();class f{constructor(e,t,i){this.id=e,this.title=t,this.author=i}}class c{static getBook(e,t,i){return this.bookCache.has(e)||(console.log(`Creating new book: ${t} by ${i}`),this.bookCache.set(e,new f(e,t,i))),this.bookCache.get(e)}static getCacheSize(){return this.bookCache.size}}l(c,"bookCache",new Map);const h=c.getBook(1,"1984","George Orwell");c.getBook(2,"To Kill a Mockingbird","Harper Lee");const g=c.getBook(1,"1984","George Orwell");console.log(h===g);console.log(`Cache size: ${c.getCacheSize()}`);
//# sourceMappingURL=index.js.map
