import { MEDIA_BREAKPOINTS } from '@styles';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 3rem;
  color: ${({ color, theme }) => color && theme.colors[color]};
  font-weight: ${({ bold }) => bold ? 700 : 400};
  
  ${MEDIA_BREAKPOINTS.tablet} {
    font-size: 4rem;
    line-height: 96px;
  }
`;

export default Title;
