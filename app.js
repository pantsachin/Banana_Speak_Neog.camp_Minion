var btnTranslate = document.querySelector("#btn-translate");
var textArea = document.querySelector("#text-area");

function clickHandler() {
  console.log("clicked!");
  console.log("input", textArea.value);
}

btnTranslate.addEventListener("click", clickHandler);
