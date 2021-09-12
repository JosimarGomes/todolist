import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import {
    Container, EmptyFeedback, Spinner, SpinnerContainer, SnackBar,
} from 'components/Shared';
import SideMenu from 'components/SideMenu';
import ProjectDetail from 'components/Projects/Details';
import ProjectsApi from 'services/api/Projects';

import './style.css';

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState({});
    const [loadingProjects, setloadingProjects] = useState(true);
    const [snackbar, setSnackBar] = useState({ show: false, message: '', type: 'error' });

    async function getProjects() {
        try {
            const projectsData = await ProjectsApi.getProjects();

            setProjects(projectsData);

            if (projectsData.length > 0) {
                setSelectedProject(projectsData[0]);
            }
        } catch (error) {
            console.error(error);
            setSnackBar({ ...snackbar, show: true, message: error.message });
        } finally {
            setloadingProjects(false);
        }
    }

    function closeSnackBar() {
        setSnackBar({ ...snackbar, show: false });
    }

    function onCreateNewProject(newProject) {
        setProjects([...projects, newProject]);
        setSelectedProject(newProject);
        setSnackBar({
            ...snackbar, show: true, message: 'Successfully Created', type: 'success',
        });
    }

    function onDeleteProject(project) {
        const updatedProjects = projects.filter((prjt) => prjt.id !== project.id);
        setProjects(updatedProjects);
        setSelectedProject(updatedProjects[0] || {});
        setSnackBar({
            ...snackbar, show: true, message: 'Successfully Deleted', type: 'success',
        });
    }

    function onCreateNewTask(newTask) {
        const projectIndex = projects.findIndex((project) => project.id === newTask.projectId);
        const projectsToUpdate = projects;
        projectsToUpdate[projectIndex]?.tasks.push(newTask);
        setProjects([...projectsToUpdate]);
        setSnackBar({
            ...snackbar, show: true, message: 'Successfully Created', type: 'success',
        });
    }

    function onUpdateTask(updatedTask) {
        const projectIndex = projects.findIndex((project) => project.id === updatedTask.projectId);
        const taskIndex = projects[projectIndex]?.tasks
            .findIndex((task) => task.id === updatedTask.id);

        const projectsToUpdate = projects;

        projectsToUpdate[projectIndex].tasks[taskIndex] = { ...updatedTask };

        setProjects([...projectsToUpdate]);
        setSnackBar({
            ...snackbar, show: true, message: 'Successfully Update', type: 'success',
        });
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <Container>
            <div className="home-content">
                <div className="home-content-side-menu">
                    <SideMenu
                        projects={projects}
                        onCreateProject={onCreateNewProject}
                        onClickMenu={setSelectedProject} />
                </div>
                <div className="home-content-project-detail">
                    {
                        loadingProjects && (
                            <SpinnerContainer>
                                <Spinner />
                            </SpinnerContainer>
                        )
                    }
                    {
                        projects.length === 0 && loadingProjects === false && (
                            <EmptyFeedback message='No Projects added. Click in "New Project"' />
                        )
                    }
                    {
                        projects.length > 0 && (
                            <ProjectDetail
                                project={selectedProject}
                                onDeleteProject={onDeleteProject}
                                onUpdateTask={onUpdateTask}
                                onCreateTask={onCreateNewTask} />
                        )
                    }
                </div>
            </div>
            <SnackBar
                onClose={closeSnackBar}
                message={snackbar.message}
                show={snackbar.show}
                type={snackbar.type} />
        </Container>
    );
}
