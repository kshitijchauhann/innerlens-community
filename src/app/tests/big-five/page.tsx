import { 
  Button, 
  CloseButton,
  Drawer, 
  Portal,
  HStack,
  Checkbox, 
  CheckboxGroup, 
  Fieldset, 
  For,
  Flex,
  Card,
  Icon,
  RadioCard,
  VStack
} from "@chakra-ui/react"

import { RiAppleFill, RiBankCardFill, RiPaypalFill } from "react-icons/ri"
import { IoIosArrowForward } from "react-icons/io";

const BigFiveTest = () => {
  const items = [
    { value: "Strongly Disagree", title: "Strongly Disagree", icon: <IoIosArrowForward/> },
    { value: "Disagree", title: "Disagree", icon:  <IoIosArrowForward/>  },
    { value: "Neutral", title: "Neutral", icon:  <IoIosArrowForward/>  },
    { value: "Agree", title: "Agree", icon:  <IoIosArrowForward/>  },
    { value: "Strongly Agree", title: "Strongly Agree", icon:  <IoIosArrowForward/>  },

  ]
  return (
    <Flex bg="blue" direction="column" h="100vh" justify="center" alignItems="center" w="100%">
      <Card.Root w="50%">
        <Card.Body>
          <Card.Title>
            I enjoy exploring new ideas and concepts
          </Card.Title>
          <Card.Description>
            <RadioCard.Root
              orientation="horizontal"
              align="center"
              justify="center"
              maxW="lg"
              defaultValue="paypal"
            >
              <RadioCard.Label>Every option is a right option just choose one</RadioCard.Label>
              <VStack align="stretch">
                {items.map((item) => (
                  <RadioCard.Item key={item.value} value={item.value}>
                    <RadioCard.ItemHiddenInput />
                    <RadioCard.ItemControl>
                      <Icon fontSize="2xl" color="fg.subtle">
                        {item.icon}
                      </Icon>
                      <RadioCard.ItemText ms="-4">{item.title}</RadioCard.ItemText>
                    </RadioCard.ItemControl>
                  </RadioCard.Item>
                ))}
              </VStack>
            </RadioCard.Root>
          </Card.Description>
        </Card.Body>
      </Card.Root>

    </Flex>
  )
}


const Questions = () => {
  const bigFiveQuestions = [
    // Openness to Experience (0-4)
    {
      id: 1,
      trait: "openness",
      question: "I enjoy exploring new ideas and concepts"
    },
    {
      id: 2,
      trait: "openness",
      question: "I appreciate art, music, and literature"
    },
    {
      id: 3,
      trait: "openness",
      question: "I like to think about abstract or philosophical questions"
    },
    {
      id: 4,
      trait: "openness",
      question: "I'm curious about different cultures and ways of life"
    },
    {
      id: 5,
      trait: "openness",
      question: "I enjoy creative activities and expressing myself imaginatively"
    },

    // Conscientiousness (5-9)
    {
      id: 6,
      trait: "conscientiousness",
      question: "I keep my commitments and follow through on tasks"
    },
    {
      id: 7,
      trait: "conscientiousness",
      question: "I like to have a plan before starting something important"
    },
    {
      id: 8,
      trait: "conscientiousness",
      question: "I pay attention to details in my work"
    },
    {
      id: 9,
      trait: "conscientiousness",
      question: "I prefer to keep my living/work space organized"
    },
    {
      id: 10,
      trait: "conscientiousness",
      question: "I usually think before I act"
    },

    // Extraversion (10-14)
    {
      id: 11,
      trait: "extraversion",
      question: "I enjoy being the center of attention in social groups"
    },
    {
      id: 12,
      trait: "extraversion",
      question: "I feel comfortable starting conversations with strangers"
    },
    {
      id: 13,
      trait: "extraversion",
      question: "I get energy from being around other people"
    },
    {
      id: 14,
      trait: "extraversion",
      question: "I like to be active and busy"
    },
    {
      id: 15,
      trait: "extraversion",
      question: "I tend to be optimistic and upbeat"
    },

    // Agreeableness (15-19)
    {
      id: 16,
      trait: "agreeableness",
      question: "I try to see the best in people"
    },
    {
      id: 17,
      trait: "agreeableness",
      question: "I'm willing to help others even when it's inconvenient"
    },
    {
      id: 18,
      trait: "agreeableness",
      question: "I prefer cooperation over competition"
    },
    {
      id: 19,
      trait: "agreeableness",
      question: "I'm generally trusting of others' motives"
    },
    {
      id: 20,
      trait: "agreeableness",
      question: "I try to be considerate of other people's feelings"
    },

    // Neuroticism (20-24)
    {
      id: 21,
      trait: "neuroticism",
      question: "I often worry about things that might go wrong"
    },
    {
      id: 22,
      trait: "neuroticism",
      question: "I get stressed easily when facing challenges"
    },
    {
      id: 23,
      trait: "neuroticism",
      question: "My mood can change quickly from happy to sad"
    },
    {
      id: 24,
      trait: "neuroticism",
      question: "I sometimes feel overwhelmed by emotions"
    },
    {
      id: 25,
      trait: "neuroticism",
      question: "I tend to be sensitive to criticism"
    }
  ];

  // Helper function to get questions by trait
  const getQuestionsByTrait = (trait) => {
    return bigFiveQuestions.filter(q => q.trait === trait);
  };

  // Helper function to calculate scores
  const calculateScores = (responses) => {
    const scores = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0
    };

    responses.forEach((response, index) => {
      const trait = bigFiveQuestions[index].trait;
      scores[trait] += response;
    });

    return scores;
  };

  // Helper function to interpret scores
  const interpretScore = (score) => {
    if (score >= 5 && score <= 11) return "Low";
    if (score >= 12 && score <= 18) return "Moderate";
    if (score >= 19 && score <= 25) return "High";
    return "Invalid";
  };

}


const AssitantDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Drawer
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

  )
}

export default BigFiveTest;
