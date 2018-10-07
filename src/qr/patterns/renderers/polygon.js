export default (sides = 3) => ({context, pixel, pixels, canvasSize}) => {
  const {x, y} = pixel;
  const size = canvasSize / pixels.length / 2;
  const xCenter = (2 * x + 1) * size;
  const yCenter = (2 * y + 1) * size;

  context.beginPath();
  context.moveTo(xCenter + size * Math.cos(0), yCenter + size * Math.sin(0));
  for (let i = 1; i <= sides; i += 1) {
    context.lineTo(
      xCenter + size * Math.cos((i * 2 * Math.PI) / sides),
      yCenter + size * Math.sin((i * 2 * Math.PI) / sides),
    );
  }
  context.fill();
};
