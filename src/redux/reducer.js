import backgrounds from 'backgrounds';

const getInitialState = () => ({
  backgrounds,
  backgroundImage: backgrounds[0].url,
  text: 'Hello world',
});

export default (state = getInitialState(), action) => {
  return state;
};
