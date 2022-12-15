import {Box, Button} from "@chakra-ui/react";
import Link from "next/link";

export default function MenuLogin() {
  return (
    <Box my="20px">
      <Button mr="20px" variant="outline">
        <Link href="/signin">Login</Link>
      </Button>
      <Button ml="20px" bg="purple">
        <Link href="/signup">Sign up for FREE</Link>
      </Button>
    </Box>
  );
}
