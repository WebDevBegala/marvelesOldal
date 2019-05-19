var alertBox = document.querySelector("body > div.alert");
var alertText = document.querySelector(".alertText");

function Alert(){
   alertBox.style.display = "block";
   alertText.style.display = "block";
   setTimeout(function(){
    alertBox.style.display = "none";
    alertText.style.display = "none";
   },4000);
}

var body = document.querySelector("html");
function start(){
   console.log("clcik");
   $("#startBtm").click();

}