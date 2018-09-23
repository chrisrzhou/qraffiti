import 'globalStyles';

import Background from 'components/Background';
import {Flex} from 'rebass';
import Header from 'components/Header';
import Helmet from 'react-helmet';
import {Provider} from 'react-redux';
import React from 'react';
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
      <Flex flexDirection="column">
        <Background />
        <Header />
        {children}
      </Flex>
    </Provider>
  </>
);
