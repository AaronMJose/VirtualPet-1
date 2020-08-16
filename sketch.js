//Create variables here
var dog,dogHappy;

var dogIMG

var database;

var foodS,foodStock;


function preload()
{
  //load images here
  dogIMG = loadImage('images/dogImg1.png');
  dogHappy = loadImage('images/dogImg.png');
}

function setup() {
	createCanvas(500, 500);
  dog.addImage('dogIMG');
  var database

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage('dogHappy');
}
  drawSprites();
  //add styles here

}



