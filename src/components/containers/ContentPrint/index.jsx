import styled from 'styled-components';

const Wrapper = styled.div`
  background: #cecece;
  min-height: 800px;
  padding: 2rem;
  border-radius: 0.5rem;
`;

const ContentPrint = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default ContentPrint;
