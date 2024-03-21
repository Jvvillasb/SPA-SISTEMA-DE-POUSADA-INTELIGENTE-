import { renderHook } from '@testing-library/react-hooks';
import useCustomToast from './useCustomToast';
import { useToast } from '@chakra-ui/react';

jest.mock('@chakra-ui/react', () => ({
    ...jest.requireActual('@chakra-ui/react'),
    useToast: jest.fn(),
}));

describe('useCustomToast', () => {
    it('should call useToast with correct parameters', () => {
        const toastMock = jest.fn();
        (useToast as jest.Mock).mockReturnValue(toastMock);

        const { result } = renderHook(() => useCustomToast());

        result.current.showCustomToast({
            title: 'Test',
            description: 'This is a test',
            status: 'success',
        });

        expect(toastMock).toHaveBeenCalledWith({
            title: 'Test',
            description: 'This is a test',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'bottom-left',
        });
    });

    it('should call useToast with default parameters', () => {
        const toastMock = jest.fn();
        (useToast as jest.Mock).mockReturnValue(toastMock);

        const { result } = renderHook(() => useCustomToast());

        result.current.showCustomToast({
            title: 'Test',
        });

        expect(toastMock).toHaveBeenCalledWith({
            title: 'Test',
            description: undefined,
            status: 'info',
            duration: 5000,
            isClosable: true,
            position: 'bottom-left',
        });
    });
});
