var b=Object.defineProperty;var O=(s,e,o)=>e in s?b(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o;var n=(s,e,o)=>(O(s,typeof e!="symbol"?e+"":e,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&p(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();class P{constructor(){n(this,"strategy",null)}setStrategy(e){this.strategy=e}processPayment(e){if(!this.strategy){console.log("Стратегію оплати не встановлено");return}this.strategy.pay(e)}}class ${constructor(e){this.cardNumber=e}pay(e){console.log(`Оплачено ${e} грн за допомогою кредитної картки ${this.cardNumber}`)}}class F{pay(e){console.log(`Оплачено ${e} грн готівкою.`)}}const a=new P;a.setStrategy(new $("4434567898765432"));a.processPayment(1e3);a.setStrategy(new F);a.processPayment(700);console.log("-------------------------------------------------");class h{makeBouquet(){this.prepareBase(),this.addFlowers(),this.addDecorations(),this.wrapBouquet()}prepareBase(){console.log("Підготовка основи для букета...")}wrapBouquet(){console.log("Упаковка букета...")}}class N extends h{addFlowers(){console.log("Додавання троянд та лілій...")}addDecorations(){console.log("Додавання стрічки...")}}class q extends h{addFlowers(){console.log("Додавання ромашок, волошок та лаванди...")}addDecorations(){console.log("Додавання сухоцвітів...")}}const B=new N;console.log("Приготування класичного букета:");B.makeBouquet();const D=new q;console.log(`
Приготування польового букета:`);D.makeBouquet();console.log("-------------------------------------------------");class S{constructor(e){this.price=e}getName(){return"Rose"}accept(e){e.visitRose(this)}}class C{constructor(e){this.price=e}getName(){return"Tulip"}accept(e){e.visitTulip(this)}}class T{constructor(e){this.price=e}getName(){return"Daisy"}accept(e){e.visitDaisy(this)}}class L{constructor(){n(this,"totalPrice",0)}visitRose(e){this.totalPrice+=e.price}visitTulip(e){this.totalPrice+=e.price}visitDaisy(e){this.totalPrice+=e.price}getTotalPrice(){return this.totalPrice}}class R{constructor(){n(this,"description",[])}visitRose(e){this.description.push(e.getName())}visitTulip(e){this.description.push(e.getName())}visitDaisy(e){this.description.push(e.getName())}getDescription(){return this.description.join(", ")}}const w=[new S(10),new C(7),new T(5)],g=new L,m=new R;function v(s,e){s.forEach(o=>o.accept(e))}v(w,m);v(w,g);console.log(`Total price of bouquet: ${g.getTotalPrice()}$`);console.log(`Bouquet description: ${m.getDescription()}.`);console.log("-------------------------------------------------");let M=class{constructor(){n(this,"observers",[])}addObserver(e){this.observers.push(e)}removeObserver(e){this.observers=this.observers.filter(o=>o!==e)}notifyObservers(e){for(const o of this.observers)o.update(e)}addNewFlower(e){console.log(`
FlowerShop: Додано нову квітку - ${e}`),this.notifyObservers(e)}},u=class{constructor(e){this.name=e}update(e){console.log(`${this.name}: Сповіщення - доступна нова квітка "${e}"`)}};const i=new M,V=new u("Олена"),f=new u("Максим"),x=new u("Анна");i.addObserver(V);i.addObserver(f);i.addObserver(x);i.addNewFlower("Троянда");i.addNewFlower("Орхідея");i.removeObserver(f);i.addNewFlower("Лілія");class A{constructor(){n(this,"observers",[])}addObserver(e){this.observers.push(e)}removeObserver(e){this.observers=this.observers.filter(o=>o!==e)}notifyObservers(e){for(const o of this.observers)o.update(e)}addNewFlower(e){console.log(`
FlowerShop: Додано нову квітку - ${e}`),this.notifyObservers(e)}}class d{constructor(e){this.name=e}update(e){console.log(`${this.name}: Сповіщення - доступна нова квітка "${e}"`)}}const c=new A,E=new d("Олена"),y=new d("Максим"),j=new d("Анна");c.addObserver(E);c.addObserver(y);c.addObserver(j);c.addNewFlower("Троянда");c.addNewFlower("Орхідея");c.removeObserver(y);c.addNewFlower("Лілія");
//# sourceMappingURL=index.js.map
