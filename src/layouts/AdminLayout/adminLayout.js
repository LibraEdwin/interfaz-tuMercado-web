import styled from 'styled-components';
import { GRAY_SCALE } from '@styles';
import { lighten } from 'polished';

export const AdminWrapper = styled.div`
  // background: ${GRAY_SCALE[100]};
  background: white;
  width: 100%;
  margin: 0;
  min-height: 100vh;
  // display: flex;
`;

export const AdminMain = styled.main`
  background: ${({ bgGray }) => bgGray && lighten(0.06, GRAY_SCALE[100])};
  width: 100%;
  min-height: calc(100vh - 110px);
  padding: 1rem 0 0;
`;
