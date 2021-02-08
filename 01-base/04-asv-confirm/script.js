/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    confirmation="no";
    while (confirmation!=="yes"){
        age = prompt("How old are you?");
        gender =prompt("which gender are you?");
        city = prompt("in which city are you living?");
        confirmation = prompt("you're a "+age+" years old "+gender+" and you live in "+city+". Do you confirm?");
    }

})();
