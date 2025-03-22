import express from 'express';

const router = express.Router()

router.get("/currentUser", (req, res) => {
    res.send('Hi from currentUser')
});

export { router as currentUserRouter };