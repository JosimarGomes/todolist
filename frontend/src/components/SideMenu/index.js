import PropTypes from 'prop-types';
import { useState } from 'react';

import { Button, Modal } from 'components/Shared';
import { Assignment, Add } from 'components/Shared/Icons';
import ProjectForm from 'components/Projects/Form';
import MenuItem from './MenuItem';

import './style.css';

export default function SideMenu({ projects, onClickMenu, onCreateProject }) {
    const [showForm, setShowForm] = useState(false);

    function toggleNewProjectForm() {
        const toggle = !showForm;
        setShowForm(toggle);
    }

    async function afterCreateProject(projectCreated) {
        setShowForm(false);
        onCreateProject(projectCreated);
    }

    return (
        <div className="side-menu-container">
            <div className="side-menu-content">
                <h1 className="side-menu-title"><Assignment /> Projects</h1>
                <div className="side-menu-items-container">
                    {
                        projects.map((project) => (
                            <MenuItem
                                key={project.id}
                                title={project.name}
                                onClick={(() => onClickMenu(project))} />
                        ))
                    }
                </div>
            </div>
            <Button onClick={toggleNewProjectForm} className="side-menu-button" kind="primary">
                <Add /> New Project
            </Button>
            <Modal show={showForm} onClose={toggleNewProjectForm} title="New Project">
                <ProjectForm afterSubmit={afterCreateProject} />
            </Modal>
        </div>
    );
}

SideMenu.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number,
    })),
    onClickMenu: PropTypes.func,
    onCreateProject: PropTypes.func,
};
