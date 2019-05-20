var items = document.querySelector("#heroes");
var popUp = document.querySelector(".active-items")
var element1 = document.querySelector("#basic");
var element2 = document.querySelector("#first");
var element3 = document.querySelector("#second");
var marker = document.querySelector(".slide-marker");

function ironman(){
    console.log("click");
popUp.classList.add("opened");
popUp.classList.replace("closed","opened");
 $(popUp).load("/avengerPages/ironman.html");
}
function americancaptain(){
    console.log("click");
popUp.classList.add("opened");
popUp.classList.replace("closed","opened");
 $(popUp).load("../avengerPages/americanCaptain.html");
}
function blackpanther(){
    console.log("click");
popUp.classList.add("opened");
popUp.classList.replace("closed","opened");
 $(popUp).load("../avengerPages/blackpanther.html");
}
function drstrange(){
    console.log("click");
popUp.classList.add("opened");
popUp.classList.replace("closed","opened");
 $(popUp).load("../avengerPages/drstrange.html");
}
function feketeozvegy(){
    console.log("click");
popUp.classList.add("opened");
popUp.classList.replace("closed","opened");
 $(popUp).load("../avengerPages/feketeozvegy.html");
}
function hulk(){
    console.log("click");
popUp.classList.add("opened");
popUp.classList.replace("closed","opened");
 $(popUp).load("../avengerPages/hulk.html");
}
function marvelcaptain(){
    console.log("click");
popUp.classList.add("opened");
popUp.classList.replace("closed","opened");
 $(popUp).load("../avengerPages/marvelcaptain.html");
}
function spiderman(){
    console.log("click");
popUp.classList.add("opened");
popUp.classList.replace("closed","opened");
 $(popUp).load("../avengerPages/spiderman.html");
}
function thor(){
    console.log("click");
popUp.classList.add("opened");
popUp.classList.replace("closed","opened");
 $(popUp).load("../avengerPages/thor.html");
}

function closing(){
   var avenger = document.querySelector(".avenger");
   avenger.classList.add("closedWindow");
   setTimeout(popUp.classList.replace("opened","closed"),2100);
   
}

function left() {  
    //$("div.active").next().addClass("unactive").removeClass("active");
    $(".slider").find("div.active").prev().addClass("active").removeClass("unactive");
    $(".slider").find("div.active").next().addClass("unactive").removeClass("active");
    
//$(".slider").find("div.active").next().toggleClass("active");
if($(element1).hasClass("active")){
$(marker).css("margin-left","0%");
$("#left").css("color","black");
$("#right").css("color","white").css("hover","red");
}
else if($(element2).hasClass("active")){
    $(marker).css("margin-left","32.5%");
    $("#left").css("color","white").css("hover","red");;
    $("#right").css("color","white").css("hover","red");;
}
else if($(element3).hasClass("active")){
    $(marker).css("margin-left","76%");
    $("#left").css("color","white").css("hover","red");;
    $("#right").css("color","black");
}

}
function right() {  
    //$("div.active").addClass("unactive");
    //$(".slider").find("div.active").prev().addClass("unactive").removeClass("active");
    $(".slider").find("div.active").next().addClass("active").removeClass("unactive");
    $(".slider").find("div.active").prev().addClass("unactive").removeClass("active");

var currentElement = document.querySelector

if($(element1).hasClass("active")){
    $(marker).css("margin-left","0%");
    $("#right").css("color","white")
    $("#left").css("color","black");
    }
    else if($(element2).hasClass("active")){
        $(marker).css("margin-left","33%");
        $("#right").css("color","white")
        $("#left").css("color","white")
    }
    else if($(element3).hasClass("active")){
        $(marker).css("margin-left","66.7%");
        $("#right").css("color","black");
        $("#left").css("color","white")
    }
    
}


