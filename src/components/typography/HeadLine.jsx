import { MEDIA_BREAKPOINTS } from '@styles';
import styled from 'styled-components';

const HeadLine = styled.h4`
  font-size: 1.5rem;
  color: ${({ color, theme }) => color && theme.colors[color]};
  font-weight: ${({ bold }) => bold ? 700 : 400};
  
  ${MEDIA_BREAKPOINTS.tablet} {
    font-size: 36px;
    line-height: 54px;
  }
`;

export default HeadLine;
