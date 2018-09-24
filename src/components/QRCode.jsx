import * as d3 from 'd3';

import React from 'react';
import {getPixels} from 'qr/pixels';
import renderers from 'qr/renderers';

export default class QRCode extends React.PureComponent {
  static defaultProps = {
    backgroundColors: ['rgba(0, 0, 0, 0)'],
    canvasSize: 400,
    errorCorrectionLevel: 'L',
    foregroundColors: ['black'],
    renderer: 'base',
  };

  componentDidMount() {
    this._renderQRCode();
  }

  componentDidUpdate() {
    this._renderQRCode();
  }

  render() {
    return (
      <canvas style={{alignSelf: 'center'}} ref={ref => (this._canvas = ref)} />
    );
  }

  async _renderQRCode() {
    const {
      settings,
      renderer,
      inputString,
      backgroundColors,
      canvasSize,
      foregroundColors,
      errorCorrectionLevel,
    } = this.props;
    const context = this._canvas.getContext('2d');

    const pixels = await getPixels(inputString, errorCorrectionLevel);
    const pixelSize = Math.sqrt(pixels.length);

    context.clearRect(0, 0, context.canvas.height, context.canvas.width);
    context.canvas.height = canvasSize;
    context.canvas.width = canvasSize;

    pixels.forEach(pixel => {
      // default styles
      const {isOuterEye, value, x, y} = pixel;
      const colorScale = d3
        .scaleLinear()
        .domain([0, pixelSize])
        .range(['#d73027', '#1a9850'])
        .interpolate(d3.interpolateHcl);

      let fillStyle = backgroundColors[0];
      if (value) {
        fillStyle = colorScale(x + y);
        if (isOuterEye) {
          fillStyle = 'red';
        }
      }
      context.fillStyle = fillStyle;

      renderers[renderer]({context, pixel, canvasSize, pixelSize});
    });
  }
}
