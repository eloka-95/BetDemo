import { colors } from './colors';
import { images } from './images';
import { font } from './font';
import { typography } from './typography';


const theme = {
  images,
  colors,
  font,
  typography,
};

export type Theme = typeof theme;

export default theme;
