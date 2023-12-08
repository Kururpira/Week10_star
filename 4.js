function calculateTotalPrice(quantity = 2, price = 15000000){
    let result = quantity * price;
    return result;
}
let result =calculateTotalPrice();

function showMessage(){
    alert ("Cтоимость покупки: " + result.toLocaleString("ru-RU") + " рублей");
}