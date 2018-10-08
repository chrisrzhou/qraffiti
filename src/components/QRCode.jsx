import * as d3Scale from 'd3-scale';

import React from 'react';
import {getPixels} from 'qr/utils';
import {getRenderer} from 'qr/patterns';

export default class QRCode extends React.PureComponent {
  static defaultProps = {
    bodyColors: ['#000000', '#000000'],
    bodyPattern: 'base',
    eyeColors: ['#000000', '#000000'],
    eyePattern: 'base',
    maxSize: 400,
  };

  state = {
    width: 0,
  };

  componentDidMount() {
    this._resize();
    this._renderQRCode();
    window.addEventListener('resize', this._resize);
  }

  componentDidUpdate(prevProps, prevState) {
    this._renderQRCode();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  render() {
    return <canvas ref={ref => (this._canvas = ref)} />;
  }

  async _renderQRCode() {
    const {canvasSize} = this.state;
    const {
      bodyColors,
      bodyPattern,
      eyeColors,
      eyePattern,
      inputString,
      logoImageData,
    } = this.props;
    // get pixels
    const errorCorrectionLevel = logoImageData ? 'H' : 'M';
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
        const colorScale = d3Scale
          .scaleLinear()
          .domain([0, pixels.length])
          .range(bodyColors);

        // render default styles
        let fillStyle = 'rgba(0, 0, 0, 0)';
        if (value) {
          fillStyle = colorScale(x + y);
          if (!isInnerEye && !isOuterEye) {
            context.fillStyle = fillStyle;
            getRenderer(bodyPattern)({
              context,
              pixel,
              pixels,
              canvasSize,
              eyeColors,
              bodyColors,
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
              bodyColors,
            });
          }
        }
      }
    }

    // render logo if available
    if (logoImageData) {
      const logoSize = canvasSize / 4;
      this._logoImage = new Image();
      this._logoImage.onload = () => {
        context.drawImage(
          this._logoImage,
          canvasSize / 2 - logoSize / 2,
          canvasSize / 2 - logoSize / 2,
          logoSize,
          logoSize,
        );
      };
      this._logoImage.src = logoImageData;
    }
  }

  _resize = () => {
    this.setState({
      canvasSize: Math.min(this.props.maxSize, window.innerWidth),
    });
  };
}
