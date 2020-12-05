var btnTranslate = document.querySelector("#btn-translate");
var textArea = document.querySelector("#text-area");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something is wrong with server! try again after some time!");
}

function clickHandler() {
  //   outputDiv.innerText = "asjsjsj " + textArea.value;
  var textInput = textArea.Value; //taking input

  // Calling server for processing
  fetch(getTranslationURL(textInput))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
