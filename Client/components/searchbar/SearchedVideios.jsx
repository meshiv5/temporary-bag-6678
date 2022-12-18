import { Box, Img, Text } from "@chakra-ui/react";

export default function SearchedVideos({data}) {
  return (
      <Box >
        <Box _hover={{padding: "0px"}} p="10px">
          <Img w="100%" src={data.list} />
        </Box>
        <Box p="10px">
          <Text fontWeight="bold">Name : {data.title}</Text>
          <Text color="purple.300">Zee {data?.type?.toUpperCase()|| "Movie"}</Text>
        </Box>
      </Box>
  );
}
