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
          <a
            href="https://play.google.com/store/apps/details?id=com.graymatrix.did&pli=1"
            target="_blank"
          >
            <Img src="https://www.zee5.com/images/play_store.png?ver=2.52.65" />
          </a>
        </Box>
        <Box>
          <a
            target="_blank"
            href="https://apps.apple.com/in/app/zee5-shows-live-tv-movies/id743691886"
          >
            <Img src="https://www.zee5.com/images/app_store.png?ver=2.52.65" />
          </a>
        </Box>
      </Flex>
      <Flex gap={{base: "22%", md: 10}}>
        <Box>
          <a target="_blank" href="https://www.facebook.com/ZEE5/">
            <AiFillFacebook style={{width: "30px", height: "50px"}} />
          </a>
        </Box>
        <Box>
          <a href="https://www.instagram.com/zee5/" target="_blank">
            <AiOutlineInstagram style={{width: "30px", height: "50px"}} />
          </a>
        </Box>
        <Box>
          <a href="https://twitter.com/zee5india" target="_blank">
            <AiOutlineTwitter style={{width: "30px", height: "50px"}} />
          </a>
        </Box>
        <Box>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCXOgAl4w-FQero1ERbGHpXQ"
          >
            <AiFillYoutube style={{width: "30px", height: "50px"}} />
          </a>
        </Box>
      </Flex>
    </Box>
  );
}
