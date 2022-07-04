import { MEDIA_BREAKPOINTS } from '@styles';
import { rgba } from 'polished';
import styled from 'styled-components';

const Wrapper = styled.div`
  &::before {
    content: 'Bienvenido';
    width: 50%;
    max-width: 600px;
    min-height: 350px;
    border-radius: 1rem;
    background: url('/img/one.png'), ${({ theme }) => rgba(theme.colors.secondary, 0.1)};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom right;
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
    display: none;
    padding: 4rem 2rem;
    font-size: 3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};

  }
  
  &::after {
    content: 'Administrador';
    display: block;
    position: absolute;
    top: 45%;
    right: 30%;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    display: none;
  }

  ${MEDIA_BREAKPOINTS.laptop} {

    &::before,
    &::after {
      display: block;
    }
  }
`;

export default {
  Wrapper
};
