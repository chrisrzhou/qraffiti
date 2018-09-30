import base from './base';
import round from './round';

const patterns = {
  base: {
    label: 'Base',
    value: 'base',
    renderer: base,
  },
  round: {
    label: 'Round',
    value: 'round',
    renderer: round,
  },
};

export const getRenderer = pattern => patterns[pattern].renderer;

export default patterns;
