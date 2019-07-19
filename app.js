const calculator = document.querySelector(".container");
const displayedNum = document.querySelector(".curr-op");
const prevNum = document.querySelector(".prev-op");
const opeartor = document.querySelector(".operator");
const keys = document.querySelector(".numbers");
let key,action,keyContent,displayContent;
let result = "";
function calculate() {
  const currNum = parseFloat(displayedNum.innerText);
  const prevNumber = parseFloat(prevNum.innerText);

  if (opeartor.innerText === "+") {
    result = prevNumber + currNum;
    displayResult();
  } else if (opeartor.innerText === "-") {
    
      result = prevNumber - currNum;
    displayResult();
    
    
  } else if (opeartor.innerText === "x") {
    result = prevNumber * currNum;
    displayResult();
  } else if (opeartor.innerText === "÷") {
    result = prevNumber / currNum;
    displayResult();
  }
}
function addNum() {
  if (result === "") {
    if (displayContent === "0") {
      displayedNum.innerText = keyContent;
      parseFloat(displayedNum.innerText).toLocaleString();
    } else {
      displayedNum.innerText += keyContent;
      parseFloat(displayedNum.textContent).toLocaleString();
    }
  } else {
    displayedNum.innerText += keyContent;
  }
}
function displayResult() {
  displayedNum.innerText = result.toLocaleString();
}

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    key = e.target;
    action = key.dataset.action;
    keyContent = key.textContent;
    displayContent = displayedNum.innerText;
    if (!action) {
      addNum();
    }
    if (
      action === "plus" ||
      action === "minus" ||
      action === "division" ||
      action === "multi" ||
      action === "reminder"
    ) {
      if(displayedNum.inner === "0" || displayedNum.inner === ""){
        displayedNum.innerText = '-';
        opeartor.innerText = '';
      }
      if (opeartor.innerText === "") {
        opeartor.innerText = e.target.innerText;
        //console.log(opeartor.innerText);
        prevNum.innerText = displayContent;
        displayedNum.innerText = "";
      } else if (opeartor.innerText != "" && displayedNum.innerText === "") {
        prevNum.innerText = prevNum.innerText;
        opeartor.innerText = e.target.innerText;
      } else if (opeartor.innerText != "") {
        calculate();
        opeartor.innerText = e.target.innerText;
        prevNum.innerText = result;
        displayedNum.textContent = "";
      }
    }
    if (action === "decimal") {
      if (!displayedNum.innerText.includes(".")) {
        displayedNum.innerText += ".";
      }
    }
    if (action === "clear-all") {
      displayedNum.innerText = "";
      prevNum.innerText = "";
      opeartor.innerText = "";
    }
    if (action === "delet") {
      num = displayContent.substring(0, displayContent.length - 1);
      displayedNum.innerText = num;
    }
    if (action === "calculate") {
      calculate();
      prevNum.innerText = "";
      opeartor.innerText = "";
    }
  }
});
