import PropTypes from 'prop-types';
import { useState } from 'react';

import {
    Footer, Input, Button, SnackBar, InputGroup, InputSeparator,
} from 'components/Shared';

import TasksApi from 'services/api/Tasks';

export default function TaskForm({ afterSubmit, projectId }) {
    const [snackbar, setSnackBar] = useState({ show: false, message: '' });
    const [loading, setLoading] = useState(false);

    async function submitForm(event) {
        event.preventDefault();

        try {
            setLoading(true);

            const description = event?.target?.description?.value;
            const endDate = event?.target?.endDate?.value;
            const owner = event?.target?.owner?.value;

            if (!description) {
                throw new Error('Invalid Description');
            }

            if (!endDate) {
                throw new Error('Invalid End Date');
            }

            if (!owner) {
                throw new Error('Invalid Owner');
            }

            const task = {
                description, endDate, projectId, owner,
            };

            const projectCreated = await TasksApi.createTask(task);

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
                <Input name="description" label="Description" />
                <InputGroup>
                    <Input containerStyle={{ width: '100%' }} name="owner" label="Owner" />
                    <InputSeparator />
                    <Input name="endDate" type="date" label="End date" />
                </InputGroup>
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

TaskForm.propTypes = {
    afterSubmit: PropTypes.func,
    projectId: PropTypes.number,
};
