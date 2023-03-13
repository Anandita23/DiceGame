var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage ="dice" + randomNumber1+".png";
var randomImageSource1 = "images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}
else 
{
    document.querySelector("h1").innerHTML = "It's a Draw!";
}
