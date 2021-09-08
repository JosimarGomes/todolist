// eslint-disable-next-line no-unused-vars
import Express from 'express';
import { ProjectsService } from "../domain/services/index.js";

class ProjectsController {
    /**
     * 
     * @param {ProjectsService} service 
     */
    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
    }

    /**
     * 
     * @param {Express.Request} req 
     * @param {Express.Response} res 
     * @param {Express.NextFunction} next 
     */
    async getAll(req, res, next) {
        try {
            const projects = await this.service.listProjects();
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
            const project = await this.service.createProject(req.body);
            res.send(project);

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
            const projectId = Number(req.params.id);
            await this.service.deleteProject(projectId);
            res.sendStatus(200);

        } catch(error) {
            next(error);
        }
    }
}

export default new ProjectsController(ProjectsService);