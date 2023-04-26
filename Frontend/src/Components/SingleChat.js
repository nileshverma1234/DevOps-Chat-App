import { Box, Text} from "@chakra-ui/layout"
import { IconButton, Spinner, useToast } from '@chakra-ui/react'
import { ArrowBackIcon } from "@chakra-ui/icons";
import React from 'react';
import { ChatState } from "../Context/ChatProvider";
import { getSender, getSenderFull } from "../config/ChatLogics";
import ProfileModal from "./miscellaneous/ProfileModal";
import { FormControl } from "@chakra-ui/form-control";

const SingleChat = ({fetchAgain, setFetchAgain}) => {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [socketConnected, setSocketConnected] = useState(false);
    const [typing, setTyping] = useState(false);
    const [istyping, setIsTyping] = useState(false);
    const toast = useToast(); 

   const { user, selectedChat, setSelectedChat} = ChatState(); 
   return (
      <>
        {selectedChat ? (
            <>
                <Text
                    fontSize={{ base: "28px", md: "30px" }}
                    pb={3}
                    px={2}
                    w="100%"
                    fontFamily="Work sans"
                    display="flex"
                    justifyContent={{ base: "space-between" }}
                    alignItems="center"
                >
                <IconButton
                    display={{ base: "flex", md: "none" }}
                    icon={<ArrowBackIcon />}
                    onClick={() => setSelectedChat("")}
                />
                {!selectedChat.isGroupChat ? (
                    <>
                        {getSender(user, selectedChat.users)}
                        <ProfileModal user={getSenderFull(user, selectedChat.users)}/>
                    </>
                ) : (
                    <>{selectedChat.chatName.toUpperCase()}
                        {/* <UpdateGroupChatModal
                            fetchAgain={fetchAgain}
                            setFetchAgain={setFetchAgain} 
                            /> */}
                  
                    </>
                )}
                </Text>

                <Box  
                    display="flex"
                    flexDir="column"
                    justifyContent="flex-end"
                    p={3}
                    bg="#E8E8E8"
                    w="100%"
                    h="100%"
                    borderRadius="lg"
                    overflowY="hidden"
                
                >
                    {loading ? (
                        <Spinner
                        size="xl"
                        w={20}
                        h={20}
                        alignSelf="center"
                        margin="auto"
                        />
                    ):(
                        <div>
                            {/* message */}
                        </div>
                    )}

                    <FormControl>
                        
                    </FormControl>
                </Box>
            </>
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