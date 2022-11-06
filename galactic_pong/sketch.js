
function setup() {
  relsize = 1;
  textFont('Helvetica');
  paused = true;
  showPotential = false;
  windowW = 1080;
  windowH = 600;
  createCanvas(windowW, windowH);
  noStroke();
  ball = createVector(windowW/2, windowH/2);
  paddleW = 30;
  paddleH = 120;
  p2Y = (windowH- paddleH)/2;
  maxSpeed = 250;
  easing = 0.1;
  p1Y = p2Y;
  ballR = 20;
  ballSpeed = createVector(random(-12, 12), random(-12, 12));  p1X = paddleW+20;
  p2X = windowW - paddleW*2-20;
  p2Difficulty = 1.5;
  p1Score = 0;
  p2Score = 0;
  p1Gamma = 1;
  p2Gamma = 1;
  particleR = 15;
  particle = createVector(300, 400);
  Gmm = 10;
  
  clockSpeed = 0.08;
  playerTheta = 0;
  ballTheta = 0;
  masterTheta = 0;
  
  buttonG = createButton('Play/Pause');
  buttonG.position(0, windowH - 30);
  buttonG.mousePressed(changeBG);
  
//   buttonP = createButton('Toggle Potential');
//   buttonP.position(450, windowH - 30);
//   buttonP.mousePressed(changeBP);
  
  sliderG = createSlider(0, 50, 10);
  sliderG.position(100, windowH - 30);
  
  sliderC = createSlider(150, 400, 200);
  sliderC.position(270, windowH - 30);
  particles = [particle];
  pastBalls = [];
  tailLength = 10;
  ballRed = color(252, 92, 71);
  particleBlue = color(126, 173, 247);
}

function draw() {
  background(240, 240, 240);
  setSliders();
  
  if (!paused){
    updatePastBalls();
    renderClocks();
    applyAccel();
    updatePositions();
    checkCollision();
    renderObjects();
  } else {
    drawClocks();
    renderObjects();
  }
}

function updatePastBalls() {
  pastBalls.push([ball.x, ball.y])
  
  if (pastBalls.length > tailLength) {
    pastBalls.shift();
  }
}

function drawClocks() {
  textSize(14);
  fill(0);
  text('Player',80,70);
  text('Ball',190,70);
  text('Observer',270,70);
  
  drawClock(100, 30, 40);
  drawClock(200, 30, 40);
  drawClock(300, 30, 40);
  stroke(0);
  strokeWeight(2);
  CLX = 100+20*Math.sin(-playerTheta);
  CLY = 30+20*Math.cos(-playerTheta);
  CLX1 = 200+20*Math.sin(-ballTheta);
  CLY1 = 30+20*Math.cos(-ballTheta);
  CLX2 = 300+20*Math.sin(-masterTheta);
  CLY2 = 30+20*Math.cos(-masterTheta);
  line(100, 30, CLX, CLY);
  line(200, 30, CLX1, CLY1);
  line(300, 30, CLX2, CLY2);
  strokeWeight(0);
}

function renderClocks() {
  
  GRfactorball = 1;
  GRfactorpaddle = 1;
  p1 = createVector(p1X, p1Y);
  
  particles.forEach(particle => {
    rb = p5.Vector.sub(particle,ball).mag();
    rp = p5.Vector.sub(particle,p1).mag();
    if ((200000*Gmm)/(rb*(maxSpeed**2)) < 1) {
      GRtimeball = sqrt(1-(200000*Gmm)/(rb*(maxSpeed**2)));
    }
    if ((200000*Gmm)/(rp*(maxSpeed**2)) < 1) {
      GRtimepaddle = sqrt(1-(200000*Gmm)/(rp*(maxSpeed**2)));
    }
    
    GRfactorball *= GRtimeball;
    GRfactorpaddle *= GRtimepaddle;
    
  });
  
  ballTheta += (clockSpeed*GRfactorball);
  playerTheta += (clockSpeed*GRfactorpaddle);

  
  
  masterTheta += clockSpeed;
  drawClocks();
  
}

function drawClock(x, y, d) {
  fill(240);
  stroke(0);
  strokeWeight(2);
  ellipse(x, y, d, d);
  line(x + d*9/20, y, x+d/3, y);
  line(x - d*9/20, y, x-d/3, y);
  line(x, y - d*9/20, x, y-d/3);
  line(x, y + d*9/20, x, y+d/3);

  noStroke();
}


function setSliders() {
  Gmm = sliderG.value();
  maxSpeed = sliderC.value();
}

function resetClocks() {
  playerTheta = 0;
  ballTheta = 0;
  masterTheta = 0;
}

function mouseClicked() {
  if (mouseX > 60 && mouseX < windowW - 60 && mouseY > 60 && mouseY < windowH - 60){
    particles.push(createVector(mouseX, mouseY))
  }
}

function changeBG() {
  paused = !paused;
}

function changeBP() {
  showPotential = !showPotential;
}
function applyAccel() {
  particles.forEach(particle => {
    n = p5.Vector.sub(particle,ball);
    r = n.mag();
    v = ballSpeed.mag();
    rel_correction = p5.Vector.mult(p5.Vector.add(p5.Vector.mult(n, v**2), p5.Vector.mult(ballSpeed,4*p5.Vector.dot(n,ballSpeed))),Gmm/(maxSpeed**2*r**3));
    a = p5.Vector.add(p5.Vector.mult(n, Gmm / r**2), rel_correction);
    relsize = p5.Vector.mult(a, r**2).mag()/2000;
    ballSpeed.add(a);
    });
  
}

function renderObjects() {
  
   particles.forEach(particle => {
   
    if (showPotential) {
      for (let i = 0; i < 10; i++) {
        diff = 10 - i;
        particleBlue.setAlpha(255 - 25*diff);
        fill(particleBlue);
        Reff = (particleR+20*diff)*relsize;
        ellipse(particle.x, particle.y, Reff, Reff);
      } 
    }
    
    fill(particleBlue);
    ellipse(particle.x, particle.y, particleR, particleR);
  });
  
  particleBlue.setAlpha(255);
  
    
  i = 0;
  pastBalls.forEach(b => {
    diff = ((pastBalls.length - i))**2;
    ballRed.setAlpha(255 - 2*diff);
    fill(ballRed);
    Reff = (ballR-2*diff/pastBalls.length);
    ellipse(b[0], b[1], Reff, Reff);
    i += 1;
    });
  
  ballRed.setAlpha(255);
  
  fill(0);
  textSize(14);
  
  text("Gravitational constant", 100, windowH - 40);
  text("Light speed", 270, windowH - 40);
  textFont('Roboto');
  textSize(48);
  text(String(p1Score + ' - ' + p2Score), (windowW - 100) / 2, 50);
  textFont('Helvetica');

  rect(p1X, p1Y - paddleH*p1Gamma/2, paddleW, paddleH*p1Gamma, 20);
  rect(p2X, p2Y - paddleH*p2Gamma/2, paddleW, paddleH*p2Gamma, 20);

}

function updatePositions() {
  p1Speed  = abs(p1Y - pmouseY);
  p1Gamma = sqrt(1 - (p1Speed / maxSpeed)**2);
  
  p2Speed = abs(p2Y - ball.y);
  p2Gamma = sqrt(1 - (p2Speed / maxSpeed)**2);
                
  p1DY = mouseY - p1Y;
  p1Y += p1DY * easing;
  
  p2DY = ball.y - p2Y;
  p2Y += p2DY * easing*p2Difficulty;
  ball.y += ballSpeed.y;
  ball.x += ballSpeed.x;
}

function checkRectangle(r1x, r1y, r1w, r1h, r2x, r2y, r2w, r2h) {
  return (r1x < r2x + r2w &&
    r1x + r1w > r2x &&
    r1y < r2y + r2h &&
    r1y + r1h > r2y);
}

function checkCollision() {
    if (ball.y < 0 || ball.y > windowH) {
      ballSpeed.y *= -1;
  }
  
  if ((ball.y  < p1Y + paddleH*p1Gamma/2) && (ball.y  > p1Y + paddleH*p1Gamma/2- 20) && (ball.x < p1X + paddleW) && (ball.x > p1X)) {
    ball.x = p1X + paddleW;
    ballSpeed.x = abs(ballSpeed.x);
  } else if ((ball.y + ballR > p1Y - paddleH*p1Gamma/2) && (ball.y  < p1Y - paddleH*p1Gamma/2+ 20) && (ball.x < p1X + paddleW) && (ball.x > p1X)) {
      ball.x = p1X + paddleW;
      ballSpeed.x = abs(ballSpeed.x);

  } else if ((ball.x < p1X + paddleW) && (ball.x > p1X) && (ball.y > p1Y - paddleH*p1Gamma/2) && (ball.y < p1Y + paddleH*p1Gamma/2)) {
      ballSpeed.x *= -1;
  } else if ((ball.x + ballR > p2X) && (ball.x < p2X) && (ball.y > p2Y - paddleH*p2Gamma/2) && (ball.y < p2Y + paddleH*p2Gamma/2)) {
      ballSpeed.x *= -1;
  } 
  
  if (ball.x <= 0) {
    ball.y = windowH/2;
    ball.x = windowW/2;
    ballSpeed = createVector(random(-12, 12), random(-12, 12));
    resetClocks();
    p2Score += 1;
  }
  
  if (ball.x + ballR >= windowW){
    ball.y = windowH/2;
    ball.x = windowW/2;
    ballSpeed = createVector(random(-12, 12), random(-12, 12));
    resetClocks();

    p1Score += 1;
  }
  
}