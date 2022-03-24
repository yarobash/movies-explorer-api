import express from 'express';
import users from '../controllers/Users.js';

const router = express.Router();

router.get('/me', users.getUser.bind(users));
router.patch('/me', users.updateUser.bind(users));

export default router;
