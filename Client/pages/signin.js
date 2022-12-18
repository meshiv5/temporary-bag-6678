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
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { Field, Form, Formik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export default function Signup() {
  const toast = useToast();
  const router = useRouter();

  const handleSignin = async (val) => {
    console.log(val);
    try {
      let res = await axios.post(`https://zee5.cyclic.app/user/signin`, val);
     let data = res.data;
     console.log(res.data);
      localStorage.setItem("token",JSON.stringify(data));
      toast({
        title: "Redirecting.....Homepage",
        description: "user Successfully loged in",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      const decoded = jwt_decode(data);
      if (decoded.user === "admin") {
        router.replace("/admin");
      } else {
        router.replace("/");
      }
    } catch (err) {
      toast({
        title: "Please Enter Correct Details",
        description: "Something went wrong.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(err);
    }
  };
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token")) || "";
    if (token.length > 1) {
      router.replace("/homepage");
    }
  }, []);
  return (
    <Box mb="50px" color="#ffffff">
      <Text textAlign={"right"} mr="30px" mt="30px" fontWeight="bold">
        <Link href="/">X</Link>
      </Text>
      <Box
        w={{ base: "80%", sm: "60%", md: "40%" }}
        textAlign={"center"}
        m="auto"
      >
        <Text fontSize={"2xl"} fontWeight="bold">
          Login to ZEE5
        </Text>
        <Text w={{ base: "80%", sm: "60%" }} m="auto" my={"20px"}>
          Login to continue enjoying uninterrupted video and personalised
          experience.
        </Text>

        <Flex mt="20px" justifyContent={"center"}>
          <Link href={`https://zee5.cyclic.app/auth/google`}>
            <FcGoogle
              style={{
                marginLeft: "20px",
                marginRight: "30px",
                fontSize: "40px",
              }}
            />
          </Link>
          <Link href="https://zee5.cyclic.app/auth/github">
            <FaGithub
              style={{
                marginRight: "30px",
                fontSize: "40px",
                color: "#ffffff",
              }}
            />
          </Link>
        </Flex>

        <Text
          w="60px"
          m="auto"
          pr="10px"
          my="20px"
          fontWeight={"bold"}
          fontSize="30px"
        >
          OR
        </Text>

        <Box w="80%" m="auto">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              handleSignin(values);
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      color="black"
                      type="email"
                      _hover={{
                        color: "white",
                      }}
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
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>{" "}
                    <Field
                      as={Input}
                      id="password"
                      color="black"
                      name="password"
                      type="password"
                      _hover={{
                        color: "white",
                      }}
                      variant="filled"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    background={"#8230c6"}
                    color="white"
                    width="full"
                  >
                    Signin
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
      <Text m="20px" textAlign={"center"}>
        If You're not registred Please{" "}
        <Link color="lightblue" href="/signup">
           Signup
        </Link>
      </Text>
    </Box>
  );
}
