import base from './renderers/base';
import {createPattern} from 'qr/utils';
import polygon from './renderers/polygon';
import round from './renderers/round';

const patterns = {
  base: createPattern({
    id: 'base',
    renderer: base,
  }),
  triangle: createPattern({
    id: 'triangle',
    renderer: polygon(3),
  }),
  diamond: createPattern({
    id: 'diamond',
    renderer: polygon(4),
  }),
  dot: createPattern({
    id: 'dot',
    renderer: round(0.4),
  }),
  round: createPattern({
    id: 'round',
    renderer: round(),
  }),
};

export const getRenderer = pattern => patterns[pattern].renderer;

export default patterns;
