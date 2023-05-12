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

  rect(0, 0, windowWidth, windowHeight)

  //Static Square
  rect(300, 200, 200)
  
  //Top Left Corner
  line(300, 200, sq1X, sq1Y)

  //Top Right Corner
  line(500, 200, sq1X + 200, sq1Y)

  //Boston Left Corner
  line(300, 400, sq1X, sq1Y + 200)

  //Bottom Right Corner
  line(500, 400, sq1X + 200, sq1Y + 200)

  //Moving Square
  rect(sq1X, sq1Y, 200)
}

function mouseDragged() {
  sq1X = mouseX
  sq1Y = mouseY
}

// function mouseDragged() {
//   sq2X = mouseX
//   sq2Y = mouseY
// }

