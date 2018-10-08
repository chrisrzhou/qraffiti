import Button from 'components/ui/Button';
import React from 'react';
import {connect} from 'react-redux';

const SaveButton = ({href}) => (
  <a download="qrcode.png" href={href}>
    <Button label="Save" />
  </a>
);

export default connect(({qr}) => ({href: qr.imageHref}))(SaveButton);
