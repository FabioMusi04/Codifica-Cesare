let text = document.getElementById("message");
let checkboxs = document.getElementsByName("list_radio")

text.addEventListener("keypress", checkInput)
text.addEventListener("keyup", checkDelete)


function checkInput(event){
    if(event.keyCode >= 48 && event.keyCode <= 57){
        checkboxs[2].checked = true;
    }
    if(event.keyCode == 32){
        checkboxs[4].checked = true;
    }
    if(event.keyCode >= 65 && event.keyCode <= 90){
        checkboxs[0].checked = true;
    }
    if(event.keyCode >= 97 && event.keyCode <= 122){
        checkboxs[1].checked = true;
    }
    if(event.keyCode >= 46 && event.keyCode <= 59){
        checkboxs[3].checked = true; //da fixare
    }
}

function checkDelete(event){
        if(event.keyCode == 8){
            text = document.getElementById("message");
            if (text.value.indexOf(' ') < 0)
            {
                checkboxs[4].checked = false;
            }
            if (!containsNumbers(text.value))
            {
                checkboxs[2].checked = false;
            }
            if (!hasUpperCase(text.value))
            {
                checkboxs[0].checked = false;
            }
            if (!hasLowerCase(text.value))
            {
                checkboxs[1].checked = false;
            }
            if(!HasPunctuation(text.value)){
                checkboxs[3].checked = false;
            }
        }
}

function containsNumbers(str) {
    return /\d/.test(str);
  }
function hasUpperCase(str){
    return /[A-Z]/.test(str);
}
function hasLowerCase(str){
    return /[a-z]/.test(str);
}
function HasPunctuation(str){
    return /[.,:;!?]/.test(str);
}