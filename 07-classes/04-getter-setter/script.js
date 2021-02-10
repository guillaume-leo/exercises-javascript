/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    

    class Person {
        constructor (firstname, lastname){
            this.firstname=firstname;
            this.lastname=lastname;



    }

    getter (){
        return `${this.firstname} ${this.lastname}`;
    }
    setter (string){
        this.firstname=string.split(' ')[0];
        this.lastname=string.split(' ')[1];
    }

}




    document.getElementById('run').addEventListener('click',()=>{
        guigui = new Person("guigui","dupont");
        console.log(guigui.getter());
        guigui.setter("Jean Castex");
        console.log(guigui.getter());
    })


})();
