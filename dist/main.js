(()=>{"use strict";const e=function(){const e=document.querySelector("#content"),t=document.createElement("div"),a=document.createElement("img"),n=document.createElement("p");n.innerHTML='"We make the best pizza"',a.src="/dist/images/chef.jpg",a.classList.add("load-img"),n.classList.add("load-paragraph"),t.classList.add("load-page"),e.classList.add("content-homepage"),e.appendChild(t),t.appendChild(n),t.appendChild(a)};document.addEventListener("DOMContentLoaded",(()=>{e();const t=document.querySelector("#home"),a=document.querySelector("#menu"),n=document.querySelector("#contact");t.addEventListener("click",(()=>{d(),e()})),a.addEventListener("click",(()=>{d(),function(){const e=document.querySelector("#content"),t=["/dist/images/california-pizza.jpg","/dist/images/chicago-pizza.jpg","/dist/images/detroit-pizza.jpg","/dist/images/miami-cuban-pizza.jpg","/dist/images/milan-style.jpg","/dist/images/new-york-pizza.jpg"],a=["California-style Pizza","Chicago Deep-Dish Pizza","Detroit-style Pizza","Miami / Cuban Pizza","Milan-style Pizza","New York-style Pizza"];for(let n=0;n<6;n++){const d=document.createElement("div"),i=document.createElement("img"),c=document.createElement("p");i.src=t[n],c.innerHTML=a[n],e.appendChild(d),d.appendChild(i),d.appendChild(c),e.classList.add("content-menu"),d.classList.add("menu-load")}}()})),n.addEventListener("click",(()=>{d(),function(){const e=document.querySelector("#content"),t=document.createElement("div"),a=document.createElement("img"),n=document.createElement("p");n.innerHTML='"You can find us here!"',a.src="/dist/images/location.jpg",a.classList.add("load-contact"),n.classList.add("load-paragraph"),t.classList.add("load-page"),e.classList.add("content-homepage"),e.appendChild(t),t.appendChild(n),t.appendChild(a)}(),console.log("asd")}));const d=()=>{const e=document.querySelector("#content");e.innerHTML="",e.className=""}}))})();