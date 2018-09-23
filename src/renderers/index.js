export default {
  base: ({context, pixel, canvasSize, pixelSize}) => {
    const size = canvasSize / pixelSize;
    const {x, y} = pixel;

    context.fillRect(x * size - size / 2, y * size - size / 2, size, size);
  },
};
