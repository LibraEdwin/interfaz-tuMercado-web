import PropTypes from 'prop-types';
import { ImageUpload, ModalSubcategoria } from '@components/blocks';
import ProductCategories from '@components/blocks/ProductCategories';
import { Container, Modal } from '@components/containers';
import { Button, FormGroup, Input, Label, Select, Fieldset, Textarea } from '@components/ui';
import useToggle from '@hooks/useToggle';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { getCategoryList, getSubcategoryList, getUnitMeasurementList } from '@services/api';

export const getServerSideProps = async () => {
  const { data: { categories } } = await getCategoryList({ limit: 0 }); // todas las categorias sin paginar
  const { data: { measurementUnits } } = await getUnitMeasurementList({ limit: 0 }); // todas las unidades de medida sin paginar

  return {
    props: {
      categories,
      measurementUnits
    }
  };
};

const RegisterProduct = ({ categories, measurementUnits }) => {
  const [showModalCategories, handleShowModalCategories] = useToggle();
  const [showModalSubcategories, handleShowModalSubcategories] = useToggle();
  const [subcategories, setSubcategories] = useState([]);

  const handleChangeCategory = async (e) => {
    const { value } = e.target;
    const query = { limit: 0, category: value };
    const { data } = await getSubcategoryList(query);

    setSubcategories(data.subcategories);
  };

  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={4}>
            <ImageUpload className='mb-4' />
            {/* <Button block accent className='mb-3'>Nuevo</Button>
            <Button block accent className='mb-3'>Eliminar</Button> */}
            <Button block primary disabled className='mb-3'>Registrar producto</Button>
            <Button block primary className='mb-3' onClick={handleShowModalCategories}>Registrar categoría</Button>
            <Button block primary onClick={handleShowModalSubcategories}>Registrar subcategoría</Button>
          </Col>
          <Col lg={8}>
            <Row className='g-3'>
              <Col xs={12}>
                <FormGroup>
                  <Label>Nombre del producto <abbr>*</abbr></Label>
                  <Input type="text" placeholder="Nombre del producto" />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Label>Categoría</Label>
                  <Select onChange={handleChangeCategory}>
                    <option disabled>Seleccionar categoría</option>
                    {categories.length > 0 && categories.map(category => (
                      <option value={category.id} key={category.id}>{category.name}</option>
                    ))}
                  </Select>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Label>Unidad de medida</Label>
                  <Select>
                    <option disabled>Seleccionar unid.</option>
                    {measurementUnits.length > 0 && measurementUnits.map(category => (
                      <option value={category.id} key={category.id}>{category.name}</option>
                    ))}
                  </Select>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Label>Subcategoría</Label>
                  <Select>
                    <option disabled>Seleccionar subcategoría</option>
                    {subcategories.length > 0 && subcategories.map(subcategory => (
                      <option value={subcategory.id} key={subcategory.id}>{subcategory.name}</option>
                    ))}
                  </Select>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Label>Unidades por KG</Label>
                  <Input type='number' min='0' max='100' className='text-end' defaultValue={0} />
                </FormGroup>
              </Col>
              <Col xs={12}>
                <Fieldset color='secondary'>
                  <Row className='mb-4'>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Precio de venta por menor</Label>
                        <Input
                          type='text'
                          inputMode='decimal'
                          className='text-end'
                          placeholder='S/ 0.00' />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Precio de venta por mayor</Label>
                        <Input
                          type='text'
                          inputMode='decimal'
                          className='text-end'
                          placeholder='0.00' />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Precio de compra por menor</Label>
                        <Input
                          type='text'
                          inputMode='decimal'
                          className='text-end'
                          placeholder='0.00' />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Precio de compra por mayor</Label>
                        <Input
                          type='text'
                          inputMode='decimal'
                          className='text-end'
                          placeholder='0.00' />
                      </FormGroup>
                    </Col>
                  </Row>
                </Fieldset>
              </Col>
              <Col xs={12}>
                <Textarea rows={12} placeholder='Descripción del producto'></Textarea>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/**
       * Modal categories
       */}
      <Modal open={showModalCategories} close={handleShowModalCategories}>
        <ProductCategories />
      </Modal>
      {/**
       * Modal subcategories
       */}
      <Modal open={showModalSubcategories} close={handleShowModalSubcategories}>
        <ModalSubcategoria />
      </Modal>
    </>
  );
};

RegisterProduct.layout = 'admin';
RegisterProduct.title = 'Registro de producto';
RegisterProduct.nameModule = 'MÓDULO VENTAS';
RegisterProduct.module = [{
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

RegisterProduct.title = 'Registro de producto';

RegisterProduct.propTypes = {
  categories: PropTypes.array,
  subcategories: PropTypes.array,
  measurementUnits: PropTypes.array
};

export default RegisterProduct;
