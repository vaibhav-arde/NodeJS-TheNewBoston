//this is reference to whatever thing is calling it.
var VaibhaV ={
    printName : function(){
        console.log(`My name is VaibhaV`);
        console.log(this === VaibhaV); //true
    }
}

VaibhaV.printName();
//Below defaule calling context is global

function doSomthingGlobal(){
    console.log(`Below is global comparision`);
    console.log(this === global); //true
}
doSomthingGlobal();