
const credentialsAuth = (req, res) => {
  const { method } = req;
  // GET any not OK
  if (method !== 'POST') {
    res.status(405).end();
    return;
  }

  // POST - ok
  // validar credenciales
  const { email, password } = req.body;
  if (email === 'mail@mail.com' && password === process.env.NEXTAUTH_SECRET) {
    const user = {
      id: 1,
      name: 'Nombre de usuario',
      email: 'mail@mail.com'
    };

    return res.status(200).json(user);
  }

  res.status(401).end();
};

export default credentialsAuth;
