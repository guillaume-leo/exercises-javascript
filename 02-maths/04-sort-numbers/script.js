/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value




    document.getElementById("run").addEventListener("click", () => {
        listOfRndNumbers = document.getElementById("numbers").value;
        listOfRndNumbers = listOfRndNumbers.split(",").map(Number); // convert the string to a number list
        sortedList = [];
        console.log(minimum);
        index = 0;
        while (listOfRndNumbers.length>0){
        var minimum = listOfRndNumbers[0];
            for (let i = 0; i<listOfRndNumbers.length; i++){
                if (listOfRndNumbers[i] <= minimum){
                    minimum = listOfRndNumbers[i];
                    index = i;
                }
            }
            sortedList.push(listOfRndNumbers[index]);
            listOfRndNumbers.splice(index,1);
        }
        alert(sortedList);

    });
})();




