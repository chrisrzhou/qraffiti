export default ({
  context,
  pixel,
  pixels,
  canvasSize,
  eyeColors,
  pixelColors,
}) => {
  const size = canvasSize / pixels.length;
  const {x, y} = pixel;
  context.beginPath();
  context.arc(
    x * size - size / 2,
    y * size - size / 2,
    size / 2,
    0,
    2 * Math.PI,
    false,
  );
  context.fill();
};
