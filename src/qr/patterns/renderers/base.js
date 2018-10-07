export default ({
  context,
  pixel,
  pixels,
  canvasSize,
  eyeColors,
  pixelColors,
}) => {
  const {x, y} = pixel;
  const size = canvasSize / pixels.length;

  context.fillRect(x * size, y * size, size, size);
};
