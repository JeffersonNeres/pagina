"use strict";!function(){$(".uiSectionVideo-classMode-checkbox").on("change",function(){$(".sectionMenu, .uiSectionVideo-classMode-off, .uiSectionVideo-classMode-on").toggle(),$(".sectionContent-mainContent").toggleClass("sectionContent-mainContent-classMode")});var e,n,t,o=window.matchMedia("(min-width: 900px)");function c(){o.matches||(n.classList.toggle("sectionMenuIsOpen"),e.classList.toggle("sectionMenu_open"),t.classList.toggle("sectionMenu_closed"))}(t=document.querySelector(".sectionMenu-openAction"))&&(e=document.querySelector(".sectionMenu"),n=document.documentElement,t.addEventListener("click",c),n.addEventListener("click",function(e){e.target===n&&c()}),o.addListener(function(){o.matches&&(n.classList.remove("sectionMenuIsOpen"),e.classList.remove("sectionMenu_open"))}))}();