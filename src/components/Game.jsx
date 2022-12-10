import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Asteroid from "./gameLibrary/Asteroid";
import World from "./gameLibrary/World";

const sketch = (
  /** @type {import("p5").p5InstanceExtensions} */
  p5
) => {
  let world;

  let asteroids = [];

  const width = 600;
  const height = 400;

  p5.keyPressed = () => world.getInput();
  p5.keyReleased = () => world.getInput();

  p5.setup = () => {
    p5.createCanvas(width, height);

    world = new World(p5, width, height, {
      viewFrameRate: true,
      shipViewHitbox: true,
      shipViewEnginesOn: true,
    });

    asteroids.push(new Asteroid(world));
  };

  p5.draw = () => {
    p5.background(20);

    world.update();

    asteroids.forEach((a) => a.draw());
  };
};

const Game = () => <ReactP5Wrapper sketch={sketch} />;

export default Game;
