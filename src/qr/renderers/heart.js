export default ({
  context,
  pixel,
  pixels,
  canvasSize,
  eyeColors,
  bodyColors,
}) => {
  const {x, y} = pixel;
  const size = canvasSize / pixels.length;

  context.textBaseline = 'top';
  context.font = `${size}px serif`;
  context.fillText('♥', x * size, y * size);
};
