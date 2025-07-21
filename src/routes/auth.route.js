//router
import { Router } from 'express';
import authtController from '../controllers/auth.controller.js';

const router = Router();

router.get('/', authtController.login);

export default router;
