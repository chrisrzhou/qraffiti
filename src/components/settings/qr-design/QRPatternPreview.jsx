import {Box, Text} from 'rebass';

import React from 'react';
import SelectBox from 'components/ui/SelectBox';

const getPixels = type => {
  if (type === 'eyes') {
    return [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ];
  } else {
    return [
      [0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 1],
      [0, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 1, 0],
      [0, 1, 0, 0, 1, 0, 1],
      [0, 1, 1, 0, 0, 1, 1],
      [0, 0, 0, 1, 1, 0, 1],
    ];
  }
};

const PREVIEW_SIZE = 40;

export default class QRPatternPreview extends React.PureComponent {
  static defaultProps = {
    type: 'eyes',
  };

  componentDidMount() {
    this._render();
  }

  render() {
    const {isSelected, label, onClick} = this.props;
    return (
      <SelectBox isSelected={isSelected} m={1} p={1} onClick={onClick}>
        <Text textAlign="center">{label}</Text>
        <Box bg="white" mt={1}>
          <canvas ref={ref => (this._canvas = ref)} />
        </Box>
      </SelectBox>
    );
  }

  _render() {
    const {renderer, type} = this.props;
    const context = this._canvas.getContext('2d');
    context.clearRect(0, 0, context.canvas.height, context.canvas.width);
    context.canvas.height = PREVIEW_SIZE;
    context.canvas.width = PREVIEW_SIZE;

    const pixels = getPixels(type);
    for (let x = 0; x < pixels.length; x++) {
      for (let y = 0; y < pixels.length; y++) {
        const value = pixels[x][y];
        const pixel = {x, y, value};
        let fillStyle = 'rgba(0, 0, 0, 0)';
        if (value) {
          fillStyle = 'black';
        }
        context.fillStyle = fillStyle;
        renderer({
          canvasSize: PREVIEW_SIZE,
          context,
          pixel,
          pixels,
        });
      }
    }
  }
}
