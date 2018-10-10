import Button from 'components/ui/Button';
import {QR_CANVAS_DOM_ID} from './QRCodeContainer';
import React from 'react';

export default () => {
  return (
    <Button
      label="Save"
      onClick={() => {
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = document.getElementById(QR_CANVAS_DOM_ID).toDataURL();
        link.click();
      }}
    />
  );
};
