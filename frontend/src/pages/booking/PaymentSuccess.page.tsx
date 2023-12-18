import React, { useEffect, useState } from "react";
import { Box, Heading } from '@chakra-ui/react';
import Confetti from 'react-confetti';
import { Button } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom'; // import useParams
import StepsComponent from '../../components/bookingSteps/Steps.component';
import QRCodeComponent from '../../components/qrcode/qrcode'; // import QRCodeComponent

const PaymentSuccessPage = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // get the rental ID from the URL
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div  style={{ position: 'relative' }}>
            <Box style={{ position: 'absolute', top: 0, width: '100%' }}>
                <StepsComponent activeStep={3} />
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                paddingTop="10rem"
                height="100vh"
                backgroundImage={`url("https://adventure-journal.com/cdn/shop/articles/marianna-lutkova-4PSLAKVQQ88-unsplash_1024x.jpg?v=1698692923")`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
            >
                <Heading color="white" mt={5} mb={10}>CONGRATS, ENJOY YOUR RIDE!</Heading>
                <Button mb={10} colorScheme="teal" size="lg" onClick={() => navigate('/profile')}>
                    See your rental history
                </Button>
                <QRCodeComponent id={Number(id)} />
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
            </Box>
        </div>

    );
};

export default PaymentSuccessPage;
