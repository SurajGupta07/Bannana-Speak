var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    outputDiv.innerText = "Translation " + txtInput.value
};

btnTranslate.addEventListener("click", clickHandler)
