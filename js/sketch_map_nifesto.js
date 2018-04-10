


var sourceText = "le code et le mot respiren*t si on les garde en vie.";

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(155,190,0);
  fill(0);
  
  textSize(random(11, 13));
  textAlign(CENTER, CENTER);
  
  var middle = sourceText.length / 2;
  var left = middle - ((mouseX / width) * middle);
  var right = middle + ((mouseX / width) * middle);
  text(
    sourceText.substring(left, right+1),
    width/2.8, height/2.8);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}