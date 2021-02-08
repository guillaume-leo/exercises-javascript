/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    userChoice = prompt("Do you want a piece of cake?", "yes/no");
    
    while (!(userChoice == "yes" || userChoice == "no")){
    userChoice = prompt("Your answer must be yes or no, Do you want a piece of cake?");
    }

    switch(userChoice){
        case "yes":
            alert("BRAVOOO!!!");
            break;
        case "no":
            alert("you can't say no to a piece of cake!");
    }
})();
