(function(){const t={btn:"[data-btn-menu]",menu:"[data-menu]",subline:"[data-subline]",content:"[data-content]"},c=()=>{document.querySelector(t.btn).addEventListener("click",s)},s=()=>{document.querySelector(t.menu).classList.toggle("is-visible"),document.querySelector(t.btn).classList.toggle("is-active");const e=document.querySelector(t.subline);e&&e.classList.toggle("!hidden");const n=document.querySelector(t.content);n&&n.classList.toggle("is-hidden")};c()})();