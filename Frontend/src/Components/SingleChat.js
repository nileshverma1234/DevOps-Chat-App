import React from 'react'
import { ChatState } from "../Context/ChatProvider"

const SingleChat = ({fetchAgain, setFetchAgain}) => {

   const { user, selectedChat, setSelectedChat} = ChatState(); 
  return (
    <div>
        Singlechat
    </div>
  )
}

export default SingleChat;