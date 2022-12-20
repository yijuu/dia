let system;
let snow

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
  snow = new Snow();
}

function draw() {
  background(51);
  system.addParticle();
  system.run();
  snow.update();
  snow.sub();
  snow.display();
  
}

class Snow{
  constructor() {
    this.pos = createVector(0, height);    
  }
  
  update() {
    this.pos.y -= 0.1; 
  }
  
  sub() {
    if(mouseIsPressed){
      this.pos.y = this.pos.y +10;

    }
  }
  
  display() {
    fill(255, 100);
    rect(this.pos.x, this.pos.y, width, height);
  }
  
}

// 간단한 파티클 클래스


