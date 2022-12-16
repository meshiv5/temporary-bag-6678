import {
  Box,
  Flex,
  Text,
  Avatar,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Image,
  Button
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import Zee5logo from "./navbar/ZeeLogo";
export default function AdminNavbar({ adminDetails }) {
  const router = useRouter();
  const  handleLogout=()=>{
      cookie.remove("TOKEN");
      localStorage.removeItem("token");
      router.replace("/signin")
  }
  return (
    <Box
      fontWeight="bold"
      color="white"
      h="70px"
      w="100%"
      backgroundColor={"#160c2e"}
    >
      <Flex
        w="80%"
        m="auto"
        justifyContent={"space-between"}
        alignItems="center"
        backgroundColor={"#160c2e"}
      >
        <Text backgroundColor={"#160c2e"}>
          <Link href="/admin"><Zee5logo/></Link>
        </Text>

        <Flex alignItems="center" backgroundColor={"#160c2e"}>
          <Text mx="30px" backgroundColor={"#160c2e"}>
            {adminDetails.name}
          </Text>
          <Popover>
            <PopoverTrigger>
              <Avatar
                name={adminDetails.name}
                mt="10px"
                style={{ backgroundColor: "#160c2e" }}
                src={adminDetails.pic}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>{adminDetails.name}</PopoverHeader>
              <PopoverBody>
                <Box color={"#FFFFFF"}>
                  <Image src={adminDetails.pic} alt={adminDetails._id} />
                  <Text>
                    <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                    {adminDetails.email}
                  </Text>
                  <Text>
                    <span style={{ fontWeight: "bold" }}>Role:</span>{" "}
                    {adminDetails.user}
                  </Text>
                  <Button onClick={handleLogout} colorScheme="purple">Logout</Button>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </Box>
  );
}
