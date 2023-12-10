var randomNumber1 = Math.floor(Math.random()*6)+1;//1-6

var randomDiceImage="dice"+randomNumber1+ ".png";//dice1.png---dice6.png

var randomImageSource="images/"+randomDiceImage;///images to random dice

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2 =Math.floor(Math.random()*6)+1;//1-6

var randomImageSource2="images/dice"+randomNumber2+".png";//image to random dice and dice1 to dice6

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins🏁"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 wins🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}


