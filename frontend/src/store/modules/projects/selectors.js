/* eslint-disable import/prefer-default-export */
export const Selectors = {
    projects: (state) => state.projects.projects,
    selectedProject: (state) => state.projects.selectedProject,
    error: (state) => state.projects.error,
    loadingRequest: (state) => state.projects.loadingRequest,
    loadingCreate: (state) => state.projects.loadingCreate,
};
