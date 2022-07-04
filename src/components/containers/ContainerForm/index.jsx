import { GRAY_SCALE } from '@styles';
import styled from 'styled-components';
import Container from '../Container';

const DivContainer = styled.div`
  border: 1px solid ${GRAY_SCALE[200]};
  border-radius: 8px;
  min-height: ${({ minHeight }) => `${minHeight}vh`};
`;
// eslint-disable-next-line react/prop-types
const ContainerForm = ({ children, minHeight }) => {
  return (
    <Container>
      <DivContainer className='mb-3 p-5' minHeight={minHeight}>{children}</DivContainer>
    </Container>
  );
};

export default ContainerForm;
