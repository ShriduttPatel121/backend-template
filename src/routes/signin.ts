import express from 'express';

const router = express.Router()

router.get("/signin", (req, res) => {
    res.send('Hi from signin')
});

export { router as signInRout };