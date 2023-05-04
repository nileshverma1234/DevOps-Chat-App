import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

const ChatContext = createContext();

const ChatProvider = ({children}) => {
    const [selectedChat, setSelectedChat] = useState();
    const [user, setUser] = useState();
    const [chats, setChats] = useState();
    const [notification, setNotification] = useState([]);

    const history = useHistory();
    useEffect(() => {
    // console.log(localStorage.getItem("userInfo"));
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);
    return (
    <ChatContext.Provider value =  {{user, setUser, selectedChat, setSelectedChat, chats, setChats, notification, setNotification}}>
        {children}
    </ChatContext.Provider>
    );
};

export const ChatState = () => {
    return useContext(ChatContext);
};



export default ChatProvider;