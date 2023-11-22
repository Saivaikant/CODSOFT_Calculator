document.addEventListener('DOMContentLoaded', function () {
    var output = document.getElementById('output');
    var buttons = document.querySelectorAll('.btn');
    var operators = document.querySelectorAll('.operator');
    var clearButton = document.querySelector('.btn[value="C"]');
    var equalButton = document.querySelector('.btn[value="="]');

    var currentInput = '';
    var currentOperator = null;
    var hasDecimal = false;
    var value1="",value2="";

    function clearCalculator() {
        console.log("yes")
        currentInput = '';
        currentOperator = null;
        hasDecimal = false;
        output.textContent = '0';
    }

    function handleNumberClick(value) {
        currentInput += value;
        output.textContent = currentInput;
        if(currentOperator == null){
            value1 = currentInput;
        }
        else{
            value2 = currentInput;
        }
    }

    function handleOperatorClick(operator) {
        if (currentOperator !== null) {
            calculateResult();
        }
        currentOperator = operator;
            output.textContent = currentOperator;
            currentInput = '';
            hasDecimal = true;
        if(value1 == ""){
            alert("Invalid Expression");
            currentOperator = null;
        }
    }

    function handleDecimalClick() {
        if (!hasDecimal) {
            currentInput += '.';
            output.textContent = currentInput;
            hasDecimal = true;
        }
    }

    function backCalculator(){
        if(currentInput != '' && currentOperator == ""){
            if(value2.length>1){
                value2 = value2.slice(0,(value2.length-1));
                output.textContent = value2;
            }
        }
        else{
            if(value1.length>1){
                value1 = value1.slice(0,(value1.length-1));
                output.textContent = value1;
            }
        }
    }

    function calculateResult() {
        if (currentOperator && currentInput !== '') {
            // var value2 = parseFloat(arr.pop());
                // var value1 = parseFloat(arr.pop());
                if(hasDecimal){
                    value1 =Number.parseFloat(value1);
                    value2 = Number.parseFloat(value2);
                }
                else{
                    value1 =Number.parseInt(value1);
                    value2 = Number.parseInt(value2);
                }
            console.log(value1);
            console.log(value2);    

            switch (currentOperator) {
                case '+':
                    output.textContent = (value1 + value2).toFixed(2);
                    break;
                case '-':
                    output.textContent = (value1 - value2).toFixed(2);
                    break;
                case '*':
                    output.textContent = (value1 * value2).toFixed(2);
                    break;
                case '/':
                    output.textContent = (value1 / value2).toFixed(2);
                    break;
                case '%':
                    output.textContent = (value1 % value2).toFixed(2);
                    break;
                default:
                    break;
            }

            currentInput = output.textContent;
            value1 = currentInput;
            currentOperator = null;
            hasDecimal = output.textContent.includes('.');
        }
    }

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var value = button.value;
            if (Number.isInteger(parseInt(value))) {
                handleNumberClick(value);
            } else if (value === '.') {
                handleDecimalClick();
            } else if (value === '=') {
                calculateResult();
            } else if (value === 'C') {
                clearCalculator();
            } else if (value === 'X') {
                backCalculator();
            } else if ((button.classList).contains('operator')) {
                handleOperatorClick(value);
            }
        });
    });
});



Array.from(buttons).forEach((button) => {
    if (button.classList.contains('operator')) {

        button.addEventListener('mouseenter', (e) => {
            button.style.backgroundColor = '#F3C5FF';
            button.style.color = '#00C9A7';
        })
        button.addEventListener('mouseleave', (e) => {
            button.style.backgroundColor = '#00C9A7';
            button.style.color = '#FEFEDF';
        })
    }
    else {
        button.addEventListener('mouseleave', (e) => {
            button.style.backgroundColor = '#F3C5FF';
            button.style.color = '#00C9A7';
        })
        button.addEventListener('mouseenter', (e) => {
            button.style.backgroundColor = '#00C9A7';
            button.style.color = '#FEFEDF';
        })
    }
})

/* Animation */