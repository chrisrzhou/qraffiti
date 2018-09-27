export const keyframes = {
  fadein: `
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  dropdown: `
    @keyframes dropdown {
      0% {
        transform: translateY(-100%);
        opacity: 0;
      }
      50% {
        transform: translateY(0);
      }
      100% {
        opacity: 1;
      }
    }
  `,
};

export const colors = {
  primary: '#ccc',
  secondary: 'red',
  blackAlpha: 'rgba(0, 0, 0, 0.8)',
  black: 'black',
  white: 'white',
  whiteAlpha: 'rgba(255, 255, 255, 0.8)',
  grayAlpha: 'rgba(255, 255, 255, 0.4)',
};
