import React from 'react'
import axios from 'axios'

const ChatPage = ()=> {

    const fetchChats=async()=> {
        const data= await axios.get('/api/chat')
    }

return (
<div>
Chat page
</div>
)
}
export default ChatPage;