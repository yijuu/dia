class Particle {
  constructor(position) {
   this.acceleration = createVector(0, 0.05);
   this.velocity = createVector(0, random(-1, -0.5));
   this.position = createVector(random(0, width), random(0, height));
   this.lifespan = 255;
  }
  
  run() {
   this.update();
   this.display();
  }
  
  update() {
   this.velocity.add(this.acceleration);
   this.position.add(this.velocity);
   this.lifespan -= 2;
  }
  
  display() {
   stroke(155, this.lifespan);
   strokeWeight(2);
   fill(255, this.lifespan);
   ellipse(this.position.x, this.position.y, 6, 6); 
  }
  
  isDead() {
    return this.lifespan < 0;
  }
}



