import { useEffect, useRef } from "react";
import p5 from "p5";

// Ported from legacy int_roto.js: a click-and-drag flipbook rotoscope.
// Loads 16 frames and scrubs between them based on horizontal mouse drag.
function rotoscopeSketch(sketch: p5) {
  const frames = 16;
  const imgarray: p5.Image[] = [];
  let currImageIndex = 8;
  let horizCoord = 0;

  sketch.preload = () => {
    for (let i = 0; i < frames; i++) {
      imgarray[i] = sketch.loadImage(`/assets/Pierre${i + 1}.jpg`);
    }
  };

  sketch.setup = () => {
    sketch.createCanvas(507, 375);
    sketch.frameRate(30);
    sketch.background(0);
  };

  sketch.draw = () => {
    if (currImageIndex <= frames && currImageIndex >= 0) {
      sketch.image(imgarray[currImageIndex], 0, 0, 507, 375);
    }
  };

  sketch.mousePressed = () => {
    horizCoord = sketch.mouseX;
  };

  sketch.mouseDragged = () => {
    if (sketch.mouseX - horizCoord > 30) {
      horizCoord = sketch.mouseX;
      currImageIndex = ((currImageIndex - 1) % frames + frames) % frames;
    } else if (horizCoord - sketch.mouseX > 30) {
      horizCoord = sketch.mouseX;
      currImageIndex = (currImageIndex + 1) % frames;
    }
  };
}

export default function InteractiveRotoscope() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const instance = new p5(rotoscopeSketch, containerRef.current);
    return () => instance.remove();
  }, []);

  return (
    <div>
      <div ref={containerRef} className="rotoscope-canvas" />
      <p className="rotoscope-hint">Click and drag the drawing!</p>
    </div>
  );
}
