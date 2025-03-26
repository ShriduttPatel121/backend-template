import express from 'express';

import { SignupController } from '@/controllers/auth/signup';
import { singUpValidator } from '@/middleware/validators/auth';
import { authorization } from '@/middleware/auth';

const router = express.Router();


router.get("/currentUser", authorization, (req, res) => {
    res.send('Hi from currentUser')
});


router.get("/signin", (req, res) => {
    res.send('Hi from signin')
});


router.get("/signout", (req, res) => {
    res.send('Hi from signout')
});

router.post("/signup", singUpValidator, SignupController);

export { router as authRoutes };