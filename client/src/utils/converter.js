
//Common measurements: https://www.webstaurantstore.com/guide/582/measurements-and-conversions-guide.html

//Grams to Ounces
function gramToOunces(a){return a * .035;}
console.log("Gram to Ounces", gramToOunces(2));


//Grams to Pounds
function gramToPounds(a){return (a/453.59237).toFixed(2);}
console.log("Gram to Pound", gramToPounds(500));


//Pounds to Grams
function poundToGrams(a){return (453.59237*a).toFixed(2);}
console.log("Pounds to Grams", poundToGrams(1.1));


//Pinch to Teaspoon
function pinchToTeaspoon(a){return 1/8*a;}
console.log("Pinch to teaspoon", pinchToTeaspoon(1));


//Teaspoon to tablespoon
function teaspoonToTablespoon(a){return a/3;}
console.log("Teaspoon to tablespoon", teaspoonToTablespoon(3));


//Tablespoon to teaspoon
function tablespoonToTeaspoon(a){return a*3;}
console.log("Tablespoon to teaspoon", tablespoonToTeaspoon(1));


//Tablespoon to Cup
function tablespoonToCup(a){return a/16;}
console.log("Tablespoon to cup", tablespoonToCup(4));


//Cup to Tablespoon
function cupToTablespoon(a){return a*16;}
console.log("Cup to Tablespoon", cupToTablespoon(1));

//Cup to Fluid Ounces
function cupToFluidOunces(a){return a*8;}
console.log("Cup to Fluid Ounces", cupToFluidOunces(1));


//Fluid Ounces to Cup
function fluidOuncesToCup(a){return a/8;}
console.log("Fluid Ounces to Cup", fluidOuncesToCup(14));


//Quart to Gallon
function quartToGallon(a){return a/4;}
console.log("Quart to Gallon", quartToGallon(4));


//Gallon to Quart 
function gallonToQuart(a){return a*4;}
console.log("Gallon to Quarts", gallonToQuart(1));


//ml to tablespoon
function mlToTablespoon(a){return (a/14.787).toFixed(2);}
console.log("Mililiter to Tablespoon", mlToTablespoon(15));


//Tablespoon to ml 
function tablespoonToml(a){return (a*14.787).toFixed(2);}
console.log("Tablespoon to ml", tablespoonToml(1));

//liter to cup
function literToCup(a){return a*4;}
console.log("Liter to cup", literToCup(1));


//cup to liter 
function cupToLiter(a){return a/4;}
console.log("Cup to liter", cupToLiter(4));


//kilogram to pounds
function kilogramToPounds(a){return (a*2.205).toFixed(2);}
console.log("Kilogram to Pounds", kilogramToPounds(1));

//Pounds to Kilogram
function poundsToKilogram (a) {return (a/2.205).toFixed(2);}
console.log("Pounds to Kilogram", poundsToKilogram(2.2));