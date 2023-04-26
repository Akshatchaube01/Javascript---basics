
class Pizza{
    
    crust="original";
    #sauce="traditional"; // This can only be declared in a a private field in an enclosing class
    #size;
    constructor(pizzaSize){
        this.#size=pizzaSize;
    }

    getCrust(){ // Another way to do what was done in main.js, using methods 
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    hereyougo(){
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
    }
}


const myPizza = new Pizza("large");
myPizza.hereyougo();
console.log(myPizza.getCrust());

//Caniuse.com