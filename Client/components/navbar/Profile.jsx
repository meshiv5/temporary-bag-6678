import {Avatar, Button, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, WrapItem} from "@chakra-ui/react";
import { useEffect } from "react";
import jwt from "jsonwebtoken"
import { useState } from "react";
export default function Profile({handleAuth}) {
    const [details,setDetails] = useState({name:"",email:"",pic:""})
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token"))
        const details = jwt.decode(token)
        setDetails(details)
    },[])
    const handleClick =()=>{
        localStorage.removeItem("token");
        handleAuth()
    }
  return (
    <Popover>
      <PopoverTrigger>
        <Button w="40px" borderRadius="50%">
          <WrapItem>
            <Avatar name="Dan Abrahmov" src={details.pic}/>
          </WrapItem>
        </Button>
      </PopoverTrigger>
      <PopoverContent width="auto">
        <PopoverCloseButton />
        <PopoverBody lineHeight="50px" px="40px" textAlign="center">
          <Text>Name : {details.name}</Text>
          <Text>Email : {details.email}</Text>
          <Button onClick={handleClick} colorScheme="purple">Logout</Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
