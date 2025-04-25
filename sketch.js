let img;

function preload() {
  img = loadImage("./assets/Lumi-writing-animation-final.gif");  // Make sure this image path is correct!
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-2');  // Set -2 to layer *behind* your h1/h2 text. Change to '2' if you want it *on top*.
  cnv.style('position', 'absolute');
  imageMode(CENTER);
  background(0, 0, 0, 0);  // Transparent background
}

function draw() {
  image(img, mouseX, mouseY, 100, 100);  // Draw the image at mouse position
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);  // Make the canvas responsive
}
