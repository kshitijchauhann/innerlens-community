
import {
  Box,
  Flex,
  HStack,
  VStack,
  Spacer,
  Button,
  Text,
  Tabs,
  Avatar,
  Highlight,
} from "@chakra-ui/react"

const Profile = () => {
  return (
    <Flex direction="column" w="100%" h="100vh">
      {/* Cover */}
      <Box position="relative" w="100%">
        <Box
          h="220px"
          w="100%"
          bg="gray.700"
          bgImage="url('https://via.placeholder.com/1200x300')"
          bgSize="cover"
          bgPos="center"
        />
        {/* Avatar overlap */}
        <Box
          position="absolute"
          bottom="-48px"
          left={{ base: 4, md: 6 }}
          rounded="full"
          borderWidth="4px"
          borderColor="white"
        >
          <Avatar.Root size="2xl">
            <Avatar.Fallback name="Kshitij Chauhan" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
        </Box>
      </Box>

      {/* Profile header */}
      <Box px={{ base: 4, md: 6 }} pt="60px">
        <Flex align="flex-end">
          <VStack align="start" spacing={1}>
            <Text fontSize="xl" fontWeight="bold">
              Kshitij Chauhan
            </Text>
            <Text color="gray.500">@kayc_io</Text>
            <Text fontSize="sm">dev and exploring new things.</Text>
            <Text fontSize="sm" color="gray.500">
              Joined September 2024
            </Text>
            <HStack spacing={4} pt={1}>
              <Highlight query="72" styles={{ fontWeight: "semibold" }}>
                72 Friends
              </Highlight>

            </HStack>
          </VStack>

          <Spacer />
          <Button size="sm">Edit profile</Button>
        </Flex>
      </Box>

      {/* Tabs (slot API like your example) */}
      <Box w="100%" mt={4}>
        <Tabs.Root defaultValue="reflections" fitted variant="enclosed" w="100%">
          <Tabs.List >
            <Tabs.Trigger value="reflections">Reflections</Tabs.Trigger>
            <Tabs.Trigger value="tests">Tests</Tabs.Trigger>
            <Tabs.Trigger value="pods">Pods</Tabs.Trigger>
            <Tabs.Trigger value="likes">Likes</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="reflections">
            <Box p={4}>Reflections content</Box>
          </Tabs.Content>
          <Tabs.Content value="tests">
            <Box p={4}>Tests content</Box>
          </Tabs.Content>
          <Tabs.Content value="pods">
            <Box p={4}>Pods content</Box>
          </Tabs.Content>
          <Tabs.Content value="likes">
            <Box p={4}>Likes content</Box>
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Flex>
  )
}

export default Profile
