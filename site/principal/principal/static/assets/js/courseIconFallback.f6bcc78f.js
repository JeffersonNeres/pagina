"use strict";window.addEventListener("error",function(a){var s=a.target,a=s.dataset,r=s.src;if(void 0!==a&&(void 0===a.changedSrc||!0!==a.changedSrc)){r=/((http|https):\/\/www.(alura|musicdot|alurastart|aluralingua|aluracursos).com.br\/|\/)assets\/(api|img|images)\/.*/.exec(r);if(r){switch(r[3]){case"alurastart":s.src="https://www.alurastart.com.br/assets/api/share/alura-start.jpg";break;case"musicdot":s.src="https://www.musicdot.com.br/assets/api/share/musicdot.jpg";break;case"aluralingua":s.src="https://www.aluralingua.com.br/assets/api/share/alura-lingua.jpg";break;default:s.src="https://www.alura.com.br/assets/img/formacao/step-alura.svg"}a.changedSrc=!0}}},!0);