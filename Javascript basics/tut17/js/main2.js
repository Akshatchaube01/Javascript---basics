//Classes
class Pizza{
    constructor(pizzaType,pizzaSize){
        this.type = pizzaType;
        this.size = pizzaSize; // Or you can just simply put "medium"
        this.crust = "original";
        this.toppings=[];
    }

    getCrust(){ // Another way to do what was done in main.js, using methods 
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    getToppings(){
        return this.toppings;
    }

    setToppings(topping){
        this.toppings.push(topping);
    }

    bake(){

        console.log(`Baking a ${this.size} ${this.type} ${this.crust} baked pizza.`)
    
    }
}

const myPizza=new Pizza("Pepperoni","small");
myPizza.setCrust("thin");
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getCrust());
console.log(myPizza.getToppings());