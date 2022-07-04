import { Container } from '@components/containers';
import { HeadLine, Paragraph, Subtitle, Title } from '@components/typography';

/** Pagina de presentacion para componentes de tipografia */
const Typography = () => {
  return (
    <Container>
      <h1>TIPOGRAFIA</h1>

      <h2 className='mt-5'>Componente Title</h2>
      <Title color='primary'>Titulo normal</Title>
      <Title bold>Titulo en negrita</Title>

      <h2 className='mt-5'>Componente Subtitle </h2>
      <Subtitle color='primary'>Subtítulo normal</Subtitle>
      <Subtitle bold>Subtítulo en negrita</Subtitle>

      <h2 className='mt-5'>Componente HeadLine</h2>
      <HeadLine color='primary'>Encabezado normal</HeadLine>
      <HeadLine bold>Encabezado en negrita</HeadLine>

      <h2 className='mt-5'>Componente Parrafo </h2>
      <Paragraph className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque possimus, ex iusto ad explicabo, fugiat natus doloremque aspernatur aut blanditiis asperiores adipisci labore tempore, perferendis veniam repellendus in quos vel!</Paragraph>
    </Container>
  );
};

export default Typography;
