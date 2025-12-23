function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function operator(a, op, b) {
    switch(op) {
        case '+':
            add(a, b);
            break;
        case '-':
            substract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
    };
}

function populateScreen() {

    let buttonSelector = document.querySelector('#buttonWrapper');
    let screenSelector = document.querySelector('.result');

    let screenBuffer = '';
    op = ''
    buttonSelector.addEventListener('click', function(event) {

            // Empécher de click entre les cases (bubbling).
            if(event.target.type == "submit"){
                // Empécher l'utilisation de deux signes consécutifs.
                if ( /[+\-*/]/.test(screenBuffer.at(-1)) &&  /[+\-*/]/.test(event.target.textContent)) {
                    screenBuffer = '';
                    op = event.target.textContent;
                } else {
                screenSelector.innerHTML += event.target.textContent;
                screenBuffer += event.target.textContent;

                console.log(`screenBuffer : ${screenBuffer}`);
                }
        }})
    
    // Effacer le resultat à l'écran
    let clearSelector = document.querySelector('#clear');
    clearSelector.addEventListener('click', (e) => { screenSelector.innerHTML="";});
}

populateScreen();