// function setup() {
// 	windowW = 1080;
// 	windowH = 600;
// 	createCanvas(windowW, windowH);
// 	noStroke();
// 	ball = createVector(windowW/2, windowH/2);
// 	paddleW = 30;
// 	paddleH = 120;
// 	p2Y = (windowH- paddleH)/2;
// 	maxSpeed = 200;
// 	easing = 0.1;
// 	p1Y = p2Y;
// 	ballR = 20;
// 	// ballSpeed = createVector(-2, 8);
// 	 ballSpeed = createVector(0, 0);
// 	p1X = paddleW;
// 	p2X = windowW - paddleW*2;
// 	p2Difficulty = 2;
// 	p1Score = 0;
// 	p2Score = 0;
	
// 	particleR = 15;
// 	particle = createVector(300, 400);
// 	Gmm = 50;
  
//   }
  
//   function draw() {
// 	background(240);
// 	applyAccel();
// 	updatePositions();
// 	checkCollision();
// 	renderObjects();
//   }
  
//   function applyAccel() {
// 	n = p5.Vector.sub(particle,ball);
// 	r = n.mag();
// 	v = ballSpeed.mag();
// 	rel_correction = p5.Vector.mult(p5.Vector.add(p5.Vector.mult(n, v**2), p5.Vector.mult(ballSpeed,4*p5.Vector.dot(n,ballSpeed))),Gmm/(maxSpeed**2*r**3));
// 	a = p5.Vector.add(p5.Vector.mult(n, Gmm / r**2), rel_correction);
// 	ballSpeed.add(a);
	
//   }
  
//   function renderObjects() {
// 	fill(0);
// 	textSize(32);
// 	text(String(p1Score + ' - ' + p2Score), windowW / 2, 30);
  
// 	rect(p1X, p1Y - paddleH*p1Gamma/2, paddleW, paddleH*p1Gamma, 20);
// 	rect(p2X, p2Y - paddleH*p2Gamma/2, paddleW, paddleH*p2Gamma, 20);
// 	ellipse(ball.x, ball.y, ballR, ballR);
	
// 	fill(237, 100, 90);
// 	ellipse(particle.x, particle.y, particleR, particleR);
//   }
  
//   function updatePositions() {
// 	p1Speed  = abs(p1Y - pmouseY);
// 	p1Gamma = sqrt(1 - p1Speed / maxSpeed);
	
// 	p2Speed = abs(p2Y - ball.y);
// 	p2Gamma = sqrt(1 - p2Speed / maxSpeed);
				  
// 	p1DY = mouseY - p1Y;
// 	p1Y += p1DY * easing;
	
// 	p2DY = ball.y - p2Y;
// 	p2Y += p2DY * easing*p2Difficulty;
// 	ball.y += ballSpeed.y;
// 	ball.x += ballSpeed.x;
//   }
  
//   function checkCollision() {
// 	  if (ball.y < 0 || ball.y > windowH) {
// 		ballSpeed.y *= -1;
// 	}
	
// 	if ((ball.x < p1X + paddleW) && (ball.y > p1Y - paddleH*p1Gamma/2) && (ball.y < p1Y + paddleH*p1Gamma/2)) {
// 		ballSpeed.x *= -1;
// 	}
	
// 	if ((ball.x + ballR > p2X) && (ball.y > p2Y - paddleH*p2Gamma/2) && (ball.y < p2Y + paddleH*p2Gamma/2)) {
// 		ballSpeed.x *= -1;
// 	}
	
// 	if (ball.x < 0) {
// 	  ball.y = windowH/2;
// 	  ball.x = windowW/2;
// 	  p2Score += 1;
// 	}
	
// 	if (ball.x + ballR > windowW){
// 	  ball.y = windowH/2;
// 	  ball.x = windowW/2;
// 	  p1Score += 1;
// 	}
	
//   }