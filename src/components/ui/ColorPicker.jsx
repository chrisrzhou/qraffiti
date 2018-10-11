import {Box, Flex} from 'rebass';

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
            background: ${colors.blackAlpha};
            box-shadow: 0 0 0 1px ${colors.whiteAlpha};
            cursor: pointer;
            padding: 2px;
          `}
          onClick={this.handleClick}>
          <Box
            css={`
              background: ${color};
              border: 1px solid black;
              height: 16px;
              width: 40px;
            `}
          />
        </Box>
        {displayColorPicker && (
          <Flex
            alignItems="center"
            bg={colors.blackAlpha}
            css={`
              bottom: 0;
              left: 0;
              position: fixed;
              right: 0;
              top: 0;
            `}
            justifyContent="center">
            <Box
              css={`
                bottom: 0;
                left: 0;
                position: fixed;
                right: 0;
                top: 0;
              `}
              onClick={this.handleClose}
            />{' '}
            <SketchPicker color={color} onChange={this.handleChange} />
          </Flex>
        )}
      </Box>
    );
  }

  handleClick = () => {
    this.setState({displayColorPicker: !this.state.displayColorPicker});
  };

  handleClose = e => {
    e.stopPropagation();
    this.setState({displayColorPicker: false});
  };

  handleChange = color => {
    const {r, g, b, a} = color.rgb;
    const rgbaColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    this.setState({color: rgbaColor});
    this.props.onChange && this.props.onChange(rgbaColor);
  };
}
