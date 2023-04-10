function addRedBorder(id){
    element = document.querySelector("#" + id)
    element.style.border = "5px solid red";
}



/*function sombraCard (idCard){
    element = document.querySelector("#" + idCard)
    element.style.boxShadow = "-5px 10px 5px grey"
}

function saiSombra (idCard){
    element = document.querySelector("#" + idCard)
    element.style.boxShadow = "0px 0px 0px white"
}
*/

function highlight(idCard){
    var element = document.querySelector("#" + idCard)
    element.classList.toggle("card-highlight")
}

function checkKeyboardCode () {
    document.addEventListener ('keydown', (event) => {
        var name = event.key; 
        var code = event.code;
        // Alert the key name and key code on keydown
        alert (`Tecla pressionada ${name} \r\n Key code: ${code}`);
    }, false);    
    
}

function addKeyboardEventListeners () {
    document.addEventListener ('keydown', (event) => {

        var ingresso1 = document.getElementById("quinta")
        var ingresso2 = document.getElementById("sexta")
        var ingresso3 = document.getElementById("sabado")
        var ingresso4 = document.getElementById("domingo")

        var code = event.code
        
        if (code == 'Digit1') {
            ingresso1.classList.toggle("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        if (code == 'Digit2') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.toggle("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        if (code == 'Digit3') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.toggle("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        if (code == 'Digit4') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.toggle("card-highlight")
        }

    }, false)
}

//checkKeyboardCode();
addKeyboardEventListeners()