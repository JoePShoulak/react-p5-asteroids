import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import World from "./gameLibrary/World";

const sketch = (
  /** @type {import("p5").p5InstanceExtensions} */
  p5
) => {
  let world;

  const width = 600;
  const height = 400;

  p5.keyPressed = () => world.getInput();
  p5.keyReleased = () => world.getInput();

  p5.setup = () => {
    p5.createCanvas(width, height);

    world = new World(p5, width, height, {
      // shipViewHitbox: true,
    });
  };

  p5.draw = () => {
    p5.background(20);
    p5.translate(p5.width / 2, p5.height / 2);

    world.update();
  };
};

const Game = () => <ReactP5Wrapper sketch={sketch} />;

export default Game;
