import {
  Box,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Flex,
  VStack,
  useToast,
  Link
} from "@chakra-ui/react";
import axios from "axios"
import { Field, Form, Formik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTwitter } from "react-icons/fa";
export default function Signup() {
  const toast = useToast();
  const handleSignup = async(val) => {
    console.log(val)
    try{
      let res  = await axios.post("http://localhost:8080/user/signup",val)
      console.log(res.data);
      toast({
        title: res.data,
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    catch(err){
      toast({
        title: err.response.data,
        description: "Something went wrong.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      console.log(err.response.data)
    }
  };
  return (
    <Box>
      <Text textAlign={"right"} mr="30px" mt="30px" fontWeight="bold">
       <Link href="/">X</Link>
      </Text>
      <Box
        w={{ base: "80%", sm: "60%", md: "40%" }}
        textAlign={"center"}
        m="auto"
       
      >
        <Text>Create a new account</Text>
        <Text>
          Create an account to continue enjoying uninterrupted video and
          personalised experience
        </Text>

        <Flex mt="20px" justifyContent={"center"}>
          <Link href="http://localhost:8080/auth/google"><FcGoogle style={{ marginRight: "30px", fontSize: "40px" }} /></Link>
          <FaGithub style={{ marginRight: "30px", fontSize: "40px" }} />
          <FaTwitter style={{ marginRight: "30px", fontSize: "40px" }} />
        </Flex>
        <Text  w="60px" m="auto" my="20px"fontWeight={"bold"} fontSize="30px" border="2px solid black" borderRadius={"50%"}>OR</Text>

        <Box w="80%" m="auto">
        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
            pic:""
          }}
          onSubmit={(values) => {
            handleSignup(values)
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
              <FormControl isInvalid={!!errors.name && touched.name}>
                    
                    <FormLabel  htmlFor="name">Name</FormLabel>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      type="text"
                      variant="filled"
                      validate={(value) => {
                        let error;
  
                        if (value.length <4) {
                          error = "Enter the Name";
                        }
  
                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                <FormControl isInvalid={!!errors.email && touched.email}>
                    
                  <FormLabel    htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    validate={(value) => {
                        let error;
  
                        if (value.length <= 4) {
                          error = "Enter the Email Address";
                        }
  
                        return error;
                      }}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel    htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length <= 4) {
                        error = "Password must contain at least 5 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.pic && touched.pic}>
                    
                    <FormLabel  htmlFor="pic">Picture</FormLabel>
                    <Field
                      as={Input}
                      id="pic"
                      name="pic"
                      type="text"
                      variant="filled"
                      placeholder="Enter profile pic url here"
                    />
                    <FormErrorMessage>{errors.pic}</FormErrorMessage>
                  </FormControl>
                <Button type="submit"colorScheme={"purple"} color="white" width="full">
                  Signup
                </Button>
              </VStack>
            </form>
          )}
        </Formik> 
        </Box>
      </Box>
    </Box>
  );
}
