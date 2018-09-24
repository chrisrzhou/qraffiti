import React from 'react';
import Selector from 'components/ui/Selector';
import {connect} from 'react-redux';
import {setFont} from 'redux/actions';

const FontSettings = ({font, fonts, setFont}) => (
  <Selector
    label="font"
    items={fonts}
    selectedItem={font}
    onSelectItem={item => {
      setFont(item.value);
    }}
  />
);

const mapStateToProps = state => ({
  font: state.font,
  fonts: state.fonts,
});

export default connect(
  mapStateToProps,
  {setFont},
)(FontSettings);
