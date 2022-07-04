import { Container, SideBar } from '@components/containers';
import { FooterAdmin } from '@components/sections';
import { Row, Col } from 'react-bootstrap';
import { Button, FormGroup, Label, Select, Input, Fieldset } from '@components/ui';
import { BiSearch } from 'react-icons/bi';
import RegisterContainer from '@components/containers/RegisterContainer';
import ContainerForm from '@components/containers/ContainerForm';
// import dataWeb from '../../../configWeb.json';

const Clients = () => {
  // const ventas = dataWeb.modules[0];
  return (
    <>
    {/* <RegisterContainer> */}
    <ContainerForm>
      <SideBar/>
    <Container>
      <Row className='g-3'>
        <Col xs={12} md={4}>
          <FormGroup>
            <Label>Tipo de documento</Label>
            <Select>
              <option value="">Seleccionar documento</option>
              <option value="">DNI</option>
              <option value="">Pasaporte</option>
            </Select>
          </FormGroup>
        </Col>
        <Col xs={12} md={4}>
          <FormGroup>
            <Label>Número de documento</Label>
            <Input type="text" placeholder="Ingresa numero de documento" />
          </FormGroup>
        </Col>
        <Col xs={12} md={4}>
          <FormGroup>
            <Label>Tipo de cliente</Label>
            <Select>
              <option value="">Seleccionar tipo</option>
              <option value="">Residencial</option>
              <option value="">Empresa</option>
            </Select>
          </FormGroup>
        </Col>
        <Col xs={12} lg={12}>
          <FormGroup>
            <Label>Nombre de cliente / Razón social</Label>
            <Input type="text" placeholder="Escriba un nombre..." />
            <BiSearch />
          </FormGroup>
        </Col>
        <Col xs={12} md={8}>
          <FormGroup>
            <Label>Correo</Label>
            <Input type="email" placeholder="Escriba un correo" />
          </FormGroup>
        </Col>
        <Col xs={12} md={4}>
          <FormGroup>
            <Label>Teléfono</Label>
            <Input type="text" placeholder="0" />
          </FormGroup>
        </Col>
        <Col xs={12} md={4}>
          <FormGroup>
            <Label>Departamento</Label>
            <Select>
              <option value="">Seleccionar departamento</option>
              <option value="">Lima</option>
            </Select>
          </FormGroup>
        </Col>
        <Col xs={12} md={4}>
          <FormGroup>
            <Label>Provincia</Label>
            <Select>
              <option value="">Seleccionar provincia</option>
              <option value="">Lima</option>
            </Select>
          </FormGroup>
        </Col>
        <Col xs={12} md={4}>
          <FormGroup>
            <Label>Distrito</Label>
            <Select>
              <option value="">Seleccionar distrito</option>
              <option value="">Lima</option>
            </Select>
          </FormGroup>
        </Col>

        <Col className='mt-4'>
          <Fieldset color='secondary' >
            <Row className='mb-3 g-3'>
              <Col xs={12} lg={12}>
                <FormGroup>
                  <Label>Nombre de la persona de contacto</Label>
                  <Input type="text" placeholder="Escriba un nombre" />
                </FormGroup>
              </Col>
              <Col xs={12} md={4}>
                <FormGroup>
                  <Label>Celular de contacto</Label>
                  <Input type="text" placeholder="0" />
                </FormGroup>
              </Col>
              <Col xs={12} md={4}>
                <FormGroup>
                  <Label>Correo de contacto</Label>
                  <Input type="email" placeholder="Escriba un correo" />
                </FormGroup>
              </Col>
              <Col xs={12} md={4}>
                <FormGroup>
                  <Label>Zona</Label>
                  <Select>
                    <option value="">Seleccionar una zona</option>
                    <option value="">Zona 1</option>
                    <option value="">Zona 2</option>
                  </Select>
                </FormGroup>
              </Col>
            </Row>
          </Fieldset>
        </Col>
      </Row>
    </Container>
    </ContainerForm>
    {/* </RegisterContainer> */}
    <FooterAdmin>
      <Col lg={2}>
        <Button block accent>Nuevo</Button>
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

Clients.layout = 'admin';
Clients.title = 'Registro de cliente';
Clients.nameModule = 'MÓDULO VENTAS';
Clients.module = [{
  id: 1,
  name: 'Registro de nota de venta',
  to: '/'
},
{
  id: 2,
  name: 'Reporte de ventas',
  to: '/'
},
{
  id: 3,
  name: 'Ranking venta de productos',
  to: '/'
},
{
  id: 4,
  name: 'Ranking ventas por cliente',
  to: '/'
},
{
  id: 5,
  name: 'Registro de insidencias y obs.',
  to: '/'
},
{
  id: 6,
  name: 'Registro de producto',
  to: '/productos/nuevo'
},
{
  id: 7,
  name: 'Registro de cliente',
  to: '/clientes/registro-de-clientes'
}];

export default Clients;
