import { input } from "./helper";
import Ship from "./Ship";

class World {
  constructor(p5, width, height, { shipViewHitbox } = {}) {
    /** @type {import("p5").p5InstanceExtensions} */
    this.p5 = p5;
    this.width = width;
    this.height = height;

    this.ship = new Ship(this);

    if (shipViewHitbox) Ship.viewHitbox = true;
  }

  offscreen(obj) {
    return (
      obj.x + obj.size < 0 ||
      obj.x - obj.size > this.width ||
      obj.y + obj.size < 0 ||
      obj.y - obj.size > this.height
    );
  }

  onscreen(obj) {
    return !this.offscreen(obj);
  }

  getInput() {
    // Ship
    this.ship.rotation = 0;

    if (input(this.ship.p5).leftAndRight) return;

    if (input(this.ship.p5).left) this.ship.rotate(-1);
    else if (input(this.ship.p5).right) this.ship.rotate(1);
  }

  update() {
    this.ship.update();
  }
}

export default World;
