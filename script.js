function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
function subtract(a, b) { return a - b; }
function divide(a, b) { return a / b; }

function operator(a, b, operator) {
    a = parseInt(a);
    b = parseInt(b);
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
function populateScreen() {

    let numberSelector = document.querySelector('#numberWrapper');
    let signSelector = document.querySelector('#signWrapper');
    let screenSelector = document.querySelector('.result');
    let clearSelector = document.querySelector('#clear');

    numberSelector.addEventListener('click', function(event) {
        let chiffre = event.target.textContent;
        if (["+","-","/","*"].includes(buffer.at(-1))) {
            screenSelector.innerHTML = '';
        }
        buffer.push(chiffre);
        screenSelector.innerHTML += chiffre; 
        })

    signSelector.addEventListener('click', function(event) {
    if (event.target.textContent == "=") {
        console.log('========== event.target.textContent =========')
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
        if (buffer.includes("+") || buffer.includes("-") || buffer.includes("/") || buffer.includes("*")) {
    
            console.log(`Un signe dans le buffer existe déja. Récupération des deux côtés du buffer : ${buffer}`)

            let indexSign = buffer.indexOf(currentSign);

            let premierePartie = buffer.slice(0, indexSign).join('');

            let deuxiemePartie = buffer.slice(indexSign+1, buffer.length).join('');

            result = operator(premierePartie, deuxiemePartie, currentSign)
            buffer = [];
            buffer.push(result);
            buffer.push(event.target.textContent);

            console.log(`result = ${result}`)
        // buffer.reduce( (result, [buffer.splice(indexOf(currentSign))]) => )
            currentSign = event.target.textContent;
        } else {
            buffer.push(event.target.textContent);
            currentSign = event.target.textContent;
            console.log(`Aucun signe dans le buffer n'existe. buffer : ${buffer}`)
            console.log(`Aucun signe dans le buffer n'existe. currentSign : ${currentSign}`)
        }
    }
})

}


populateScreen();