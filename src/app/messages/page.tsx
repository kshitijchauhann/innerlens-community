import {
  VStack,
  Button,
  Avatar,
  Box
} from "@chakra-ui/react"

const Messages = () => {
  return (
    <VStack>
      <Box w="100%" display="flex" alignItems="flex-start" justifyContent="flex-start">
      <Button variant="outline" w="100%">
        <Avatar.Root>
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
        One</Button>
      </Box>
    </VStack>
  )
}




export default Messages;

