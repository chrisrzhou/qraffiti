import 'globalStyles';

import App from './App';
import Helmet from 'react-helmet';
import {Provider} from 'react-redux';
import React from 'react';
import store from 'redux/store';

export default ({children}) => (
  <div style={{overflow: 'hidden'}}>
    <Helmet
      title="qraffiti"
      meta={[
        {name: 'description', content: 'Graffit with QR Codes'},
        {
          name: 'keywords',
          content:
            'qr, qrcode, generator, graffiti, ui, uiux, design, gatsby, chrisrzhou, art',
        },
      ]}>
      <html lang="en" />
    </Helmet>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
