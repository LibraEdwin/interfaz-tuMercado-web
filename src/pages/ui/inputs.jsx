import { Container } from '@components/containers';
import { Button, Checkbox, Input, Label, Radio, Select, FormGroup, InputMessage, Fieldset } from '@components/ui';
import { FaBeer } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { Col, Row } from 'react-bootstrap';
import { Paragraph } from '@components/typography';

/** Pagina de presentacion para componentes ui */
const UI = () => {
  return (
    <Container>
      <h3>Label</h3>
      <Label className='me-3'>Texto label</Label>
      <Label>Texto requerido <abbr title="requerido">*</abbr> </Label>
      <h3>Inputs</h3>
      <ol>
        <li>
          <h5>Text</h5>
          <Input type="text" className='mb-3' placeholder='input text' />
          <Input type="text" className='mb-3' disabled placeholder='input text' />
          <Input type="text" className='mb-3' invalid placeholder='input with error' />
        </li>
        <li>
          <h5>Select</h5>
          <Select className='me-3'>
            <option value="">one</option>
            <option value="">two</option>
          </Select>
          <FormGroup className='mt-3'>
            <Label>Lista</Label>
            <Select className='me-3'>
              <option value="">one</option>
              <option value="">two</option>
            </Select>
          </FormGroup>
          <FormGroup className='mt-3'>
            <Label invalid>Lista requerida <abbr>*</abbr> </Label>
            <Select className='me-3' invalid>
              <option value="">one</option>
              <option value="">two</option>
            </Select>
            <InputMessage color='danger'>Debe seleccionar una opción</InputMessage>
          </FormGroup>
        </li>
        <li>
          <h5>Radio</h5>
          <div>
            <Label htmlFor='radioOne'>
              <Radio type="radio" id='radioOne' /> Radio
            </Label>
            <Label htmlFor='radioTwo' className='ms-4'>
              <Radio type="radio" id='radioTwo' defaultChecked={true} /> Radio cheked
            </Label>
            <Label htmlFor='radioThree' className='ms-4'>
              <Radio type="radio" id='radioThree' disabled /> Radio cheked disabled
            </Label>
          </div>
          <div className='mt-4'>
            <h6>Radio group</h6>
            <Label htmlFor='radio1'>
              <Radio type="radio" id='radio1' name='radioGroup' defaultChecked={true} /> Radio
            </Label>
            <Label htmlFor='radio2' className='ms-4'>
              <Radio type="radio" id='radio2' name='radioGroup' /> Radio 2
            </Label>
          </div>
        </li>
        <li>
          <h5>Checkbox</h5>
          <div>
            <Label htmlFor='checkOne'>
              <Checkbox type="checkbox" id='checkOne' /> Checkbox
            </Label>
            <Label htmlFor='checkTwo' className='ms-4'>
              <Checkbox type="checkbox" id='checkTwo' defaultChecked={true} /> Checkbox cheked
            </Label>
            <Label htmlFor='checkThree' className='ms-4'>
              <Checkbox type="checkbox" id='checkThree' disabled /> Checkbox cheked disabled
            </Label>
          </div>
          <div className='mt-4'>
            <h6>Radio group</h6>
            <Label htmlFor='check1'>
              <Checkbox type="checkbox" id='check1' name='checkGroup' defaultChecked={true} /> Checkbox
            </Label>
            <Label htmlFor='check2' className='ms-4'>
              <Checkbox type="checkbox" id='check2' name='checkGroup' /> Checkbox 2
            </Label>
          </div>
        </li>
      </ol>

      <h3>Form Group</h3>
      <ol>
        <li>
          <h5>label / input</h5>
          <FormGroup className='mb-4'>
            <Label>Nombre del producto <abbr>*</abbr></Label>
            <Input type="text" placeholder="Nombre del producto" />
          </FormGroup>
        </li>
        <li>
          <h5>label / input / icon</h5>
          <FormGroup className='mb-4'>
            <Label>Buscar</Label>
            <Input type="text" placeholder="Escriba un nombre..." />
            <BiSearch />
          </FormGroup>
        </li>
        <li>
          <h5>label / input invalid</h5>
          <FormGroup className='mb-4'>
            <Label invalid>Correo</Label>
            <Input type="email" invalid placeholder="correo@mail.com" />
            <FaBeer />
            <InputMessage color='danger'>El correo electrónico es incorrecto</InputMessage>
          </FormGroup>
        </li>
        <li>
          <h5>label / input / button position right</h5>
          <FormGroup buttonRight className='mb-4'>
            <Label>Validar contraseña <abbr>*</abbr> </Label>
            <Input type="password" placeholder="Escriba su contraseña" />
            <Button accent icon> <BiSearch /> </Button>
          </FormGroup>
        </li>
        <li>
          <h5>label / input / button position right / invalid</h5>
          <FormGroup buttonRight className='mb-4'>
            <Label invalid>Validar contraseña error</Label>
            <Input invalid type="password" placeholder="Escriba su contraseña" />
            <Button accent icon> <BiSearch /> </Button>
            <InputMessage color='danger'>El correo electrónico es incorrecto</InputMessage>
          </FormGroup>
        </li>
        <li>
          <h5>label / input / button position right / invalid</h5>
          <FormGroup buttonFloatRight className='mb-4'>
            <Label>Validar contraseña error</Label>
            <Input type="password" placeholder="Escriba su contraseña" />
            <Button color='primary' variant='filled'> <BiSearch /> Guardar </Button>
          </FormGroup>
        </li>
      </ol>
      <h3>Fieldset</h3>
      <ol>
        <li>
          <h5>with Legend</h5>
          <Fieldset color='secondary'>
            <legend>
              <Paragraph className='mb-0' color='secondary'>
                Datos de prueba
              </Paragraph>
            </legend>
            <Row className='mb-4'>
              <Col md={6}>
                <FormGroup>
                  <Label>Precio de venta por menor</Label>
                  <Input type='text' className='text-end' placeholder='0.00' />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Precio de venta por menor</Label>
                  <Input type='text' className='text-end' placeholder='0.00' />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Precio de venta por menor</Label>
                  <Input type='text' className='text-end' placeholder='0.00' />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Precio de venta por menor</Label>
                  <Input type='text' className='text-end' placeholder='0.00' />
                </FormGroup>
              </Col>
            </Row>
          </Fieldset>
        </li>
      </ol>
    </Container>
  );
};

export default UI;
