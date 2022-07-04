// import { Container } from '@components/containers';
import { Row, Col, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AuthLayoutStyled from './authLayout.styled';

const AuthLayout = ({ children }) => {
  return (
    <Container className='position-relative'>
      <AuthLayoutStyled.Wrapper>
        <Row className='min-vh-100 align-items-center'>
          <Col lg={5} xl={4}>
            {children}
          </Col>
        </Row>
      </AuthLayoutStyled.Wrapper>
    </Container>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthLayout;
