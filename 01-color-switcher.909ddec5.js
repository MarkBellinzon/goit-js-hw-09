const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.addEventListener("click",(function(e){t.disabled=!1,e.target.disabled=!0,clearInterval(a)})),t.addEventListener("click",(function(t){t.target.disabled=!0,e.disabled=!1,a=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),500)}));let a=null;e.disabled=!0;
//# sourceMappingURL=01-color-switcher.909ddec5.js.map
