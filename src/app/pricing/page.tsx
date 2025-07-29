import { 
  Button,
  Card, 
  Image, 
  Text,
  HStack,
  VStack,
  Flex
} from "@chakra-ui/react"
import { FcCheckmark } from "react-icons/fc";


const Pricing = () => {
  return (
    <HStack margin="9px" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
        <BasicPricingCard/>
        <MonthyPricingCard />
        <LifeTimePricingCard/>
    </HStack>
  )
}


const LifeTimePricingCard = () => {
  return (
<Card.Root maxW="sm" overflow="hidden">
      <Image src="/lifetime.gif" alt="LifeTime"/>
      <Card.Body>
        <Card.Title marginTop="10px" textAlign="center">
          Life Time
        </Card.Title>
        <VStack>
          <Text marginBottom="10px" textStyle="5xl">
            $89
          </Text>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
        </VStack>
      </Card.Body>
      <Card.Footer>
        <Button w="100%">Become A Lifelong Member</Button>
      </Card.Footer>
    </Card.Root>

  )
}


const MonthyPricingCard = () => {
  return (
    <Card.Root maxW="sm" overflow="hidden">

      <Image src="/pro.gif" alt="Pro"/>
      <Card.Body>
        <Card.Title marginTop="10px" textAlign="center">
          Pro Plan
        </Card.Title>
        <VStack>
          <Text marginBottom="10px" textStyle="5xl">
            $7
          </Text>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
        </VStack>
      </Card.Body>
      <Card.Footer>
        <Button w="100%">Upgrade Your Plan</Button>
      </Card.Footer>
    </Card.Root>
  )

}


const BasicPricingCard = () => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src="/basic.gif" alt="basic"/>
      <Card.Body>
        <Card.Title marginTop="10px" textAlign="center">
          Basic Plan
        </Card.Title>
        <VStack>
          <Text marginBottom="10px" textStyle="5xl">
            $0
          </Text>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
          <HStack>
            <FcCheckmark/><Text>This is the text component</Text>
          </HStack>
        </VStack>
      </Card.Body>
      <Card.Footer>
        <Button w="100%" variant="outline">Current Plan</Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default Pricing
