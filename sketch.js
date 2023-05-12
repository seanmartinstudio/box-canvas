let pattern
let sqX = 350
let sqY = 350

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
  rect(200, 200, 200)
  
  //Top Left Corener
  line(200, 200, sqX, sqY)

  //Boston Left Corner
  line(200, 400, sqX, sqY + 200)

  //Bottom Right Corner
  line(400, 400, sqX + 200, sqY + 200)

  //Moving Square
  rect(sqX, sqY, 200)
}

function mouseDragged() {
  sqX = mouseX
  sqY = mouseY
}

