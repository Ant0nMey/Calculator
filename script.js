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

function operator(a, b, op) {

    switch(op) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return substract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
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
        if(var1 != '') {
            let result = operator(op, var1, var2);

        }
        screenSelector.innerHTML = '';
        })
}

numbers = [ 1 , 2 ]
op = "+"



    


    
    // Effacer le resultat à l'écran
    let clearSelector = document.querySelector('#clear');
    clearSelector.addEventListener('click', (e) => { screenSelector.innerHTML="";});
}

populateScreen();