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
    
    let omikron = 0;

    switch(operand){
        case " + ":
            omikron = add(no1,no2);
            break;
        case " - ":
            omikron = subtract(no1,no2);
            break;
        case ' * ':
            omikron = multiply(no1,no2);
            break;
        case ' / ':
            omikron = divide(no1,no2);
            break;
        default:
            console.log("Nepravilan unos");
    }
    return omikron;
}

const brojke = document.querySelectorAll('.taster-no');
const operandi = document.querySelectorAll('.taster');
const ekran = document.querySelector('.display p');

let disp_numero = [];
let a = 0;
let br1 = 0;
let br2 = 0;
let pr_op = '';

brojke.forEach( (brojka) => {
    brojka.addEventListener('click', () => {
        if (disp_numero.length == 0 && br2 > 0){
            ekran.textContent = '';
        }
        
        display(brojka);
        if (disp_numero.length <= 12) {
            disp_numero.push(brojka.textContent);
        }
        console.log(disp_numero);

        

    })
})

operandi.forEach( (operand) => {
    operand.addEventListener('click', () => {

        disp_numero.push(operand.textContent);
        if (operand.id == 'AC'){
            ekran.textContent = '';
            disp_numero.length = 0;
            disp_numero.pop();
        }
        
        let rez = 0;
        let index = 0;
        
        let pl_hold1 = [];
        let operacija = '';
        
            if (operand.id == 'jednako' || operand.id == 'sabiranje' || operand.id == 'mnozenje' || 
                operand.id == 'oduzimanje' || operand.id == 'deljenje'){
        
                index = disp_numero.length - 1;

                pl_hold1 = disp_numero.slice(0,index);

                br2 = pl_hold1.toString();
                br2 = br2.replace(/\s/g, '');
                br2 = br2.replace(/\,/g, '');
                
                br2 = parseFloat(br2);
                operacija = disp_numero[index];
                pl_hold1.length = 0;
                disp_numero.length = 0;
                
                a = a + 1;
            }
            if (a == 1){
                br1 = br2;
                pr_op = operacija;
            }
            if(a == 2){
                if(operacija == ' = '){
                    rez = operate(pr_op,br1,br2);
                    ekran.textContent = rez.toFixed(2);
                    a = 0;
                }else{
                    rez = operate(operacija,br1,br2);
                    ekran.textContent = rez.toFixed(2);
                    br1 = rez;
                    a = 1;
                }    
            }
     })
})
function display(inp){
    ekran.textContent = ekran.textContent + inp.textContent;
}

