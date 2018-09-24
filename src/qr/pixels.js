import QRCode from 'qrcode';

export async function getPixels(text, errorCorrectionLevel = 'M') {
  const options = {
    errorCorrectionLevel,
    scale: 1,
  };
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(text, options, (error, src) => {
      const img = new Image();
      img.onload = () => {
        // load and get image data
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const {height: size} = img;
        context.drawImage(img, 0, 0);
        const {data} = context.getImageData(0, 0, size, size);

        let pixels = [];
        for (let x = 0; x < size; x++) {
          for (let y = 0; y < size; y++) {
            const idx = (x + y * size) * 4;
            pixels.push({
              isInnerEye: isInnerEye(x, y, size),
              isOuterEye: isInnerEye(x, y, size),
              value: data[idx] > 0 ? 0 : 1,
              x,
              y,
            });
          }
        }
        resolve(pixels);
      };
      img.src = src;
    });
  });
}

function isInnerEye(x, y, size) {
  const edge = 4 + 7; // margin + finder width
  return (
    (x <= edge && y <= edge) || // top-left
    (x >= size - edge && y <= edge) || // top-right
    (x <= edge && y >= size - edge) // bottom-left
  );
}
