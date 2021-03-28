//let img_s;
//let img_m;
//let img_e;

function setup() {
  createCanvas(500, 350, WEBGL);
  //img_e = loadImage('images/_earth.png');
  //img_s = loadImage('images/_sun.png');
  //img_m = loadImage('images/moon.png');
  textureWrap(CLAMP);
}

function draw() {
  noStroke();
  background(0);
  //move your mouse to change light position
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;

  //sun
  push();
  translate(250, 0);
  shininess(20);
  ambientLight(50);
  specularColor(255, 0, 0);
  pointLight(255, 0, 0,100,0,100);
  //fill(255,0,0);
  //texture(img_s);
  sphere(100);
  pop();
  
  //earth
  push();
  translate(0,0,0);
  rotateZ(frameCount * 0.004);
  rotateY(frameCount * 0.005);
  shininess(20);
  ambientLight(50);
  specularColor(0, 102,255);
  pointLight(0, 102,255,50,0,100);
  //texture(img_e);
  sphere(50);
  pop();
  
  
  //moon
  push();
  //조명 조절
  ambientLight(30);
  ambientMaterial(250);
  pointLight(253, 253, 253, locX, locY, 300);
  directionalLight(250, 250, 250, -dirX, -dirY, -0.1);
  
  //돌게 하는 부분
  ellipseMode(CENTER);
  translate(p5.Vector.fromAngle(millis() / 2500, 100));   //이동시킬 벡터
  fill(211);
  //texture(img_m);
  sphere(40);
  pop();
}
