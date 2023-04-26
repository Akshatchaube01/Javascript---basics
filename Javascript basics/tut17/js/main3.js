//Classes
class Pizza{ //This is the parent class
    constructor(pizzaSize){
        this.size = pizzaSize; // Or you can just simply put "medium"
        this.crust = "original";
    }

    getCrust(){ // Another way to do what was done in main.js, using methods 
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
}


class SpecialityPizza extends Pizza{
    constructor(pizzasize){
        super(pizzasize);
        this.type="The Works";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices. `);
    }
}


const mySpeciality= new SpecialityPizza("medium");
mySpeciality.slice();

