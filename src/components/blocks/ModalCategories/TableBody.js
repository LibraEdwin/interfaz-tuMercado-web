import { Table } from '@components/containers';
import { Button, Input } from '@components/ui';
import { useState } from 'react';
import { MdEdit, MdDelete, MdSave } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
export const TableBody = ({ codigo, nombreCategoría }) => {
  const [disable, setDisable] = useState(true);
  return (
    <>
      <Table.Col>{codigo}</Table.Col>
      <Table.Col>
        <Input
          type="typeMolda"
          className='mb-3'
          name={nombreCategoría}
          defaultValue={nombreCategoría}
          disabled={disable} />
      </Table.Col>
      <Table.Col as='th' >
        {(disable &&
          (<Button icon className='me-2 fs-3' onClick={() => setDisable(!disable)}>
            <MdEdit />
          </Button>)) ||
          (!disable &&
            (<Button icon className='me-2 fs-3' onClick={() => setDisable(!disable)}>
              <MdSave />
            </Button>))
        }
        {' '}
        <Button icon className='me-2 fs-3'><MdDelete /></Button>
      </Table.Col>
    </>
  );
};
