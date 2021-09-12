import { projects } from '../data.js';

export default class TasksAdapter {
    getAll(projectId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const project = projects.find(projct => projct.id === projectId);

                if (!project) {
                    throw new Error('Projeto não encontrado')
                }

                const { tasks = [] } = project;

                resolve(tasks);
            }, 2000)
        });
    }

    getByFilter(filter) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const project = projects.find(projct => projct.id === Number(filter.projectId));

                if (!project) {
                    throw new Error('Projeto não encontrado')
                }

                const { tasks = [] } = project;
                const task = tasks.find(tsk => tsk.id === Number(filter.id));

                resolve(task);
            }, 1000)
        });
    }

    create(task) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {

                    const projectIndex = projects.findIndex(projct => projct.id === Number(task.projectId));

                    if (projectIndex === -1) {
                        throw new Error('Projeto não encontrado')
                    }

                    let taskObject = task;
                    taskObject.id = Math.floor(Math.random() * 1000);
                    taskObject.timmestamp = Date.now();
                    taskObject.status = 'pending';
                    
                    projects[projectIndex]?.tasks?.push(taskObject);
                    resolve(taskObject);
                } catch(error) {
                    reject(error);
                }

            }, 2000)
        });
    }

    update(task) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const projectIndex = projects.findIndex(projct => projct.id === Number(task.projectId));

                    if (projectIndex === -1) {
                        throw new Error('Projeto não encontrado');
                    }

                    const tasks = projects[projectIndex]?.tasks || [];
                    const taskIndex = tasks.findIndex(tsk => tsk.id === task.id);

                    if (taskIndex === -1) {
                        throw new Error('Tarefa não encontrada');
                    }

                    projects[projectIndex].tasks[taskIndex] = task;

                    resolve(task);
                } catch(error) {
                    reject(error);
                }

            }, 2000)
        });
    }

    delete(id, projectId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const projectIndex = projects.findIndex(projct => projct.id === Number(projectId));

                    if (projectIndex === -1) {
                        throw new Error('Projeto não encontrado')
                    }

                    const tasks = projects[projectIndex]?.tasks || [];

                    projects[projectIndex].tasks = tasks.filter(tsk => tsk.id !== Number(id));

                    resolve('ok');
                } catch(error) {
                    reject(error);
                }

            }, 2000)
        });
    }
}