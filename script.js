const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keys');
const display = document.getElementById('display');
var lastWasOperator = false;
let calculated = false;
var operators = ["*", "/", "+", "-"];

keys.addEventListener('click', e => {
    const key = e.target;
    var input = key.innerHTML;

    switch(input){
        case "=": 
            display.value = eval(display.value);
            lastWasOperator = false;
            calculated = true;
            break;

        case "C":
            display.value = "0";
            lastWasOperator = false;
            break;

        default:
            console.log(input);
            if(operators.includes(input)) {
                console.log("is operator");
                if(!lastWasOperator && display.value !== "") {
                    lastWasOperator = true;
                    display.value += input;
                }
            } else {
                console.log("is number");
                console.log(calculated);
                if(display.value === "0" || calculated){
                    console.log(calculated, "after if statement");
                    display.value = "";
                    calculated = false;
                    console.log(calculated, "after changing calculated");
                }
                display.value += input;
            }
    }
});

