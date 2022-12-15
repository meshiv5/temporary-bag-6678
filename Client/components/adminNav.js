import { Box, Flex, Text,Avatar, Link } from "@chakra-ui/react";

export default function AdminNavbar() {
    return (
        <Box fontWeight="bold" color="white" h="70px" w="100%" backgroundColor={"#160c2e"}>
           <Flex  w="80%" m="auto" justifyContent={"space-between"} alignItems="center" backgroundColor={"#160c2e"}>
            <Text backgroundColor={"#160c2e"}><Link href="/admin">Logo</Link></Text>
            <Flex>
                <Flex  backgroundColor={"#160c2e"} alignItems="center">
                    <Text mr="30px" backgroundColor={"#160c2e"}>Users</Text>
                    <Text backgroundColor={"#160c2e"}>Videos</Text>
                </Flex>
                <Flex alignItems="center" backgroundColor={"#160c2e"}>
                    <Text mx="30px" backgroundColor={"#160c2e"}>User</Text>
                    <Avatar mt="10px" style={{ backgroundColor:"#160c2e"}}/>
                </Flex>
            </Flex>
           </Flex>
        
        </Box>
    )
}