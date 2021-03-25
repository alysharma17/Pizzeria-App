var add=["Chicken Tandoori Pizza", "Veggie Pizza", "Paneer Tikka Pizza" ];
function showmenu() {
    document.getElementById("div_images").style.display="inline-block";
    document.getElementById("button1").style.display="none";
}
function add_item() {
    var topping=document.getElementById("add_item").value;
    add.push(topping);
    document.getElementById("addToppings").innerHTML=add;
}