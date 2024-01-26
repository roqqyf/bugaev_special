

function replaceDots() {
    var inputElement = document.getElementById("textInput");
    var sentence = inputElement.value;
  
    var modifiedSentence = sentence.replace(/\./g, ",");
  
    var outputElement = document.createElement("p");
    outputElement.textContent = modifiedSentence;
    document.body.appendChild(outputElement);
  }
