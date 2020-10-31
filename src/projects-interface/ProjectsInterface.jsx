import './ProjectsInterface.css'
import React from 'react';
import GreetingBanner from './components/GreetingBanner';
import ProjectsTable from './components/ProjectsTable';

function ProjectsInterface(){
    return <div className="projects-interface-container">
                <GreetingBanner />
                <ProjectsTable />
            </div>
}

export default ProjectsInterface;