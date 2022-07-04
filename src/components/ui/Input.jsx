import { GRAY_SCALE } from '@styles';
import { lighten } from 'polished';
import styled, { css } from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.75rem 1.2rem;
  border: 1px solid ${GRAY_SCALE[300]};
  transition: 0.2s ease;

  &::placeholder {
    color: ${GRAY_SCALE[300]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &:focus ~ svg {
    color: ${({ theme }) => theme.colors.secondary};
  }

  ${({ theme, invalid }) => invalid && css`  
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='red' class='bi bi-exclamation-triangle' viewBox='0 0 16 16'%3E%3Cpath d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z'/%3E%3Cpath d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: calc(100% - 1rem) calc(100% - 0.8rem);
    padding-right: 2.5rem;

    & ~ svg {
      display: none;
    }
    
    &, 
    &:focus {
      border: 1px solid ${theme.colors.danger};
    }
  `}

  ${({ theme, disabled }) => disabled && css`
    background: ${lighten(0.07, theme.colors.light)};
    pointer-events: none;
  `}
  ${({ theme, type, disabled }) => {
    let cssFinal = '';

    if (type === 'typeMolda') {
      cssFinal += `
                border: 1px solid ${GRAY_SCALE[300]};
                padding: 0.5rem ;
                margin: 0;
                margin-top: 1rem;
                background: ${lighten(0.01, theme.colors.light)};
                font-size: 1rem;
              `;
    }
    if (disabled === true) {
      cssFinal += `
                border: 1px solid white;
                padding: 0.5rem 0;
                margin: 0;
                margin-top: 1rem;
                background: ${lighten(1, theme.colors.light)};
                font-size: 1rem;
              `;
    }

    return css`
      ${cssFinal}
    `;
  }}
`;

export default Input;
