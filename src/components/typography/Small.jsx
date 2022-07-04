import styled, { css } from 'styled-components';

const Small = styled.small`
  font-size: 13px;
  line-height: 20px;
  
  ${({ theme, color }) => color && css`
    color: ${theme.colors[color]};
  `}
  ${({ bold }) => bold && css`
    font-weight: bold;
  `}
`;

export default Small;
