import ProjectsAdapter from '../../database/memory/adapters/projects.js';
import { ProjectEntity } from '../entities/index.js';

class ProjectsRepository {

    /**
     * 
     * @param {ProjectsAdapter} dataAdapter 
     */
    constructor(dataAdapter) {
        this.adapter = dataAdapter;
    }

    /**
     * 
     * @returns {Promise<ProjectEntity[]>}
     */
    async getAll() {
        const projects = await this.adapter.getAll();
        return projects.map(project => new ProjectEntity(project))
    }

    /**
     * 
     * @param {ProjectEntity} project
     * @returns {ProjectEntity} 
     */
    async create(project) {
        const projectCreated = await this.adapter.create(project);
        return new ProjectEntity(projectCreated);        
    }

    /**
     * 
     * @param {number} projectId 
     */
    async delete(projectId) {
        await this.adapter.delete(projectId);
    }
}

const projectsAdapters = new ProjectsAdapter();
export default new ProjectsRepository(projectsAdapters);
