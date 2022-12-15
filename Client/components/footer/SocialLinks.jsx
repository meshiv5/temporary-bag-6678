import {Box, Flex, Img} from "@chakra-ui/react";
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
export default function SocialLinks() {
  return (
    <Box
      display={{base: "grid", md: "flex"}}
      w="full"
      px={{base: "10px", lg: "100px"}}
      justifyContent={{base: "center", md: "space-between"}}
    >
      <Flex alignItems="center">
        <Box>Download Apps</Box>
        <Box mx="20px">
          <Img src="https://www.zee5.com/images/play_store.png?ver=2.52.65" />
        </Box>
        <Box>
          <Img src="https://www.zee5.com/images/app_store.png?ver=2.52.65" />
        </Box>
      </Flex>
      <Flex gap={{base:"22%",md:10}}>
        <Box>
          <AiFillFacebook style={{width: "30px", height: "50px"}} />
        </Box>
        <Box>
          <AiOutlineInstagram style={{width: "30px", height: "50px"}} />
        </Box>
        <Box>
          <AiOutlineTwitter style={{width: "30px", height: "50px"}} />
        </Box>
        <Box>
          <AiFillYoutube style={{width: "30px", height: "50px"}} />
        </Box>
      </Flex>
    </Box>
  );
}
