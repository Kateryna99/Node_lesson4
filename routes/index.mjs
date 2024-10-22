import { Router } from 'express';
import MainController from "../controllers/MainController.mjs";

const router = Router()
router.get('/', MainController.home)

export default router