import {setBackgroundColors, setBackgroundImage} from 'redux/actions';

import ColorPicker from 'components/ui/ColorPicker';
import {Flex} from 'rebass';
import GraffitiText from 'components/ui/GraffitiText';
import React from 'react';
import Row from 'components/ui/Row';
import SelectBox from 'components/ui/SelectBox';
import backgrounds from 'backgrounds';
import {connect} from 'react-redux';

const getLinearGradient = colors => {
  return `linear-gradient(90deg, ${colors[0]}, ${colors[1]})`;
};

const BackgroundSettings = ({
  backgroundColors,
  backgroundImage,
  setBackgroundColors,
  setBackgroundImage,
}) => {
  const [color1, color2] = backgroundColors;
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" mb={3}>
        <GraffitiText>Gradient</GraffitiText>
        <Row
          items={[
            <ColorPicker
              color={color1}
              onChange={color => {
                const colors = [color, color2];
                setBackgroundColors(colors);
                setBackgroundImage(getLinearGradient(colors));
              }}
            />,
            <ColorPicker
              color={color2}
              onChange={color => {
                const colors = [color1, color];
                setBackgroundColors(colors);
                setBackgroundImage(getLinearGradient(colors));
              }}
            />,
          ]}
        />
      </Flex>
      {backgrounds.map(({label, value}) => (
        <SelectBox
          key={value}
          isSelected={backgroundImage === value}
          onClick={e => {
            setBackgroundImage(value);
          }}>
          <GraffitiText>{label}</GraffitiText>
        </SelectBox>
      ))}
    </Flex>
  );
};

const mapStateToProps = state => ({
  backgroundColors: state.backgroundColors,
  backgroundImage: state.backgroundImage,
});

export default connect(
  mapStateToProps,
  {setBackgroundColors, setBackgroundImage},
)(BackgroundSettings);
