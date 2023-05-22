import React from "react";
import Chat from "./chat";

import './chatList.css';

function chatList() {
    return (
        <div className="chats">
            <Chat />
            <Chat
                isOnline={"..."}
                profilePic={"..."}
                name="Mark"
                message="Yo whats up!"
                timestamp="40 seconds ago"
            />
            <Chat
                name="Mark"
                message="Yo whats up!"
                timestamp="40 seconds ago"
                profilePic="..."
            />
            <Chat
                name="Mark"
                message="Yo whats up!"
                timestamp="40 seconds ago"
                profilePic="..."
            />
            <Chat
                name="Mark"
                message="Yo whats up!"
                timestamp="40 seconds ago"
                profilePic="..."
            />
        </div>
    )
}

export default chatList; 