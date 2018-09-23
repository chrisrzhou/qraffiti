import Header from 'components/Header';
import Helmet from 'react-helmet';
import React from 'react';
import injectGlobal from 'globalStyles';

export default function({children}) {
  return (
    <>
      <Helmet
        title="qraffiti"
        meta={[
          {name: 'description', content: 'Sample'},
          {name: 'keywords', content: 'sample, something'},
        ]}>
        <html lang="en" />
      </Helmet>
      <Header siteTitle="qraffiti" />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}>
        {children}
      </div>
    </>
  );
}
