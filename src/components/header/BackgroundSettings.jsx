import React from 'react';
import Selector from 'components/ui/Selector';
import {connect} from 'react-redux';
import {setBackgroundImage} from 'redux/actions';

const BackgroundSettings = ({
  backgroundImage,
  backgrounds,
  setBackgroundImage,
}) => (
  <Selector
    label="background"
    items={backgrounds}
    selectedItem={backgroundImage}
    onSelectItem={item => {
      setBackgroundImage(item.value);
    }}
  />
);

const mapStateToProps = state => ({
  backgroundImage: state.backgroundImage,
  backgrounds: state.backgrounds,
});

export default connect(
  mapStateToProps,
  {setBackgroundImage},
)(BackgroundSettings);
