import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1rem;
  color: ${({ color, theme }) => color && theme.colors[color]};
  font-weight: ${({ bold }) => bold ? 700 : 400};
`;

export default Paragraph;
