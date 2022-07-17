var buttons = document.getElementsByClassName('button');
var display = document.getElementById('disp-para');

var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0; i<buttons.length; i++){

    buttons[i].addEventListener('click',function(){

        var value = this.getAttribute('data-value');

        if(value == '+'){

            if(display.innerText != 'Error'){
                operator = '+';
                operand1 = parseFloat(display.innerText);
                display.innerText = "";
            }
        }

        else if(value == '-'){

            if(display.innerText != 'Error'){operator = '-';
            operand1 = parseFloat(display.innerText);
            display.innerText = "";}
        }

        else if(value == '*'){

            if(display.innerText != 'Error'){
                operator = '*';
                operand1 = parseFloat(display.innerText);
                display.innerText = "";
            }
        }

        else if(value == '/'){

            if(display.innerText != 'Error'){
                operator = '/';
                operand1 = parseFloat(display.innerText);
                display.innerText = "";}
        }

        else if(value == '.'){

            if(display.innerText != 'Error'){
                display.innerText += value;
            }
        }

        else if(value == '+/-'){

            if(display.innerText != 'Error'){
                display.innerText *= -1;
            }
        }

        else if(value == '%'){

            if(display.innerText != 'Error'){
                display.innerText /= 100;
            }
        }
        

        else if(value == '='){
            if(display.innerText != 'Error'){
                operand2 = parseFloat(display.innerText);
                if(operator == '/' && operand2 == 0){
                    display.innerText = 'Error';
                    operand1 = 0;
                    operand2 = null;
                    operator = null;
                }
                //eval and result
                else{
                    var result = eval(operand1 + " " + operator + " " + operand2);
                    display.innerText = result;
                }
            }
        }
        else if(value == 'AC'){

            operand1 = 0;
            operand2 = null;
            operator = null;
            display.innerText = "0";
            
        }
        else{
            if(display.innerText == '0'){
                display.innerText = "";
            }
            display.innerText += value;
        }
    });
}