import { Application } from 'express';

import authRouter from './api/auth.route';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.use('/api/auth', authRouter);
  }
}

export default AppRouter;
