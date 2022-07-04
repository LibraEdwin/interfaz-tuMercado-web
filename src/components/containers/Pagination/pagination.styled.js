import { RESET_BUTTON, TRANSITIONS } from '@styles';
import styled, { css } from 'styled-components';

const Button = styled.button`
  ${RESET_BUTTON}
  /* background: ${({ theme }) => theme.colors.light}; */
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  margin: 0;
  padding: 0.1rem 0.5rem;
  border-radius: 0.3rem;
  width: 100%;
  min-width: 26px;
  transition: ${TRANSITIONS.base};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  ${({ active }) => active && css`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  `}

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
const Wrapper = styled.div`
  display: inline-flex;
  gap: 0.25rem;

  ${Button} {
    &:first-child,
    &:last-child {
      color: white;
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default {
  Wrapper,
  Button
};
