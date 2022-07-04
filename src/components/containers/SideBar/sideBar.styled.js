import styled, { css } from 'styled-components';
import { RESET_BUTTON, TRANSITIONS, Z_INDEXS, zerosIndex, RESET_UL } from '@styles';

export const ToggleButtoWrapper = styled.button`
  ${RESET_BUTTON}

  // position: absolute;
  background: white;
  padding: 0;
`;

const Wrapper = styled.li`
  display: flex;
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  border-right: 4px solid transparent;
  transition: ${TRANSITIONS.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.primary};
  }

  ${({ active }) => active && css`
    background: orange;
  `}
`;

const Overlay = styled.div`
  ${zerosIndex(Z_INDEXS.header.nav, 'fixed')}
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: ${TRANSITIONS.base};

  ${({ isActive }) => isActive && css`
    opacity: 1;
    visibility: visible;
  `}
`;

const Content = styled.div`
  ${zerosIndex(Z_INDEXS.header.nav, 'fixed')}
  background: white;
  width: 100%;
  max-width: 368px;
  height: 100%;
  display: flex;
  flex-direction: column;
  left: -100%;
  right: initial;
  transition: left 0.4s ease-in-out;

  ${({ isActive }) => isActive && css`
    left: 0;
    right: 0;
  `}
`;

const List = styled.ul`
  ${RESET_UL}
  height: 90%;
  padding: 2rem 0;
  font-size: 1.1rem;
`;

const Title = styled.h4`
  padding: 1rem 2rem;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  margin-bottom: 0;
`;

const Line = styled.div`
  border-bottom: 2px solid #A0E100;
  width:  ${props => props.width ? `${props.width}%` : '75%'};
  margin: auto;
`;

const Item = styled.li`
  position: relative;
  z-index: ${Z_INDEXS.header.nav};
`;

const ItemLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  white-space: nowrap;
  font-weight: 500;
  transition: ${TRANSITIONS.base};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;

    &::after {
      opacity: 1;
      margin-right: 0;
    }
  }
`;

const Back = styled.div`
  margin-bottom: 5rem;
  font-weight: 600;
  font-size: 25px;
  line-height: 31px;
  display: flex;
  justify-content: center;

  a {
    align-items: center;
    display: flex;
    text-decoration-line: none;
    gap: .5rem;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  h4 {
    margin: 0;
  }
`;

export default {
  Wrapper,
  Overlay,
  Content,
  List,
  Title,
  Line,
  Item,
  ItemLink,
  Back
};
