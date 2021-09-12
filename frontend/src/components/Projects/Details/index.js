import PropTypes from 'prop-types';
import { useState } from 'react';

import {
    Button, EmptyFeedback, Footer, Modal, ModalConfirm,
} from 'components/Shared';
import {
    CheckCircleOutline, AccessTime, FormatListBulleted, Add, EmojiEvents,
} from 'components/Shared/Icons';

import TaskItem from 'components/Tasks/Item';
import TaskForm from 'components/Tasks/Form';

import { TASK_COMPLETED_STATUS, TASK_PENDIND_STATUS } from 'contants';
import TasksHelper from 'helpers/Tasks';

import ProjectsApi from 'services/api/Projects';

import './style.css';

export default function ProjectDetail({
    project, onCreateTask, onUpdateTask, onDeleteProject,
}) {
    const { name, tasks = [] } = project;

    const [showForm, setShowForm] = useState(false);
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    const [loadingDelete, setLoadingDelete] = useState(false);

    function toggleNewTaskForm() {
        const toggle = !showForm;

        setShowForm(toggle);
    }

    function toggleConfirmDelete() {
        const toggle = !showConfirmDelete;
        setShowConfirmDelete(toggle);
    }

    async function deleteProject() {
        try {
            setLoadingDelete(true);

            await ProjectsApi.deleteProject(project);
            setShowConfirmDelete(false);
            onDeleteProject(project);
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingDelete(false);
        }
    }

    function afterCreateTask(taskCreated) {
        setShowForm(false);
        onCreateTask(taskCreated);
    }

    const totalTasksCompleted = tasks.filter((task) => (
        task.status === TASK_COMPLETED_STATUS)).length;

    const totalTasksDelayed = tasks.filter((task) => (
        TasksHelper.isDelayed(task) && task.status === TASK_PENDIND_STATUS)).length;

    const totalTasks = tasks.length;

    const allTasksHasCompleted = !!(tasks.length
        && tasks.every((tsk) => tsk.status === TASK_COMPLETED_STATUS));

    return (
        <div className="project-detail-container">
            <div className="project-detail-header">
                <div>
                    <h1>{name}</h1>
                </div>
                <div className="tools">
                    <div className="info">
                        <div className="complete"><CheckCircleOutline className="icon" /> {totalTasksCompleted}</div>
                        <div className="pending"><AccessTime className="icon" /> {totalTasksDelayed}</div>
                        <div className="total"><FormatListBulleted className="icon" /> {totalTasks}</div>
                    </div>
                    <Button kind="primary" outlined onClick={toggleConfirmDelete}>
                        Delete
                    </Button>
                </div>
            </div>
            <div className="project-detail-content">
                {
                    allTasksHasCompleted && (
                        <div className="project-detail-congratulations">
                            <EmojiEvents style={{ fontSize: 40 }} /> Completed
                        </div>
                    )
                }
                {
                    tasks.length === 0 && (
                        <EmptyFeedback message='No tasks added. Click in "Add Task"' />
                    )
                }
                {
                    tasks.length > 0 && (
                        TasksHelper.sortTasks(tasks).map((task) => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                afterUpdateTask={onUpdateTask} />
                        ))
                    )
                }
            </div>
            <Footer>
                <Button onClick={toggleNewTaskForm} kind="primary">
                    <Add /> Add Task
                </Button>
            </Footer>
            <Modal
                title="New Task"
                show={showForm}
                onClose={toggleNewTaskForm}>
                <TaskForm afterSubmit={afterCreateTask} projectId={project.id} />
            </Modal>
            <ModalConfirm
                loading={loadingDelete}
                show={showConfirmDelete}
                message={`Deseja realmente deletar o projeto: "${project.name}"`}
                onConfirm={deleteProject}
                onCancel={toggleConfirmDelete} />
        </div>
    );
}

ProjectDetail.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
        tasks: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string,
            id: PropTypes.number,
        })),
    }),
    onCreateTask: PropTypes.func,
    onUpdateTask: PropTypes.func,
    onDeleteProject: PropTypes.func,
};
