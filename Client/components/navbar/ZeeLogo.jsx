import { Box, Img } from "@chakra-ui/react";
import Link from "next/link";

export default function ZeeLogo(){
    return (
      <Link href="/">
        <Box cursor="pointer" w="50px">
          <Img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.64" />
        </Box>
      </Link>
    );
}