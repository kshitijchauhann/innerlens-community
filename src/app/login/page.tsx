import {
  Container,
  Flex,
  Box,
  Heading, 
  VStack,
  Highlight,
  Text,
  Input,
  InputGroup,
  Button,
  Image 
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <Container h="90vh" p={5}>purple <VStack>
        <Image 
          boxSize="400px"
          src="/happygirl.gif"/>
        <Heading textAlign="center" size="3xl" letterSpacing="tight">
          <Highlight query="inner landscape" styles={{ color: "purple.600" }}>
            Discover your inner landscape
          </Highlight>
        </Heading>
        <Text textAlign="center" fontSize="md" color="fg.muted">
          AI-guided psychological insights through conversational assessments. Scientifically grounded, beautifully presented, deeply personal.
        </Text>
      <Flex p={10} gap="4" alignItems = 'center' justify="center">

      <Button  variant="outline">
        <FcGoogle/> Continue with Google
      </Button>
      </Flex>
      </VStack>
    </Container>
  )
}

export default Login;
