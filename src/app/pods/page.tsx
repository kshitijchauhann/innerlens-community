import { 
  Badge, 
  Box, 
  Button, 
  Card, 
  HStack, 
  Image,
  For,
  VStack,
  Container,
  Flex,
  SimpleGrid,
  Input,
  InputGroup
} from "@chakra-ui/react";

import { FcSearch } from "react-icons/fc";

const PodCards = () => {
  const cards = [
    { title: "Ignorant Lovers", description: "Attachement style: Ignorant" },
    { title: "High Extraversion", description: "For HighlyTalkitive People" },
    { title: "Chronically Online", description: "A deep dive into digital lives and parasocial ties" },
    { title: "Anxiously Attached", description: "Where overthinking meets romantic chaos" },
    { title: "Quiet Quitting Society", description: "Unpacking the art of doing the bare minimum" },
    { title: "Gaslight, Gatekeep, Girlboss", description: "Pop culture, power, and problematic queens" },
    { title: "Emotional Baggage Claim", description: "Because therapy is expensive" },
    { title: "Second-Hand Opinions", description: "Takes you've never thought, from people who barely have" }
  ];

  return (
    <Container h="90vh" w="100vw">
      <InputGroup mt="20px" mb="20px" endAddon={<FcSearch />}>
          <Input w="100%" placeholder="Search"/>
        </InputGroup>

      <SimpleGrid w="100%" columns={2} gap="20px">
      {cards.map((item, index) => (
        <Box key={index} order={index}>
          <CardHorizontal title={item.title} description={item.description} />
        </Box>
      ))}
      </SimpleGrid>
    </Container>
  );
};

const CardHorizontal = ({ title, description }) => (
  <Card.Root 
    display="flex" 
    flexDirection="row" 
    overflow="hidden" 
    maxW="xl" 
    h="250px" 
    borderWidth="1px" 
    borderRadius="md"
  >
    <Image
      objectFit="cover"
      w="200px"
      h="100%" 
      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt="Podcast"
    />
    <Box p={4} display="flex" flexDirection="column" justifyContent="space-between" flex="1">
      <Box>
        <Card.Title mb="2">{title}</Card.Title>
        <Card.Description fontSize="sm">{description}</Card.Description>
        <HStack mt="3" spacing="2">
          <Badge>Hot</Badge>
          <Badge>Caffeine</Badge>
        </HStack>
      </Box>
      <Card.Footer mt="auto">
        <HStack spacing="2">
          <Button size="sm">Join</Button>
          <Button size="sm">View</Button>
        </HStack>
      </Card.Footer>
    </Box>
  </Card.Root>
);
export default PodCards;
