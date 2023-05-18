let myFont
let pattern
let sqX = 250
let sqY = 225
let isMouseClicked = false

let animatedText = "PRESS AND MOVE MOUSE TO EXPAND BOX"
let titleText = "BOX CANVAS 1.0"
let cursorText = "PRESS AND MOVE MOUSE TO EXPAND BOX"
let buttonText = "CLICK TO SAVE CANVAS"
let animatedTextX = 0
let animatedTextY = 300 
let speed = 2

function preload() {
  myFont = loadFont('/Roboto-Medium.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Creates Pattern
  let buffer = createGraphics(5, 5);
  buffer.pixelDensity(1);
  buffer.background(255);
  buffer.line(0, 0, 1, 1);
  pattern = createPattern(buffer);

  //Creates Save Button
  button = createButton(buttonText);
  button.position(0, 0);
  button.mousePressed(buttonClick);
  button.position(windowWidth * .85, windowHeight * .065)
  textFont(myFont)
  button.style('background-color', color(255));
  button.style('border-radius', '4px');
}

function draw() {
  background(255)
  cursor(HAND)
 
  //Draws Pattern
  fillPattern(pattern)

  //Static Square
  rect(300, 200, 200)

  //Builds text title
  title()

  //Build top and bottom shapes
  createTopAndBottomShapes()

  //Moving Square
  rect(sqX, sqY, 200)

  //Display cursor text
  if (!isMouseClicked) {
    textSize(11);
    text(cursorText, mouseX + 10, mouseY - 10);
  }
}

function mouseDragged() {
  sqX = mouseX
  sqY = mouseY
}

function buttonClick() {
  save("BoxCanvasDrawing.png");
}

function createTopAndBottomShapes() {
  //Bottom of Box
  beginShape();
  vertex(300, 400);
  vertex(500, 400);
  vertex(sqX + 200, sqY + 200);
  vertex(sqX, sqY + 200);
  endShape(CLOSE);

  //Top of Box
  beginShape();
  vertex(300, 200)
  vertex(500, 200)
  vertex(sqX + 200, sqY)
  vertex(sqX, sqY)
  endShape(CLOSE);
}

//Created titleText
function title() {
  textFont(myFont)
  textSize(32)
  textAlign(CENTER)
  text(titleText, windowWidth * .12, windowHeight * .10)
}

//Created cursorText
function mousePressed() {
  if(isMouseClicked === false) {
    isMouseClicked = true
  } 
}

//Creates line guides for top and bottom shapes (Not currently envoked in Draw)
function createLineGuides() {
  //Top Left Corner
  line(300, 200, sqX, sqY)
  //Top Right Corner
  line(500, 200, sqX + 200, sqY)
  //Boston Left Corner
  line(300, 400, sqX, sqY + 200)
  //Bottom Right Corner
  line(500, 400, sqX + 200, sqY + 200)
}





