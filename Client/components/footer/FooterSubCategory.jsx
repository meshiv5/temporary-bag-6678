import {Box, Flex, Text} from "@chakra-ui/react";
import Link from "next/link";
import {
  gamesNews,
  popularTvShows,
  popularWebSeries,
  populatLiveChannels,
  premiumMovies,
  topCelebrities,
} from "../data";

export default function FooterSubCategory() {
  return (
    <Flex px="100px" py="50px" lineHeight="16px" justifyContent="space-between">
      <Box>
        <Text fontSize="sm">Popular TV Shows</Text>
        {popularTvShows.map((ele) => (
          <Text color="grey" key={ele + "afcbb"} _hover={{color: "purple"}} fontSize="sm">
            <Link href="/">{ele}</Link>
          </Text>
        ))}
      </Box>
      <Box>
        <Text fontSize="sm">Premium Movies</Text>
        {premiumMovies.map((ele) => (
          <Text color="grey" key={ele + "afcbb"} _hover={{color: "purple"}} fontSize="sm">
            <Link href="/">{ele}</Link>
          </Text>
        ))}
      </Box>
      <Box>
        <Text fontSize="sm">Popular LIVE TV Channels</Text>
        {populatLiveChannels.map((ele) => (
          <Text color="grey" key={ele + "afcbb"} _hover={{color: "purple"}} fontSize="sm">
            <Link href="/">{ele}</Link>
          </Text>
        ))}
      </Box>
      <Box>
        <Text fontSize="sm">Popular Web Series</Text>
        {popularWebSeries.map((ele) => (
          <Text color="grey" key={ele + "afcbb"} _hover={{color: "purple"}} fontSize="sm">
            <Link href="/">{ele}</Link>
          </Text>
        ))}
      </Box>
      <Box>
        <Text fontSize="sm">Bollywood Top Celibrities</Text>
        {topCelebrities.map((ele) => (
          <Text color="grey" key={ele + "afcbb"} _hover={{color: "purple"}} fontSize="sm">
            <Link href="/">{ele}</Link>
          </Text>
        ))}
      </Box>
      <Box>
        <Text fontSize="sm">Games & News</Text>
        {gamesNews.map((ele) => (
          <Text color="grey" key={ele + "afcbb"} _hover={{color: "purple"}} fontSize="sm">
            <Link href="/">{ele}</Link>
          </Text>
        ))}
      </Box>
    </Flex>
  );
}
