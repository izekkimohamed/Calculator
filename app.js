const calculator = document.querySelector(".container");
const displayedNum = document.querySelector(".curr-op");
const prevNum = document.querySelector(".prev-op");
const opeartor = document.querySelector('.operator')
const keys = document.querySelector(".numbers");
let result;

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayContent = displayedNum.textContent;
    
    if (!action) {
      if (displayContent === "0") {
        displayedNum.textContent = keyContent;
      } else {
        displayedNum.textContent += keyContent;
      }
    }
    if (
      action === "plus" ||
      action === "minus" ||
      action === "division" ||
      action === "multi" ||
      action === "reminder"
    ) {
      
      opeartor.textContent = e.target.textContent ;

      //console.log(operator);
      
      prevNum.textContent = displayContent;
      displayedNum.textContent = "";
    }
    if (action === "decimal") {
      if (!displayedNum.textContent.includes(".")) {
        displayedNum.textContent += ".";
      }
    }
    if (action === "clear-all") {
      displayedNum.textContent = "";
      prevNum.textContent = "";
      opeartor.textContent = "";
    }
    if (action === "calculate") {
      const currNum = parseFloat(displayedNum.textContent);
      const prevNumber = parseFloat(prevNum.textContent);

      if (opeartor.textContent ==="+") {
        result = prevNumber + currNum;
        displayResult()
      } else if (opeartor.textContent ==="-") {
        result = prevNumber - currNum;
        displayResult()
      } else if (opeartor.textContent ==="x") {
        result = prevNumber * currNum;
        displayResult()
      } else if (opeartor.textContent ==="÷") {
        result = prevNumber / currNum;
        displayResult()
      }
    }
  }
});
function displayResult(){
  displayedNum.textContent = result;
  prevNum.textContent = "";
  opeartor.textContent = "";
}
