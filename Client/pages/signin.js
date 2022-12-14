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
import { Field, Form, Formik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTwitter } from "react-icons/fa";
export default function Signup() {
  const toast = useToast();
  const handleSignup = async (val) => {
    try {
      let data = await axios.post("http://localhost:8080/user/signin", val);
      console.log(data.data);
      localStorage.setItem("token",JSON.stringify(data.data))
      toast({
        title: "Redirecting.....",
        description: "user Successfully loged in",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: err.response.data,
        description: "Something went wrong.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(err.response.data);
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
        <Text>Login to ZEE5</Text>
        <Text>
          Login to continue enjoying uninterrupted video and personalised
          experience.
        </Text>

        <Flex mt="20px" justifyContent={"center"}>
          <Link href="http://localhost:8080/auth/google"><FcGoogle style={{ marginRight: "30px", fontSize: "50px" }} /></Link>
          <FaGithub style={{ marginRight: "30px", fontSize: "50px" }} />
          <FaTwitter style={{ marginRight: "30px", fontSize: "50px" }} />
        </Flex>

        <Text  w="60px" m="auto" my="20px"fontWeight={"bold"} fontSize="30px" border="2px solid black" borderRadius={"50%"}>OR</Text>

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
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
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
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme={"purple"}
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
    </Box>
  );
}
