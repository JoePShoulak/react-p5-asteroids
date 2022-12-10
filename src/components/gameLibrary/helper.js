const display = (p5) => ({
  arrow: (size) => {
    p5.beginShape();
    p5.vertex(0, -size);
    p5.vertex(size / 2, size);
    p5.vertex(0, size / 2);
    p5.vertex(-size / 2, size);
    p5.endShape();
  },
});

const input = (p5) => ({
  leftAndRight:
    (p5.keyIsDown(65) || p5.keyIsDown(p5.LEFT_ARROW)) &&
    (p5.keyIsDown(68) || p5.keyIsDown(p5.RIGHT_ARROW)),

  left: p5.keyIsDown(65) || p5.keyIsDown(p5.LEFT_ARROW),
  right: p5.keyIsDown(68) || p5.keyIsDown(p5.RIGHT_ARROW),
});

module.exports = { display, input };
