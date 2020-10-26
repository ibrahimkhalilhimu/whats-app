import React from 'react';
import './Sidevar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar, IconButton } from '@material-ui/core';
import ChatIcon  from '@material-ui/icons/Chat';
import  MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
const Sidevar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarHeader">
                <Avatar/>
                <div className="sidebarHeaderRight">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                   <ChatIcon/>
                    </IconButton>
                    <IconButton>
                   <MoreVertIcon/>
                    </IconButton>
                </div>
                </div>
                <div className="sidebarSearch">
                    <div className="sidebarSearchContainer">
                        <SearchOutlined/>
                        <input placeholder="Search or Start new Chat" type="text"/>
                    </div>
                </div>
                <div className="sidebarChats">
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>


                </div>
                </div>
           
    );
};

export default Sidevar;