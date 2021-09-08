import { Router } from 'express';
import TasksController from '../controllers/tasks.js';

const router = Router();

router.get('/api/v1/projects/:projectId/tasks', TasksController.getAll);
router.post('/api/v1/projects/:projectId/tasks', TasksController.create);
router.delete('/api/v1/projects/:projectId/tasks/:id', TasksController.delete);
router.patch('/api/v1/projects/:projectId/tasks/:id', TasksController.update);

export default router;