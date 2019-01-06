//To understand reference to an Object
let VaibhaV = {
    favFood: "Warana",
    favDrink : "Lassi"
}

let Sheetal = VaibhaV;

console.log(VaibhaV);
console.log(Sheetal);

Sheetal.favFood ="Bharit";
console.log(VaibhaV);
console.log(Sheetal);

//Difference between == and ===
console.log(19 == '19'); // true
console.log(19 === '19'); // false
