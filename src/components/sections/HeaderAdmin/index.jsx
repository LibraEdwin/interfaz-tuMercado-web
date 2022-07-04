import { Container, ToggleButton, SideBar } from '@components/containers';
import headerAdminStyled from './headerAdmin.styled';
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

const HeaderAdmin = ({ title, modules, name }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleShowSideBar = () => setShowSideBar(prev => !prev);

  useEffect(() => {
    setShowSideBar(false);
  }, []);

  return (
    <headerAdminStyled.Wrapper>
      <Container>
        <Row className='align-items-center'>
          <Col>
            <ToggleButton onClick={toggleShowSideBar}/>
            <SideBar
              show={showSideBar}
              toggleShow={toggleShowSideBar}
              items={modules}
              title={name}
            />
          </Col>
          <Col className='d-flex justify-content-center'>
            <headerAdminStyled.Title className='m-0'>{title}</headerAdminStyled.Title>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Link href='/menu'>
              <a><Image src='/logo.png' width={148} height={64}/></a>
            </Link>
          </Col>
        </Row>
      </Container>
    </headerAdminStyled.Wrapper>
  );
};

HeaderAdmin.propTypes = {
  title: PropTypes.string,
  modules: PropTypes.array,
  name: PropTypes.string
};

export default HeaderAdmin;
