import PropTypes from 'prop-types';

import { Input } from 'components/Shared';
import { dateToPtBr } from 'utils/date';

import './style.css';
import TasksApi from 'services/api/Tasks';

import { TASK_COMPLETED_STATUS, TASK_PENDIND_STATUS } from 'contants';
import TasksHelper from 'helpers/Tasks';

export default function TaskItem({ task, afterUpdateTask }) {
    const {
        description, status, endDate, owner,
    } = task;
    const checked = status === TASK_COMPLETED_STATUS;

    async function updateTaskStatus() {
        const taskStatus = task.status === TASK_PENDIND_STATUS
            ? TASK_COMPLETED_STATUS : TASK_PENDIND_STATUS;

        const taskToUpdate = {
            status: taskStatus,
        };

        // Comentar sobre esse hack pra melhorar a experiência do usuário
        const localTask = { ...task, status: taskStatus };
        afterUpdateTask(localTask);

        await TasksApi.updateTask(taskToUpdate, task.id, task.projectId);
    }

    const date = new Date(endDate);
    const endDateFormated = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const isDelayed = TasksHelper.isDelayed(task);

    let contentInputClassName = 'task-item-content';

    if (isDelayed) {
        contentInputClassName += ' delayed';
    }

    if (TasksHelper.isComplete(task)) {
        contentInputClassName += ' complete';
    }

    return (
        <div className={contentInputClassName}>
            <Input
                onClick={updateTaskStatus}
                className="input-checkbox"
                containerStyle={{ display: 'flex', justifyContent: 'flex-start' }}
                type="checkbox"
                name={`item-${task.id}`}
                checked={checked}
                label={description} />
            <div className="task-info">{owner}</div>
            <div className="task-info">{ dateToPtBr(endDateFormated) }</div>
        </div>
    );
}

TaskItem.propTypes = {
    task: PropTypes.shape({
        description: PropTypes.string,
        status: PropTypes.string,
        endDate: PropTypes.string,
        id: PropTypes.number,
        projectId: PropTypes.number,
        owner: PropTypes.string,
    }),
    onClick: PropTypes.func,
    afterUpdateTask: PropTypes.func,
};
