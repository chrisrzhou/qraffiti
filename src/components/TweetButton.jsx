import Button from 'components/ui/Button';
import React from 'react';
import {connect} from 'react-redux';
import {getUrlParam} from 'redux/qr/selectors';

const TweetButton = ({location, urlParam}) => {
  const twitterOrigin = 'https://twitter.com/intent/tweet';
  const greetings = 'text=Check out this cool QR graffiti at';
  const url = `url=${location.origin}/?qr=${urlParam}`;
  const hashtags = 'hashtags=QRCodes,graffiti,react,redux,uiux';
  const href = `${twitterOrigin}?${greetings}&${url}&${hashtags}`;
  return (
    <a href={href} target="_blank">
      <Button label="Tweet" />
    </a>
  );
};

export default connect(({qr}) => ({
  urlParam: getUrlParam(qr),
}))(TweetButton);
