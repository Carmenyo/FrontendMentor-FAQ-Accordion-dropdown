"use strict";


const btnItems = document.querySelectorAll(".js-btn");

const answers =document.querySelectorAll (".js-content" )

btnItems.addEventListener ('click', () => {
  answers.classList.toggle('collapsed');
});
