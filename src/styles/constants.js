// @ts-check
export const RED_SCALE = {
  100: '#fef6f6',
  200: '#f9c9c9',
  300: '#f39b9b',
  400: '#ee6e6e',
  500: '#EB5757',
  600: '#e62929',
  700: '#c51717',
  800: '#971212',
  900: '#690d0d'
};

export const BLUE_SCALE = {
  100: '#ebf3fd',
  200: '#bcd6f9',
  300: '#8db9f5',
  400: '#5e9df1',
  500: '#2F80ED',
  600: '#1366d6',
  700: '#0e50a7',
  800: '#0a3979',
  900: '#082e61'
};

export const GREEN_SCALE = {
  100: '#f6ffe1',
  200: '#e8ffae',
  300: '#d9ff7b',
  400: '#c3ff2e',
  500: '#a0e100',
  600: '#7cae00',
  700: '#577b00',
  800: '#334800',
  900: '#0f1500'
};

export const GRAY_SCALE = {
  0: '#f1f1f1',
  100: '#e4e4e4',
  200: '#cbcbcb',
  300: '#a4a4a4',
  400: '#7e7e7e',
  500: '#585858',
  600: '#4b4b4b',
  700: '#3e3e3e',
  800: '#323232',
  900: '#252525',
  1000: '#0b0b0b'
};

export const YELLOW_SCALE = {
  500: '#F2C94C'
};

export const PURPLE_SCALE = {
  100: '#cf81d4',
  200: '#c05bc7',
  300: '#ab3db2',
  400: '#86308c',
  500: '#622366',
  600: '#501c53',
  700: '#3e1640',
  800: '#2b0f2d',
  900: '#19091a'
};

export const COLORS = {
  blue: BLUE_SCALE[500],
  purple: PURPLE_SCALE[500],
  red: RED_SCALE[500],
  orange: '#fd7e14',
  yellow: YELLOW_SCALE[500],
  green: GREEN_SCALE[500],
  white: '#fff',
  black: '#000'
};

export const GRADIENTS_COLORS = {
  green1: `linear-gradient(90deg, ${GREEN_SCALE[500]} 0%, ${GREEN_SCALE[700]} 100%)`,
  blue1: `linear-gradient(90deg, ${COLORS.blueWhite} 0%, ${COLORS.blue} 92.5%)`,
  yellow1: `linear-gradient(65.42deg, ${YELLOW_SCALE[500]} 8.32%, ${COLORS.orange} 86.31%)`
};

export const FONTS = {
  poppins: '"Poppins", sans-serif'
};

export const SHADOWS = {
  sm: '3px 3px 8px 5px rgba(233, 232, 236, 0.3)',
  base: '6px 6px 10px 8px rgba(233, 232, 236, 0.3)'
};

export const FONTS_SIZES = {
  sm: '0.75rem',
  medium: '0.875rem',
  button: '0.9375rem',
  base: '1rem',
  lead: '1.125rem',
  large: '1.5625rem',
  xlarge: '2rem'
};

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

export const MEDIA_BREAKPOINTS = {
  mobile: `@media (min-width: ${BREAKPOINTS.sm}px)`,
  tablet: `@media (min-width: ${BREAKPOINTS.md}px)`,
  laptop: `@media (min-width: ${BREAKPOINTS.lg}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.xl}px)`,
  desktopL: `@media (min-width: ${BREAKPOINTS.xxl}px)`
};

export const CONTAINER_MAX_WIDTHS = {
  sm: '540px',
  md: '720px',
  lg: '1000px',
  xl: '1140px',
  xxl: '1320px'
};

export const TRANSITIONS = {
  base: '0.3s ease'
};

export const Z_INDEXS = {
  header: {
    sticky: 500,
    nav: 1000
  },
  modal: {
    overlay: 1500,
    content: 200
  }
};
