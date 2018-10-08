import {Box} from 'rebass';
import React from 'react';
import {SketchPicker} from 'react-color';
import {colors} from 'styles';

export default class ColorPicker extends React.PureComponent {
  state = {
    color: 'rgba(255, 255, 255, 1)',
    displayColorPicker: false,
  };

  componentDidMount() {
    this.setState({color: this.props.color});
  }

  componentDidUpdate(prevProps) {
    const {color} = this.props;
    if (prevProps.color !== color) {
      this.setState({color});
    }
  }

  render() {
    const {color, displayColorPicker} = this.state;
    return (
      <Box>
        <Box
          css={`
            background: ${colors.primary};
            box-shadow: 0 0 0 1px ${colors.whiteAlpha};
            cursor: pointer;
            padding: 2px;
          `}
          onClick={this.handleClick}>
          <Box
            css={`
              width: 40px;
              height: 16px;
              background: ${color};
            `}
          />
        </Box>
        {displayColorPicker && (
          <Box
            css={`
              left: 0;
              position: fixed;
              top: 0;
            `}>
            <Box
              css={`
                bottom: 0;
                left: 0;
                position: fixed;
                right: 0;
                top: 0;
              `}
              onClick={this.handleClose}
            />
            <SketchPicker color={color} onChange={this.handleChange} />
          </Box>
        )}
      </Box>
    );
  }

  handleClick = () => {
    this.setState({displayColorPicker: !this.state.displayColorPicker});
  };

  handleClose = () => {
    this.setState({displayColorPicker: false});
  };

  handleChange = color => {
    const {r, g, b, a} = color.rgb;
    const rgbaColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    this.setState({color: rgbaColor});
    this.props.onChange && this.props.onChange(rgbaColor);
  };
}
