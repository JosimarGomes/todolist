/* eslint-disable no-case-declarations */
/* eslint-disable import/prefer-default-export */
import { Types } from './actions';

const initialState = {
    error: null,
    projects: [],
    loadingRequest: true,
    loadingCreate: false,
    selectedProject: {},
};
export const projects = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOAD_PROJECTS_REQUEST:
            return {
                ...state,
                ...{
                    loadingRequest: true,
                },
            };
        case Types.LOAD_PROJECTS_SUCCESS:
            return {
                ...state,
                ...{
                    projects: action.payload.projects,
                    loadingRequest: false,
                },
            };
        case Types.LOAD_PROJECTS_FAILED:
            return {
                ...state,
                ...{
                    error: action.payload.error,
                    loadingRequest: false,
                },
            };
        case Types.SELECT_PROJECT:
            return {
                ...state,
                ...{
                    selectedProject: action.payload.project,
                },
            };
        case Types.CREATE_PROJECT_REQUEST:
            return {
                ...state,
                ...{
                    loadingCreate: true,
                },
            };
        case Types.CREATE_PROJECT_FAILED:
            return {
                ...state,
                ...{
                    error: action.payload.error,
                    loadingCreate: false,
                },
            };
        case Types.CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                ...{
                    projects: [...state.projects, action.payload.project],
                    loadingCreate: false,
                },
            };

        default:
            return state;
    }
};
