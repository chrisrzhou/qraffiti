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

export const settingsContentWidth = 300;

export const colors = {
  primary: 'rgba(210, 210, 210, 1)',
  secondary: 'rgba(255, 0, 0, 1)',
  blackAlpha: 'rgba(0, 0, 0, 0.85)',
  black: 'rgba(0, 0, 0, 1)',
  whiteAlpha: 'rgba(255, 255, 255, 0.8)',
  grayAlpha: 'rgba(255, 255, 255, 0.4)',
};
