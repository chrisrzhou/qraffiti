import base from './base';
import polygon from './polygon';
import round from './round';

const patterns = {
  base: {
    label: 'Base',
    value: 'base',
    renderer: base,
  },
  triangle: {
    label: 'Triangle',
    value: 'triangle',
    renderer: polygon(3),
  },
  diamond: {
    label: 'Diamond',
    value: 'diamond',
    renderer: polygon(4),
  },
  dot: {
    label: 'Dot',
    value: 'dot',
    renderer: round(0.4),
  },
  round: {
    label: 'Round',
    value: 'round',
    renderer: round(),
  },
};

export const getRenderer = pattern => patterns[pattern].renderer;

export default patterns;
