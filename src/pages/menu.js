import React, { useState, useEffect } from 'react';
import { Container, Section, SideBar } from '@components/containers';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { Button } from '@components/ui';
import dataWeb from '../../configWeb.json';

const MenuAdmin = () => {
  const ventas = dataWeb.modules[0];
  const compras = dataWeb.modules[1];
  const almacen = dataWeb.modules[2];
  const clientes = dataWeb.modules[3];

  const [showModule1, setShowModule1] = useState(false);
  const [showModule2, setShowModule2] = useState(false);
  const [showModule3, setShowModule3] = useState(false);
  const [showModule4, setShowModule4] = useState(false);

  const toggleShowModule1 = () => setShowModule1(prev => !prev);
  const toggleShowModule2 = () => setShowModule2(prev => !prev);
  const toggleShowModule3 = () => setShowModule3(prev => !prev);
  const toggleShowModule4 = () => setShowModule4(prev => !prev);

  useEffect(() => {
    setShowModule1(false);
    setShowModule2(false);
    setShowModule3(false);
    setShowModule4(false);
  }, []);

  return (
    <Section>
      <Container>
        <div className='d-flex justify-content-center mb-5'>
          <Image src='/logo.png' width={148} height={64}/>
        </div>
        <Row className='d-flex justify-content-center'>
          <Col lg={4} className='d-flex justify-content-end mb-4'>
            <Button primary block className='p-5' onClick={toggleShowModule1} size='20'> MÓDULO DE VENTAS </Button>
          </Col>
          <Col lg={4} className='d-flex justify-content-start mb-4'>
            <Button primary block className='p-5' onClick={toggleShowModule2} size='20'> MÓDULO DE COMPRAS </Button>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col lg={4} className='d-flex justify-content-end mb-4'>
            <Button primary block className='p-5' onClick={toggleShowModule3} size='20'>MÓDULO DE ALMACEN</Button>
          </Col>
          <Col lg={4} className='d-flex justify-content-start mb-4'>
            <Button primary block className='p-5' onClick={toggleShowModule4} size='20'>CARTERA DE CLIENTES</Button>
          </Col>
        </Row>
      </Container>
      <SideBar
        show={showModule1}
        toggleShow={toggleShowModule1}
        items={ventas.subModules}
        title={ventas.name}
      />
      <SideBar
        show={showModule2}
        toggleShow={toggleShowModule2}
        items={compras.subModules}
        title={compras.name}
      />
      <SideBar
        show={showModule3}
        toggleShow={toggleShowModule3}
        items={almacen.subModules}
        title={almacen.name}
      />
      <SideBar
        show={showModule4}
        toggleShow={toggleShowModule4}
        items={clientes.subModules}
        title={clientes.name}
      />
    </Section>
  );
};

export default MenuAdmin;
