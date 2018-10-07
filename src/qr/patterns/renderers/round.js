export default (radialMargin = 0) => ({context, pixel, pixels, canvasSize}) => {
  const {x, y} = pixel;
  const size = canvasSize / pixels.length;

  context.beginPath();
  context.arc(
    x * size + size / 2,
    y * size + size / 2,
    ((1 - radialMargin) * size) / 2,
    0,
    2 * Math.PI,
    false,
  );
  context.fill();
};
