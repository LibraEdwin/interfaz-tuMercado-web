import { Table } from '@components/containers';
import { Button, FormGroup, Input } from '@components/ui';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { MdEdit, MdDelete, MdSave } from 'react-icons/md';
import ModalSubcategoriesStyled from './modalSubcategories.styled';
import { TableBody } from './TableBody';

const DataCategoria = [
  {
    codigo: '0001',
    nombreCategoría: 'Nombre de la primera categoría'
  },
  {
    codigo: '0002',
    nombreCategoría: 'Nombre de la primera categoría'
  },
  {
    codigo: '0003',
    nombreCategoría: 'Nombre de la primera categoría'
  },
  {
    codigo: '0004',
    nombreCategoría: 'Nombre de la primera categoría'
  },
  {
    codigo: '0005',
    nombreCategoría: 'Nombre de la primera categoría'
  },
  {
    codigo: '0006',
    nombreCategoría: 'Nombre de la primera categoría'
  },
  {
    codigo: '0007',
    nombreCategoría: 'Nombre de la primera categoría'
  },
  {
    codigo: '0008',
    nombreCategoría: 'Nombre de la primera categoría'
  },
  {
    codigo: '0009',
    nombreCategoría: 'Nombre de la primera categoría'
  },
  {
    codigo: '0010',
    nombreCategoría: 'Nombre de la primera categoría'
  }
];

const ModalSubcategories = () => {
  const [datosSubcategoria, setDatosSubcategoria] = useState(DataCategoria);
  const [inputDisable, setInputDisable] = useState(true);
  const btnEdit = () => {
    setInputDisable(!inputDisable);
  };
  return (
    <div>
      <FormGroup className='mb-4'>
        <Input type="text" placeholder="Escriba un nombre..." />
        <BiSearch />
      </FormGroup>
      <Table.Wrapper>
        <Table.Content>
          <Table.Head sticky>
            <Table.Row>
              <Table.Col as='th' textAlign='left'>Código</Table.Col>
              <Table.Col as='th' textAlign='left'>Nombre de subcategoría</Table.Col>
              <Table.Col as='th' />
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {datosSubcategoria.map((element) => (
              <Table.Row key={element.codigo}>
                <TableBody codigo={element.codigo} nombreCategoría={element.nombreCategoría} />
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.Wrapper>
      <ModalSubcategoriesStyled.DivButton>
        <Button accent className='me-2'>Registrar subcategoría</Button>
      </ModalSubcategoriesStyled.DivButton>
    </div>
  );
};

export default ModalSubcategories;
