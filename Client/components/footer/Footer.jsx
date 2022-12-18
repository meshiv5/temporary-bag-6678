import { Container } from "@chakra-ui/react";
import AboutZee from "./AboutZee";
import CopyrightText from "./CopyrightText";
import FooterSmallCat from "./FooterSmallCat";
import FooterSubCategory from "./FooterSubCategory";
import SocialLinks from "./SocialLinks";
import { useRouter } from "next/router";
export default function Footer({ size }) {
  const checkRoute = useRouter();
  if (checkRoute.pathname == "/signin" || checkRoute.pathname == "/signup" || checkRoute.pathname == "/admin" || checkRoute.pathname == "/edit") {
    return <p></p>;
  }
  return (
    <Container p="0" fontFamily="sans-serif" maxW="100vw" color="white">
      <SocialLinks />
      <AboutZee />
      {size > 1200 && <FooterSubCategory />}
      {size <= 1200 && <FooterSmallCat />}
      <CopyrightText />
    </Container>
  );
}
