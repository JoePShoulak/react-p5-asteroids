import display from "./display";

class Ship {
  static viewHitbox = false;
  static viewEnginesOn = false;

  constructor(world) {
    this.world = world;
    /** @type {import("p5").p5InstanceExtensions} */
    this.p5 = world.p5;
    this.size = 30;

    this.pos = this.p5.createVector();
    this.vel = this.p5.createVector();
    this.acc = this.p5.createVector();
    this.dampening = 0.95;

    this.heading = 0;
    this.rotation = 0;
    this.rotateSpeed = 0.03;

    this.enginesOn = false;
  }

  get boostForce() {
    const a = this.heading;
    return this.p5.createVector(Math.cos(a), Math.sin(a)).mult(0.01);
  }

  rotate(direction) {
    this.rotation = direction;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (this.enginesOn) this.applyForce(this.boostForce);
    else this.speed *= this.dampening;

    this.heading += this.rotation * this.rotateSpeed;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.draw();
  }

  draw() {
    display(this.p5).ship(this);

    if (Ship.viewHitbox) display(this.p5).shipHitbox(this);
  }
}

export default Ship;
