// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// Mostra o texto na tela
function showText(tag, text) {
    let userOutput = document.querySelector(tag);
    userOutput.innerHTML = text;       
}

// Segunda etapa, após o texto ser inserido 
function secondStep () {
    showText ("h3", "");
    showText ("h4", "");

    // Remove a img do Coringa
    document.getElementById("jokerCard").style.display = "none";

    // Faz o texto encriptado ficar invisivel após ser copiado
    document.getElementById("messageToCopy").style.visibility = "visible";
}

// Encriptar texto 
function encryptText() {
    let entryText = document.querySelector("textarea").value;

    if (removeDiacritics(entryText.trim()) != "") {
    let encryptedText = removeDiacritics(entryText.toLowerCase())
                                .replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
            
            showText("h2", encryptedText);
            secondStep();
            document.querySelector("textarea").value =""; 
        }
}
// Decriptar texto
function decryptText() {
    let textToDecrypt = document.querySelector("textarea").value;
    
    // Check if text area is empty
    if (removeDiacritics(textToDecrypt.trim()) != "") {
            let decryptedText = removeDiacritics(textToDecrypt.toLowerCase())
                                .replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
            showText("h2", decryptedText);
            secondStep();
            document.querySelector("textarea").value = "";
    }
        }

        function removeDiacritics(userInput) {
            return userInput
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
            .replace(/[^a-zA-Z\s]/g, ""); // Remove special characters and numbers
    }

    function copyText() 
{
    let textToClipboard = document.getElementById("messageToCopy").innerText;
    
    navigator.clipboard.writeText(textToClipboard);
    document.getElementById("messageToCopy").innerText = "";
    document.getElementById("messageToCopy").style.visibility = "hidden";
    location.reload();
}