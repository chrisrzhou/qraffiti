import * as d3 from 'd3';

import React from 'react';
import {getPixels} from './../QRPixels';

export default class QRCanvas extends React.PureComponent {
  static defaultProps = {
    colorDark: '#000000ff',
    colorLight: '#ffffffff',
    errorCorrectionLevel: 'M',
    size: 400,
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
      colorDark,
      colorLight,
      errorCorrectionLevel,
      size,
      text,
    } = this.props;
    const ctx = this._canvas.getContext('2d');

    const pixels = await getPixels(text, errorCorrectionLevel);
    const pixelSize = Math.sqrt(pixels.length);

    ctx.clearRect(0, 0, ctx.canvas.height, ctx.canvas.width);
    ctx.canvas.height = size;
    ctx.canvas.width = size;

    const colorScale = d3
      .scaleLinear()
      .domain([0, pixelSize])
      .range(['#d73027', '#1a9850'])
      .interpolate(d3.interpolateHcl);

    let shape = 'square';
    let scale = size / pixelSize;
    let halfScale = 2;
    pixels.forEach(pixel => {
      const {finder, value, x, y} = pixel;
      let fillStyle = colorLight;
      if (value) {
        fillStyle = colorDark;
        if (finder) {
          fillStyle = 'red';
        }
      }
      ctx.fillStyle = fillStyle;

      switch (shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(x * scale, y * scale, halfScale, 0, 2 * Math.PI, true);
          ctx.fill();
          ctx.closePath();
          break;
        default:
          ctx.fillRect(
            x * scale - halfScale,
            y * scale - halfScale,
            scale,
            scale,
          );
      }
    });
  }
}
