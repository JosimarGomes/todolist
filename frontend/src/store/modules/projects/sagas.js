/* eslint-disable no-console */
import {
    call, all, put, takeLatest,
} from 'redux-saga/effects';
import ProjectsApi from 'services/api/Projects';
import {
    Types,
    Actions,
} from './actions';

function* loadProjects() {
    try {
        const projects = yield call(ProjectsApi.getProjects);

        if (projects.length > 0) {
            yield put(Actions.selectProject(projects[0]));
        }

        yield put(Actions.loadProjectsSuccess(projects));
    } catch (err) {
        console.log('err', err);
        yield put(Actions.loadProjectsFailed(err));
    }
}

function* createProject({ payload }) {
    const { project } = payload;
    try {
        const projectCreated = yield call(ProjectsApi.createProject, project);
        console.log('projects created', projectCreated);

        yield put(Actions.createProjectSuccess(projectCreated));
    } catch (err) {
        console.log('err', err);
        yield put(Actions.createProjectFailed(err));
    }
}

export default all([
    takeLatest(Types.LOAD_PROJECTS_REQUEST, loadProjects),
    takeLatest(Types.CREATE_PROJECT_REQUEST, createProject),
]);
