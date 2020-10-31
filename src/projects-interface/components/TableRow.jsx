import './TableRow.css'
import React, { useState } from 'react';
import DeleteConfirmation from './DeleteConfirmation';

function TableRow({project, handleDelete}){
    // State for hiding / showing delete confirmation
    const [remove, setRemove] = useState(false);

    // color map based on category
    const categoryColor = {C: '#2A8FF7', D: '#5ECD75', F: '#B37FEB'}
    const categoryBackground = {C: '#D1E8FC', D: '#CCF5E3', F: '#F0E5FB'}
    // category styles 
    const colorCodeStyle = {background: categoryColor[project.category]}
    const categoryStyle = {background: categoryBackground[project.category], color: categoryColor[project.category]};

    return <div className="table-row">
                <span style={ colorCodeStyle }className="project-color-code"></span>
                
                <span className="project-category">
                    <span style={ categoryStyle }className="category">
                        <span className="category-content">{project.category}</span>
                    </span>
                </span>

                <span className="project-name">{project.name}</span>

                <span className="project-users">{project.users} users</span>
                
                <span className="project-dashboards">
                    <span className="dashboards-inner">{project.dashboards} dashboards</span>
                </span>
                
                <span className="project-delete">
                    {/* On click of delete show confirmation window */}
                    <span onClick={ ()=>{setRemove(true); } }className="delete-button">Delete</span>
                </span>
                
                <DeleteConfirmation name={project.name} 
                                    remove={remove} 
                                    setRemove={setRemove} 
                                    handleDelete={handleDelete} />

           </div> 
}

export default TableRow;