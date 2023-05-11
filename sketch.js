let pattern;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let buffer = createGraphics(5, 5);
  buffer.pixelDensity(1);
  buffer.background(255);
  buffer.line(0, 0, 1, 1);
  pattern = createPattern(buffer);
}

function draw() {
  background(255);
  

  fillPattern(pattern);
  rect(0, 0, windowWidth, windowHeight);

  fill(0)
  rect(200, 200, 200)
  

  fill(0)
  circle(mouseX, mouseY, 100)

  fill(0)
  rect(350, 350, 200)
  
  line(200, 200, 350, 350)
}