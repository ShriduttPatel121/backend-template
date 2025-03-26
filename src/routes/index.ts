import express from 'express';

import { authRoutes } from '@/routes/auth';

const router = express.Router();

router.use('/users', authRoutes);

export default router;