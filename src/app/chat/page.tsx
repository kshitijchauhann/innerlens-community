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
  HStack,
  Avatar,
  Circle, 
  Float,
  VStack
} from "@chakra-ui/react";

import { FcFile } from "react-icons/fc";
import { FcSelfie } from "react-icons/fc";
import { FcNext } from "react-icons/fc";


import { IoIosArrowRoundBack } from "react-icons/io";

const Chat = () => {
  return (
  <Flex direction="column">
  </Flex>
  )
}



const ChatList = () => {
  return (
      <Flex direction="column">
      <Flex align="center" shadow="sm" h="40px" w="100%">
          <IoIosArrowRoundBack/>

        </Flex>
  <Flex margin="10px" justify="flex-start">
    <Stack marginLeft="10px" gap="8">
      {users.map((user) => (
        <HStack key={user.email} gap="4">
          <Avatar.Root>
            <Avatar.Fallback name={user.name} />
            <Avatar.Image src={user.avatar} />
            <Float placement="bottom-end" offsetX="1" offsetY="1">
              <Circle
                bg="green.500"
                size="8px"
                outline="0.2em solid"
                outlineColor="bg"
              />
            </Float>
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="medium">{user.name}</Text>
            <Text color="fg.muted" textStyle="sm">
              {user.email}
            </Text>
          </Stack>
        </HStack>
      ))}
    </Stack>
        </Flex>
    </Flex>

  );
};

const users = [
  {
    id: "1",
    name: "John Mason",
    email: "john.mason@example.com",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "2",
    name: "Melissa Jones",
    email: "melissa.jones@example.com",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
]
export default Chat;
