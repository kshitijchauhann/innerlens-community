import {
  CloseButton,
  Drawer,
  For,
  HStack,
  Portal,
  VStack,
  Input,
  InputGroup,
  Container,
  Box,
  NativeSelect,
  Flex
} from "@chakra-ui/react"

import { FcNeutralDecision } from "react-icons/fc";
import { Button, FileUpload } from "@chakra-ui/react"
import { HiUpload } from "react-icons/hi"
import { FcSearch } from "react-icons/fc";
import { FcMenu } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { FcCloseUpMode } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcList } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";

const Home = () => {
  return (
    <Container h="90vh" p={4}>
      <HStack>
        <SideBar/>
        <InputGroup endAddon={<FcSearch />}>
          <Input placeholder="Search"/>
        </InputGroup>
      </HStack>
      <WriteReflections/>
    </Container>
  )
}

const WriteReflections = () => {
  return (
    <Box 
      borderWidth="1px" 
      mt={{ base: "6", md: "8" }}
      p={{ base: "3", md: "4" }}
      borderRadius="md"
    >
      <VStack spacing="4" align="stretch">
        {/* Input with Select inside at bottom right */}
        <Box position="relative">
          <Input
            h={{ base: "100px", md: "100px" }}
            placeholder="Write your reflections..."
            pb={{ base: "8", md: "10" }}
            pr={{ base: "2", md: "4" }}
          />
          <Box 
            position="absolute" 
            bottom="2" 
            right="2" 
            width={{ base: "120px", md: "150px" }}
          >
            <NativeSelect.Root size="sm" width="100%">
              <NativeSelect.Field 
                placeholder="Select Pod" 
                bg="white" 
                border="1px solid" 
                borderColor="gray.200"
                borderRadius="md"
                fontSize="sm"
              >
                <option value="big5">Big5</option>
                <option value="attachment">Attachment</option>
                <option value="adhd">ADHD</option>
                <option value="leadership">Leadership</option>
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Box>
        </Box>

        {/* Buttons - stack on mobile, flex on larger screens */}
        <Flex 
          direction={{ base: "column", sm: "row" }} 
          gap={{ base: "2", sm: "1" }}
          align={{ base: "stretch", sm: "center" }}
        >
          <Flex 
            direction={{ base: "column", sm: "row" }} 
            gap={{ base: "2", sm: "1" }}
            flex="1"
          >
            <Box order="1">
            <FileUpload.Root accept={["image/png"]}>
              <FileUpload.HiddenInput />
              <FileUpload.Trigger asChild>
                <Button variant="outline" size="sm" width={{ base: "100%", sm: "auto" }}>
                  <HiUpload /> Upload file
                </Button>
              </FileUpload.Trigger>
              <FileUpload.List />
            </FileUpload.Root>
            </Box>
            
            <Box order="2">
            <Button variant="outline" size="sm" width={{ base: "100%", sm: "auto" }}>
              <FcList /> Create Poll
            </Button>
            </Box>

            <Box order="3">
            <Button variant="outline" size="sm" width={{ base: "100%", sm: "auto" }}>
              <FcNeutralDecision /> Add emoji
            </Button>
            </Box>
          </Flex>

          <Button width={{ base: "100%", sm: "auto" }} ml={{ base: "0", sm: "auto" }}>
            Post
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

const SideBar = () => {
  return (
    <HStack wrap="wrap">
      <Drawer.Root placement="start">
        <Drawer.Trigger asChild>
          <Button variant="outline" size="sm">
            <FcMenu/>
          </Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <VStack>
                  <Button w="100%">
                    <FcBusinessman/> Profile
                  </Button>
                  <Button w="100%">
                    <FcConferenceCall/> My Pods
                  </Button>
                  <Button w="100%">
                    <FcCloseUpMode/> Innerlens Iris
                  </Button>
                  <Button w="100%">
                    <FcMindMap/> Reports
                  </Button>
                  <Button w="100%">
                    <FcSportsMode/> Friends
                  </Button>
                  <Button w="100%">
                    <FcVoicePresentation/> Friend Requests
                  </Button>
                  <Button w="100%">
                    <FcVoicePresentation/> Tests
                  </Button>

                </VStack>
              </Drawer.Body>
              <Drawer.Footer>
                <VStack w="100%">
                  <Button w="100%">
                    <FcSettings/> Settings
                  </Button>
                  <Drawer.ActionTrigger asChild>
                    <Button w="100%" variant="outline">Cancel</Button>
                  </Drawer.ActionTrigger>
                </VStack>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </HStack>
  )
}


export default Home;
