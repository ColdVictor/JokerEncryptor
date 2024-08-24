function showText(tag, text) {
    let userOutput = document.querySelector(tag);
    userOutput.innerHTML = text;       
}

function secondStep () {
    showText ("h3", "");
    showText ("h4", "");

    document.getElementById("jokerCard").style.display = "none";

    document.getElementById("messageToCopy").style.visibility = "visible";
}


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

function decryptText() {
    let textToDecrypt = document.querySelector("textarea").value;

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
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-zA-Z\s]/g, "");
    }

    function copyText() 
{
    let textToClipboard = document.getElementById("messageToCopy").innerText;
    
    navigator.clipboard.writeText(textToClipboard);
    document.getElementById("messageToCopy").innerText = "";
    document.getElementById("messageToCopy").style.visibility = "hidden";
    location.reload();
}