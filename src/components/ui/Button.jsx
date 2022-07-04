import { generateTriangle, PURPLE_SCALE, RESET_BUTTON, TRANSITIONS } from '@styles';
import styled, { css } from 'styled-components';
import { lighten, readableColor } from 'polished';

const Button = styled.button`
  ${RESET_BUTTON}
  position: relative;
  border-radius: 0.35rem;
  padding: 0.30rem 1rem;
  font-size: ${props => props.size ? `${props.size}px` : '14px'};
  transition: ${TRANSITIONS.base};

  ${({ theme, color }) => color && css`
    color: ${theme.colors[color]};
  `}

  ${({ theme, color, variant }) => variant === 'filled' && color && css`
    background: ${theme.colors[color]};
    border-color: ${theme.colors[color]};
    color: ${readableColor(theme.colors[color], theme.colors.gray, theme.colors.light, true)};
    
    &:hover {
      background: ${lighten(0.1, theme.colors[color])}
      box-shadow: 0 2px 4px 0 #b4b4b54c,0 1px 3px 1px #acacac26;
    }
  `}

  ${({ theme, color, variant }) => variant === 'outlined' && color && css`
    border: 1px solid ${theme.colors[color]};
    
    &:hover {
      background: ${theme.colors[color]};
      color: ${readableColor(theme.colors[color], theme.colors.gray, theme.colors.light, true)};
    }
  `}

  ${({ icon }) => icon && css`
    padding: 0.65rem;
  `}

  
  ${({ block }) => block && css`
    display: flex;
    width: 100%;
  `}
  
  ${({ roundedPill }) => roundedPill && css`
    border-radius: 50px;
  `}
  
  ${({ bold }) => bold && css`
    font-weight: bold;
  `}

  ${({ theme, primary }) => primary && css`
    background: ${theme.colors.primary};
    color ${theme.colors.accent};
    font-weight: 500;
    border-width: 2px;

    &:hover {
      background: ${PURPLE_SCALE[200]};
      border-color: ${theme.colors.primary};
      
    }
  `}

  ${({ theme, accent }) => accent && css`
    border: 2px solid ${theme.colors.accent};
    color ${theme.colors.primary};
    font-weight: 500;

    &:hover {
      background: ${theme.colors.accent};
      
    }
  `}

  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    cursor: none;
    pointer-events: none;
  `}

  &:active {
    filter: brightness(130%);
  }

  ${({ tooltip }) => tooltip && css`
    &::before {
      content: attr(data-tooltip);
      display: block;
      background: black;
      color: white;
      font-size: 12px;
      padding: 0.25rem 0.5rem;
      border-radius: 0.5rem;
      position: absolute;
      z-index: 10;
      bottom: calc(100% + 0.5rem);
      display: none;
      white-space: nowrap;
      pointer-events: none;
    }

    &::after {
      content: '';
      position: absolute;
      z-index: 10;
      bottom: 80%;
      ${generateTriangle('down', '8px', 'black')}
      display: none;
      pointer-events: none;
    }

    &:hover {
      &::before,
      &::after {
        display: block;
      }
    }
  `}
`;

export default Button;
