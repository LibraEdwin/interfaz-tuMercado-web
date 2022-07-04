import registerContainerStyled from './registerContainer.styled';
import PropTypes from 'prop-types';

const RegisterContainer = ({ children }) => {
  return (
    <registerContainerStyled.Contain>
      {children}
    </registerContainerStyled.Contain>
  );
};

RegisterContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default RegisterContainer;
