var hex = [0,1,2,3,4,5, 6,7,8,9, "A", "B","C", "D", "E", "F"];
var btn = document.getElementById("btn");
var color = document.getElementById("color");

btn.addEventListener("click", function(){
    var HexColor = "#";
    for(var i =0; i<6;i++){
        HexColor+= hex[randomNumber()]
    }
    color.textContent = HexColor;
    document.body.style.backgroundColor = HexColor;

})

function randomNumber(){
    return Math.floor(Math.random()*6)
}