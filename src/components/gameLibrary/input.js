const input = (p5) => ({
  leftAndRight:
    (p5.keyIsDown(65) || p5.keyIsDown(p5.LEFT_ARROW)) &&
    (p5.keyIsDown(68) || p5.keyIsDown(p5.RIGHT_ARROW)),

  left: p5.keyIsDown(65) || p5.keyIsDown(p5.LEFT_ARROW),
  right: p5.keyIsDown(68) || p5.keyIsDown(p5.RIGHT_ARROW),

  forward: p5.keyIsDown(87) || p5.keyIsDown(p5.UP_ARROW),
});

export default input;
