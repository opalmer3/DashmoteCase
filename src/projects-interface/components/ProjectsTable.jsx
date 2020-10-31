import './ProjectsTable.css'
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import TableRow from './TableRow';

// Import projects data
import projects from '../../models/projects';

function ProjectsTable(){
    // Search query + projects state
    const [q, setQ] = useState("");
    const [projectList, setProjectList] = useState([...projects]);

    // Updates state of query variable 
    function handleChange(event){
        const {value} = event.target;
        setQ(value);
    }

    // deletes project from project list
    function handleDelete(name){
        setProjectList(prevValues => prevValues.filter(project => project.name !== name) );
    }
    
    // filter projects according to search query and project name
    let filteredProjects = projectList.filter( project => project.name.toLowerCase().includes(q.toLowerCase()) );

    return <div className="projects-table-container">
                
                <SearchBar q={q} handleChange={handleChange} />

                <p className="projects-table-title">My Projects:</p>
                
                <div className="projects-table">
                    
                    {filteredProjects.length === 0 ? 
                        "No projects" 
                    :
                    filteredProjects.map((project, index) => <TableRow key={index} 
                                                                        project={project}
                                                                        handleDelete={handleDelete} />)
                    }
                
                </div>
            
           </div> 
}

export default ProjectsTable;