//Classes
class Pizza{
    constructor(pizzaType,pizzaSize){
        this.type = pizzaType;
        this.size = pizzaSize; // Or you can just simply put "medium"
        this.crust = "original";
    }
    get pizzaCrust(){
        return this.crust;
    }
    set pizzaCrust(pizzaCrust){
        this.crust = pizzaCrust; 
    }
    bake(){
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} baked pizza.`)
    }
}

const myPizza=new Pizza("Pepperoni","small");
myPizza.pizzaCrust = "thin";
myPizza.bake();
console.log(myPizza.pizzaCrust);
