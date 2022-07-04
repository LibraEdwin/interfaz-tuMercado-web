// @ts-check
import { COLORS, FONTS, FONTS_SIZES, GRAY_SCALE, PURPLE_SCALE, SHADOWS } from '../constants';

/**
 * @constant
 * @type {import('../styled').CustomThemeStyled}
 * @default
 */
const THEME_LIGHT = {
  mode: 'light',
  colors: {
    primary: COLORS.purple,
    secondary: PURPLE_SCALE[300],
    accent: COLORS.green,
    info: COLORS.blue,
    warning: COLORS.orange,
    danger: COLORS.red,
    success: COLORS.green,
    gray: GRAY_SCALE[900],
    light: GRAY_SCALE[100],
    link: PURPLE_SCALE[300],
    backgroundBody: COLORS.white,
    textBody: GRAY_SCALE[500]
  },
  fonts: {
    fontPrimary: FONTS.poppins,
    fontSecondary: null
  },
  fontSizes: {
    body: FONTS_SIZES.base
  },
  shadows: {
    small: SHADOWS.sm,
    default: SHADOWS.base
  }
};

export default THEME_LIGHT;
