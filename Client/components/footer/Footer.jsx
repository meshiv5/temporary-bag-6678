import {Container} from "@chakra-ui/react";
import AboutZee from "./AboutZee";
import CopyrightText from "./CopyrightText";
import FooterSmallCat from "./FooterSmallCat";
import FooterSubCategory from "./FooterSubCategory";
import SocialLinks from "./SocialLinks";
export default function Footer({size}) {

  return (
    <Container
      p="0"
      fontFamily="sans-serif"
      maxW="100vw"
      color="white"
    >
      <SocialLinks />
      <AboutZee />
      {size > 1200 && <FooterSubCategory />}
      {size <= 1200 && <FooterSmallCat />}
      <CopyrightText />
    </Container>
  );
}
