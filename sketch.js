var ellipseX, ellipseY, xSpeed;
var ellipseSize = 30;

var ySpeed = 5;

var paddleWidth = 80;
var paddleHeight = 15;
var bottomGap = 40;

var playing = false;


function setup() {
  createCanvas(400, 600);
  ellipseX = width/2;
  ellipseY = height/2;
  xSpeed = random(-5, 5);
}


function draw() {
  background(250);

  fill(0);
  ellipse(ellipseX, ellipseY, ellipseSize, ellipseSize);

  rect(mouseX - paddleWidth/2, height - bottomGap - paddleHeight, paddleWidth, paddleHeight);



  if (playing) {
    ellipseX += xSpeed;
    ellipseY += ySpeed;
  }

  // makes contact with paddle
  if (ellipseY  + ellipseSize/2 >= height - bottomGap - paddleHeight &&
      ellipseY + ellipseSize/2 < height - bottomGap  &&
      ellipseX >= mouseX - paddleWidth/2 &&
      ellipseX <= mouseX + paddleWidth/2) {

    xSpeed *= -1;
    ySpeed *= -1;
  }

  if (ellipseX - ellipseSize/2 <= 0) {
    xSpeed *= -1;
  } else if (ellipseY - ellipseSize/2 <= 0) {
    ySpeed *= -1;
  } else if (ellipseX + ellipseSize/2 >= width) {
    xSpeed *= -1;
  } else if (ellipseY - ellipseSize > height) {
    playing = false;
  }
}

function mouseClicked() {
  if (!playing && ellipseY > height) {
    ellipseX = width/2;
    ellipseY = height/2;
    xSpeed = random(-5, 5);
    ySpeed = 5;
  } else {
    playing = !playing
  }
}
