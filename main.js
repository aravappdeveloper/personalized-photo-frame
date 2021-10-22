function preload(){}

function setup(){
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
}

function draw(){
  image(video, 160, 120, 320, 240);
  
  fill(255,182,193);
  rect(37.5, -25, 25, 540, 30);
  rect(577.5, -25, 25, 540, 30);
  rect(-25, 37.5, 700, 25, 30);
  rect(-25, 417.5, 700, 25, 30);
  
  fill(173, 216, 230);
  ellipse(50, 50, 76, 76);
  ellipse(590, 430, 75, 75);
  ellipse(50, 430, 76, 76);
  ellipse(590, 50, 75, 75);
}

function take_snapshot(){
  save('my_awesome_image.png');
}