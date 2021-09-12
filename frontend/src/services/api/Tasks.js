import HttpRequest from 'libs/http-request/HttpRequest';
import { TaskModel } from 'models';

const apiUrl = process.env.REACT_APP_API_URL;

export default class TasksApi {
    static async createTask(task) {
        const httpRequest = new HttpRequest({
            url: `${apiUrl}/v1/projects/${task.projectId}/tasks`,
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json',
            },
            body: task,
        });

        const { data } = await httpRequest.post();

        return new TaskModel(data);
    }

    static async updateTask(task, taskId, projectId) {
        const httpRequest = new HttpRequest({
            url: `${apiUrl}/v1/projects/${projectId}/tasks/${taskId}`,
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json',
            },
            body: task,
        });

        const { data } = await httpRequest.patch();

        return new TaskModel(data);
    }
}
