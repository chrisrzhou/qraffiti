import 'styles/globalStyles';

import App from './App';
import Helmet from 'react-helmet';
import {Provider} from 'react-redux';
import React from 'react';
import store from 'redux/store';

export default ({children, location}) => (
  <>
    <Helmet
      title="qraffiti"
      meta={[
        {name: 'description', content: 'Create graffiti with QR Codes'},
        {
          name: 'keywords',
          content:
            'qr, qrcode, generator, graffiti, ui, uiux, design, chrisrzhou, chrisrzhou.io, react, redux, gatsbyjs, dataviz, netlify, jamstack',
        },
      ]}>
      <html lang="en" />
    </Helmet>
    <Provider store={store}>
      <App location={location} />
    </Provider>
  </>
);
