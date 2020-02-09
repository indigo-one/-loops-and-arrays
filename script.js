"use strict";
let btn = document.querySelector('.push');
btn.onclick = inputRadio;
function inputRadio() {
  let inpBtn = document.querySelectorAll('.rad-input');
  console.log('Вариант:', inpBtn);
  for (let i = 0; i < inpBtn.length; i++ ) {
    //console.log(inpBtn[i].checked);
    if (inpBtn[i].checked) {
      console.log(inpBtn[i].value);
    }
  }
 
  let p = document.querySelectorAll('p');
  console.log(p);
  for (let i = 0; i < p.length; i++ ) {
  p[i].style.color = 'red';
  }
  

let select = document.querySelectorAll('#my-select');
for (let i = 0; i < select.length; i++ ) {
  console.log(select[i].value);
  }


}

