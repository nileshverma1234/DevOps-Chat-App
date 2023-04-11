import React from "react" ;
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container,Box,Text,Tabs,TabList,Tab,TabPanel,TabPanels } from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
const Homepage = ()=> {
    const history = useHistory();
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        
        if(!userInfo) {
            history.push("/chats");
        }
    }, [history]);
    return <Container maxW='xl' centerContent>
        <Box
        d='flex'
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        >
            <Text fontsize="4xl" fontFamily="work-sans" color="black"> 
                Chat Application

            </Text>

        </Box>
        <Box
        bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px"
        >
            <Tabs variant='soft-rounded'>
  <TabList>
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel> <Login/> </TabPanel>
    <TabPanel> <Signup/>     </TabPanel>
  </TabPanels>
</Tabs>

        </Box>
    </Container>;
};


export default Homepage;