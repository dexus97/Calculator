/*const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const numbers = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equalel = document.querySelector(".equal");
const eraser = document.querySelector(".eraser");
const eraserall = document.querySelector(".eraser-all");

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot){
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return
        }
        dis2Num +=
    })
})*/

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    }if (item.id == "allclear"){
        display.innerText = "";
    }else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};