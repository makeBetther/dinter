import React from 'react'

import "./match.css";

function match({name}) {
    return (

        <div className="userDetails">
            <img className='userImage' alt='user_01' src='img/profile.jpg' />
            <h3>{name}</h3>
        </div>

    )
}

export default match;