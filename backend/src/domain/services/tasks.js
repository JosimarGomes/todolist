import BadRequestError from '../../shared/errors/bad-request.js';
import TaskEntity from '../entities/task.js';
import { TasksRepository } from '../repositories/index.js';

class TasksService {

    /**
     * 
     * @param {TasksRepository} repository 
     */
    constructor(repository) {
        this.repository = repository;
    }

    /**
     * 
     * @param {number} projectId
     * @returns {Promise<TaskEntity[]>}
     */
    listTasks(projectId) {
        return this.repository.getAll(projectId);
    }

    /**
     * 
     * @param {TaskEntity} task
     * @returns {TaskEntity} 
     */
    createTask(task) {
        const taskToCreate = new TaskEntity(task);
        const { valid, errorMessage } = taskToCreate.validate();

        if (!valid) {
            throw new BadRequestError(errorMessage);
        }

        return this.repository.create(task);
    }

    /**
     * 
     * @param {object} taskObject
     * @returns {TaskEntity} 
     */
     async updateTask(taskObject) {

        const oldTask = await this.repository.getBy({ projectId: taskObject.projectId, taskId: taskObject.id });

        const taskToUpdate = new TaskEntity({...oldTask, ...taskObject});
        const { valid, errorMessage } = taskToUpdate.validate();

        if (!valid) {
            throw new BadRequestError(errorMessage);
        }

        return this.repository.update(taskToUpdate);
    }

    /**
     * 
     * @param {number} id
     * @param {number} projectId
     */
    deleteTask(id, projectId) {
        return this.repository.delete(id, projectId);
    }
}

export default new TasksService(TasksRepository);