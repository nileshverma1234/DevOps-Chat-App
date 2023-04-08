// import React from 'react'
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import { useToast } from '@chakra-ui/react';


const Signup =()=>{
    const [show,setShown]=useState(false);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confirmpassword,setConfirmPassword]=useState();
    const [pic,setPic]=useState();
    const handleClick=()=> setShown(!show);
    const submitHandler=()=> setShown(!show);
    const [loading,setLoading]=useState(false);
    const toast = useToast() 

    const postDetails=(pics)=>{
        setLoading(true);
        if(pic === undefined){
            toast({
                title: 'Please select an image',               
                status: 'Warning',
                duration: 5000,
                isClosable: true,
                position:"bottom",
              });
              return;
        }
        if(pics.type==="image/jpeg" || pics.type==="image/png"){
            const data=new FormData();
            data.append("file",pics);
            data.append("upload_preset","chat-app");
            data.append("cloud_name","dmywuodaf");
            fetch("https://api.cloudinary.com/v1_1/dmywuodaf/image/upload",{
                method:'post',
                body:data,

            })
            .then((res)=> res.json())
            .then((data)=>{
                setPic(data.url.toString());
                setLoading(false);
            })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
            });

        }
        else{
            toast({
                title: 'Please select an image',
                status: 'Warning',
                duration: 5000,
                isClosable: true,
                position:"bottom",
              });
              setLoading(false);
              return;
        }
    };


    return(
        <VStack spacing='5px' color="black">
        <FormControl id="first-name" isRequired>
        <FormLabel> Name</FormLabel>
        <input
        placeholder="Enter your name"
        onChange={(e)=>setName(e.target.value)}
        />
        
        </FormControl>

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
        placeholder="Set your Password"
        onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide":"show"}
            </Button>
        </InputRightElement>
        </InputGroup>
       
        </FormControl>

        
        <FormControl id="confirmpassword" isRequired>
        <FormLabel> confirmpassword </FormLabel>
        <InputGroup>
        <input
        type={show ? "text":"password"}
        placeholder="Confirm your Password"
        onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide":"show"}
            </Button>
        </InputRightElement>
        </InputGroup>
       
        </FormControl>

        <FormControl id="pic">
            <FormLabel>Upload your picture</FormLabel>
        <input
        type="file"
        p={1.5}
        accept="image/*"
        onChange={(e)=>postDetails(e.target.files[0])}
        />
        </FormControl>

        <Button
        // colorScheme="red"
        width="100%"
        style={{maeginTop:15}}
        onClick={submitHandler}
        isLoading={loading}
        >
            Sign Up
        </Button>

        </VStack>
    )

}

export default Signup;