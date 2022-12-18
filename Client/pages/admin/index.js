import {
  Image,
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import axios from "axios";
import  jwt from "jsonwebtoken";
import Navbar from "../../components/adminNav";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function admin() {
  const router = useRouter();
  const toast = useToast();
  const [userData, setUserdata] = useState({});
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleUser = (user) => {
    setUserdata(user);
  };
  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios
        .get(`https://zee5.cyclic.app/user`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };
  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`https://zee5.cyclic.app/user/${id}`);
      toast({
        title: "User Deleted Successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      console.log(res.data);
    } catch (e) {
      console.log(e.message);
    }
    getData();
  };

  useEffect(() => {
    let toke = JSON.parse(localStorage.getItem("token"))||"";
    if (toke.length > 1) {
      const details = jwt.decode(toke);
      console.log(details)
      if (details.user==="user" || details.user!=="admin") router.replace("/");
      setAdmin(details)
       
    }else{
      router.replace("/");
    }
    getData();
  }, []);
  console.log(data);
  console.log(userData);

  if(Loading) return <h1>Loading...</h1>
  return (
    <Box>
      <Navbar adminDetails={admin} />

      <Box color={"white"} w={{ base: "90%", sm: "80%" }} m="auto">
        <Text fontSize={"4xl"} color="cyan">Users</Text>
        <TableContainer>
          <Table variant="striped" colorScheme="grey">
            <Thead>
              <Tr>
                <Th>No.</Th>
                <Th>Id</Th>
                <Th>User</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data.map((user, i) => {
                  return (
                    <Tr key={user._id}>
                      <Td>{i + 1}</Td>
                      <Td
                        cursor={"pointer"}
                        onClick={() => {
                          onOpen();
                          handleUser(user);
                        }}
                      >
                        <Flex>
                          {" "}
                          <Text mr="5px">{user._id}</Text>
                          <BiLinkExternal />
                        </Flex>
                      </Td>
                      <Td>{user.name}</Td>
                      <Td>
                        <Link href={`/admin/edituser/${user._id}`}>Edit</Link>
                      </Td>
                      <Td
                        onClick={() => {
                          handleDelete(user._id);
                        }}
                      >
                        <Link>Delete</Link>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text color={"#ffffff"}>{userData.name}</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box color={"#FFFFFF"}>
                <Image src={userData.pic} alt={userData._id} />

                <Text>
                  <span style={{ fontWeight: "bold" }}>Id:</span> {userData._id}
                </Text>
                <Text>
                  <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                  {userData.email}
                </Text>
                <Text>
                  <span style={{ fontWeight: "bold" }}>Password:</span>{" "}
                  {userData.password}
                </Text>

                <Text>
                  <span style={{ fontWeight: "bold" }}>Role:</span>{" "}
                  {userData.user}
                </Text>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}

// export async function getServerSideProps() {
//   const res = await axios.get(`https://zee5.cyclic.app/user`);
//   const data = res.data;
//   return { props: { data } }
// }