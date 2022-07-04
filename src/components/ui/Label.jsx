import styled, { css } from 'styled-components';

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 13px;
  font-weight: 500;

  ${({ theme, invalid }) => invalid && css`
    color: ${theme.colors.danger};
  `}

  & > abbr {
    color: ${({ theme }) => theme.colors.danger};
    text-decoration: none;
    margin-left: 0.24rem;
  }
`;

export default Label;
