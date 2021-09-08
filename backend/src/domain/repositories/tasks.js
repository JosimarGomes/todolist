import TasksAdapter from '../../database/memory/adapters/tasks.js';
import { TaskEntity } from '../entities/index.js';

class TasksRepository {

    /**
     * 
     * @param {TasksAdapter} dataAdapter 
     */
    constructor(dataAdapter) {
        this.adapter = dataAdapter;
    }

    /**
     * 
     * @param {number} projectId
     * @returns {Promise<TaskEntity[]>}
     */
    async getAll(projectId) {
        const tasks = await this.adapter.getAll(projectId);
        return tasks.map(task => new TaskEntity(task))
    }

    /**
     * 
     * @param {TaskEntity} task
     * @returns {TaskEntity} 
     */
    async create(task) {
        const taskCreated = await this.adapter.create(task);
        return new TaskEntity(taskCreated);        
    }

    /**
     * 
     * @param {number} id
     * @param {number} projectId 
     */
    async delete(id, projectId) {
        await this.adapter.delete(id, projectId);
    }

    /**
     * 
     * @param {TaskEntity} task
     * @returns {TaskEntity} 
     */
     async update(task) {
        const taskUpdated = await this.adapter.update(task);
        return new TaskEntity(taskUpdated);        
    }

    /**
     * 
     * @param {object} params 
     */
    async getBy(params) {
        const filter = {}

        if (params.projectId) {
            filter.projectId = params.projectId;
        }

        if (params.taskId) {
            filter.id = params.taskId;
        }

        const task = await this.adapter.getByFilter(filter);
        return task;

    }
}

const projectsAdapters = new TasksAdapter();
export default new TasksRepository(projectsAdapters);
