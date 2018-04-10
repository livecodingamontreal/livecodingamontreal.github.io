var ache = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  var ruidoX2 = 0.000123;
  var ruidoY2 = 0.000012;
  var posX2 = noise(millis() * ruidoX2) * width;
  var posY2 = noise(millis() * ruidoY2) * height;
  stroke(255);
  strokeWeight(2);
  fill(0);
  for (var x = 10; x < width; x += 4000) {
      var tamango = random(posX2/12);
    ellipse(posX2, posY2, tamango, tamango);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}