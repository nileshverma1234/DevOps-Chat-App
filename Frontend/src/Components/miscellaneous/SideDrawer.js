import React from 'react';
import { Box, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { Button } from "@chakra-ui/button";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import { ChatState } from "../../Context/ChatProvider";
import { useHistory } from "react-router-dom";


const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  
  const {user} = ChatState();
  const history = useHistory();
  
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };


  return (
    <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
      <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
        <Button variant="ghost" >
          <i class="fa-solid fa-magnifying-glass"></i>
          <Text d={{ base: "none", md: "flex" }} px={4}>
            Search User
          </Text>
        </Button>
      </Tooltip>

      <Text fontSize="2xl" fontFamily="Work sans">
        Talk-a-Tive
      </Text>

      <div>
        <Menu>
          <MenuButton p={1}>
            <BellIcon fontSize="2xl" m={1} />
          </MenuButton>

        </Menu>
        <Menu>
          <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
            <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
          </MenuButton>
          <MenuList>
            <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>{" "}
            </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </Box>
  )
};

export default SideDrawer;