import PropTypes from 'prop-types';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import {
    Footer, Input, Button, SnackBar,
} from 'components/Shared';

// import { Actions, Selectors } from 'store/modules/projects';
import ProjectsApi from 'services/api/Projects';

export default function ProjectForm({ afterSubmit }) {
    const [snackbar, setSnackBar] = useState({ show: false, message: '' });
    const [loading, setLoading] = useState(false);

    // const dispatch = useDispatch();

    // const loading = useSelector(Selectors.loadingCreate);

    async function submitForm(event) {
        event.preventDefault();

        // const name = event?.target?.name?.value;

        // const project = { name };

        // dispatch(Actions.createProjectRequest(project));

        try {
            setLoading(true);

            const name = event?.target?.name?.value;

            if (!name) {
                throw new Error('Invalid Name');
            }

            const project = { name };

            const projectCreated = await ProjectsApi.createProject(project);

            afterSubmit(projectCreated);
        } catch (error) {
            console.error('vem error', error);
            setSnackBar({ ...snackbar, show: true, message: error.message });
        } finally {
            setLoading(false);
        }
    }

    function closeSnackBar() {
        setSnackBar({ ...snackbar, show: false });
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <Input name="name" label="Project name" />
                <Footer>
                    <Button loading={loading} kind="primary">Save</Button>
                </Footer>
            </form>
            <SnackBar
                type="error"
                show={snackbar.show}
                onClose={closeSnackBar}
                message={snackbar.message} />
        </>
    );
}

ProjectForm.propTypes = {
    afterSubmit: PropTypes.func,
};
