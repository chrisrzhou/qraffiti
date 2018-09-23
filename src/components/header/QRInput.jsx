import {Flex} from 'rebass';
import QRInputURL from 'components/inputs/QRInputURL';
import React from 'react';

export default class QRInput extends React.PureComponent {
  render() {
    const {inputType} = this.props;
    switch (inputType) {
      case 'url':
      case 'text':
      case 'email':
      case 'phone':
      case 'sms':
      case 'location':
      case 'facebook':
      case 'twitter':
      case 'youtube':
      case 'wifi':
      case 'bitcoin':
      case 'event':
      default:
        return (
          <Flex justifyContent="center">
            <QRInputURL />
          </Flex>
        );
    }
  }
}
