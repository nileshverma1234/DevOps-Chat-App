import React from 'react'
import { VStack,FormControl,FormLabel,InputGroup, InputRightElement,Button, } from '@chakra-ui/react';
import { useState } from "react";

const Login =()=>{
    const [show,setShown]=useState(false);
    
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    
    const handleClick=()=> setShown(!show);
    const submitHandler=()=> setShown(!show);

    
    return(
        <VStack spacing='5px' color="black">
       

        <FormControl id="Email" isRequired>
        <FormLabel> Email </FormLabel>
        <input
        placeholder="Enter your Email"
        onChange={(e)=>setEmail(e.target.value)}
        />
        
        </FormControl>

        <FormControl id="password" isRequired>
        <FormLabel> password </FormLabel>
        <InputGroup>
        <input
        type={show ? "text":"password"}
        placeholder="Enter your Password"
        onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide":"show"}
            </Button>
        </InputRightElement>
        </InputGroup>
       
        </FormControl>

        
       

        <Button
        colorScheme="blue"
        width="100%"
        style={{marginTop:15}}
        onClick={submitHandler}
        >
            Login
        </Button>

        </VStack>
    )
}

export default Login