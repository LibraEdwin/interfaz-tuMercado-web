import { GRAY_SCALE } from '@styles';
import styled, { css } from 'styled-components';
import Button from './Button';
import Input from './Input';
import Label from './Label';

const FormGroup = styled.div`
  width: 100%;
  position: relative;

  ${Label} {
    margin-bottom: 0.5rem;
  }

  & > svg {
    color: ${GRAY_SCALE[400]};
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  ${({ buttonRight }) => buttonRight && css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${Input} {
      width: calc(100% - 50px);
    }
  `}

  ${({ buttonFloatRight }) => buttonFloatRight && css`
    ${Button} {
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
      font-size: 0.65rem;
    }
  `}

  
`;

export default FormGroup;
