
function user(){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(`${this.name} gave life to ${targetPlayer.name}`);
    }
}

let V1 = new user();
let S1 = new user();

V1.name ="VaibhaV";
S1.name = "Sheetal";

V1.giveLife(S1);

console.log(V1);
console.log(S1);

//You can add functions to all objects
user.prototype.upperCut = function upperCut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(`${this.name} uppercutted ${targetPlayer.name}`);
}

S1.upperCut(V1);
console.log(V1);
console.log(S1);
console.log(`${V1.name}'s life are : ${V1.life}`);
console.log(`${S1.name}'s life are : ${S1.life}`);

//You can add properties to all objects
user.prototype.magic = 60;

console.log(V1.magic);
console.log(S1.magic);