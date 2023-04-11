import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import ChatBox from "../Components/miscellaneous/ChatBox";
import MyChats from "../Components/miscellaneous/MyChats";

const ChatPage = ()=> {
    const { user } = ChatState();

    return ( 
    <div style={{ width: "100%"}}>
        {user && <SideDrawer/>}
        <Box display="flex" justifyContent="space-between" w="100%" h = "91.5vh" p="10px">
            {user && <MyChats/>}
            {user && <ChatBox/>}
        </Box>

    </div>

    );
};
export default ChatPage;