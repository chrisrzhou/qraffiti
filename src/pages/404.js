import React from 'react';

export default () => {
  if (typeof window !== 'undefined') {
    window.location = '/';
  }
  return <div />;
};
