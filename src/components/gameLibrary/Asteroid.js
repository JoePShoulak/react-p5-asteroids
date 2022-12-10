import display from "./display";

class Asteroid {
  constructor(world) {
    this.world = world;
    /** @type {import("p5").p5InstanceExtensions} */
    this.p5 = world.p5;
    this.size = 20;

    this.pos = this.p5.createVector();
  }

  draw() {
    display(this.p5).target(this.pos, this.size);
  }
}

export default Asteroid;
