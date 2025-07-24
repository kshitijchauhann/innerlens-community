import {
  Container,
  Flex,
  Box,
  Heading, 
  Stack,
  Highlight,
  Text,
  Input,
  InputGroup,
  Button
} from "@chakra-ui/react";

import { FcFile } from "react-icons/fc";
import { FcSelfie } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const Chat = () => {
  return (
    <Container h="100vh" p={4}>
      <Flex direction="column" h="100%">
        {/* Chat messages placeholder */}
        <Box flex="1" overflowY="auto">
          <Stack>
      <Heading size="3xl" letterSpacing="tight">
        <Highlight query="with speed" styles={{ color: "teal.600" }}>
          Create accessible React apps with speed
        </Highlight>
      </Heading>
      <Text fontSize="md" color="fg.muted">
        Chakra UI is a simple, modular and accessible component library that
        gives you the building blocks you need.
      </Text>
    </Stack>
        </Box>

<InputGroup endAddon={<FcNext />}>
  <Box w="100%" borderWidth="1px" borderColor="border.disabled">
    <Input h="100px" placeholder="Enter..." />
    <Flex gap="2">
      <Button order="1"> <FcSelfie/> Find people</Button>
      <Button order="2"> <FcFile/> Reports</Button>
    </Flex>
  </Box>
</InputGroup>
      
  </Flex>
    </Container>
  );
};

export default Chat;
