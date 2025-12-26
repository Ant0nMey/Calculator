function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
function subtract(a, b) { return a - b; }
function divide(a, b) { return a / b; }

function operator(a, b, operator) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    };
}

let currentSign = ''
let buffer = [];
let result = '';
let start = 0;
function populateScreen() {

    let numberSelector = document.querySelector('#numberWrapper');
    let signSelector = document.querySelector('#signWrapper');
    let screenSelector = document.querySelector('.result');
    let clearSelector = document.querySelector('#clear');

    clearSelector.addEventListener('click', function(event) {
        screenSelector.innerHTML = '0000'
        currentSign = ''
        buffer = [];
        result = '';
        start = 0;
        })

    numberSelector.addEventListener('click', function(event) {
        if (start == 0) {
            screenSelector.innerHTML = ''
            start += 1;
        }
        let chiffre = event.target.textContent;
        if (["+","-","/","*"].includes(buffer.at(-1))) {
            screenSelector.innerHTML = '';
        }
        buffer.push(chiffre);
        screenSelector.innerHTML += chiffre; 
        })

    signSelector.addEventListener('click', function(event) {

    if (event.target.textContent == "=") {
        console.log('########### event.target.textContent = "=" #############')
        let indexSign = buffer.indexOf(currentSign);
        let premierePartie = buffer.slice(0, indexSign).join('');
        let deuxiemePartie = buffer.slice(indexSign+1, buffer.length).join('');
        result = operator(premierePartie, deuxiemePartie, currentSign)

        buffer = [];
        buffer.push(result);
        console.log(`result: ${result}`);
        console.log(`buffer: ${buffer}`);
        screenSelector.innerHTML = result;


    } else if (event.target.textContent != "="){
        // Si un signe existe dans le buffer et qu'il n'est pas son dernier élément,
        // on coupe le buffer en 2 par le signe, puis on fait une opération entre ses deux partie. Le résultat sera alors stocké
        // dans la premiere partie du buffer.
        if ((buffer.includes("+") || buffer.includes("-") || buffer.includes("/") || buffer.includes("*")) && !(["+","-","/","*"].includes(buffer.at(-1)))) {
            let indexSign = buffer.indexOf(currentSign);
            let premierePartie = buffer.slice(0, indexSign).join('');
            let deuxiemePartie = buffer.slice(indexSign+1, buffer.length).join('');
            result = operator(premierePartie, deuxiemePartie, currentSign)
            // reset du buffer ->  push du résultat -> stockage du signe courant (dernier signe appuyé).
            buffer = [];
            buffer.push(result);
            buffer.push(event.target.textContent);
            screenSelector.innerHTML = result;
            currentSign = event.target.textContent;
        } else {
            // Si on appuie deux fois de suite sur un signe, le dernier signe est remplacé par le nouveau signe.
            if (["+","-","/","*"].includes(buffer.at(-1))) {
                buffer[buffer.length - 1] = event.target.textContent;
                currentSign = event.target.textContent;
            } else {
            // Aucun signe dans le buffer n'existe : On push le sign dans le buffer et on stock la variable dans "currentSign"
            buffer.push(event.target.textContent);
            currentSign = event.target.textContent;
            console.log(`Aucun signe dans le buffer n'existe. buffer : ${buffer}`)
            console.log(`Aucun signe dans le buffer n'existe. currentSign : ${currentSign}`)
            }
        }
    }
})

}


populateScreen();