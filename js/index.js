var u=Object.defineProperty;var p=(t,e,s)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>(p(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();class d{applyColor(){return"червоного кольору."}}class f{applyColor(){return"синього кольору."}}class i{constructor(e){c(this,"color");this.color=e}}class y extends i{displayDetails(){return`Мопед Альфа ${this.color.applyColor()}`}}class h extends i{displayDetails(){return`Мопед Карпати ${this.color.applyColor()}`}}const m=new y(new d),g=new h(new f);function a(t){const e=t.displayDetails();console.log(e)}a(g);a(m);
//# sourceMappingURL=index.js.map
