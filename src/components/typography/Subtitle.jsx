import { MEDIA_BREAKPOINTS } from '@styles';
import styled from 'styled-components';

const Subtitle = styled.h3`
  font-size: 2.5rem;
  color: ${({ color, theme }) => color && theme.colors[color]};
  font-weight: ${({ bold }) => bold ? 700 : 400};
  
  ${MEDIA_BREAKPOINTS.tablet} {
    font-size: 48px;
    line-height: 72px;
  }
`;

export default Subtitle;
