import React, { useState } from 'react';
import { Alert, AlertIcon, Flex, Box, Text } from "@chakra-ui/react";
import PayPalButton from '../components/paypal/PayPalButton';

const PaymentPage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"error" | "success" | "info" | "warning" | undefined>("info");
  const [selectedPrice, setSelectedPrice] = useState("2"); // New state variable

  const handlePaymentSuccess = () => {
    setMessage("Payment successful!");
    setStatus("success");
  };

  const handlePaymentFailure = () => {
    setMessage("Payment failed!");
    setStatus("error");
  };

  const handlePictureSelect = (price: string) => { // New function
    setSelectedPrice(price);
  };

  return (
    <div>
      <h1>This is a new page</h1>
      <Flex>
        <Box mr={2}>
          <img
            src="https://5.imimg.com/data5/GP/OU/ND/SELLER-87786173/kids-bikes.jpg"
            onClick={() => handlePictureSelect("10")}
            alt="Picture 1"
            style={{ width: "100%", height: "auto" }}
          />
          <Text textAlign="center" mt={2}>Price: $10</Text>
        </Box>
        <Box mr={2}>
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/10/VD/QB/JO/158278705/whatsapp-image-2022-09-26-at-22-43-41-500x500.jpeg"
            onClick={() => handlePictureSelect("20")}
            alt="Picture 2"
            style={{ width: "100%", height: "auto" }}
          />
          <Text textAlign="center" mt={2}>Price: $20</Text>
        </Box>
        <Box>
          <img
            src="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/bqjzm7kfqbcyjucbgcm3.jpg"
            onClick={() => handlePictureSelect("30")}
            alt="Picture 3"
            style={{ width: "100%", height: "auto" }}
          />
          <Text textAlign="center" mt={2}>Price: $30</Text>
        </Box>
      </Flex>
      <Text mt={4} textAlign="center">
        Payment Price: ${selectedPrice}
      </Text>
      <PayPalButton key={selectedPrice} amount={selectedPrice} onPaymentSuccess={handlePaymentSuccess} onPaymentFailure={handlePaymentFailure} />
      {message && <Alert status={status}><AlertIcon />{message}</Alert>}
    </div>
  );
};

export default PaymentPage;
