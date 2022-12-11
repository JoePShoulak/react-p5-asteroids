const display = (
  /** @type {import("p5").p5InstanceExtensions} */
  p5
) => {
  const textOffset = 20;
  const velDrawScale = 100;
  const accDrawScale = 4000;

  return {
    /* == MISC AND DEUBGGING == */
    arrow: (size) => {
      p5.beginShape();
      p5.vertex(0, -size);
      p5.vertex(size / 2, size);
      p5.vertex(0, size / 2);
      p5.vertex(-size / 2, size);
      p5.endShape();
    },

    frameRate: () => {
      p5.push();
      p5.noStroke();
      p5.fill("white");
      p5.text(`${~~p5.frameRate()} fps`, textOffset, 2 * p5.textSize());
      p5.pop();
    },

    target: (pos, size) => {
      p5.push();
      p5.noStroke();
      p5.fill("red");
      p5.circle(pos.x, pos.y, size * 2);
      p5.fill("white");
      p5.circle(pos.x, pos.y, (size * 3) / 2);
      p5.fill("red");
      p5.circle(pos.x, pos.y, size);
      p5.fill("white");
      p5.circle(pos.x, pos.y, size / 2);
      p5.pop();
    },

    velocity: ({ pos, vel }) => {
      if (vel.mag() === 0) return;

      vel = vel.copy().mult(velDrawScale);
      p5.stroke("green");
      p5.push();
      p5.translate(pos);
      p5.line(0, 0, vel.x, vel.y);
      p5.pop();
    },

    acceleration: ({ pos, acc }) => {
      if (acc.mag() === 0) return;

      acc = acc.copy().mult(accDrawScale);
      p5.stroke("blue");
      p5.push();
      p5.translate(pos);
      p5.line(0, 0, acc.x, acc.y);
      p5.pop();
    },

    /* == SHIP == */
    ship: (ship) => {
      p5.push();
      p5.noStroke();
      p5.fill("white");

      p5.translate(ship.pos);
      p5.rotate(ship.heading + p5.HALF_PI);
      display(p5).arrow(ship.size);

      if (ship.enginesOn) display(p5).shipEngine(ship);
      p5.pop();
    },

    shipEngine: (ship) => {
      p5.push();
      p5.noStroke();
      p5.fill("red");
      p5.circle(0, (ship.size * 3) / 4, ship.size / 2);
      p5.pop();
    },

    shipHitbox: (ship) => {
      p5.push();
      p5.noFill();
      p5.translate(ship.pos);
      p5.stroke("orange");
      p5.circle(0, 0, ship.size * 2);
      p5.pop();
    },

    shipEnginesOn: (ship) => {
      p5.push();
      p5.noStroke();
      p5.fill("white");
      p5.text(
        `Ship: EnginesOn?: ${ship.enginesOn}`,
        textOffset,
        3 * p5.textSize()
      );
      p5.pop();
    },
  };
};

export default display;
