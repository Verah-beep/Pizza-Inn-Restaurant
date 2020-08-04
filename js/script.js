function size(){
    var size =parseInt(document.getElementById("size")).value;
    return parseInt(size);
  }

function crust(){
    var crust =parseInt(document.getElementById("crust")).value;
    return parseInt(crust)
  }
  function getNumber() {
    var getNumber = parseInt(document.getElementById("getnumber")).value;
    return parseInt(getNumber);
  }

function topping(){
    var topping = document.getElementById("topping").value;
    return parseInt(topping)
  }

  function getPepperoni(){
    var Pepperoni = 0 ;
    var pepperoni = document.getElementById("pepperoni");
    if (pepperoni.onselect === true) {
      Pepperoni = 150 ;
    }
    return parseInt(Pepperoni);
  }
  function getMushrooms(){
    var Mushrooms = 0;
    var mushrooms = document.getElementById("mushrooms");
    if (mushrooms.onselect === true) {
      Mushrooms = 150 ;
    }
    return parseInt(Mushrooms);
  }
  function getOnions(){
    var Onions = 0;
    var onions = document.getElementById("onions");
    if (onions.onselect === true) {
      Onions = 150 ;
    }
    return parseInt(Onions);
  }
  function getSausage(){
    var Sausage = 0;
    var sausage = document.getElementById("sausage");
    if (sausage.onselect === true) {
      Sausage = 150 ;
    }
    return parseInt(Sausage);
  }
  function getBacon(){
    var Bacon = 0;
    var bacon = document.getElementById("bacon");
    if (bacon.onselect === true){
      Bacon = 150;
    }
    return parseInt(bacon)
  }
  function calculate() {
    var calculate = (size() + crust() + getPepperoni() + getMushrooms() + getOnions() + getSausage() + getBacon()) * getNumber();
    document.getElementById("show").innerHTML = "Your order is " + ' ' + '' + getNumber() + '' + '' + '' + " pizza" + " and the cost  is ksh. " + calculate;
  }

function Total() {
    var add = (size() + crust() + getPepperoni() + getMushrooms() + getOnions() + getSausage() + getBacon()) * getNumber() + 150;
    alert("Dear customer,your total cost is ksh" + add + '' + " your order will be delivered to you in few minutes.Once the pizza is out for delivery or available for pick-up you will receive a notification from us..");
  }

$(document).ready(function(){
    $("#deliver").click(function(){
    prompt("Give the details of the location for delivery" )
    });
    $("#no").click(function(){
    alert("Thank you for shopping with us and welcome")
    });
  })