var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");
var addButtons = document.getElementsByClassName("button");
 
var items = [
{
    name: "Vitamin C",
    quantity: 0,
    rupees:200,
},

 {
    name: "Metformin",
    quantity: 0,
    rupees:350,
},
{
    name: "Allegra",
    quantity: 0,
    rupees:120,
},
 {
    name: "Zincovit",
    quantity: 0,
    rupees:150,
},

{
    name: "Probiotic",
    quantity: 0,
    rupees:350,
},

{
    name: "First aid kit",
    quantity: 0,
    rupees:150,
},
 {
    name: "Thermometer",
    quantity: 0,
    rupees:100,
},
 {
    name: "Masks",
    quantity: 0,
    rupees:100,
},
 {
    name: "Hand sanitizer",
    quantity: 0,
    rupees:75,
}
];

function updateCart(){
    let cart = 0;
    for(index = 0; index < items.length; index++){
        cart = cart + items[index].quantity;
    }
    cartValue.innerHTML = cart;
}

for(let i =0; i<addButtons.length; i++){
    addButtons[i].onclick = (e) => {
        items[i].quantity++;
        updateCart();
    };
}

var finalRupees = 0;

 function updatePrice(){
let totalPriceInRupees = 0;

for(index = 0; index < items.length; index++){
    totalPriceInRupees = totalPriceInRupees + items[index].quantity * (items [index].rupees * 100 + items[index])
}
finalRupees = totalPriceInRupees%100;
 }

 var pharmacyLink = "https://www.1mg.com/";

 function updatepharmacyLink(){
     for(let index=0; index < items.length; index++){
  if(items[index].quantity !=0){
    pharmacyLink += "%0A" + items [index].name + "%20" + items[index].quantity;
  }
     }
     pharmacyLink += "%0A" + "Total%20Price:20$" + finalRupees + "%20";
    }

    cartButton.onclick = () => {
        updatePrice();
        updatepharmacyLink();
        window.open (pharmacyLink, "_blank");
    };
 
