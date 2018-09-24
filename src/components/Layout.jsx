import 'globalStyles';

import Background from './Background';
import {Flex} from 'rebass';
import Header from 'components/header/Header';
import Helmet from 'react-helmet';
import {Provider} from 'react-redux';
import React from 'react';
import music from 'music/adorable.wav';
import store from 'redux/store';

export default ({children}) => (
  <>
    <Helmet
      title="qraffiti"
      meta={[
        {name: 'description', content: 'Graffit with QR Codes'},
        {
          name: 'keywords',
          content: 'qr, graffiti, chrisrzhou, viz, web, design',
        },
      ]}>
      <html lang="en" />
    </Helmet>
    <Provider store={store}>
      <div>
        <Background />
        <Header />
        <Flex flexDirection="column" mt={[2, 5]}>
          {children}
        </Flex>
      </div>
    </Provider>
    <audio id="music" loop src={music} autoPlay />
  </>
);
