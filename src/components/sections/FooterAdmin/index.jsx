import { Container, Section } from '@components/containers';
import { Row } from 'react-bootstrap';
import FooterAdminStyled from './footerAdmin.styled';
import PropTypes from 'prop-types';

const FooterAdmin = ({ children }) => {
  return (
    <>
    <Section className='p-0'>
      <FooterAdminStyled.Wrapper>
        <Container>
          <Row className='d-flex justify-content-end'>
            { children }
          </Row>
        </Container>
      </FooterAdminStyled.Wrapper>

    </Section>
    </>
  );
};

FooterAdmin.propTypes = {
  children: PropTypes.node.isRequired
};

export default FooterAdmin;
