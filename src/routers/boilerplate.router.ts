import express from 'express';
import { boilerplateController } from '../controllers';

const router = express.Router();

// GET /boilerplate/
router.get('/', boilerplateController.getData);

export default router;
