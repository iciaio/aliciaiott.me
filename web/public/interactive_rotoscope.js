var imgarray = [];
var currImageIndex;
var horizCoord;
var frames = 16;

function preload() {
  for (var i = 0; i < frames; i++){ 
    imgarray[i] = loadImage("assets/Pierre" + str(i+1) + ".jpg");
  }
  currImageIndex = 8;
}

function setup(){
  createCanvas(1015, 750);
  frameRate(30);
  background(0);
}

function draw() {
  if (currImageIndex <= frames && currImageIndex >= 0){
    image(imgarray[currImageIndex],0,0,1015,750);
  }
}

function mousePressed() {
  horizCoord = mouseX;
}

function mouseDragged() {
  if ((mouseX-horizCoord) > 30) {
    horizCoord = mouseX;
    currImageIndex = ((currImageIndex - 1) % frames + frames) % frames;
  }
  else if ((horizCoord - mouseX) > 30) {
    horizCoord = mouseX;
    currImageIndex = (currImageIndex + 1) % frames;
  }
}