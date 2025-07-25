import {
  Avatar,
  Button,
  Card,
  HStack,
  Stack,
  Strong,
  Text,
  For,
  Container,
  VStack
} from "@chakra-ui/react"
import { LuCheck, LuX } from "react-icons/lu"


const Requests = () => {
  return (
    <Container h="90vh">
      <HStack>
      <For each={["One", "Two", "Three"]}>
      {(item, index) => <Demo/>}
    </For>
      </HStack>
    </Container>
  )
}




const Demo = () => {
  return (
    <Card.Root width="320px">
      <Card.Body>
        <HStack mb="6" gap="3">
          <Avatar.Root>
            <Avatar.Image src="https://images.unsplash.com/photo-1511806754518-53bada35f930" />
            <Avatar.Fallback name="Nate Foss" />
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="semibold" textStyle="sm">
              Nate Foss
            </Text>
            <Text color="fg.muted" textStyle="sm">
              @natefoss
            </Text>
          </Stack>
        </HStack>
        <Card.Description>
          <Strong color="fg">Nate Foss </Strong>
          has requested to join your team. You can approve or decline their
          request.
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button variant="subtle" colorPalette="red" flex="1">
          <LuX />
          Decline
        </Button>
        <Button variant="subtle" colorPalette="blue" flex="1">
          <LuCheck />
          Approve
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}


export default Requests;
