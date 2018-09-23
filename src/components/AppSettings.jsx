import {setBackgroundImage, setFont} from 'redux/actions';

import {Flex} from 'rebass';
import React from 'react';
import Selector from 'components/Selector';
import {connect} from 'react-redux';

const AppSettings = ({
  backgroundImage,
  backgrounds,
  font,
  fonts,
  setBackgroundImage,
  setFont,
}) => (
  <Flex flexDirection="column" alignItems="center">
    <Selector
      label="background"
      items={backgrounds}
      selectedItem={backgroundImage}
      onSelectItem={item => {
        setBackgroundImage(item.value);
      }}
    />
    <Selector
      label="font"
      items={fonts}
      selectedItem={font}
      onSelectItem={item => {
        setFont(item.value);
      }}
    />
  </Flex>
);

const mapStateToProps = state => ({
  backgroundImage: state.backgroundImage,
  backgrounds: state.backgrounds,
  font: state.font,
  fonts: state.fonts,
});

export default connect(
  mapStateToProps,
  {setBackgroundImage, setFont},
)(AppSettings);
