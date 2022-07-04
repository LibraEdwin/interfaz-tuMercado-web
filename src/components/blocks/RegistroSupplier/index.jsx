import { Fieldset, FormGroup, Input, Label, Select } from '@components/ui';
import { Col, Row } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';

const RegistroSupplier = () => {
  return (
    <>
      <Row>
        <Col>
          <FormGroup >
            <Label>Tipo de documento</Label>
            <Select className='me-3'>
              <option value="">one</option>
              <option value="">two</option>
            </Select>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Número de documento</Label>
            <Input type='text' className='text-end' placeholder='0.00' />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Teléfono</Label>
            <Input type='text' className='text-end' placeholder='0' />
          </FormGroup>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <FormGroup >
            <Label>Nombre de  proveedor</Label>
            <Input type="text" placeholder="Escriba un nombre" />
            <BiSearch />
          </FormGroup>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <FormGroup >
            <Label>Dirección</Label>
            <Input type="text" placeholder="Escriba una dirección" />
          </FormGroup>
        </Col>
      </Row>
      <Row className='mt-4 mb-4'>
        <Col>
          <FormGroup>
            <Label>Departemento</Label>
            <Select className='me-3'>
              <option value="">one</option>
              <option value="">two</option>
            </Select>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Provincia</Label>
            <Select className='me-3'>
              <option value="">one</option>
              <option value="">two</option>
            </Select>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Distrito</Label>
            <Select className='me-3'>
              <option value="">one</option>
              <option value="">two</option>
            </Select>
          </FormGroup>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <Fieldset color='secondary' border='1px'>
            <Row className='mb-4'>
              <Col>
                <FormGroup>
                  <Label>Nombre persona de contacto</Label>
                  <Input type="text" placeholder="Escriba un nombra" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label>Celular de contacto</Label>
                  <Input type='text' className='text-end' placeholder='0.00' />
                </FormGroup>
              </Col>
              <Col md={8}>
                <FormGroup>
                  <Label >Correo</Label>
                  <Input type="email" placeholder="correo@mail.com" />
                </FormGroup>
              </Col>
            </Row>
          </Fieldset>
        </Col>
      </Row>
    </>
  );
};

export default RegistroSupplier;
