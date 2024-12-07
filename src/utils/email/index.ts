import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND || 're_VA1kouoX_5Dx4t7iL1JJj5DFttPCwKfcr');

const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'hamster@resend.dev',
    to: email,
    subject: 'Hamster 2FA code',
    html: `
              <h1>2FA code</h1>
              <p>Your code: ${token}</p>
          `,
  });
};

export { sendTwoFactorEmail };
