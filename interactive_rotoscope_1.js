function int_roto ( sketch ) {
  var imgarray = [];
  var currImageIndex;
  var horizCoord;
  var frames = 16;

  sketch.preload = function() {
    for (var i = 0; i < sketch.frames; i++){ 
      sketch.imgarray[i] = sketch.loadImage("assets/Pierre" + sketch.str(i+1) + ".jpg");
    }
    sketch.currImageIndex = 8;
    // sketch.image(sketch.imgarray[0],0,0,200,200);
  }

  sketch.setup = function(){
    sketch.createCanvas(1015, 750);
    sketch.frameRate(30);
    sketch.background(0);
  }

  sketch.draw = function() {
    if (sketch.currImageIndex <= sketch.frames && sketch.currImageIndex >= 0){
      sketch.image(sketch.imgarray[sketch.currImageIndex],0,0,1015,750);
    }
  }

  sketch.mousePressed = function() {
    sketch.horizCoord = sketch.mouseX;
  }

  sketch.mouseDragged = function() {
    if ((sketch.mouseX-sketch.horizCoord) > 30) {
      sketch.horizCoord = sketch.mouseX;
      sketch.currImageIndex = ((sketch.currImageIndex - 1) % sketch.frames + sketch.frames) % sketch.frames;
    }
    else if ((sketch.horizCoord - sketch.mouseX) > 30) {
      sketch.horizCoord = sketch.mouseX;
      sketch.currImageIndex = (sketch.currImageIndex + 1) % sketch.frames;
    }
  }
}