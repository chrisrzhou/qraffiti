export default (spaceProportion = 0) => ({
  context,
  pixel,
  pixels,
  canvasSize,
  eyeColors,
  pixelColors,
}) => {
  const {x, y} = pixel;
  const size = canvasSize / pixels.length;

  context.beginPath();
  context.arc(
    x * size + size / 2,
    y * size + size / 2,
    ((1 - spaceProportion) * size) / 2,
    0,
    2 * Math.PI,
    false,
  );
  context.fill();
};
