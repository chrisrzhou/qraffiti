import base from './renderers/base';
import {createPattern} from 'qr/utils';
import polygon from './renderers/polygon';
import round from './renderers/round';

const patterns = {
  base: createPattern({
    id: 'base',
    renderer: base,
  }),
  round: createPattern({
    id: 'round',
    renderer: round(),
  }),
  dot: createPattern({
    id: 'dot',
    renderer: round(0.4),
  }),
  triangle: createPattern({
    id: 'triangle',
    renderer: polygon(3),
  }),
  diamond: createPattern({
    id: 'diamond',
    renderer: polygon(4),
  }),
};

export const getRenderer = pattern => patterns[pattern].renderer;

export default patterns;
