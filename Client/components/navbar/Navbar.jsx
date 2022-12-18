import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Input,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  UnorderedList,
  Link,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { plans, settings, categories, info } from "../data";
import { CgMenuGridR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import ZeeLogo from "./ZeeLogo";
import MenuLogin from "./MenuLogin";
import Profile from "./Profile";
import { useEffect } from "react";
import { useState } from "react";

function Navbar({ size, handleAuth, isAuth, handleLook }) {
  const [inputText, setInput] = useState("");
  const checkRoute = useRouter();
  let x = 9;
  if (size < 1800) x = 5;
  if (size < 1360) x = 3;

  useEffect(() => handleAuth(), []);
  if (checkRoute.pathname == "/signin" || checkRoute.pathname == "/signup" || checkRoute.pathname == "/admin" || checkRoute.pathname == "/edit") {
    return <p></p>;
  }
  return (
    <Container zIndex={1} fontFamily="sans-serif" color="white" bg="black" maxW="100vw" position="sticky" top="0px" p="0px">
      <Flex justifyContent="space-between" p="30px" w="full">
        <Box display="flex">
          <ZeeLogo />
          <Box display="flex" alignItems="center">
            {size < 1200 && size > 900 && (
              <UnorderedList
                overflow="scroll"
                scrollBehavior="smooth"
                w={{ base: "500px", lg: "600px" }}
                listStyleType="none"
                display="flex"
                alignItems="center"
                p="15px"
              >
                {categories.map((ele, i) => (
                  <ListItem
                    cursor="pointer"
                    key={"cat" + i}
                    _hover={{
                      textDecoration: "underline",
                      textUnderlineOffset: "10px",
                      textDecorationThickness: "3px",
                    }}
                    style={
                      checkRoute.asPath === ele.path
                        ? {
                            textDecoration: "underline",
                            textUnderlineOffset: "10px",
                            textDecorationThickness: "3px",
                          }
                        : {}
                    }
                    px="10px"
                  >
                    <Link href={ele.path}>{ele.name}</Link>
                  </ListItem>
                ))}
              </UnorderedList>
            )}
            {size <= 900 && (
              <Button w="140px" mx="20px" colorScheme="purple">
                <FaCrown style={{ marginRight: "10px", background: "transparent" }} />
                BUY PLAN
              </Button>
            )}
            {size >= 1200 && (
              <UnorderedList scrollBehavior="smooth" listStyleType="none" display="flex" alignItems="center" p="15px">
                {categories
                  .filter((ele, i) => i < x)
                  .map((ele, i) => (
                    <ListItem
                      cursor="pointer"
                      key={"cat" + i}
                      _hover={{
                        textDecoration: "underline",
                        textUnderlineOffset: "10px",
                        textDecorationThickness: "3px",
                      }}
                      style={
                        checkRoute.asPath === ele.path
                          ? {
                              textDecoration: "underline",
                              textUnderlineOffset: "10px",
                              textDecorationThickness: "3px",
                            }
                          : {}
                      }
                      px="10px"
                    >
                      <Link href={ele.path}>{ele.name}</Link>
                    </ListItem>
                  ))}
              </UnorderedList>
            )}
            {size >= 1200 && (
              <Menu>
                <MenuButton>
                  <CgMenuGridR style={{ width: "50px", height: "30px" }} />
                </MenuButton>
                <MenuList mt="30px" bg="black">
                  {categories
                    .filter((ele, i) => i >= x)
                    .map((ele, i) => (
                      <MenuItem px="30px" fontWeight="bold" bg="transparent" key={"cat2" + i}>
                        <Link href={ele.path}>{ele.name}</Link>
                      </MenuItem>
                    ))}
                </MenuList>
              </Menu>
            )}
          </Box>
        </Box>
        <Box display="flex" justifyContent="end" alignItems="center" w="700px" gap="3%">
          {size > 1200 && (
            <Flex pl="10px" borderRadius="10px" border="1px solid white" alignItems="center">
              <BiSearch />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  checkRoute.push(`/search?q=${inputText}&p=1`);

                  console.log(inputText);
                }}
              >
                <Input
                  value={inputText}
                  border="none"
                  w="300px"
                  placeholder="Search"
                  focusBorderColor="transparent"
                  onChange={(e) => setInput(e.target.value)}
                />
              </form>
            </Flex>
          )}
          {size <= 1200 && (
            <BiSearch
              onClick={() => {
                handleLook(true);
                checkRoute.push("/search?q=a&p=1");
              }}
              style={{ width: "30px", height: "30px" }}
            />
          )}
          {size > 1200 &&
            (!isAuth ? (
              <Button w="100px" colorScheme="black" variant="outline">
                <Link href="/signin">Login</Link>
              </Button>
            ) : (
              <Profile handleAuth={handleAuth} />
            ))}
          {size > 900 && (
            <Button w="140px" colorScheme="purple">
              <FaCrown style={{ marginRight: "10px", background: "transparent" }} />
              <Link href="/buyplan">BUY PLAN</Link>
            </Button>
          )}
          <Menu>
            <MenuButton>
              <GiHamburgerMenu style={{ width: "50px", height: "30px" }} />
            </MenuButton>
            <MenuList mt="30px" w={{ base: "100vw", lg: "400px" }} bg="black" maxH="80vh" overflow="scroll">
              {size < 1200 && (
                <Flex justifyContent="center">
                  <ZeeLogo />
                </Flex>
              )}
              {size < 1200 && !isAuth && (
                <Flex justifyContent="center">
                  <MenuLogin />
                </Flex>
              )}
              <MenuItem _hover={{ color: "purple" }} pl="15px" bg="black">
                <Link href="/">Home</Link>
              </MenuItem>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Explore
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  {categories.map((ele, i) => (
                    <AccordionPanel _hover={{ color: "purple" }} color="grey" key={"sub" + i} pb={4}>
                      <Link href={ele.path}>{ele.name}</Link>
                    </AccordionPanel>
                  ))}
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Plans
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  {plans.map((ele, i) => (
                    <AccordionPanel _hover={{ color: "purple" }} color="grey" key={"plans" + i} pb={4}>
                      <Link href={ele.path}>{ele.name}</Link>
                    </AccordionPanel>
                  ))}
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Settings
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  {settings.map((ele, i) => (
                    <AccordionPanel _hover={{ color: "purple" }} color="grey" key={"setings" + i} pb={4}>
                      <Link href={ele.path}>{ele.name}</Link>
                    </AccordionPanel>
                  ))}
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Info
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  {info.map((ele, i) => (
                    <AccordionPanel _hover={{ color: "purple" }} color="grey" key={"info" + i} pb={4}>
                      <Link href={ele.path}>{ele.name}</Link>
                    </AccordionPanel>
                  ))}
                </AccordionItem>
              </Accordion>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Box w="full">
        {size < 900 && (
          <UnorderedList overflow="scroll" scrollBehavior="smooth" w="full" listStyleType="none" display="flex" alignItems="center" py="15px" m="0px">
            {categories.map((ele, i) => (
              <ListItem
                cursor="pointer"
                key={"cat" + i}
                _hover={{
                  textDecoration: "underline",
                  textUnderlineOffset: "10px",
                  textDecorationThickness: "3px",
                }}
                px="10px"
                style={
                  checkRoute.asPath === ele.path
                    ? {
                        textDecoration: "underline",
                        textUnderlineOffset: "10px",
                        textDecorationThickness: "3px",
                      }
                    : {}
                }
              >
                <Link href={ele.path}>{ele.name}</Link>
              </ListItem>
            ))}
          </UnorderedList>
        )}
      </Box>
    </Container>
  );
}

export default Navbar;
