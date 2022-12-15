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
import { FaGithub, FaTwitter } from "react-icons/fa";
export default function Signup() {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem('token')
    let bag = "";
    for(let i=0;i<item.length;i++){
      if(i===0 || i === item.length-1){
        continue;
      }
      else bag+=item[i];
    }
    // console.log(bag);
    var decoded = jwt_decode(bag);
console.log(decoded);
  }


  const toast = useToast();
  const router = useRouter();
  const handleSignup = async (val) => {
    console.log(val);
    try {
      let data = await axios.post("http://localhost:8080/user/signin", val);
      console.log(data.data);
      localStorage.setItem("token", JSON.stringify(data.data));
      toast({
        title: "Redirecting.....Homepage",
        description: "user Successfully loged in",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      router.replace("/");
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
  return (
    <Box mb="50px" color="#ffffff">
      <Text textAlign={"right"} mr="30px" mt="30px" fontWeight="bold">
        <Link href="/">X</Link>
      </Text>
      <Box
        w={{base: "80%", sm: "60%", md: "40%"}}
        textAlign={"center"}
        m="auto"
      >
        <Text fontSize={"2xl"} fontWeight="bold">
          Login to ZEE5
        </Text>
        <Text w={{base: "80%", sm: "60%"}} m="auto" my={"20px"}>
          Login to continue enjoying uninterrupted video and personalised
          experience.
        </Text>

        <Flex mt="20px" justifyContent={"center"}>
          <Link href="http://localhost:8080/auth/google">
            <FcGoogle
              style={{
                marginLeft: "20px",
                marginRight: "30px",
                fontSize: "40px",
              }}
            />
          </Link>
          <Link href="http://localhost:8080/auth/github">
            <FaGithub
              style={{
                marginRight: "30px",
                fontSize: "40px",
                color: "#ffffff",
              }}
            />
          </Link>
          <FaTwitter
            style={{ marginRight: "30px", fontSize: "40px", color: "#00acee" }}
          />
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
              handleSignup(values);
            }}
          >
            {({handleSubmit, errors, touched}) => (
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
                    <FormLabel htmlFor="password">Password</FormLabel>                    <Field
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
      <Text m="20px" textAlign={"center"}>If You're not registred Please <Link color="lightblue" href="/signup">Signup</Link></Text>
    </Box>
  );
}


