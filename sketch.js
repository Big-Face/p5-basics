var newWidth = 100;
var  newHeight = 10;
var rusheasRed, rusheasBlue, rusheasGreen;

//setup function only executes once
function setup(){
    createCanvas(600,400);
    background(50);
    rusheasRed = random(1,200);
    rusheasGreen = random(1,200);
    rusheasBlue = random(1,200);
}

//draw function loops forever
function draw(){
   frameRate(30000);
   if(mouseIsPressed){
      noStroke();
       fill(rusheasRed,rusheasGreen,rusheasBlue,100);
       rect(mouseX,mouseY,newWidth,newHeight);
   }
   
}
