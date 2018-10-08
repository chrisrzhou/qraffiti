import QRCode from 'qrcode';

export const createInput = ({id, fields, getInputString}) => ({
  value: id,
  label: _prettifyText(id),
  fields: fields.map(field => {
    const {id, placeholder, type} = field;
    return {
      id,
      label: _prettifyText(id),
      placeholder,
      type,
    };
  }),
  getInputString,
});

export const createPattern = ({id, renderer, type}) => ({
  value: id,
  label: _prettifyText(id),
  renderer,
  type,
});

export const getPixels = async (text, errorCorrectionLevel = 'M') => {
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
          let row = [];
          for (let y = 0; y < size; y++) {
            const idx = (x + y * size) * 4;
            row.push({
              isInnerEye: _isInnerEye(x, y, size),
              isOuterEye: _isOuterEye(x, y, size),
              value: data[idx] > 0 ? 0 : 1,
              x,
              y,
            });
          }
          pixels.push(row);
        }
        resolve(pixels);
      };
      img.src = src;
    });
  });
};

const _prettifyText = text => text.replace(/[^a-zA-Z0-9]/g, ' ');

const _isInnerEye = (x, y, size) => {
  return (
    (x > 5 && x < 9 && ((y > 5 && y < 9) || (y > size - 10 && y < size - 6))) ||
    (x > size - 10 && x < size - 6 && (y > 5 && y < 9))
  );
};

const _isOuterEye = (x, y, size) => {
  return (
    ((x === 4 || x === 10) && (y >= 4 && y <= 11)) || // top-left
    ((y === 4 || y === 10) && (x >= 4 && x <= 11)) || // top-left
    ((x === 4 || x === 10) && (y >= size - 11 && y <= size - 5)) || // bottom-left
    ((y === size - 5 || y === size - 11) && (x >= 4 && x <= 11)) || // bottom-left
    ((y === 4 || y === 10) && (x >= size - 11 && x <= size - 5)) || // top-right
    ((x === size - 5 || x === size - 11) && (y >= 4 && y <= 11)) // top-right
  );
};
