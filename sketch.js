let myFont
let pattern
let sqX = 250
let sqY = 225

let animatedText = "PRESS AND HOLD MOUSE TO EXPAND BOX"
let animatedTextX = 0
let animatedTextY = 300 
let speed = 2

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Creates Pattern
  let buffer = createGraphics(5, 5);
  buffer.pixelDensity(1);
  buffer.background(255);
  buffer.line(0, 0, 1, 1);
  pattern = createPattern(buffer);

  //Creates Save Button
  textFont(myFont)
  button = createButton('CLICK TO SAVE IMAGE');
  button.position(0, 0);
  button.mousePressed(buttonClick);
  button.position(windowWidth * .85, windowHeight * .05)
  button.style('background-color', color(255));
  button.style('border-radius', '4px');
  button.style("font-style", myFont)
}

function draw() {
  background(255)
  cursor(HAND)
 
  //Draws Patter
  fillPattern(pattern)

  //Static Square
  rect(300, 200, 200)

  //Animates Text
  animatedTextX += speed;
  
  //Display the text at the current position
  textSize(32);
  textAlign(CENTER);
  text(animatedText, animatedTextX, animatedTextY);

  //Build top and bottom shapes
  createTopAndBottomShapes()

  //Moving Square
  rect(sqX, sqY, 200)
}

function mouseDragged() {
  sqX = mouseX
  sqY = mouseY
}

function buttonClick() {
  save("myCustomBox.png");
}

function createTopAndBottomShapes() {
  //Bottom Of Box
  beginShape();
  vertex(300, 400);
  vertex(500, 400);
  vertex(sqX + 200, sqY + 200);
  vertex(sqX, sqY + 200);
  endShape(CLOSE);

  //Top Of Box
  beginShape();
  vertex(300, 200)
  vertex(500, 200)
  vertex(sqX + 200, sqY)
  vertex(sqX, sqY)
  endShape(CLOSE);
}

function preload() {
  myFont = loadFont('/Roboto-Medium.ttf');
}

//Creates line guides for top and bottom shapes
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



