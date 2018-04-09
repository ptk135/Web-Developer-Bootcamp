var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	//add initial colors to the squares
	squares[i].style.backgroundColor = colors[i];
	//add click listener to the squares
	squares[i].addEventListener("click", function(){
		//grab color of a clicked square
		//compare color to pickedColor
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Try Again";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});

}

function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num ramdom colors to the array;
	for(var i=0; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", "+ g + ", "+ b + ")";
}