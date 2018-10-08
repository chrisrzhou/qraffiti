import * as d3Scale from 'd3-scale';

import React from 'react';
import {getPixels} from 'qr/utils';
import {getRenderer} from 'qr/patterns';

export default class QRCode extends React.PureComponent {
  static defaultProps = {
    backgroundColors: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)'],
    bodyColors: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'],
    bodyPattern: 'base',
    eyeColors: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'],
    eyePattern: 'base',
    maxSize: 400,
  };

  state = {
    width: 0,
  };

  componentDidMount() {
    this._resize();
    this._render();
    window.addEventListener('resize', this._resize);
  }

  componentDidUpdate(prevProps, prevState) {
    this._render();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  render() {
    return <canvas ref={ref => (this._canvas = ref)} />;
  }

  _render() {
    const {backgroundImage} = this.props;
    const {canvasSize} = this.state;

    // reset canvas
    this._context = this._canvas.getContext('2d');
    this._context.clearRect(
      0,
      0,
      this._context.canvas.height,
      this._context.canvas.width,
    );
    this._context.canvas.height = canvasSize;
    this._context.canvas.width = canvasSize;

    if (backgroundImage) {
      this._renderBackground(backgroundImage);
    } else {
      this._renderQRCode();
    }
  }

  _renderBackground(backgroundImage) {
    const {canvasSize} = this.state;

    // render background if available
    this._backgroundImage = new Image();
    this._backgroundImage.onload = () => {
      this._context.drawImage(
        this._backgroundImage,
        0,
        0,
        canvasSize,
        canvasSize,
      );
      this._renderQRCode();
    };
    this._backgroundImage.src = backgroundImage;
  }

  async _renderQRCode() {
    const {canvasSize} = this.state;
    const {
      backgroundImage,
      backgroundColors,
      bodyColors,
      bodyPattern,
      eyeColors,
      eyePattern,
      inputString,
      logoImage,
    } = this.props;
    // get pixels
    const errorCorrectionLevel = logoImage ? 'H' : 'M';
    const pixels = await getPixels(inputString, errorCorrectionLevel);

    // render linear gradient background
    if (!backgroundImage) {
      const gradient = this._context.createLinearGradient(0, 0, 170, 0);
      gradient.addColorStop(0, backgroundColors[0]);
      gradient.addColorStop(1, backgroundColors[1]);
      this._context.fillStyle = gradient;
      this._context.fillRect(0, 0, canvasSize, canvasSize);
    }

    // render pixels
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
            this._context.fillStyle = fillStyle;
            getRenderer(bodyPattern)({
              context: this._context,
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
            this._context.fillStyle = fillStyle;
            getRenderer(eyePattern)({
              context: this._context,
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
    const logoSize = canvasSize / 4;
    this._logoImage = new Image();
    this._logoImage.onload = () => {
      this._context.drawImage(
        this._logoImage,
        canvasSize / 2 - logoSize / 2,
        canvasSize / 2 - logoSize / 2,
        logoSize,
        logoSize,
      );
    };
    this._logoImage.src = logoImage;
  }

  _resize = () => {
    this.setState({
      canvasSize: Math.min(this.props.maxSize, window.innerWidth),
    });
  };
}
