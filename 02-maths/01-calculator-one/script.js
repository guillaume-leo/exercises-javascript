/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        opOne = eval(document.getElementById("op-one").value);
        opTwo = eval(document.getElementById("op-two").value);

        result = opOne+opTwo;
        alert(opOne + " + " + opTwo + " equals " + result); 
       
    });

    document.getElementById("substraction").addEventListener("click", () => {
    
        opOne = eval(document.getElementById("op-one").value);
        opTwo = eval(document.getElementById("op-two").value);

        result = opOne-opTwo;
        alert(opOne + " - " + opTwo + " equals " + result); 
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        opOne = eval(document.getElementById("op-one").value);
        opTwo = eval(document.getElementById("op-two").value);

        result = opOne*opTwo;
        alert(opOne + " * " + opTwo + " equals " + result); 
    });

    document.getElementById("division").addEventListener("click", () => {
        opOne = eval(document.getElementById("op-one").value);
        opTwo = eval(document.getElementById("op-two").value);

        result = opOne/opTwo;
        alert(opOne + " / " + opTwo + " equals " + result); 
        // perform an division
    });
})();
