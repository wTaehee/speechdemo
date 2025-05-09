
let s = function(p) {
    let img;
  
    p.preload = function() {
      img = p.loadImage("./assets/Lumi-writing-animation-final.gif");  // Ensure the path is correct
    };
  
    p.setup = function() {
      let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
      cnv.position(0, 0);
      cnv.style('z-index', '-2');  // Behind the text
      cnv.style('position', 'absolute');
      p.imageMode(p.CENTER);
      p.background(0, 0, 0, 0);
    };
  
    p.draw = function() {
        if (p.mouseIsPressed) {
      p.image(img, p.mouseX, p.mouseY, 100, 100); // Adjust size as needed
        }
    };
  
    p.windowResized = function() {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  };
  
  new p5(s);  // Create a new p5 instance
  