import {
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

const BikeDetails = () => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, adipisci in recusandae facere est eius.
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              consectetur temporibus, beatae ea, aliquam dolor a placeat odio
              dicta nulla voluptas impedit quae exercitationem sapiente.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BikeDetails;
