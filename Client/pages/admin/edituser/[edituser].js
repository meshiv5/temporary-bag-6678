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
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import AdminNavbar from "../../../components/adminNav";
import axios from "axios";
export default function editUser({ data }) {
  const [user, setUser] = useState({});
  const router = useRouter();
  const id = router.query.edituser;
  const getuserData = () => {
    id &&
      axios
        .get(`http://localhost:8080/user/${id}`)
        .then((userr) => setUser(userr.data))
        .catch((err) => console.log(err));
  };
  const handleSignup =async (val) => {
    try{
      const user =await axios.patch(`http://localhost:8080/user/${id}`,val);
    console.log(val);
    console.log(user.data)
    router.replace('/admin')
    }
    catch(err){
      console.log(err);
    }
  };
  useEffect(() => {
    getuserData();
  }, [id]);
  console.log(user);
  return (
    <Box>
      <AdminNavbar />
      
      <Box
        w={{ base: "90%", sm: "60%", md: "40%" }}
        m="auto"
        color="#ffffff"
        my="50px"
      >
        <Formik
          initialValues={{}}
          onSubmit={(values) => {
            handleSignup(values);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.name && touched.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    color="black"
                    type="text"
                    placeholder={user.name}
                    _hover={{
                      color: "white",
                    }}
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    color="black"
                    type="email"
                    placeholder={user.email}
                    _hover={{
                      color: "white",
                    }}
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    color="black"
                    placeholder={user.password}
                    _hover={{
                      color: "white",
                    }}
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.pic && touched.pic}>
                  <FormLabel htmlFor="pic">Picture</FormLabel>
                  <Field
                    as={Input}
                    id="pic"
                    name="pic"
                    type="text"
                    color="black"
                    placeholder={user.pic}
                    _hover={{
                      color: "white",
                    }}
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.pic}</FormErrorMessage>
                </FormControl>
                <Button
                  type="submit"
                  background={"#8230c6"}
                  color="white"
                  width="full"
                >
                  UpdateUser
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

// export async function getServerSideProps() {
//   const router = useRouter()
//   const id = router.query.edituser;

//   // Fetch data from external API
//   if(id){
//     console.log(id);
//   }
//   const ka = "a"
//   //  const res = await fetch(`http://localhost:8080/user/${id}`)
//   //  const data = await res.json()

//   // Pass data to the page via props
//   return { props: { ka } }
// }
