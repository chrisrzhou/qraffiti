import Button from 'components/ui/Button';
import React from 'react';
import {connect} from 'react-redux';
import {getUrlParam} from 'redux/qr/selectors';

const PermalinkButton = ({location, urlParam}) => {
  const href = `${location.origin}/?qr=${urlParam}`;
  return (
    <a href={href} target="_blank">
      <Button label="Permalink" />
    </a>
  );
};

export default connect(({qr}) => ({
  urlParam: getUrlParam(qr),
}))(PermalinkButton);
