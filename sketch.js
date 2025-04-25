let img;

function preload() {
  img = loadImage("./assets/Lumi-writing-animation-final.gif");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-2');  // Layer behind
  cnv.style('position', 'absolute');
  imageMode(CENTER);
  background(0, 0, 0, 0);  // Transparent background
}

function draw() {
  // Empty - only drawing on drag
}

function mouseDragged() {
  image(img, mouseX, mouseY, 100, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
