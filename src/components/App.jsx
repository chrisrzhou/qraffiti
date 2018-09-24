import QRCode from './QRCode';
import React from 'react';
import {connect} from 'react-redux';
import {setRandomBackgroundImage} from 'redux/actions';

class App extends React.PureComponent {
  componentDidMount() {
    const {setRandomBackgroundImage} = this.props;
    this.backgroundInterval = setInterval(setRandomBackgroundImage, 8000);
  }

  componentWillUnmount() {
    if (this.backgroundInterval) {
      clearInterval(this.backgroundInterval);
    }
  }

  render() {
    const {inputString} = this.props;
    return <QRCode renderer="base" inputString={inputString} />;
  }
}

const mapStateToProps = state => ({
  inputString: state.inputString,
});

export default connect(
  mapStateToProps,
  {setRandomBackgroundImage},
)(App);
