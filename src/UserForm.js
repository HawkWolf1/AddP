import React from 'react'
import './UserForm.css';

function UserForm(){
    return(
        <div>
            <label>
                USERNAME:
                <input type='text'/>
            </label>
            <label>
                AGE:
                <input type='number'/>
            </label>
        </div>
    )
}


export default UserForm