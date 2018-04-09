var color = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(0, 255, 255)"
	];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = color[3];

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	//add initial colors to the squares
	squares[i].style.backgroundColor = color[i];
	//add click listener to the squares
	squares[i].addEventListener("click", function(){
		//grab color of a clicked square
		//compare color to pickedColor
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			alert("correct");
		}
		else{
			alert("wrong");
		}
	});

}

