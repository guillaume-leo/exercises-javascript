/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById('run').addEventListener('click',()=>{
        
        
        // First create a random number between 0 and birds.length-1
        rndNumber = Math.round(Math.random()*(birds.length-1));

        // Create a second random number between 0 and [...adjectives].length-1

        rndNumber2 = Math.round(Math.random()*([...adjectives].length-1)); 

        // pick random bird name with "rndNumber" variable
        rndBird = birds[rndNumber].name; 

        // "isFemale" variable is true if female, else undefined
        isFemale = birds[rndNumber].fem; 

        // pick random adjective an adjective with "rndNumber2" variable
        rndAdj = [...adjectives][rndNumber2];

        //add "e" to the end of rndAdj if isFemale is true 
        if (isFemale == true){ 
            pronom = "La" ;
            rndAdj+="e";
        }else{
            pronom = "Le";
        }

        // change html element
        document.getElementById('target').innerHTML=pronom + " " + rndBird+" "+rndAdj;
   
    })
})();
