/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("red").addEventListener("click", () => {
        document.getElementsByTagName("BODY")[0].setAttribute("style", "background-color: red;");
        });
    document.getElementById("green").addEventListener("click", () => {
            document.getElementsByTagName("BODY")[0].setAttribute("style", "background-color: green;");
            });
    document.getElementById("yellow").addEventListener("click", () => {
                document.getElementsByTagName("BODY")[0].setAttribute("style", "background-color: yellow;");
                });
    document.getElementById("blue").addEventListener("click", () => {
                    document.getElementsByTagName("BODY")[0].setAttribute("style", "background-color: blue;");
                    });
})();
