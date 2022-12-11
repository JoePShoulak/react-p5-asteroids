import display from "./display";

class Ship {
  static viewHitbox = false;
  static viewEnginesOn = false;
  static viewVelocity = false;
  static viewAcceleration;

  constructor(world) {
    this.world = world;
    /** @type {import("p5").p5InstanceExtensions} */
    this.p5 = world.p5;
    this.size = 30;

    this.pos = this.p5.createVector();
    this.vel = this.p5.createVector();
    this.acc = this.p5.createVector();
    this.dampening = 0.995;
    this.maxSpeed = 1;

    this.heading = 0;
    this.rotation = 0;
    this.rotateSpeed = 0.03;

    this.enginesOn = false;
  }

  get boostForce() {
    const a = this.heading;
    const forceFactor = 0.01;
    return this.p5.createVector(Math.cos(a), Math.sin(a)).mult(forceFactor);
  }

  rotate(direction) {
    this.rotation = direction;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  wrap() {
    if (this.pos.x + this.size < -this.world.width / 2)
      this.pos.x += this.world.width;
    else if (this.pos.x - this.size > this.world.width / 2)
      this.pos.x -= this.world.width;

    if (this.pos.y + this.size < -this.world.height / 2)
      this.pos.y += this.world.height;
    else if (this.pos.y - this.size > this.world.height / 2)
      this.pos.y -= this.world.height;
  }

  update() {
    if (this.enginesOn) this.applyForce(this.boostForce);

    this.heading += this.rotation * this.rotateSpeed;
    this.vel.add(this.acc).limit(this.maxSpeed);
    if (!this.enginesOn) this.vel.mult(this.dampening);
    this.pos.add(this.vel);

    this.wrap();

    this.draw();

    this.acc.mult(0);
  }

  draw() {
    const d = display(this.p5);

    d.ship(this);

    if (Ship.viewHitbox) d.shipHitbox(this);
    if (Ship.viewVelocity) d.velocity(this);
    if (Ship.viewAcceleration) d.acceleration(this);
  }
}

export default Ship;
