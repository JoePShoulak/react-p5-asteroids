import { display } from "./helper";

class Ship {
  static viewHitbox = false;

  constructor(world) {
    this.world = world;
    /** @type {import("p5").p5InstanceExtensions} */
    this.p5 = world.p5;
    this.size = 30;

    this.pos = this.p5.createVector();
    this.heading = 0;
    this.rotation = 0;
    this.rotateSpeed = 0.03;
  }

  rotate(direction) {
    this.rotation = direction;
  }

  update() {
    this.heading += this.rotation * this.rotateSpeed;

    this.draw();
  }

  draw() {
    this.p5.push();
    this.p5.noStroke();
    this.p5.fill("white");

    this.p5.translate(this.pos);
    this.p5.rotate(this.heading + this.p5.HALF_PI);
    display(this.p5).arrow(this.size);
    this.p5.pop();

    if (Ship.viewHitbox) {
      this.p5.push();
      this.p5.noFill();
      this.p5.stroke("blue");
      this.p5.circle(0, 0, this.size * 2);
      this.p5.pop();
    }
  }
}

export default Ship;
