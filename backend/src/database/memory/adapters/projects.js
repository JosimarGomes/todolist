import { projects } from '../data.js';

export default class ProjectsAdapter {
    getAll() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(projects);
            }, 2000)
        });
    }

    create(project) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let projectObject = project;
                    projectObject.id = Math.floor(Math.random() * 1000);
                    projectObject.timmestamp = Date.now();
                    
                    projects.push(projectObject)
                    resolve(projectObject);
                } catch(error) {
                    reject(error);
                }

            }, 2000)
        });
    }

    delete(projectId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const projectIndex = projects.findIndex(project => project.id === projectId);

                    if (projectIndex === -1) {
                        throw new Error('Projeto não encontrado');
                    }

                    projects.splice(projectIndex, 1);
                    resolve('ok');
                } catch(error) {
                    reject(error);
                }

            }, 2000)
        });
    }
}