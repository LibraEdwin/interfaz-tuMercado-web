import { RegistroSupplier } from '@components/blocks';
import { ContainerForm } from '@components/containers';
import { FooterAdmin } from '@components/sections';
import { Button } from '@components/ui';
import React from 'react';
import { Col } from 'react-bootstrap';

const proveedores = () => {
  return (
    <>
      <ContainerForm minHeight='70'>
        <RegistroSupplier />
      </ContainerForm>
      <FooterAdmin>
        <Col lg={2}>
          <Button block accent >Nuevo</Button>
        </Col>
        <Col lg={2}>
          <Button block accent>Eliminar</Button>
        </Col>
        <Col lg={2}>
          <Button block primary>Registrar cliente</Button>
        </Col>
      </FooterAdmin>
    </>
  );
};

proveedores.layout = 'admin';
proveedores.title = 'Registro de cliente';
proveedores.nameModule = 'MÓDULO COMPRAS';
proveedores.module = [{
  id: 1,
  name: 'Compras para descpacho',
  to: '/'
},
{
  id: 2,
  name: 'Registro de proveedores',
  to: '/compras/registro-de-proveedores'
}];

export default proveedores;
