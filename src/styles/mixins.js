// @ts-check
import { css } from 'styled-components';

export const RESET_UL = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const RESET_BUTTON = css`
  display: inline-flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  border-style: none;
  background: transparent;
  text-decoration: none;
  border: 1px solid transparent;
  line-height: 1.75;
  padding: 0.5rem 1rem;
`;

export const FLEX_CENTER = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const POSITION_RELATIVE_RESET = css`
  position: relative;
  top: initial;
  bottom: initial;
  right: initial;
  left: initial;
  z-index: initial;
`;
