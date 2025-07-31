import { Router } from 'express';
import * as noteController from '../controllers/note.controller';

const router = Router();

router.post('/', noteController.create);
router.get('/', noteController.getAll);
router.get('/:id', noteController.getById);
router.put('/:id', noteController.update);
router.delete('/:id', noteController.remove);

export default router;