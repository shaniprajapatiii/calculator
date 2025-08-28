let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

function operation(work) {
    if(work.target.innerText === '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch(err) {
            input.value = "Error";
            string = "";
        }
    } 
    else if (work.target.innerText === 'AC'){    // AC button
        string = "";
        input.value = string;
    }
    else if(work.target.innerText === 'DEL') {    // DEL button
        string = string.substring(0, string.length-1);
        input.value = string;
    }

    else {
        string += work.target.innerText;
        input.value = string;
    }

}

buttons.forEach(button => {
    button.addEventListener('click', operation)
})