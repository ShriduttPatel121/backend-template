import express from 'express';

const router = express.Router()

router.get("/signout", (req, res) => {
    res.send('Hi from signout')
});

export { router as signoutRout };