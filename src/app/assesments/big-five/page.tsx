"use client";

import {
  Tabs,
  Flex,
  Box,
  Progress,
  HStack,
  Card,
  RadioCard,
  VStack,
  useBreakpointValue,
  Portal, 
  Heading,
  Text,
  Combobox,
  useListCollection,
  Span,
  Stack,
  Spacer,
  Textarea,
  IconButton,
  Button,
  Badge,
  Image
} from "@chakra-ui/react";

import { IoIosArrowForward } from "react-icons/io";

import {                                           
  RxHamburgerMenu,                                 
  RxArrowRight,                                    
  RxPerson,                                        
  RxFileText                                       
} from "react-icons/rx";

import { RiVoiceprintFill } from "react-icons/ri"; 


const BigFiveTest = () => {
  // Detect if we’re on mobile (base) or desktop (md+)
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (

    <Flex bg="grey" direction="column" h="100vh" w="100%">
      {/* Header */}
      <Box
        position="fixed"
        top= "0"
        left= "0"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="70px"
        bg="white"
        zIndex="1000"
      >
        <Flex w="90%" >
            <HStack>
            <Image w="30px" h="30px" src="/Untitled design (6).svg"/>
          <Heading size="xl">innerlens</Heading>
            </HStack>
          <Spacer/>
          <Heading size="sm">Question 1 of 13 </Heading>
        </Flex>
        <Progress.Root defaultValue={40} shape="full" w="90%">
          <HStack>
            <Progress.Track flex="1">
              <Progress.Range />
            </Progress.Track>
            <Progress.ValueText>40%</Progress.ValueText>
          </HStack>
        </Progress.Root>
      </Box>

      {/* Main Content */}
        <Box mt="70px" h="100vh" w="100%">

      {isMobile ? (
        // ----- Mobile: Tabs -----
        <Tabs.Root variant="enclosed" defaultValue="quiz" w="100%" flex="1">
          <Tabs.List w="100%">
            <Tabs.Trigger w="100%" value="quiz">
              Quiz
            </Tabs.Trigger>
            <Tabs.Trigger w="100%" value="chat">
              Chat
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="quiz">
            <Quiz />
          </Tabs.Content>
          <Tabs.Content value="chat">
            <Chat />
          </Tabs.Content>
        </Tabs.Root>
      ) : (
          // ----- Desktop: Side by Side -----
          <Flex flex="1" direction="row" w="100%" p={4} gap={4}>
            <Flex h="89vh" w="100%" flex="1" bg="white" borderRadius="md" >
              <Quiz />
            </Flex>
            <Flex flex="1" h="89vh" w="100%" bg="white" borderRadius="md">
              <Chat />
            </Flex>
          </Flex>
        )}
        </Box>
    </Flex>
  );
};

const Quiz = () => {
  const items = [
    { value: "Strongly Disagree", title: "Strongly Disagree" },
    { value: "Disagree", title: "Disagree" },
    { value: "Neutral", title: "Neutral" },
    { value: "Agree", title: "Agree" },
    { value: "Strongly Agree", title: "Strongly Agree" },
  ];

  return (
    <Flex justify="center" w="100%" h="100%" align="center" p={4}>

      <Card.Root border="none" w="100%" h="100%">
        <HStack margin="5px" marginLeft="15px" marginTop="10px" marginRight="15px">
          <Badge colorPalette="blue">Extraversion</Badge>
          <Spacer />

          <Text>1/13</Text>
        </HStack>
        <Card.Header>
             <Heading size={{ base: "xl", md: "2xl", xl: "4xl" }}>
              I enjoy exploring new ideas and concepts
            </Heading>
        </Card.Header>
        
        <Card.Body>
          
          <Card.Description as="div">
            <RadioCard.Root size="lg" orientation="horizontal" align="center" justify="center">
              <RadioCard.Label marginBottom="30px">
                <Button rounded="2xl" variant="outline">What does this question mean?</Button>
              </RadioCard.Label>
              <VStack  align="stretch" gap="15px">
                {items.map((item) => (
                  <RadioCard.Item size="lg" rounded="2xl" key={item.value} value={item.value}>
                    <RadioCard.ItemHiddenInput />
                    <RadioCard.ItemControl>
                      <RadioCard.ItemText textAlign="left" >{item.title}</RadioCard.ItemText>
                      <RadioCard.ItemIndicator />
                    </RadioCard.ItemControl>
                  </RadioCard.Item>
                ))}
              </VStack>
            </RadioCard.Root>
          </Card.Description>

        </Card.Body>
          <Card.Footer justifyContent="flex-end">
      <Button variant="outline">Previous</Button>
          <Spacer/>
      <Button colorPalette="blue" variant="solid">Next</Button>
    </Card.Footer>
      </Card.Root>
    </Flex>
  );
};

const Chat = () => {
  return (
    <Flex direction="column" w="100%" h="100%">
      <Flex
        direction="column"
        align="flex-start"
        bg="white"
        margin="14px"
        h="100%"
      >
        <HStack w="100%">

          <Heading >innerlens ai</Heading>
          <Spacer />

          <Demo/>
        </HStack>
        <Flex h="100%"/>
        <Flex borderWidth="3px" rounded="lg"justify="flex-end" align="flex-end" direction="row" w="100%">
         <Textarea 
            size="xl"
            resize="none" 
            h="120px" 
            placeholder="How can I help today?" 
            pt="25px"
            variant="unstyled"
            _placeholder={{
              fontSize: "15px", // increase size
              color: "gray.500" // optional color
            }}/>
             <HStack alignItems="center" justifyContent="center" m="15px">
              <IconButton>
                <RiVoiceprintFill />
              </IconButton>
              <IconButton>
                <RxArrowRight />
              </IconButton>
            </HStack>
        </Flex>

      </Flex>
    </Flex>
  );
};

const Demo = () => {
  const { collection } = useListCollection({
    initialItems: people,
    itemToString: (item) => item.name,
    itemToValue: (item) => item.id.toString(),
  })

  return (
    <Combobox.Root
      width="130px"
      collection={collection}
      inputBehavior="none" // no autocomplete
      openOnClick // open dropdown when clicking
    >

      <Combobox.Control>
        {/* Read-only input so user cannot type */}
        <Combobox.Input readOnly placeholder="Select Model"/>
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            {collection.items.map((person) => (
              <Combobox.Item item={person} key={person.id}>
                <Stack gap={0}>
                  <Span textStyle="sm" fontWeight="medium">
                    {person.name}
                  </Span>
                  <Span textStyle="xs" color="fg.muted">
                    {person.email} — {person.role}
                  </Span>
                </Stack>
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

const people = [
  { id: 1, name: "John Smith", email: "john@example.com", role: "Sales Manager" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", role: "UI Designer" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Software Engineer" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", role: "AI Engineer" },
  { id: 5, name: "James Wilson", email: "james@example.com", role: "Chief Executive Officer" },
]

export default BigFiveTest;
