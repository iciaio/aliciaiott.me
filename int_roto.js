function int_roto ( sketch ) {
  
  var imgarray = [];
  var currImageIndex;
  var horizCoord;
  var frames = 16;

  sketch.preload = function() {
    for (var i = 0; i < frames; i++){ 
      imgarray[i] = sketch.loadImage("assets/Pierre" + sketch.str(i+1) + ".jpg");
    }
    currImageIndex = 8;
  }

  sketch.setup = function(){
    sketch.createCanvas(507,375);
    sketch.frameRate(30);
    sketch.background(0);
  }

  sketch.draw = function() {
    if (currImageIndex <= frames && currImageIndex >= 0){
      sketch.image(imgarray[currImageIndex],0,0,507,375);
    }
  }

  sketch.mousePressed = function() {
    horizCoord = sketch.mouseX;
  }

  sketch.mouseDragged = function() {
    if ((sketch.mouseX-horizCoord) > 30) {
      horizCoord = sketch.mouseX;
      currImageIndex = ((currImageIndex - 1) % frames + frames) % frames;
    }
    else if ((horizCoord - sketch.mouseX) > 30) {
      horizCoord = sketch.mouseX;
      currImageIndex = (currImageIndex + 1) % frames;
    }
  }
}