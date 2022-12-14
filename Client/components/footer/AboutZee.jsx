import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function AboutZee(){
    return (
      <Box fontSize="sm" px={{base: "15px", lg: "100px"}} py="10px">
        <Link href="/aboutus">About Us</Link> &nbsp;&nbsp;&nbsp; |
        &nbsp;&nbsp;&nbsp;
        <Link href="/helpcenter">Help Center</Link>
        &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        <Link href="/privacypolicy">Privacy Policy</Link>
        &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        <Link href="/termsofuse">Terms of Use</Link>
        &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        <Link href="/preferences">Preferences</Link>
      </Box>
    );
}