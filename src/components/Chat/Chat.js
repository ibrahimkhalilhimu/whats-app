import { Avatar,IconButton } from '@material-ui/core';
import { SearchOutlined,MoreVert,AttachFile} from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import React from 'react';
import './Chat.css'

const Chat = () => {
    return (
        <div className="chat">
            <div className="chatHeader">
                <Avatar/>
                <div className="chatHeaderInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chatHeaderRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chatBody">
    <p className="chatMessage">
        <span className="chatName">Sonny</span> This is a message <span className="chatTimestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chatMessage chatReciever">
        <span className="chatName">Sonny</span> This is a message <span className="chatTimestamp">{new Date().toUTCString()}</span>
        </p>
            </div>
        <div className="chatFooter">
            <InsertEmoticonIcon/>
        <form>
            <input type="text" placeholder="Type a message"/>
            <button type="submit">Send a message</button>
        </form>
        <MicIcon/>
        </div>

        </div>
    );
};

export default Chat;