"use strict";function countdown(n){var t,o,r,c,l,i,u,_,a,e,s=0,d=new Date(n[0]).getTime();function m(e,n){for(var t=0;t<e.length;t++)e[t].textContent=n}function g(){var e=(e=new Date).getTime(),e=parseInt((d-e)/1e3);0<=e?(t=parseInt(e/86400),e%=86400,o=parseInt(e/3600),e%=3600,r=parseInt(e/60),e%=60,c=parseInt(e),m(l,parseInt(t,10)),m(i,("0"+o).slice(-2)),m(u,("0"+r).slice(-2)),m(_,("0"+c).slice(-2))):s<n.length?(s+=1,d=new Date(n[s]).getTime()):clearInterval(a)}isNaN(d)||(l=document.querySelectorAll(".generic-countdown__banner__tempo__dias"),i=document.querySelectorAll(".generic-countdown__banner__tempo__horas"),u=document.querySelectorAll(".generic-countdown__banner__tempo__minutos"),_=document.querySelectorAll(".generic-countdown__banner__tempo__segundos"),g(),a=setInterval(g,1e3),null!==(e=document.querySelector(".countdown--invisible"))&&e.classList.remove("countdown--invisible"))}