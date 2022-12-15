import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  popularTvShows,
  popularWebSeries,
  populatLiveChannels,
  premiumMovies,
  topCelebrities,
  gamesNews
} from "../data";
export default function FooterSmallCat() {
  return (
    <Accordion border="0 solid grey" my="20px" allowMultiple>
      <AccordionItem px={10}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Popular TV Shows
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <SimpleGrid columns={2}>
          {popularTvShows.map((ele) => (
            <AccordionPanel color="grey" key={ele+"dbhscjnd"} _hover={{color: "purple"}} py="0px">
              <Link href="/">{ele}</Link>
            </AccordionPanel>
          ))}
        </SimpleGrid>
      </AccordionItem>
      <AccordionItem px={10}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Premium Movies
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <SimpleGrid columns={2}>
          {premiumMovies.map((ele) => (
            <AccordionPanel color="grey" key={ele+"dbhscjnd"} _hover={{color: "purple"}} py={0}>
              <Link href="/">{ele}</Link>
            </AccordionPanel>
          ))}
        </SimpleGrid>
      </AccordionItem>
      <AccordionItem px={10}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Populat LIVE TV Channels
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <SimpleGrid columns={2}>
          {populatLiveChannels.map((ele) => (
            <AccordionPanel color="grey" key={ele+"dbhscjnd"} _hover={{color: "purple"}} py={0}>
              <Link href="/">{ele}</Link>
            </AccordionPanel>
          ))}
        </SimpleGrid>
      </AccordionItem>
      <AccordionItem px={10}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Popular Web Series
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <SimpleGrid columns={2}>
          {popularWebSeries.map((ele) => (
            <AccordionPanel color="grey" key={ele+"dbhscjnd"} _hover={{color: "purple"}} py={0}>
              <Link href="/">{ele}</Link>
            </AccordionPanel>
          ))}
        </SimpleGrid>
      </AccordionItem>
      <AccordionItem px={10}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Bollywood Top Celebrity
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <SimpleGrid columns={2}>
          {topCelebrities.map((ele) => (
            <AccordionPanel color="grey" key={ele+"dbhscjnd"} _hover={{color: "purple"}} py={0}>
              <Link href="/">{ele}</Link>
            </AccordionPanel>
          ))}
        </SimpleGrid>
      </AccordionItem>
      <AccordionItem px={10}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Games & News
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <SimpleGrid columns={2}>
          {gamesNews.map((ele) => (
            <AccordionPanel color="grey" key={ele+"dbhscjnd"} _hover={{color: "purple"}} py={0}>
              <Link href="/">{ele}</Link>
            </AccordionPanel>
          ))}
        </SimpleGrid>
      </AccordionItem>
    </Accordion>
  );
}
