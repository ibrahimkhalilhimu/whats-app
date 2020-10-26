import { Avatar } from '@material-ui/core';
import React from 'react';
import './sidebarChat.css'

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChatInfo">
                <h2>Room name</h2>
                <p>This is a last message</p>
            </div>
        </div>
    );
};

export default SidebarChat;