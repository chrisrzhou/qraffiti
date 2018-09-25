export default () => {
  if (typeof window !== 'undefined') {
    window.location = '/';
  }
  return null;
};
