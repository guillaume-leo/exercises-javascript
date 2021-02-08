/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    date = new Date();
    hour = date.getHours();
    minutes = date.getMinutes()/60.;
    time = hour+minutes;
    if (time > 17.5){
        document.getElementById("target").innerHTML="Bonsoir";
    }else{document.getElementById("target").innerHTML = "Bonjour"};
})();
