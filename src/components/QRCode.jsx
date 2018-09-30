import * as d3 from 'd3';

import React from 'react';
import {getPixels} from 'qr/pixels';
import {getRenderer} from 'qr/patterns';

export default class QRCode extends React.PureComponent {
  static defaultProps = {
    canvasSize: 400,
    errorCorrectionLevel: 'L',
    eyeColors: ['#000000', '#000000'],
    eyePattern: 'base',
    pixelColors: ['#000000', '#000000'],
    pixelPattern: 'base',
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
      canvasSize,
      errorCorrectionLevel,
      eyeColors,
      eyePattern,
      inputString,
      pixelColors,
      pixelPattern,
    } = this.props;
    // get pixels
    const pixels = await getPixels(inputString, errorCorrectionLevel);

    // clear context
    const context = this._canvas.getContext('2d');
    context.clearRect(0, 0, context.canvas.height, context.canvas.width);
    context.canvas.height = canvasSize;
    context.canvas.width = canvasSize;

    // render loop
    for (let x = 0; x < pixels.length; x++) {
      for (let y = 0; y < pixels.length; y++) {
        const pixel = pixels[x][y];
        const {isInnerEye, isOuterEye, value} = pixel;
        const colorScale = d3
          .scaleLinear()
          .domain([0, pixels.length])
          .range(pixelColors)
          .interpolate(d3.interpolateHcl);

        // render default styles
        let fillStyle = 'rgba(0, 0, 0, 0)';
        if (value) {
          fillStyle = colorScale(x + y);
          if (!isInnerEye && !isOuterEye) {
            context.fillStyle = fillStyle;
            getRenderer(pixelPattern)({
              context,
              pixel,
              pixels,
              canvasSize,
              eyeColors,
              pixelColors,
            });
          } else {
            if (isInnerEye) {
              fillStyle = eyeColors[0];
            }
            if (isOuterEye) {
              fillStyle = eyeColors[1];
            }
            context.fillStyle = fillStyle;
            getRenderer(eyePattern)({
              context,
              pixel,
              pixels,
              canvasSize,
              eyeColors,
              pixelColors,
            });
          }
        }
      }
    }
  }
}
