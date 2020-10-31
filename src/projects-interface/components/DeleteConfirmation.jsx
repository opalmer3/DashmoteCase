import './DeleteConfirmation.css'
import React from 'react';

// Import icons
import CheckCircle from '@material-ui/icons/CheckCircle';
import Cancel from '@material-ui/icons/Cancel';


function DeleteConfirmation({remove, setRemove, handleDelete, name}){

    // delete confirmation window slides into view when remove is true 
    return <div style={ remove ? {marginLeft: 0} : {} }className="delete-confirmation">
            <div className="confirmation-content">

                <div className="confirmation-message">Are you sure you want to delete {name}?</div>

                <div className="confirmation-buttons">
                    {/* hide confirmation window on click */}
                    <Cancel onClick={ ()=>{setRemove(false); } } className="fill-red" fontSize="large" />
                    {/* delete project on click */}
                    <CheckCircle onClick={ ()=> { 
                                                    setRemove(false); 
                                                    // Give time for transition to finish before deleting
                                                    setTimeout(()=>{ handleDelete(name);  }, 500);
                                                } } 
                                className="fill-green" fontSize="large" />
                </div>
                
            </div>

</div>
}

export default DeleteConfirmation;