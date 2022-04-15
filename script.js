function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function operate(operand,no1,no2){
    switch(operand){
        case '+':
            add(no1,no2);
            break;
        case '-':
            subtract(no1,no2);
            break;
        case '*':
            multiply(no1,no2);
            break;
        case '/':
            divide(no1,no2);
            break;
        default:
            console.log("Nepravilan unos");
    }
}

const brojke = document.querySelectorAll('.taster-no');
const operandi = document.querySelectorAll('.taster');
const ekran = document.querySelector('.display p');

let disp_numero = [];

brojke.forEach( (brojka) => {
    brojka.addEventListener('click', () => {
        display(brojka);
        disp_numero.push(brojka.textContent);
        console.log(disp_numero);
    })
})

operandi.forEach( (operand) => {
    operand.addEventListener('click', () => {
        if (operand.id == 'AC'){
            display('');
            disp_numero = [];
        }
        
        let rez = 0;
        let index = 0;
        disp_numero.push(operand.textContent);

        if (operand.id == 'jednako'){
            
            index = disp_numero.findIndex( (hara) => {
                if (hara == "="){
                    return true;
                }
            });
            console.log(index);

            ekran.textContent = rez;
        }
     })
})


function display(inp){
    ekran.textContent = inp.textContent;
}

