let cart=[]; //array 陣列
let Item= function(name, price, count) {
    this.name=name
    this.price=price
    this.count=count
};

let currentProd="";
let totalCount=0;
let totalPrice=0;

let icecreamFlavor="巧克力冰淇淋";

// 購物車按鈕
$(function() {
    $(".btn_btn-dark_detail").click(function(){
        let numElement=document.getElementsByClassName("buy-num");
        numSelect=parseInt(numElement[0].value);
        let thisId=this.id;
        let prodName="";
        if (this.name=="冰淇淋") {
            prodName=icecreamFlavor;
        } else {
            prodName=this.name;
        }
        // console.log(this.name,thisId);
        //console.log(this.name,thisId);
        for (let i in cart){
            if(cart[i].name===prodName){
                // console.log(this.name,thisId);
                productChoosing(thisId);
                cart[i].count+=numSelect;
                saveCart();
                return;
            }
        }

        // console.log(prodName, thisId)
        let price=productChoosing(thisId);
        let item=new Item(prodName, price, numSelect);
        cart.push(item);
        saveCart();
    });

    $("#product_23").click(function(event){
        icecreamFlavor=document.getElementById('ice_flavor').value;
        // console.log(icecreamFlavor);
        // return icecreamFlavor;
    });

// 冰淇淋選口味
    $(".flavor").hover(function(event) {
        if(this.value==="巧克力冰淇淋") {
            $(".ice_choco").show();
            $(".ice_strawberry").hide();
            $(".ice_vanilla").hide();
            $(".ice_mango").hide();
            $(".ice_mint").hide();
            $(".ice_taro").hide();
            $(".ice_grape").hide();
            $(".ice_matcha").hide();
            $(".ice_sesame").hide();
            $(".ice_coffee").hide();
            icecreamFlavor="巧克力冰淇淋";
        } else if (this.value==="草莓冰淇淋"){
            $(".ice_choco").hide();
            $(".ice_strawberry").show();
            $(".ice_vanilla").hide();
            $(".ice_mango").hide();
            $(".ice_mint").hide();
            $(".ice_taro").hide();
            $(".ice_grape").hide();
            $(".ice_matcha").hide();
            $(".ice_sesame").hide();
            $(".ice_coffee").hide();
            icecreamFlavor="草莓冰淇淋";
        } else if (this.value==="香草冰淇淋"){
            $(".ice_choco").hide();
            $(".ice_strawberry").hide();
            $(".ice_vanilla").show();
            $(".ice_mango").hide();
            $(".ice_mint").hide();
            $(".ice_taro").hide();
            $(".ice_grape").hide();
            $(".ice_matcha").hide();
            $(".ice_sesame").hide();
            $(".ice_coffee").hide();
            icecreamFlavor="香草冰淇淋";
        } else if (this.value==="芒果冰淇淋"){
            $(".ice_choco").hide();
            $(".ice_strawberry").hide();
            $(".ice_vanilla").hide();
            $(".ice_mango").show();
            $(".ice_mint").hide();
            $(".ice_taro").hide();
            $(".ice_grape").hide();
            $(".ice_matcha").hide();
            $(".ice_sesame").hide();
            $(".ice_coffee").hide();
            icecreamFlavor="芒果冰淇淋";
        } else if (this.value==="薄荷巧克力"){
            $(".ice_choco").hide();
            $(".ice_strawberry").hide();
            $(".ice_vanilla").hide();
            $(".ice_mango").hide();
            $(".ice_mint").show();
            $(".ice_taro").hide();
            $(".ice_grape").hide();
            $(".ice_matcha").hide();
            $(".ice_sesame").hide();
            $(".ice_coffee").hide();
            icecreamFlavor="薄荷巧克力";
        } else if (this.value==="芋頭冰淇淋"){
            $(".ice_choco").hide();
            $(".ice_strawberry").hide();
            $(".ice_vanilla").hide();
            $(".ice_mango").hide();
            $(".ice_mint").hide();
            $(".ice_taro").show();
            $(".ice_grape").hide();
            $(".ice_matcha").hide();
            $(".ice_sesame").hide();
            $(".ice_coffee").hide();
            icecreamFlavor="芋頭冰淇淋";
        } else if (this.value==="香檳葡萄"){
            $(".ice_choco").hide();
            $(".ice_strawberry").hide();
            $(".ice_vanilla").hide();
            $(".ice_mango").hide();
            $(".ice_mint").hide();
            $(".ice_taro").hide();
            $(".ice_grape").show();
            $(".ice_matcha").hide();
            $(".ice_sesame").hide();
            $(".ice_coffee").hide();
            icecreamFlavor="香檳葡萄";
        } else if (this.value==="抹茶冰淇淋"){
            $(".ice_choco").hide();
            $(".ice_strawberry").hide();
            $(".ice_vanilla").hide();
            $(".ice_mango").hide();
            $(".ice_mint").hide();
            $(".ice_taro").hide();
            $(".ice_grape").hide();
            $(".ice_matcha").show();
            $(".ice_sesame").hide();
            $(".ice_coffee").hide();
            icecreamFlavor="抹茶冰淇淋";
        } else if (this.value==="芝麻冰淇淋"){
            $(".ice_choco").hide();
            $(".ice_strawberry").hide();
            $(".ice_vanilla").hide();
            $(".ice_mango").hide();
            $(".ice_mint").hide();
            $(".ice_taro").hide();
            $(".ice_grape").hide();
            $(".ice_matcha").hide();
            $(".ice_sesame").show();
            $(".ice_coffee").hide();
            icecreamFlavor="芝麻冰淇淋";
        } else if (this.value==="咖啡冰淇淋"){
            $(".ice_choco").hide();
            $(".ice_strawberry").hide();
            $(".ice_vanilla").hide();
            $(".ice_mango").hide();
            $(".ice_mint").hide();
            $(".ice_taro").hide();
            $(".ice_grape").hide();
            $(".ice_matcha").hide();
            $(".ice_sesame").hide();
            $(".ice_coffee").show();
            icecreamFlavor="咖啡冰淇淋";
        } 
        else{
            $(".ice_choco").show();
            $(".ice_strawberry").hide();
            $(".ice_vanilla").hide();
            $(".ice_mango").hide();
            $(".ice_mint").hide();
            $(".ice_taro").hide();
            $(".ice_grape").hide();
            $(".ice_matcha").hide();
        }
    });

// 加減按鈕
    $(".add-one-item").click(function(event) {
        let pattern = /[0-9]/g;
        let text=$(this).attr("data-name");
        let result = Number(text.match(pattern));
        
        addOneItemtoCart(cart[result].name);
    });

    $(".delete-one-item").click(function(event) {
        let pattern = /[0-9]/g;
        let text=$(this).attr("data-name");
        let result = Number(text.match(pattern));
        
        deleteOneItemfromCart(cart[result].name);
    });

    $(".delete-item").click(function(event) {
        let pattern = /[0-9]/g;
        let text=$(this).attr("data-name");
        let result = Number(text.match(pattern));
        
        deleteItemfromCart(cart[result].name);
    });

// 已有品項按鈕
    $(".dishes_chosen").click(function(event) {
        displayChosen();
        loadCart();
        saveCart();
        return;
    });
})

function bodyInitAppetito(){
    loadCart();
    saveCart();
    document.getElementById('cart-num').innerHTML=totalCount.toString();
    document.getElementById('show-total-cart').innerHTML=totalPrice;
    $(".ice_choco").show();
    $(".ice_strawberry").hide();
    $(".ice_vanilla").hide();
    $(".ice_mango").hide();
    $(".ice_mint").hide();
    $(".ice_taro").hide();
    $(".ice_grape").hide();
    $(".ice_matcha").hide();
    $(".ice_sesame").hide();
    $(".ice_coffee").hide();
}

function productChoosing(thisId){
    let pattern = /\d{1,2}/g;
    let result = Number(thisId.match(pattern));
    let element=document.getElementsByClassName("btn_btn-dark_detail");
    let price=element[result].getAttribute("price");
    totalCount+=numSelect;
    totalPrice+=numSelect*price;
    document.getElementById('cart-num').innerHTML=totalCount.toString();
    document.getElementById('show-total-cart').innerHTML=totalPrice.toString();
    loadCart();
    saveCart();
    return price;
}

function displayCart(){
    let output="";
    let currentImg="";
    for (let i in cart){
        currentImg="./img/"+cart[i].name+".jpg width='100' height='100' style='position: absolute; right: 530px; top: -30px'";
        output=
        "<img src="+currentImg+">"
        +"&emsp;"
        +cart[i].name;
        // console.log(currentImg);
        document.getElementsByClassName('itemsName')[i].innerHTML=output;
    };
    noItemHide();
}

function displayamount(){
    let output="";
    for (let i in cart){
        output=
        cart[i].count;
        document.getElementsByClassName('howMany')[i].innerHTML=output;
    };
    noItemHide();
}

function displayChosen(){
    let output="";
    let box = document.querySelector('#show-dishes-chosen');
    box.style.backgroundColor = "bisque";
    for (let i in cart){
        output+=
        "&diams;"+cart[i].name
        +"&emsp;"
        +cart[i].count+"份"
        +"<br>";
        document.getElementById("show-dishes-chosen").innerHTML=output;
    };
}
function disappear(){
    let output="";
    let box = document.querySelector('#show-dishes-chosen');
    box.style.backgroundColor = "";
    for (let i in cart){
        output+=
        "&diams;"+cart[i].name
        +"&emsp;"
        +cart[i].count+"份"
        +"<br>";
        document.getElementById("show-dishes-chosen").innerHTML="";
    };
}

function bodyInitCart(){
    loadCart();
    displayCart();
    noItemHide();
    saveCart();
    displayamount();
}

function noItemHide(){
    for (let i=cart.length; i<6; i++){
        document.getElementsByClassName('cartItem0')[i].style.display="none";
    };
}

function addOneItemtoCart(name){
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count ++;
            saveCart(); 
            displayCart();
            displayamount(); 
            break;
        }
    }
}

function deleteOneItemfromCart(name){
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count --;
            saveCart(); 
            displayCart();
            displayamount(); 
            break;
        }
    }
}

function deleteItemfromCart(name){
    for (var i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
            saveCart(); 
            displayCart();
            displayamount();      
            break;
        } 
    }
}

function removeAllItemfromCart(){
    cart=[];
    saveCart(); 
    displayCart();
    displayamount();
}

function loadCart(){
    //parse把string改成object
    cart=JSON.parse(localStorage.getItem("shoppingCart")) || [];
}

function saveCart(){
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}