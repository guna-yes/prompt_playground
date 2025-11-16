import express from 'express';
import { createStore } from '../controllers/dbController/storeController.js';
const router = express.Router();


router.post('/create/store',createStore);

export default router;