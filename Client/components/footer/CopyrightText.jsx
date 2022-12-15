import {Box, Text} from "@chakra-ui/react";

export default function CopyrightText() {
  return (
    <Box px="50px">
      <Text color="gray" fontSize="xs">
        Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox
        75+, Safari 5.1.5+
      </Text>
      <Text color="gray" fontSize="xs">
        Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights reserved.
      </Text>
    </Box>
  );
}
