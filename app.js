const calculator = document.querySelector(".container");
const displayedNum = document.querySelector(".curr-op");
const prevNum = document.querySelector(".prev-op");
const opeartorContent = document.querySelector('.operator')
const keys = document.querySelector(".numbers");
keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.innerText;
    const displayContent = displayedNum.innerText;
    let result;
    let operator ;
    if (!action) {
      if (displayContent === "0") {
        displayedNum.innerText = keyContent;
      } else {
        displayedNum.innerText += keyContent;
      }
    }
    if (
      action === "plus" ||
      action === "minus" ||
      action === "division" ||
      action === "multi" ||
      action === "reminder"
    ) {
      operator = e.target.innerText;
      opeartorContent.innerText = operator;
      console.log(operator);
      
      prevNum.innerText = displayContent;
      displayedNum.innerText = "";
    }
    if (action === "decimal") {
      if (!displayedNum.innerText.includes(".")) {
        displayedNum.innerText += ".";
      }
    }
    if (action === "clear-all") {
      displayedNum.innerText = "";
      prevNum.innerText = "";
      opeartorContent.innerText = "";
    }
    if (action === "calculate") {
      const currNum = parseFloat(displayedNum.innerText);
      const prevNumber = parseFloat(prevNum.innerText);

      if (opeartorContent.innerText.includes("+")) {
        result = prevNumber + currNum;
        displayedNum.innerText = result;
        prevNum.innerText = "";
        opeartorContent.innerText = "";
      } else if (opeartorContent.innerText.includes("-")) {
        result = prevNumber - currNum;
        displayedNum.innerText = result;
        prevNum.innerText = "";
        opeartorContent.innerText = "";
      } else if (opeartorContent.innerText.includes("x")) {
        result = prevNumber * currNum;
        displayedNum.innerText = result;
        prevNum.innerText = "";
        opeartorContent.innerText = "";
      } else if (opeartorContent.innerText.includes("÷")) {
        result = prevNumber / currNum;
        displayedNum.innerText = result;
        prevNum.innerText = "";
        opeartorContent.innerText = "";
      }
    }
  }
});
