export default class TaskModel {
    constructor({
        description, id, endDate, projectId, status, owner,
    }) {
        this.description = description;
        this.endDate = endDate;
        this.projectId = Number(projectId);
        this.status = status;
        this.id = Number(id);
        this.owner = owner;
    }
}
