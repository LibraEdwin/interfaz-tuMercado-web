import PropTypes from 'prop-types';
import { Input, Button, Spiner, Logo } from '@components/ui';
import { Paragraph, Small } from '@components/typography';
import { useState } from 'react';
import { getCsrfToken, getSession } from 'next-auth/react';

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false
      }
    };
  }

  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      csrfToken
    }
  };
};

const SignIn = ({ csrfToken }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Logo className='mx-auto' />
      <Paragraph color='gray' className='text-center my-3'>ACCESO A LA PLATAFORMA</Paragraph>
      <form
        method="post" action="/api/auth/callback/credentials"
        autoComplete='off'
        className='mt-5'
      >
        <input name='csrfToken' type="hidden" defaultValue={csrfToken} />
        <Input name='email' type="text" placeholder='correo@dominio.com' className='mb-3' />
        <Input name='password' type="password" placeholder='contraseña' className='mb-4' />
        <Button block primary disabled={isLoading}>
          {isLoading
            ? (<>Cargando... <Spiner /> </>)
            : 'INGRESAR'}
        </Button>
      </form>
      <div className='mt-5 text-center'>
        <Small color='gray'>&copy; {new Date().getFullYear()}. Todos los derechos reservados | Desarrollado por Interfaz</Small>
      </div>
    </>
  );
};

SignIn.propTypes = {
  csrfToken: PropTypes.string
};

SignIn.layout = 'auth';

export default SignIn;
