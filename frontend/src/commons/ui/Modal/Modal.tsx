import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import theme from '../../../theme';
import Button from '../Button/Button';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    onSave: () => void;
    children: React.ReactNode;
    avoidCloseOnBack?: boolean;
    avoidCloseOnEsc?: boolean;
    size?: string;
    saveLabel?: string;
    onBack?: () => void;
    activeStep?: number;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    onSave,
    children,
    avoidCloseOnBack,
    avoidCloseOnEsc,
    size,
    saveLabel,
    onBack,
    activeStep,
}) => {
    return (
        <ChakraModal
            isOpen={isOpen}
            onClose={onClose}
            closeOnOverlayClick={avoidCloseOnBack}
            closeOnEsc={avoidCloseOnEsc}
            size={size}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{children}</ModalBody>

                <ModalFooter>
                    {onBack && activeStep !== undefined && activeStep > 0 && (
                        <Button colorScheme="linkedin" mr={3} onClick={onBack}>
                            Voltar
                        </Button>
                    )}
                    <Button
                        colorScheme={theme.colors.customGreen}
                        mr={3}
                        onClick={onSave}
                    >
                        {saveLabel}
                    </Button>
                    <Button
                        colorScheme={theme.colors.darkGray}
                        onClick={onClose}
                    >
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </ChakraModal>
    );
};

export default Modal;
