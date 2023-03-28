// Another Example of an object
//Objects
//Key Value pairs
const band= {
    vocals:"Robert Plant",
    guitar:" Jimmy Page ",
    bass:" John Paul Jones",
    drums:" John Bonham "
};

console.log(Object.keys(band));
console.log(Object.values(band));

// Next we have using a for loop to loop through the object 
for(let job in band){
    console.log(`On ${job} it is ${band[job]} ! `);
}

// Deleting a property 
delete band.drums;

//To check the propety of the band
console.log(band.hasOwnProperty("drums"));

//Destructing Objects 

const {guitar: myVariable , bass: myBass }=band;
console.log(myVariable);
console.log(myBass);

const {guitar,bass,vocals,drums} = band;
console.log(guitar);
console.log(bass);
console.log(drums); //This is undefined since it was already deleted 
console.log(vocals); 


function sings({vocals}){return `${vocals} sings`};
console.log(sings(band));