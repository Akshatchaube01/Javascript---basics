//Pizza Factory

function pizzaFactory(){
    const crust="Original";
    const size=pizzaSize;
    return{
        bake:() => console.log(`Baking a ${size} ${crust} crust pizza`)
    };
}

const myPizza= pizzaFactory("small");
myPizza.bake();


// class Pizza{ //This is the parent class
//     constructor(pizzaSize){
//         this._size = pizzaSize; //Here, ._ has been used to indicate to the developer that the intended method to be kept private.
//         this._crust = "original";
//     }

//     getCrust(){
//         return this._crust;
//     }

//     setCrust(pizzaCrust){
//         this._crust = pizzaCrust;
//     }
// }


