const display = document.querySelector('.input-display');
const numBtn = document.querySelectorAll('input');
const clearBtn = document.querySelector('.clear');
const result = document.querySelector('.result-display');
const operators = document.querySelectorAll('.operators > *');

let store; 

function displayInput(){
  numBtn.forEach((btn)=>{btn.addEventListener('click', ()=>{
    display.innerText += btn.value;
    store = display.innerText;
  })});
  display.innerText += display.innerText;
};

displayInput();

clearBtn.addEventListener('click', ()=>{
  display.innerText = '';
});

function add(x, y){
  return parseInt(x) + parseInt(y);
};

function subtract(x, y){
  return parseInt(x) - parseInt(y);
};

function multiply(x, y){
  return parseInt(x) * parseInt(y);
};

function divide(x, y){
  return parseInt(x) / parseInt(y);
};

function operate(){
  let val;
  for(let i=0; i<store.length; i++){
    if(store[i] === '+') {
      val = store.split('+');
    }
  }
  result.innerText = `${add(val[0], val[1])}`;  
};

operators.forEach((operator) => {
  operator.addEventListener('click', operate)
});