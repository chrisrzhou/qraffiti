import {setBackgroundColors, setBackgroundImage} from 'redux/actions';

import ColorPicker from 'components/ui/ColorPicker';
import {Flex} from 'rebass';
import GraffitiText from 'components/ui/GraffitiText';
import React from 'react';
import Row from 'components/ui/Row';
import Selector from 'components/ui/Selector';
import bgArt from 'assets/backgrounds/art.jpg';
import bgBricks from 'assets/backgrounds/bricks.jpg';
import bgGraffiti from 'assets/backgrounds/graffiti.jpg';
import bgWall from 'assets/backgrounds/wall.jpg';
import bgYellow from 'assets/backgrounds/yellow.jpg';
import {connect} from 'react-redux';

const backgrounds = [
  {label: 'art', value: `url(${bgArt})`},
  {label: 'graffiti', value: `url(${bgGraffiti})`},
  {label: 'yellow', value: `url(${bgYellow})`},
  {label: 'wall', value: `url(${bgWall})`},
  {label: 'bricks', value: `url(${bgBricks})`},
];

const BackgroundSettings = ({
  backgroundColors,
  backgroundImage,
  setBackgroundColors,
  setBackgroundImage,
}) => {
  const [color1, color2] = backgroundColors;
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" mb={4}>
        <GraffitiText>Gradient</GraffitiText>
        <Row
          items={[
            <ColorPicker
              color={color1}
              onChange={color => {
                setBackgroundColors([color, color2]);
              }}
            />,
            <ColorPicker
              color={color2}
              onChange={color => {
                setBackgroundColors([color1, color]);
              }}
            />,
          ]}
        />
      </Flex>
      <Selector
        items={backgrounds}
        selectedItem={backgroundImage}
        onSelectItem={item => {
          setBackgroundImage(item.value);
        }}
      />
    </Flex>
  );
};

export default connect(
  ({app}) => ({
    backgroundColors: app.backgroundColors,
    backgroundImage: app.backgroundImage,
  }),
  {setBackgroundColors, setBackgroundImage},
)(BackgroundSettings);
