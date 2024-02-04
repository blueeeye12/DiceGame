var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


function winner(num1, num2) {
    if (num1 > num2) {
        document.querySelector("h1").innerHTML = "Winner is player 1!";
    }
    if (num1 < num2) {
        document.querySelector("h1").innerHTML = "Winner is player 2!";
    }
    if (num1 === num2) {
        document.querySelector("h1").innerHTML = "It's a tie!";
    }
}
winner(randomNumber1, randomNumber2);