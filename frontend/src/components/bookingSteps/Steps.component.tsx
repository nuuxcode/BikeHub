import {
    Box, StepIcon, Step, StepSeparator, StepIndicator, StepNumber, StepStatus, StepTitle, Stepper
} from "@chakra-ui/react";
const steps = [
    { title: "Choose Location & Bike" },
    { title: "Select Date & Payment" },
    { title: "Take QR-CODE & Enjoy Ride!" },
];

const StepsComponent = ({ activeStep, bannerImg = "" }: { activeStep: number, bannerImg?: string }) => {
    return (
        <Box
            h="100"
            pb={5}
            pt={5}
            background={bannerImg ? `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bannerImg})` : ""}
            className="w-full flex flew-row justify-center items-center bg-ima"
            position={"relative"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            shadow={"md"}
        >
            <Stepper
                size="lg"
                colorScheme="teal"
                color={"white"}
                index={activeStep}
                w="80%"
            >
                {steps.map((step, index) => (
                    <Step key={index}>
                        <Box className="flex flex-col justify-center items-center gap-1">
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber className="text-teal-300" />}
                                />
                            </StepIndicator>

                            <StepStatus
                                complete={
                                    <StepTitle className=" text-lg text-teal-300 font-bold">
                                        {step.title}
                                    </StepTitle>
                                }
                                incomplete={
                                    <StepTitle className=" text-lg  font-bold">
                                        {step.title}
                                    </StepTitle>
                                }
                                active={
                                    <StepTitle className=" text-lg text-teal-300 font-bold">
                                        {step.title}
                                    </StepTitle>
                                }
                            />
                        </Box>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default StepsComponent;
