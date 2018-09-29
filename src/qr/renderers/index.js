import base from './base';
import round from './round';

const renderers = {
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

export const getRenderer = pattern => renderers[pattern].renderer;

export default renderers;
