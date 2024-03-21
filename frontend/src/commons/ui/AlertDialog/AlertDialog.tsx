import {
    AlertDialog as ChakraAlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Button } from '../Button/Button.styles';
import theme from '../../../theme';

interface AlertDialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    confirmButtonText: string;
    cancelButtonText: string;
    onConfirm: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
    isOpen,
    onClose,
    title,
    description,
    confirmButtonText,
    cancelButtonText,
    onConfirm,
}) => {
    const cancelRef = useRef<HTMLButtonElement>(null);

    return (
        <ChakraAlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isCentered
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        {title}
                    </AlertDialogHeader>

                    <AlertDialogBody>{description}</AlertDialogBody>

                    <AlertDialogFooter>
                        <Button
                            ref={cancelRef}
                            onClick={onClose}
                            colorScheme={theme.colors.darkGray}
                        >
                            {cancelButtonText}
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={onConfirm}
                            ml={3}
                            data-testid="confirmButton"
                        >
                            {confirmButtonText}
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </ChakraAlertDialog>
    );
};

export default AlertDialog;
