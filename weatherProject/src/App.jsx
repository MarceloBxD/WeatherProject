import { useState, useEffect } from "react";
import api from "./services/api";
import "./App.css";
import {
  Flex,
  Stack,
  Avatar,
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody, 
  ModalFooter,
  ModalContent
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState();
  const [location, setLocation] = useState("");
  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    api
      .get()
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocoreu um erro " + err);
      });
  }, []);

  return (
    <Flex flexDir="column">
      <Flex
        as="header"
        h="10vh"
        justify="space-between"
        p="10px"
        fontWeight="bold"
        fontSize="18px"
        align="center"
        bgColor="#DDD"
      >
        <h1>Weather Project</h1>
        <Flex>
          <Stack direction="row">
            <Avatar
              name="Marcelo Bracet"
              src="https://pbs.twimg.com/profile_images/1506399790564790279/jcQUW6RP_400x400.jpg"
            />
          </Stack>
        </Flex>
      </Flex>
      <Flex flexDir="column" align="center" gap="15px" m="10px">
        <Input
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Localidade"
          w="250px"
          mr="10px"
        />
        <Button onClick={onOpen}>
          Search
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex>Cidade Pesquisada: {user?.results.city_name}</Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
}

export default App;
