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
  Button,
  HStack
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

<InputGroup>
    <HStack h="70px" w="100%">
    <Input placeholder="Enter..." />
      <Button><FcNext/></Button>
      <Button> <FcSelfie/></Button>
      <Button> <FcFile/> </Button>
              </HStack>
    
</InputGroup>
      
  </Flex>
    </Container>
  );
};

export default Chat;
