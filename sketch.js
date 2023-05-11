let pattern

function setup() {
  createCanvas(windowWidth, windowHeight);
  let buffer = createGraphics(5, 5);
  buffer.pixelDensity(1);
  buffer.background(255);
  buffer.line(0, 0, 1, 1);
  pattern = createPattern(buffer);

  mouseX = 350
  mouseY = 350
}

function draw() {
  background(255)
  fillPattern(pattern)

  rect(0, 0, windowWidth, windowHeight)


  rect(200, 200, 200)
  
  //Top Left Corener
  line(200, 200, mouseX, mouseY)

  line(200, 400, mouseX, mouseY + 200)

  //Bottom Right Corner
  line(400, 400, mouseX + 200, mouseY + 200)

 

  // fill(0)
  // circle(mouseX, mouseY, 100)

  // fill(0)
  // rect(350, 350, 200)


  rect(mouseX, mouseY, 200)
  

}