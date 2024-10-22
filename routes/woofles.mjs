import {Router} from 'express';
import WoofleController from "../controllers/WoofleController.mjs";

const router = Router();

router.get('/', WoofleController.wooflesList)
router.get('/add', WoofleController.addWoofleForm)
router.get('/:id', WoofleController.woofleDetail)

router.post('/', WoofleController.createWoofle)

export default router;