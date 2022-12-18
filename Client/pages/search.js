// const axios = require("axios");
import {useEffect, useState} from "react";
import {Box, Button, Container, Flex, SimpleGrid, Text} from "@chakra-ui/react";
import Filters from "../components/searchbar/Filters";
import getSearchItems from "../utils/getSearchItems";
import SearchedVideos from "../components/searchbar/SearchedVideios";
import {useRouter} from "next/router";



export default function Search({movies, error}) {
    const router = useRouter()
    const {query} = useRouter()
  const [itemData, setItemData] = useState([...movies]||[]);
  const [page,setPage] = useState(1)
  const handlePage = (p)=>{
    setPage(page + p);
    router.push(`/search?q=${query.q}&p=${page}`)
  }
  
  const handleFilters = (x)=>{
        handleChangePage(query.q,1,x)
  }
  const handleChangePage = async(q,page,x)=>{
    const newData = await getSearchItems(q,page,x)
    console.log(newData.data)
    setItemData([...newData.data])
  }
useEffect(()=>{
handleChangePage(query.q,page)
},[page,query.q])


  if(error){
    return <Text fontSize="2xl">{error}</Text>
  }
  return (
    <Container fontFamily="sans-serif" color="white" maxW="100vw">
      <Box py="15px" borderBottom="0.5px solid grey">
        <Text fontSize="2xl">Showing results</Text>
      </Box>
      <Filters handleFilters={handleFilters} />
      <Box>
        <SimpleGrid
          columns={{base: 1, sm: 2, md: 3, lg: 5}}
          spacing={{base: 15}}
        >
          {itemData.map((ele) => (
            <SearchedVideos key={ele._id} data={ele} />
          ))}
        </SimpleGrid>
      </Box>
      <Flex w="100%" alignItems="center" justifyContent="center" gap="20px">
        <Button colorScheme="purple" onClick={() => handlePage(-1)}>
          Pre
        </Button>
        <Text fontSize="2xl">{page}</Text>
        <Button colorScheme="purple" onClick={() => handlePage(1)}>
          Next
        </Button>
      </Flex>
    </Container>
  );
}

export async function getServerSideProps({query}) {
  const {q, p = 1} = query;
  try {
    const movies = await getSearchItems(q, p);
    return {
      props: {
        movies: movies.data,
      },
    };
  } catch (e) {
    return {
      props: {
        error: e.message,
      },
    };
  }
}
