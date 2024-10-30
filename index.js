let buttons = document.querySelectorAll(".btn");

let display = document.getElementById("display");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const symbol = button.textContent;

    let isNumber = !isNaN(parseFloat(symbol)) && isFinite(symbol);
    let operators = ["+", "-", "/", "*"];

    if (isNumber) {
      display.value += symbol;
    } else if (operators.includes(symbol)) {
      display.value += symbol;
    } else if (symbol === "C") {
      display.value = "";
    } else {
      display.value = eval(display.value);
    }
  });
});
