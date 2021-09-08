// eslint-disable-next-line no-unused-vars
import Express from 'express';
import { TasksService } from "../domain/services/index.js";

class TasksController {
    /**
     * 
     * @param {TasksService} service 
     */
    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    /**
     * 
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     * @param {Express.NextFunction} next 
     */
    async getAll(req, res, next) {
        try {
            const { projectId } = req.params;

            const projects = await this.service.listTasks(Number(projectId));
            res.send(projects);

        } catch(error) {
            next(error);
        }
    }

    /**
     * 
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     * @param {Express.NextFunction} next 
     */
     async create(req, res, next) {
        try {

            const { projectId } = req.params;

            const taskToCreate = {
                ...req.body,
                projectId: Number(projectId)
            }

            const task = await this.service.createTask(taskToCreate);
            res.send(task);

        } catch(error) {
            next(error);
        }
    }

    /**
     * 
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     * @param {Express.NextFunction} next 
     */
     async update(req, res, next) {
        try {

            const { projectId, id } = req.params;

            const taskToUpdate = {
                ...req.body,
                projectId: Number(projectId),
                id: Number(id)
            }

            const task = await this.service.updateTask(taskToUpdate);
            res.send(task);

        } catch(error) {
            next(error);
        }
    }

    /**
     * 
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     * @param {Express.NextFunction} next 
     */
     async delete(req, res, next) {
        try {
            const { projectId, id } = req.params;

            await this.service.deleteTask(id, projectId);
            res.sendStatus(200);

        } catch(error) {
            next(error);
        }
    }
}

export default new TasksController(TasksService);