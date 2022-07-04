import { Container } from '@components/containers';

/** Pagina de presentacion para componentes ui */
const UI = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href='/ui/buttons'>BUTTONS</a>
        </li>
        <li>
          <a href='/ui/inputs'>INPUTS</a>
        </li>
        <li>
          <a href='/ui/grid'>GRID</a>
        </li>
        <li>
          <a href='/ui/tipography'>TIPOGRAGPHY</a>
        </li>

      </ul>
    </Container>
  );
};

export default UI;
