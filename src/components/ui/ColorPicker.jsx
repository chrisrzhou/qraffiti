import {Box} from 'rebass';
import React from 'react';
import {SketchPicker} from 'react-color';
import {colors} from 'styles';

export default class ColorPicker extends React.PureComponent {
  state = {
    displayColorPicker: false,
    color: '#ffffff',
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
      <div>
        <Box
          css={`
            background: ${colors.white};
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
              position: absolute;
            `}>
            <Box
              css={`
                bottom: 0px;
                left: 0px;
                position: fixed;
                right: 0px;
                top: 0px;
              `}
              onClick={this.handleClose}
            />
            <SketchPicker color={color} onChange={this.handleChange} />
          </Box>
        )}
      </div>
    );
  }

  handleClick = () => {
    this.setState({displayColorPicker: !this.state.displayColorPicker});
  };

  handleClose = () => {
    this.setState({displayColorPicker: false});
  };

  handleChange = color => {
    this.setState({color: color.hex});
    this.props.onChange && this.props.onChange(color.hex);
  };
}
