import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const options = {
  pages: {
    signIn: '/auth'
  },
  debug: true,
  jwt: {},
  providers: [
    CredentialsProvider({
      name: 'TuMercado',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials, req) {
        console.log(credentials);
        // conectar API
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/tumercado`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            'Content-type': 'application/json'
          }
        });
        // JSON rta API
        const user = await res.json();
        // return user ?? null
        if (res.ok && user) {
          return user;
        }
        return null;
      }
    })
  ],
  callbacks: {

  }
};

export default NextAuth(options);
