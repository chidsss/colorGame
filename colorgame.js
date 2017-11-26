var numSquares =6;
var colors = generateRandomColors(numSquares);
var squares= document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        //tenary operator (condition ? expr1 :expr2)
        //return expr1 if true and expr 2 if false
        this.textContent ==="Easy"? numSquares=3:numSquares=6;
        reset();
        //figure out how many squares to show
        //pick new color
        //pick an new pickedColor
        //update page to reflect changes
    })
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random colour from array 
    pickedColor = pickColor();
    //change colorDisplay to match picked colour
    colorDisplay.textContent = pickedColor;
    //change colour of squares
    resetButton.textContent= "New Colors"
    messageDisplay.textContent="";
for(var i =0; i<squares.length; i++){
    if (colors[i]){
        squares[i].style.display ="block";
        squares[i].style.backgroundColor = colors[i];
    } else{
        squares[i].style.display ="none";
    }
}
h1.style.backgroundColor ="#005580";
}


resetButton.addEventListener("click", function(){
    //game reset button
 reset();
})

colorDisplay.textContent = pickedColor;

for(var i =0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
//add click listeners to squares
squares[i].addEventListener("click", function(){
    //grab color of clicked square
   var clickedColor = this.style.backgroundColor;
    //compare to pickedColor
    //console.log(clickedColor, pickedColor);
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "yeahhh! coreect";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play again?";
    }else{
        this.style.backgroundColor = "#232323"; 
        messageDisplay.textContent = "Try Again";
    }
});
}

function changeColors(color){
    //change each colour to match giviing color
    for(var i=0; i< squares.length; i++){
        squares[i].style.backgroundColor = color;
    }

}

function pickColor(){
    var random = Math.floor (Math.random() * colors.length )
    return colors[random];
}
function generateRandomColors(num){
 //make an array
 var arr= []
 //add num random colours to an arr
for (var i=0; i< num; i++){
    //get randome color and push into array
    arr.push(randomColor());
}
 //return an arr
 return arr;
}

function randomColor(){
    //generates randome colour
  var r= Math.floor (Math.random()*256);
  var g= Math.floor (Math.random()*256);
  var b= Math.floor (Math.random()*256);
 return "rgb("+r +", " +g+", "+b+")"
}