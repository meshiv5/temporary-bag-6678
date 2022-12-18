import { Box, Img, Text } from "@chakra-ui/react";
import {useRouter} from "next/router";

export default function SearchedVideos({data}) {
  const router = useRouter()
  return (
      <Box onClick={()=>router.push(`/homepage/${data.id}`)}>
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
