
window.onload = function() {

const buttons = document.querySelectorAll('.calc_btn input[type="button"]');

buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    
  });
});

const res = document.getElementById('res');
const clear = document.getElementById('clear');
const percent = document.getElementById('percent');
const back = document.getElementById('back');
const fslash = document.getElementById('fslash');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multiply = document.getElementById('multiply');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const subtract = document.getElementById('subtract');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const addition = document.getElementById('addition');
const zerozero = document.getElementById('zerozero');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');


clear.addEventListener('click', () => {
  res.value = '';
});

percent.addEventListener('click', () => {
  res.value += '%';
});

back.addEventListener('click', () => {
  res.value = res.value.slice(0, -1);
});

fslash.addEventListener('click', () => {
  res.value += '/';
});

seven.addEventListener('click', () => {
  res.value += '7';
});

eight.addEventListener('click', () => {
  res.value += '8';
});

nine.addEventListener('click', () => {
  res.value += '9';
});

multiply.addEventListener('click', () => {
  res.value += '*';
});

four.addEventListener('click', () => {
  res.value += '4';
});

five.addEventListener('click', () => {
  res.value += '5';
});

six.addEventListener('click', () => {
  res.value += '6';
});

subtract.addEventListener('click', () => {
  res.value += '-';
});

one.addEventListener('click', () => {
  res.value += '1';
});

two.addEventListener('click', () => {
  res.value += '2';
});

three.addEventListener('click', () => {
  res.value += '3';
});

addition.addEventListener('click', () => {
  res.value += '+';
});

zerozero.addEventListener('click', () => {
  res.value += '00';
});

zero.addEventListener('click', () => {
  res.value += '0';
});

decimal.addEventListener('click', () => {
  res.value += '.';
});

equals.addEventListener('click', () => {
  res.value = eval(res.value);
});

};