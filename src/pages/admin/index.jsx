import { Button } from '@components/ui';
import { getSession, signOut } from 'next-auth/react';

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};

const Admin = () => {
  return (
    <>
      Admin
      <Button
        color='light'
        variant='filled'
        onClick={() => signOut()}
      >CERRAR SESIÓN</Button>
    </>
  );
};

Admin.layout = 'admin';

export default Admin;
