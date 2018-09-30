import {Box, Flex} from 'rebass';

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

const canvasSize = 40;

export default class QRPatternPreview extends React.PureComponent {
  static defaultProps = {
    type: 'eyes',
  };

  componentDidMount() {
    this._render();
  }

  componentDidUpdate() {
    this._render();
  }

  render() {
    const {isSelected, label, onClick} = this.props;
    return (
      <SelectBox isSelected={isSelected} onClick={onClick}>
        <Flex alignItems="center" flexDirection="column" m={1}>
          {label}
          <Box bg="white" mt={1} p={1}>
            <canvas ref={ref => (this._canvas = ref)} />
          </Box>
        </Flex>
      </SelectBox>
    );
  }

  _render() {
    const {renderer, type} = this.props;
    // clear context
    const context = this._canvas.getContext('2d');
    context.clearRect(0, 0, context.canvas.height, context.canvas.width);
    context.canvas.height = canvasSize;
    context.canvas.width = canvasSize;

    // render loop
    const pixels = getPixels(type);
    for (let x = 0; x < pixels.length; x++) {
      for (let y = 0; y < pixels.length; y++) {
        const value = pixels[x][y];
        const pixel = {x, y, value};
        // render default styles
        let fillStyle = 'rgba(0, 0, 0, 0)';
        if (value) {
          fillStyle = 'black';
        }
        context.fillStyle = fillStyle;
        renderer({
          context,
          pixel,
          pixels,
          canvasSize,
        });
      }
    }
  }
}
