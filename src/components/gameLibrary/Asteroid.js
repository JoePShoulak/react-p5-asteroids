import display from "./display";

class Asteroid {
  static viewHitbox = false;
  static viewVelocity = false;
  static viewAcceleration = false;

  constructor(world) {
    this.world = world;
    /** @type {import("p5").p5InstanceExtensions} */
    this.p5 = world.p5;
    this.size = 20;

    this.pos = this.p5.createVector();
  }

  update() {
    this.draw();
  }

  draw() {
    const d = display(this.p5);

    d.target(this.pos, this.size);
  }
}

export default Asteroid;
