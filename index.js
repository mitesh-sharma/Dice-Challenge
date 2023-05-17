var randvar1 = (Math.floor(Math.random()*6))+1;
var im1 = "images/dice"+randvar1+".png";

document.querySelector(".img1").setAttribute("src", im1);

var randvar2 = (Math.floor(Math.random()*6))+1;
var im2 = "images/dice"+randvar2+".png";

document.querySelector(".img2").setAttribute("src", im2);

if(randvar1 == randvar2){
    document.querySelector(".container h1").innerHTML = "Draw";
}
else if(randvar1 > randvar2){
    document.querySelector(".container h1").innerHTML = "Player 1 wins";
}
else if(randvar1 < randvar2){
    document.querySelector(".container h1").innerHTML = "Player 2 wins";
}