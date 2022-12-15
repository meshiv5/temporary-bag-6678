import {
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
import Navbar from "../../components/adminNav";
import { useState, useEffect } from "react";
export default function admin() {
  const toast = useToast();
  const [userData, setUserdata] = useState({});
  const [data, setData] = useState([]);
  const [state, setState] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleUser = (user) => {
    // console.log(user);
    setUserdata(user);
  };
  const getData = async () => {
    try {
      const res = await axios
        .get(`http://localhost:8080/user`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err.message);
    }
    
  };
  const handleDelete = async (id) => {
    setState(!state);
    try {
      let res = await axios.delete(`http://localhost:8080/user/${id}`);
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
  };

  useEffect(() => {
    getData()
  }, [state]);
  console.log(data);
  console.log(userData);
  return (
    <Box>
      <Navbar />

      <Box color={"white"} w={{ base: "90%", sm: "80%" }} m="auto">
        <Text>User</Text>
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
              {data && data.map((user, i) => {
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
                  <span style={{ fontWeight: "bold" }}>Picture:</span>{" "}
                  {userData.pic}
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
