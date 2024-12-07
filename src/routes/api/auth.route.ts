import { Response, Router } from 'express';

import OTP from '../../models/otp.model';
import User from '../../models/user.model';
import { CustomRequest } from '../../types/request';
import { sendTwoFactorEmail } from '../../utils/email';
import { generateOTPCode } from '../../utils/helpers/otpCode';

type SignUpBody = {
  email: string;
  userName: string;
  deviceId: string;
};

type SingInBody = {
  code: string;
  email: string;
};

const authRouter: Router = Router();

authRouter.post('/sign-up', async (req: CustomRequest<SignUpBody>, res: Response) => {
  const emailToSendCode = 'valentyn13git@gmail.com';
  const { email, userName, deviceId } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }
    const otp = generateOTPCode();

    await User.create({ email, userName, deviceId });

    const code = await OTP.create({ email, otp });

    await sendTwoFactorEmail(emailToSendCode, code.otp);

    res.status(200).json({ message: 'Code sent' });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: 'Error while sending email' });
  }
});

authRouter.post('/sign-in', async (req: CustomRequest<SingInBody>, res: Response) => {
  try {
    const { code, email } = req.body;

    const otp = await OTP.findOne({ email, otp: code });

    if (!otp) {
      res.status(400).json({ message: 'Invalid code' });
      return;
    }

    await OTP.findByIdAndDelete(otp._id);

    const user = await User.findOne({ email });

    res.status(200).json(user);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: 'Error while sending email' });
  }
});

authRouter.post('/device-id', async (req: CustomRequest<{ id: string }>, res: Response) => {
  const deviceId = req.body.id;

  try {
    if (!deviceId || deviceId.trim() === '') {
      res.status(400).json({ message: 'Invalid device id' });
      return;
    }
    const user = await User.findOne({ deviceId });

    if (!user) {
      res.status(400).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: 'Error while sending email' });
  }
});

export default authRouter;
