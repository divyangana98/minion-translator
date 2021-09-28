var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-box");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" +"text="+text;
}

function errorHandler(error){
    console.log("Error is "+error);
}

function clickHandler(){

    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json=>{
            var outputText = json.contents.translated;
            outputDiv.innerText = outputText;
        })
        .catch(errorHandler);
};

btnTranslate.addEventListener("click",clickHandler);