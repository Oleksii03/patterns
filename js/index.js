(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();class n{constructor(t,s,o){this.quantity=t,this.color=s,this.needsWrapping=o}setQuantity(t){this.quantity=t}setColor(t){this.color=t}setNeedsWrapping(t){this.needsWrapping=t}clone(){return new n(this.quantity,this.color,this.needsWrapping)}}const c=new n(12,"Red",!0),u=c.clone();u.setQuantity(24);
//# sourceMappingURL=index.js.map
