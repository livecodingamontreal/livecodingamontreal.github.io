


var sourceText = "[...] le code et le mot respirent si on les garde en vie.";
var sourceText1 = "* auto-transformarción";
var sourceText2 = "مشاركة الحياة ، والحفاظ على الاتحاد واحتضان كلمة";
var sourceText3 = "Some thoughts have a certain sound [...]";

function setup() {
  textFont("Mikado");
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(155,190,0);
  textAlign(CENTER, CENTER);
  
  var middle = sourceText.length / 2;
  var left = middle - ((mouseY / 500) * middle);
  var right = middle + ((mouseY / 400) * middle);
  textSize(random(11, 24));
   
    translate(0, 100);

    fill(random(100), 0, 200, random(200));
    text(
    sourceText.substring(left, right+1),
    width/2, mouseY/4.35);

    fill(255, 255, 255, random(200));
    text(
    sourceText1.substring(left, right+1),
    width/2.3, mouseX/4);
push();
    fill(0, 0, 0, random(255, 60));
    text(
    sourceText2.substring(left, right+2),
    width/1.7, mouseY/6.65);
pop();
    fill(0, 40, 155, random(200));
    text(
    sourceText3.substring(left, right+2),
    width/2.6, mouseX/6.35);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}