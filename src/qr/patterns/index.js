import base from './renderers/base';
import {createPattern} from 'qr/utils';
import polygon from './renderers/polygon';
import round from './renderers/round';

const patterns = {
  base: createPattern({
    id: 'base',
    renderer: base,
    type: 'both',
  }),
  round: createPattern({
    id: 'round',
    renderer: round(),
    type: 'body',
  }),
  dot: createPattern({
    id: 'dot',
    renderer: round(0.4),
    type: 'body',
  }),
  triangle: createPattern({
    id: 'triangle',
    renderer: polygon(3),
    type: 'body',
  }),
  diamond: createPattern({
    id: 'diamond',
    renderer: polygon(4),
    type: 'body',
  }),
};

export const getRenderer = pattern => patterns[pattern].renderer;

export default patterns;
