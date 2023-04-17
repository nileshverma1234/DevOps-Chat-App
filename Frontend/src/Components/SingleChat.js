import { Box, Text} from "@chakra-ui/layout"
import React from 'react'
import { ChatState } from "../Context/ChatProvider"

const SingleChat = ({fetchAgain, setFetchAgain}) => {

   const { user, selectedChat, setSelectedChat} = ChatState(); 
   return (
      <>
        {selectedChat ? (
            <></>
        ) : (
            <Box display="flex" alignItems="center" justifyContent="center" h="100%">
                <Text fontSize="3x1" pb={3} fontFamily="Work Sans">
                    Click on a useer to start chatting
                </Text>

            </Box>

        )}
      </>
   );
}

export default SingleChat;