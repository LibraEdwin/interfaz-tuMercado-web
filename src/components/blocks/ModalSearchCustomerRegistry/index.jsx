import { Table } from '@components/containers';
import { Button, FormGroup, Input, Label } from '@components/ui';
import { BiSearch } from 'react-icons/bi';
import { BsFillEyeFill } from 'react-icons/bs';

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

const ModalSearchCustomerRegistry = () => {
  return (
    <div>
      <FormGroup className='mb-4'>
        <Label>Búsqueda por nombre de cliente</Label>
        <Input type="text" placeholder="Escriba un nombre..." />
        <BiSearch />
      </FormGroup>
      <Table.Wrapper>
        <Table.Content>
          <Table.Head sticky>
            <Table.Row>
              <Table.Col as='th' textAlign='left'>Código</Table.Col>
              <Table.Col as='th' textAlign='left'>Nombre de categoría</Table.Col>
              <Table.Col as='th' >Ver</Table.Col>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {DataCategoria.map((element) => (
              <Table.Row key={element.codigo}>
                <Table.Col>{element.codigo}</Table.Col>
                <Table.Col>
                  {element.nombreCategoría}
                </Table.Col>
                <Table.Col as='th' >
                  <Button icon className='me-2 fs-3' ><BsFillEyeFill /></Button>
                </Table.Col>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.Wrapper>
    </div>
  );
};

export default ModalSearchCustomerRegistry;
