var a=Object.defineProperty;var u=(t,o,n)=>o in t?a(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n;var r=(t,o,n)=>(u(t,typeof o!="symbol"?o+"":o,n),n);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();class h{start(){console.log("Двигун запущено")}stop(){console.log("Двигун зупинено")}}class g{turnOn(){console.log("Ліхтарі включені")}turnOff(){console.log("Ліхтарі вимкнено")}}class d{turnLeft(){console.log("Кермо повернуте наліво")}turnRight(){console.log("Кермо повернуте направо")}}class f{startMoving(){console.log("Колеса почали рухатись")}stopMoving(){console.log("Колеса зупинились")}}class p{constructor(){r(this,"engine");r(this,"lights");r(this,"handlebar");r(this,"wheels");this.engine=new h,this.lights=new g,this.handlebar=new d,this.wheels=new f}startMoped(){this.lights.turnOn(),this.engine.start(),this.wheels.startMoving(),console.log("Мопед готовий до поїздки")}stopMoped(){this.wheels.stopMoving(),this.engine.stop(),this.lights.turnOff(),console.log("Мопед зупинено")}turnLeft(){this.handlebar.turnLeft()}turnRight(){this.handlebar.turnRight()}}const l=new p;l.startMoped();l.turnLeft();l.stopMoped();
//# sourceMappingURL=index.js.map
