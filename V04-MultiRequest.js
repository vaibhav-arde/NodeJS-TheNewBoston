function placeAnOrder(orderNumber){
    console.log(`Order number: ${orderNumber} is Placed.`);

    cookAndDeliverFood(function(){
        console.log(`Order number: ${orderNumber} is Delivered.`);
    });
}

function cookAndDeliverFood(callback){
    setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);