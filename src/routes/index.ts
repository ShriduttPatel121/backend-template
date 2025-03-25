import express from 'express';

import { authRoutes } from '@/routes/auth';

const router = express.Router();

router.use(authRoutes);

export default router;