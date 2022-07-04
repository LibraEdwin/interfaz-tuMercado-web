import { GRAY_SCALE } from '@styles';
import styled, { css } from 'styled-components';

const Select = styled.select`
  appearance: none;
  display: flex;
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.75rem 1.2rem;
  border: 1px solid ${GRAY_SCALE[300]};
  transition: 0.2s ease;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: calc(100% - 1rem) calc(100% - 0.8rem);
  padding-right: 2.5rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  ${({ theme, invalid }) => invalid && css`
    &, 
    &:focus {
      border: 1px solid ${theme.colors.danger};
    }
  `}
`;

export default Select;
