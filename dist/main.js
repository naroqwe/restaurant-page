(()=>{"use strict";window.addEventListener("load",(function(){const e=document.querySelector("#content"),t=document.createElement("div"),a=document.createElement("img"),n=document.createElement("p");n.innerHTML='"We make the best pizza"',a.src="/dist/images/chef.jpg",a.classList.add("load-img"),n.classList.add("load-paragraph"),t.classList.add("load-menu-page"),e.classList.add("content-homepage"),e.appendChild(t),t.appendChild(n),t.appendChild(a)})),["home-tab","menu-tab","contact-tab"].forEach(button,(()=>{let e=document.getElementsByClassName(button);e.addEventListener("click",(()=>{console.log(e)}))})),document.querySelector(".home-tab")})();