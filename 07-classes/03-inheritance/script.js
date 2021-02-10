/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal{
        constructor(name){
            super();
            this.name=name;
        }
        static greeting="MIAAAAOUUU";             
    }

    class Dog extends Animal{
        constructor(name){
            super();
            this.name=name;
        }
        static greeting="OUAFFFF";      
        static createCat () {
            new Cat ("randomName");
            
        }       
    }


document.getElementById('run').addEventListener('click',()=>{
    myCat = new Cat("kitty");
    myDog = new Dog("Medor");
    console.log(myCat.sayHello());
    console.log(myDog.sayHello());

})



    
})();
