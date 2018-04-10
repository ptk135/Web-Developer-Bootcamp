var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");

init();

function init(){
	//set mode buttons event listeners
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent === "EASY" ? numberOfSquares = 3: numberOfSquares=6;
			reset();
		});
	}
	//set squares listeners
	for(var i=0; i<squares.length; i++){
		//add click listener to the squares
		squares[i].addEventListener("click", function(){
			//grab color of a clicked square
			//compare color to pickedColor
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	reset();
}

	

function reset(){
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numberOfSquares = 3;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numberOfSquares = 6;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click",function(){
	reset();
	// //generate all new colors
	// colors = generateRandomColors(numberOfSquares);
	// //pick a new random color
	// pickedColor = pickColor();
	// //change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;
	// //change colors of squares
	// for(var i=0; i<squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// resetButton.textContent = "New Colors";
	// h1.style.backgroundColor = "steelblue";
	// messageDisplay.textContent = "";
});

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