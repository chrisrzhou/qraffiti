import 'globalStyles';

import Header from 'components/Header';
import Helmet from 'react-helmet';
import {Provider} from 'react-redux';
import React from 'react';
import store from 'redux/store';

export default function({children}) {
  return (
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
      <Header siteTitle="qraffiti" />
      <Provider store={store}>{children}</Provider>
    </>
  );
}
