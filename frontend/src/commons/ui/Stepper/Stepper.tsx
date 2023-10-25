import {
    Step,
    StepIndicator,
    StepSeparator,
    StepTitle,
    Stepper,
    Box,
    StepIcon,
    Text,
} from '@chakra-ui/react';

type StepData = {
    title: string;
};

type GenericStepperProps = {
    steps: StepData[];
    activeStep: number;
};

const GenericStepper: React.FC<GenericStepperProps> = ({
    steps,
    activeStep,
}) => {
    return (
        <Stepper index={activeStep}>
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator>
                        {activeStep > index ? (
                            <StepIcon />
                        ) : activeStep === index ? (
                            <Text fontSize="lg" fontWeight="bold">
                                {index + 1}
                            </Text>
                        ) : (
                            <Text fontSize="lg" color="gray.300">
                                {index + 1}
                            </Text>
                        )}
                    </StepIndicator>

                    <Box flexShrink="0">
                        <StepTitle>{step.title}</StepTitle>
                    </Box>
                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    );
};

export default GenericStepper;
