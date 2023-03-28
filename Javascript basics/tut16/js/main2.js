//Object Inheritance
//Key Value Pair in curly brackets
const vehicle = {
    wheels: 4,
    engine: function(){
        return "Vrooom";
    }
};
const truck=Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //Inheritance
console.log(truck.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine=function(){
    return "Whooosh";
}
console.log(car.engine()); // Here, it is overwriting the inheritance
console.log(car.wheels);

const tesla=Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine=function(){
    return "shhhhh";
};
console.log(tesla.engine());

