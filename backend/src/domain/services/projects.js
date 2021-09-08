import BadRequestError from '../../shared/errors/bad-request.js';
import ProjectEntity from '../entities/project.js';
import { ProjectsRepository } from '../repositories/index.js';

class ProjectsService {

    /**
     * 
     * @param {ProjectsRepository} repository 
     */
    constructor(repository) {
        this.repository = repository;
    }

    /**
     * 
     * @returns {Promise<ProjectEntity[]>}
     */
    listProjects() {
        return this.repository.getAll();
    }

    /**
     * 
     * @param {ProjectEntity} project
     * @returns {ProjectEntity} 
     */
    createProject(project) {
        const projectToCreate = new ProjectEntity(project);
        const { valid, errorMessage } = projectToCreate.validate();

        if (!valid) {
            throw new BadRequestError(errorMessage);
        }

        return this.repository.create(project);
    }

    /**
     * 
     * @param {number} projectId
     */
    deleteProject(projectId) {
        return this.repository.delete(projectId);
    }
}

export default new ProjectsService(ProjectsRepository);