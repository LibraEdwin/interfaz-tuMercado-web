// @ts-check
import { css } from 'styled-components';

/**
 *
 * @param {number} zIndex
 * @param {'fixed' | 'absolute'} position
 * @returns
 */
export const zerosIndex = (zIndex, position) => css`
  position: ${position};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${zIndex};
`;

/**
 *
 * @param {'down' | 'left' | 'right' | 'up'} orientation
 * @param {string} size
 * @param {string} color
 * @returns
 */
export const generateTriangle = (orientation, size, color) => css`
 border-left: ${size} solid ${orientation === 'right' ? color : 'transparent'};
 border-top: ${size} solid ${orientation === 'down' ? color : 'transparent'};
 border-right: ${size} solid ${orientation === 'left' ? color : 'transparent'};
 border-bottom: ${size} solid ${orientation === 'up' ? color : 'transparent'};
`;
