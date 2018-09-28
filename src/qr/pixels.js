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

        const innerEyeMask = getInnerEyeMask(size);
        const outerEyeMask = getOuterEyeMask(size);
        let pixels = [];
        for (let x = 0; x < size; x++) {
          for (let y = 0; y < size; y++) {
            const idx = (x + y * size) * 4;
            pixels.push({
              isInnerEye: mask(x, y, innerEyeMask),
              isOuterEye: mask(x, y, outerEyeMask),
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

function mask(x, y, innerMask) {
  if (innerMask[x]) {
    return innerMask[x][y];
  }
  return false;
}

// find an algorithm to compute inner/outer eye masks.
const getInnerEyeMask = size => ({
  6: {
    6: true,
    7: true,
    8: true,
    [size - 7]: true,
    [size - 8]: true,
    [size - 9]: true,
  },
  7: {
    6: true,
    7: true,
    8: true,
    [size - 7]: true,
    [size - 8]: true,
    [size - 9]: true,
  },
  8: {
    6: true,
    7: true,
    8: true,
    [size - 7]: true,
    [size - 8]: true,
    [size - 9]: true,
  },
  [size - 7]: {
    6: true,
    7: true,
    8: true,
  },
  [size - 8]: {
    6: true,
    7: true,
    8: true,
  },
  [size - 9]: {
    6: true,
    7: true,
    8: true,
  },
});

const getOuterEyeMask = size => ({
  4: {
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    [size - 5]: true,
    [size - 6]: true,
    [size - 7]: true,
    [size - 8]: true,
    [size - 9]: true,
    [size - 10]: true,
    [size - 11]: true,
  },
  5: {
    4: true,
    10: true,
    [size - 5]: true,
    [size - 11]: true,
  },
  6: {
    4: true,
    10: true,
    [size - 5]: true,
    [size - 11]: true,
  },
  7: {
    4: true,
    10: true,
    [size - 5]: true,
    [size - 11]: true,
  },
  8: {
    4: true,
    10: true,
    [size - 5]: true,
    [size - 11]: true,
  },
  9: {
    4: true,
    10: true,
    [size - 5]: true,
    [size - 11]: true,
  },
  10: {
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    [size - 5]: true,
    [size - 6]: true,
    [size - 7]: true,
    [size - 8]: true,
    [size - 9]: true,
    [size - 10]: true,
    [size - 11]: true,
  },
  [size - 5]: {
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
  },
  [size - 6]: {
    4: true,
    10: true,
  },
  [size - 7]: {
    4: true,
    10: true,
  },
  [size - 8]: {
    4: true,
    10: true,
  },
  [size - 9]: {
    4: true,
    10: true,
  },
  [size - 10]: {
    4: true,
    10: true,
  },
  [size - 11]: {
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
  },
});
