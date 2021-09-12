export default class ProjectModel {
    constructor({ name, id, tasks = [] }) {
        this.name = name;
        this.id = Number(id);
        this.tasks = tasks;
    }
}
