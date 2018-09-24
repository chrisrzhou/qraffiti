import GraffitiText from 'components/ui/GraffitiText';
import Layout from 'components/Layout';
import QRCode from 'components/QRCode';
import React from 'react';

const NotFoundPage = () => (
  <Layout>
    <GraffitiText color="red" fontSize={[50, 100]}>
      404
    </GraffitiText>
    <QRCode input="404" />
  </Layout>
);

export default NotFoundPage;
