!function(){const e=document.querySelector("#sidebarToggle"),t=(document.querySelector("#sidebar"),document.querySelector(".page")),{body:o}=document;function c(){o.classList.remove("show-sidebar"),document.querySelector(".page__mask").remove()}e.addEventListener("click",(e=>{o.classList.contains("show-sidebar")?c():function(){let e=document.createElement("div");e.classList.add("page__mask"),e.addEventListener("click",c),t.appendChild(e),o.classList.add("show-sidebar")}()}))}(),function(){const e=document.querySelectorAll("[data-modal]"),t=document.querySelectorAll(".modal__close"),o=document.querySelectorAll(".modal"),{body:c}=document;function s(e){e.querySelector(".modal__content").removeAttribute("style"),setTimeout((()=>{e.classList.remove("show"),c.classList.remove("no-scroll")}),200)}e.forEach((e=>{e.addEventListener("click",(e=>{let t=e.currentTarget.getAttribute("data-modal"),o=document.querySelector(`#${t}`),s=o.querySelector(".modal__content");s.addEventListener("click",(e=>e.stopPropagation())),o.classList.add("show"),c.classList.add("no-scroll"),setTimeout((()=>{s.style.transform="none",s.style.opacity="1"}),1)}))})),t.forEach((e=>{e.addEventListener("click",(e=>{s(e.currentTarget.closest(".modal"))}))})),o.forEach((e=>{e.addEventListener("click",(e=>{s(e.currentTarget)}))}))}(),document.querySelectorAll("[data-autoresize]").forEach((e=>{let t=e.offsetHeight;e.addEventListener("input",(e=>{let o=e.target;o.style.height=t+"px",o.style.height=o.scrollHeight+"px",console.log(o.scrollHeight)}))}));