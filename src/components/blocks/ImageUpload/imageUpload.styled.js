import { FLEX_CENTER, GRAY_SCALE } from '@styles';
import styled from 'styled-components';

const Wrapper = styled.label`
  display: block;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 0.5rem;
  border: 1px dashed ${GRAY_SCALE[500]};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  input {
    display: none;
  }
`;

const info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  ${FLEX_CENTER}
  flex-direction: column;
`;
const Preview = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default {
  Wrapper,
  info,
  Preview
};
