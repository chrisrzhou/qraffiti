import 'styles/globalStyles';

import App from './App';
import Helmet from 'react-helmet';
import {Provider} from 'react-redux';
import React from 'react';
import store from 'redux/store';

export default ({children}) => (
  <>
    <Helmet
      title="qraffiti"
      meta={[
        {name: 'description', content: 'Create graffiti with QR Codes'},
        {
          name: 'keywords',
          content:
            'qr, qrcode, generator, graffiti, ui, uiux, design, chrisrzhou, art, react, gatsby, static',
        },
      ]}>
      <html lang="en" />
    </Helmet>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
