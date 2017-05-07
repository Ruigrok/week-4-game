
$(document).ready(function(){

//Define the min and max target value
var randomMin = 19;
var randomMax = 120;


//Define the min and max crystal value
var crystalMin = 1;
var crystalMax = 12;
//Create an empty array of crystal values
var crystalValues = [];

//Define game metrics
var counter = 0;
var wins = 0;
var losses = 0;


//Define attributes of crystal images
var crystals = ["green", "purple", "blue", "yellow"];
var images = ["assets/images/green.png", "assets/images/purple.png",
			"assets/images/blue.png", "assets/images/yellow.png"];

//Randomly generate target value within predefined range


//function setTarget() {
var target = Math.floor(Math.random() * 
	(randomMax - randomMin + 1)) + randomMin;
$("#target").html(target);
//};
//setTarget();

//Randomly generate crystal values and push them to the crystalValues array

//function getValues() {

for(var i=0; i<crystals.length; i++) {
	var value= Math.floor(Math.random() * 
		(crystalMax - crystalMin +1)) + crystalMin;
	
	crystalValues.push(value);
};
//return crystalValues;
//};
//getValues();

function assignAttributes() {
for (var i = 0; i < crystals.length; i++) {
  
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("id", crystals[i]);
    imageCrystal.attr("src", images[i]);
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", crystalValues[i]);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}
  };
 assignAttributes();

function reset() {
	counter = 0;
	$("#counter").html("");

	target = Math.floor(Math.random() * 
		(randomMax - randomMin + 1)) + randomMin;
	$("#target").html(target);
	
	for(var i=0; i<crystals.length; i++) {
		var value= Math.floor(Math.random() * 
		(crystalMax - crystalMin +1)) + crystalMin;
	crystalValues.push(value);
	};
	

};

function win(){
   	wins++;
    $("#wins").html(wins);
	alert("You won!");
	reset();
};

function lose(){
    losses++;
  	$("#losses").html(losses);
  	alert ("Try again!");
  	reset();
};

$(".crystal-image").on("click", function() {    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#counter").html(counter);

    if (counter === target) {
    	crystalValues = [];
		win();

    }
    else if (counter >= target) {
    	crystalValues = [];
		lose();
    }
  });


//close document.ready()
	});




	


		
















