import { MEDIA_BREAKPOINTS, PURPLE_SCALE } from '@styles';
import { lighten } from 'polished';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: ${({ border }) => border ? (`${border} solid ${PURPLE_SCALE[500]}`) : (0)};
  background: ${({ theme, color }) => lighten(0.47, theme.colors[color])};

  ${MEDIA_BREAKPOINTS.laptop} {
    padding: 1.5rem;
  }

  legend {
  }
`;

export default Fieldset;
