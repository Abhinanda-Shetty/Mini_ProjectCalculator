const display = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

function check() {
  if (display.innerText.length == 15) {
    display.innerText = "limitBOOM";
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    check();
    var value = e.target.innerText;
    if (value !== "C" && value !== "Erase" && value !== "=") {
      if (
        value.length == 1 &&
        (display.innerText == 0 || display.innerText == "limitBOOM")
      ) {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    } else if (value == "C") {
      display.innerText = "0";
    } else if (value == "Erase") {
      display.innerText = display.innerText.slice(0, -1);
    } else {
      compute();
    }
  });
});

const compute = () => {
  var expression = display.innerText;
  var value = eval(expression);
  display.innerText = value;
  check();
};
