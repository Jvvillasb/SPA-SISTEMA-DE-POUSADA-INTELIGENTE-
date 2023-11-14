import { useToast } from '@chakra-ui/react';

type ToastOptions = {
    title: string;
    description?: string;
    status?: 'info' | 'warning' | 'success' | 'error';
    duration?: number | null;
    isClosable?: boolean;
};

const useCustomToast = () => {
    const toast = useToast();

    const showCustomToast = (options: ToastOptions) => {
        toast({
            title: options.title,
            description: options.description,
            status: options.status || 'info',
            duration: options.duration || 5000,
            isClosable: options.isClosable || true,
            position: 'bottom-left',
        });
    };

    return { showCustomToast };
};

export default useCustomToast;
