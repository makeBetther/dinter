import React from 'react'

import "./chat.css";

function Chat({name, message, profilePic, timestamp, isOnline}) {
    return (
        <div className="chat">
            <div className="chatImage">
                <img className='userImage' alt='user_01' src='img/profile.jpg' />
                <div id='isOnline'>{isOnline}</div>
            </div>
            <div className="chatDetails">
                <h3>{name}</h3>
                <p>{message}</p>
            </div>
            <p className="chatTimeStamp">{timestamp}</p>
        </div>    

    )
}

export default Chat;