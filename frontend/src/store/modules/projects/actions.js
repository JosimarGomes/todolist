export const Types = {
    LOAD_PROJECTS_REQUEST: '@projects/LOAD_PROJECTS_REQUEST',
    LOAD_PROJECTS_SUCCESS: '@projects/LOAD_PROJECTS_SUCCESS',
    LOAD_PROJECTS_FAILED: '@projects/LOAD_PROJECTS_FAILED',
    SELECT_PROJECT: '@projects/SELECT_PROJECT',
    CREATE_PROJECT_REQUEST: '@projects/CREATE_PROJECT_REQUEST',
    CREATE_PROJECT_SUCCESS: '@projects/CREATE_PROJECT_SUCCESS',
    CREATE_PROJECT_FAILED: '@projects/CREATE_PROJECT_FAILED',
};

export const Actions = {
    loadProjectsRequest: () => ({
        type: Types.LOAD_PROJECTS_REQUEST,
    }),
    loadProjectsSuccess: (projects) => ({
        type: Types.LOAD_PROJECTS_SUCCESS,
        payload: { projects },
    }),
    loadProjectsFailed: (error) => ({
        type: Types.LOAD_PROJECTS_FAILED,
        payload: {
            error,
        },
    }),
    selectProject: (project) => ({
        type: Types.SELECT_PROJECT,
        payload: {
            project,
        },
    }),
    createProjectRequest: (project) => ({
        type: Types.CREATE_PROJECT_REQUEST,
        payload: {
            project,
        },
    }),
    createProjectSuccess: (project) => ({
        type: Types.CREATE_PROJECT_SUCCESS,
        payload: {
            project,
        },
    }),
    createProjectFailed: (project) => ({
        type: Types.CREATE_PROJECT_FAILED,
        payload: {
            project,
        },
    }),
};
