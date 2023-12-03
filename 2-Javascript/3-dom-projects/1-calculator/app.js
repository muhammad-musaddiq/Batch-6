const getALlButtonsElements = document.querySelectorAll(".btn");
const screenInput = document.querySelector(".screen");

getALlButtonsElements.forEach(function (singleButton) {
  singleButton.addEventListener("click", function (event) {
    event.preventDefault();
    const currentElement = event.target;
    const buttonVal = currentElement.getAttribute("data-num");

    screenInput.value += buttonVal; // purani wali value jor do new value k sath

    console.log(buttonVal, "buttonVal");
    console.log(currentElement, "currentElement");
  });
});
