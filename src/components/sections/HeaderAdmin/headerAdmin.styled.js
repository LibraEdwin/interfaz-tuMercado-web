import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 1rem;
  border-bottom: 1px solid #E9E9E9;
  background: white;
  height: 110px;
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

const Title = styled.h4`
  color: #000000;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export default {
  Wrapper,
  Title
};
