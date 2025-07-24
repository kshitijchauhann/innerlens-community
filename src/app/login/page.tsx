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

import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <Container h="90vh" p={5}>
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
      <Flex p={10} gap="4" alignItems = 'center' justify="center">

      <Button>
        <FcGoogle/> Continue with Google
      </Button>
      </Flex>
      </Stack>
    </Container>
  )
}

export default Login;
