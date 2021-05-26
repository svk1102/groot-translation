var inputText = document.getElementById("inputText")
var outputText = document.getElementById("outputText")
var translateBtn = document.getElementById("translateBtn")


function urlGenerator(text) {
    return "https://api.funtranslations.com/translate/groot.json" + "?text=" + text
}

function errorHandler(error) {
    console.log("Oops! Something went wrong. Error is " + error)
    alert("Oops! Something just went wrong " + error)
}

function translateText() {
    var text = inputText.value
    if (text === "") {
        alert("Please Enter Some Text")
    } else {
        fetch(urlGenerator(text))
            .then(response => response.json())
            .then(json => {
                outputText.innerText = json.contents.translated
            })
            .catch(errorHandler)
    }
}


translateBtn.addEventListener("click", translateText)