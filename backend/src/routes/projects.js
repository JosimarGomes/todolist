import { Router } from 'express';
import ProjectsController from '../controllers/projects.js';

const router = Router();

router.get('/api/v1/projects', ProjectsController.getAll);
router.post('/api/v1/projects', ProjectsController.create);
router.delete('/api/v1/projects/:id', ProjectsController.delete);

export default router;