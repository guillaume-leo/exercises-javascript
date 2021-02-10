/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click', ()=>{
        var rndList = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
        rndList.forEach((element,index) => {
            document.getElementById(`n-${index+1}`).innerHTML = element;
        });
        document.getElementById(`min`).innerHTML = rndList.sort()[0];
        document.getElementById(`max`).innerHTML = rndList.sort()[rndList.length-1];
        
        var sum = rndList.reduce(function(a, b){ 
            return a + b;
        }, 0);
  
  
        document.getElementById(`sum`).innerHTML = sum;
        document.getElementById(`average`).innerHTML = sum/rndList.length;

        
    })

    // your code here
})();






