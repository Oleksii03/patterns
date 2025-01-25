var c=Object.defineProperty;var u=(i,t,e)=>t in i?c(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var n=(i,t,e)=>(u(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();class p{constructor(t,e,r){this.health=t,this.armor=e,this.position=r}getState(){return{health:this.health,armor:this.armor,position:this.position}}}class m{constructor(){n(this,"health",100);n(this,"armor",50);n(this,"position","Spawn")}setState(t,e,r){this.health=t,this.armor=e,this.position=r,console.log(`
 Player: Стан змінено - Health: ${this.health}, Armor: ${this.armor}, Position: ${this.position}`)}getState(){return Object.freeze({health:this.health,armor:this.armor,position:this.position})}save(){return console.log("Player: Зберігаю стан..."),new p(this.health,this.armor,this.position)}restore(t){const e=t.getState();this.health=e.health,this.armor=e.armor,this.position=e.position,console.log(`Player: Відновлено стан - Health: ${this.health}, Armor: ${this.armor}, Position: ${this.position}`)}}class y{constructor(t){n(this,"history",[]);this.player=t}backup(){console.log("GameHistory: Зберігаю стан гравця..."),this.history.push(this.player.save())}undo(){if(this.history.length===0){console.log("GameHistory: Немає збережень для відновлення.");return}const t=this.history.pop();console.log(`
 GameHistory: Відновлюю стан гравця...`),this.player.restore(t)}showHistory(){console.log("GameHistory: Історія станів:"),this.history.forEach((t,e)=>{const r=t.getState();console.log(`  Стан #${e+1} - Health: ${r.health}, Armor: ${r.armor}, Position: ${r.position}`)})}}const h=new m,a=new y(h);h.setState(80,45,"Mid");a.backup();h.setState(60,30,"B Site");a.backup();h.setState(30,10,"A Site");a.showHistory();a.undo();a.undo();a.undo();
//# sourceMappingURL=index.js.map
