let pattern
let sq1X = 250
let sq1Y = 250

function setup() {
  createCanvas(windowWidth, windowHeight);
  let buffer = createGraphics(5, 5);
  buffer.pixelDensity(1);
  buffer.background(255);
  buffer.line(0, 0, 1, 1);
  pattern = createPattern(buffer);
}

function draw() {
  background(255)
  fillPattern(pattern)

  //Work Window
  // rect(0, 0, windowWidth, windowHeight)


  //Static Square
  rect(300, 200, 200)
  
  //Top Left Corner
  line(300, 200, sq1X, sq1Y)

  //Top Right Corner
  line(500, 200, sq1X + 200, sq1Y)

  // //Boston Left Corner
  // line(300, 400, sq1X, sq1Y + 200)

  // //Bottom Right Corner
  // line(500, 400, sq1X + 200, sq1Y + 200)

  //Bottom Of Box
  beginShape();
  vertex(300, 400);
  vertex(500, 400);
  vertex(sq1X + 200, sq1Y + 200);
  vertex(sq1X, sq1Y + 200);
  endShape(CLOSE);

  //Moving Square
  rect(sq1X, sq1Y, 200)

  //Button Click, come back to this
  // document.querySelector('#btn').addEventListener
  // ('click', () => createShape)
  
}

function mouseDragged() {
  sq1X = mouseX
  sq1Y = mouseY
}

function createShape() {
  return circle(50, 50, 200)
}
createShape()
