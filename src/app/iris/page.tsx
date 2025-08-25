import { 
  Flex,
  HStack,
  Input, 
  IconButton,
  VStack,
  Spacer,
  Box,
  Textarea,
  Heading,
  Button, 
  CloseButton, 
  Drawer, 
  Portal
} from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"

import { 
  RxHamburgerMenu,
  RxArrowRight, 
  RxPerson, 
  RxFileText
} from "react-icons/rx";
import { RiVoiceprintFill } from "react-icons/ri";
import Logo from "@/components/Logo"

import { VscEllipsis } from "react-icons/vsc";
const Iris = () => {
  return (
    <Flex h="100vh" w="100vw" direction="column" >
      <Flex align="flex-start" justify="flex-start">
      <Drawer.Root placement="start">
        <Drawer.Trigger asChild>
          <IconButton aria-label="Chats" variant="ghost" size="lg">
            <RxHamburgerMenu/>
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>innerlens</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Drawer.Body>
              <Drawer.Footer>
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
            </Flex>
      <Flex h="90vh" direction="column" align="center" justify="center">
      <HStack h="100px">
        <Logo/>
        <Heading size="6xl">Iris</Heading>
      </HStack>
      <Flex w="100%" align="center" justify="center" p={4} >
        <VStack w="80%" spacing={4} align="stretch" borderWidth="1px"  rounded="md" shadow="lg">
          <Textarea 
            size="xl"
            resize="none" 
            h="120px" 
            placeholder="How can I help today?" 
            variant="unstyled" 
            pt="25px"
            _placeholder={{
              fontSize: "20px", // increase size
              color: "gray.500" // optional color
            }}/>
          <Flex w="100%">

            <HStack m="15px">
              <Tooltip content="Find people">
                <IconButton variant="outline">
                  <RxPerson />
                </IconButton>
              </Tooltip>
              <Tooltip content="Know you reports">
                <IconButton variant="outline">
                  <RxFileText />
                </IconButton>
              </Tooltip>
            </HStack>
            <Spacer />
            <HStack m="15px">
              <IconButton>
                <RiVoiceprintFill />
              </IconButton>
              <IconButton>
                <RxArrowRight />
              </IconButton>
            </HStack>
          </Flex>

        </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Iris;
