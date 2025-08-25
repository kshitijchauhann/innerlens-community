"use client"
import { 
  Steps,
  Button, 
  ButtonGroup,
  Flex,
  Image,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
  Stack,
  Spacer,
  Icon,
  Input,
  NativeSelect,
  Card,
  Text
} from "@chakra-ui/react"

import { MdOutlineAlternateEmail } from "react-icons/md";
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { useState } from 'react';


// ========== MAIN ONBOARDING COMPONENT ==========
const Onboarding = () => {
  return (
    <Flex direction="column" align="center" h="100vh" w="100%">
      <HStack margin="20px" justify="center" align="center">
        <Heading size="2xl">innerlens</Heading>
      </HStack>
      <Steps.Root w="90%" variant="subtle" defaultStep={1} count={steps.length}>
        <Steps.List>
          {steps.map((step, index) => (
            <Steps.Item key={index} index={index} title={step.title}>
              <Steps.Indicator />
              <Steps.Title>{step.title}</Steps.Title>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>

        {/* Step Contents */}
        <Steps.Content index={0}>
          <OnboardingForm />
        </Steps.Content>

        <Steps.Content index={1}>
          <SelectAvatar />
        </Steps.Content>

        <Steps.Content index={2}>
          <ShareCard />
        </Steps.Content>

        <Steps.CompletedContent>
          All steps are complete!
        </Steps.CompletedContent>

        <ButtonGroup size="sm" variant="outline">
          <Steps.PrevTrigger asChild>
            <Button variant="solid">Prev</Button>
          </Steps.PrevTrigger>
          <Spacer/>
          <Steps.NextTrigger asChild>
            <Button variant="solid">Next</Button>
          </Steps.NextTrigger>
        </ButtonGroup>
      </Steps.Root>
    </Flex>
  )
}


// ========== STEP 1 ==========
const OnboardingForm = () => {
  return (
    <VStack justify="center" align="center">
      <HStack>
        <Icon>
          <MdOutlineAlternateEmail/>
        </Icon>
        <Input placeholder="your username"/>
      </HStack>
      <HStack>
        <NativeSelect.Root size="sm" width="240px">
          <NativeSelect.Field placeholder="your pronouns">
            <option value="male">he/him</option>
            <option value="female">she/her</option>
            <option value="non-binary">they/them</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </HStack>
      <HStack>
        <NativeSelect.Root size="sm" width="240px">
          <NativeSelect.Field placeholder="what's your sex?">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </HStack>
    </VStack>
  )
}


// ========== STEP 2 ==========
const names = [
  "Jack", "Adrian", "Aidan", "George", "Nolan", "Riley", "Kimberly",
  "Luis", "Robert", "Ryan", "Amaya", "Alexander", "Emery",
  "Andrea", "Destiny", "Jade", "Oliver", "Liam"
];

const generateSvg = (seed) => {
  const avatar = createAvatar(lorelei, { seed });
  return `data:image/svg+xml;utf8,${encodeURIComponent(avatar.toString())}`;
};

const SelectAvatar = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Stack direction={{ base: "column", md: "row" }} align="center" justify="center" spacing={6}>
     
      {selected && (
        <VStack spacing={2}>
          <Image
            src={generateSvg(selected)}
            alt={selected}
            boxSize={{base: "100px", md:"150px"}}
            border="3px solid teal"
            borderRadius="full"
          />
          <Button colorScheme="teal">
            Confirm Avatar
          </Button>
        </VStack>
      )}

      <SimpleGrid
        columns={{ base: 4, md: 4, xl: 6 }}
        spacing={4}
        columnGap="2"
        rowGap="4"
      >
        {names.map((name) => {
          const svgDataUri = generateSvg(name);
          return (
            <Image
              key={name}
              src={svgDataUri}
              alt={name}
              boxSize={{base: "60px", md: "100px"}}
              cursor="pointer"
              border={selected === name ? "3px solid teal" : "1px solid gray"}
              borderRadius="full"
              onClick={() => setSelected(name)}
            />
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};


// ========== STEP 3 ==========
const ShareCard = () => {
  return (
   <Card.Root maxW="sm" overflow="hidden">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>Living room Sofa</Card.Title>
        <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  )
}


// ========== STEPS META ==========
const steps = [
  { title: "Your Information", description: "User Info" },
  { title: "Select Avatar", description: "Choose Avatar" },
  { title: "Confirm and share", description: "Preview & Share" },
]

export default Onboarding;
