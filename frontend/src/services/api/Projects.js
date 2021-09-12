import HttpRequest from 'libs/http-request/HttpRequest';
import { ProjectModel } from 'models';

const apiUrl = process.env.REACT_APP_API_URL;

export default class ProjectsApi {
    static async getProjects() {
        const httpRequest = new HttpRequest({ url: `${apiUrl}/v1/projects` });
        const { data } = await httpRequest.get();

        return data.map((project) => new ProjectModel(project));
    }

    static async createProject(project) {
        const httpRequest = new HttpRequest({
            url: `${apiUrl}/v1/projects`,
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json',
            },
            body: project,
        });

        const { data } = await httpRequest.post();

        return new ProjectModel(data);
    }

    static async deleteProject(project) {
        const httpRequest = new HttpRequest({
            url: `${apiUrl}/v1/projects/${project.id}`,
        });

        console.log('VEIO NO SERVICE');

        await httpRequest.delete();

        return true;
    }
}
