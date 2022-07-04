import { Container } from '@components/containers';
import { Button, Spiner } from '@components/ui';
import { FaBeer } from 'react-icons/fa';

const ButtonUI = () => {
  return (
    <Container>
      <h3>Buttons</h3>
      <ol>
        <li>
          <h4>Button default</h4>
          <Button>Button default</Button>
        </li>
        <li>
          <h4>Button with color</h4>
          <Button color='primary' variant='filled'>Button variant filled </Button>
        </li>
        <li>
          <h4>Button with border</h4>
          <Button color='primary' variant='outlined'>Button variant outilined</Button>
        </li>
        <li>
          <h4>Button with icon</h4>
          <Button color='primary' variant='filled' className='me-2'>Button <FaBeer /></Button>
          <Button color='primary' variant='outlined'><FaBeer /> Button</Button>
        </li>
        <li>
          <h4>Button only icon</h4>
          <Button icon className='me-2'><FaBeer /></Button>
          <Button color='primary' icon variant='filled' className='me-2'><FaBeer /></Button>
          <Button color='primary' icon variant='outlined'><FaBeer /></Button>
        </li>
        <li>
          <h4>Button disabled</h4>
          <Button disabled color='primary' variant='filled' className='me-2'>Disabled</Button>
          <Button disabled color='primary' variant='outlined'>Disabled</Button>
        </li>
        <li>
          <h4>Button with Spinner</h4>
          <Button color='primary' disabled variant='filled' className='me-2'>Loading... <Spiner /> </Button>
          <Button color='primary' variant='outlined' >Loading... <Spiner /> </Button>
        </li>
        <li>
          <h4>Button block 100%</h4>
          <Button block color='primary' variant='filled' className='mb-2'>Full width</Button>
          <Button block disabled color='primary' variant='outlined' >Full width</Button>
        </li>
        <li>
          <h4>Button primary</h4>
          <Button primary className='me-2'>Primary button</Button>
          <Button primary className='me-2'>Primary button</Button>
          <Button primary className='me-2'>Loading... <Spiner /></Button>
          <Button primary icon ><FaBeer /></Button>
        </li>
        <li>
          <h4>Button accent</h4>
          <Button accent className='me-2'>Accent button</Button>
          <Button accent className='me-2'>Accent button</Button>
          <Button accent className='me-2'>Loading... <Spiner /></Button>
          <Button accent icon ><FaBeer /></Button>
        </li>
        <li>
          <h4>Button with Tooltip</h4>
          <Button color='primary' variant='filled' tooltip data-tooltip='Tooltip descripcion' className='me-2'>
            hover me<FaBeer />
          </Button>
          <Button color='primary' variant='filled' icon tooltip data-tooltip='Buscar'>
            <FaBeer />
          </Button>
        </li>
      </ol>
    </Container>
  );
};

export default ButtonUI;
