import {
    Step,
    StepIndicator,
    StepSeparator,
    StepTitle,
    Box,
    StepIcon,
    Text,
    StepStatus,
} from '@chakra-ui/react';
import { Stepper } from './Stepper.styles';

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
        <Stepper
            index={activeStep}
            colorScheme="green"
            justifyContent={'center'}
        >
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator>
                        {activeStep > index ? (
                            <StepIcon />
                        ) : activeStep === index ? (
                            <Text fontSize="lg" fontWeight="bold">
                                <StepStatus
                                    complete={index + 1}
                                    incomplete={index + 1}
                                    active={index + 1}
                                />
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
