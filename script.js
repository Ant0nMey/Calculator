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

function operator(op) {
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

    let numberSelector = document.querySelector('#numberWrapper');
    let signSelector = document.querySelector('#signWrapper');
    let screenSelector = document.querySelector('.result');

    let var1 = '';
    let var2 = ''
    op = ''

    numberSelector.addEventListener('click', function(event) {
        screenSelector.innerHTML += event.target.textContent;
        var2 += event.target.textContent;
    });

    signSelector.addEventListener('click', function(event) {
        op = event.target.textContent;
        var1 = var2;
        var2 = '';
        screenSelector.innerHTML = '';
        })
}




    


    
    // Effacer le resultat à l'écran
    let clearSelector = document.querySelector('#clear');
    clearSelector.addEventListener('click', (e) => { screenSelector.innerHTML="";});
}

populateScreen();