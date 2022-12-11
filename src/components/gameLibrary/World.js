import display from "./display";
import input from "./input";
import Ship from "./Ship";

class World {
  constructor(
    p5,
    width,
    height,
    {
      // Global
      viewFrameRate,
      // Ship
      shipViewHitbox,
      shipViewEnginesOn,
      shipViewHeading,
    } = {}
  ) {
    /** @type {import("p5").p5InstanceExtensions} */
    this.p5 = p5;
    this.width = width;
    this.height = height;
    this.bgColor = 20;

    this.ship = new Ship(this);
    this.asteroids = [];

    // World
    this.viewFrameRate = viewFrameRate ?? false;
    // Ship
    if (shipViewHitbox) Ship.viewHitbox = true;
    if (shipViewEnginesOn) Ship.viewEnginesOn = true;
    if (shipViewHeading) Ship.viewHeading = true;
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
    /* == SHIP == */
    // Turning
    this.ship.rotation = 0;

    if (input(this.p5).leftAndRight) return;

    if (input(this.p5).left) this.ship.rotate(-1);
    else if (input(this.p5).right) this.ship.rotate(1);

    // Engines
    if (input(this.p5).forward) this.ship.enginesOn = true;
    else this.ship.enginesOn = false;
  }

  update() {
    this.p5.background(this.bgColor);

    if (this.viewFrameRate) display(this.p5).frameRate();
    if (Ship.viewEnginesOn) display(this.p5).shipEnginesOn(this.ship);

    this.p5.translate(this.p5.width / 2, this.p5.height / 2);

    this.ship.update();
    this.asteroids.forEach((a) => a.update());
  }
}

export default World;
