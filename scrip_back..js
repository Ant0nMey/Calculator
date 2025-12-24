function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }
function subtract(a, b) { return a - b; }
function divide(a, b) { return a / b; }

function operator(arr) {
    console.log("Dans la fonction operator")
    console.log(`arr = ${arr}`)
    console.log(`arr[0] = ${arr[0]}`)
    console.log(`arr[1] = ${arr[1]}`)
    console.log(`arr[2] = ${arr[2]}`)
    switch(arr[2]) {
        case '+':
            return add(arr[0], arr[1]);
        case '-':
            return subtract(arr[0], arr[1]);
        case '*':
            return multiply(arr[0], arr[1]);
        case '/':
            return divide(arr[0], arr[1]);
    };
}

function populateScreen() {

    let numberSelector = document.querySelector('#numberWrapper');
    let signSelector = document.querySelector('#signWrapper');
    let screenSelector = document.querySelector('.result');


    let clickSign = false;
    let arrBuffer1 = '';
    let arrBuffer2 = '';
    let tableauSymbol = ["0", "0"];
    result = 0;
    roundRobin = 0;

    numberSelector.addEventListener('click', function(event) {
        if (roundRobin == 0) {
            arrBuffer1 += event.target.textContent;
            console.table(`arrBuffer1.number = ${arrBuffer1}`);

        } else {
            arrBuffer2 += event.target.textContent;
            console.table(`arrBuffer2.number = ${arrBuffer2}`);
        }

        if (clickSign === true) {
            console.log("clickSign = true")
            screenSelector.innerHTML = '';
            clickSign = false;
            }
            
        screenSelector.innerHTML += event.target.textContent;
        
    })

    signSelector.addEventListener('click', function(event) {

        if (roundRobin == 0) {
        result = arrBuffer1;
        console.table(`arrBuffer1.number = ${arrBuffer1}`); }

        // Ajoute les symbols de la droite vers la gauche de l'Array.
        tableauSymbol.push(event.target.textContent);
        tableauSymbol.shift()
        console.table(`tableauSymbol = ${tableauSymbol}`);
        if (roundRobin == 0) {
            result = operator([parseInt("0"), parseInt(arrBuffer1), tableauSymbol[1]]);
            console.log(`result = ${result}`)
        } else {
            result = operator([parseInt(result), parseInt(arrBuffer2), tableauSymbol[0]]);
            arrBuffer2 = '';
            console.log(`result = ${result}`)
            screenSelector.innerHTML = result;
        }
        clickSign = true;
        roundRobin++
    })
}

populateScreen();