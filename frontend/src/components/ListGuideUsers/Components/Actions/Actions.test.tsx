import { render, fireEvent } from '@testing-library/react';
import Actions from './Actions';
import useStore from '../../../../store/index';

jest.mock('../../../../store/index');
const mockedUseStore = useStore as jest.MockedFunction<typeof useStore>;
describe('Actions component', () => {
    const setPage = jest.fn();
    const totalPages = 10;

    beforeEach(() => {
        mockedUseStore.mockImplementation(() => ({
            page: 0,
            setPage,
            totalPages: 5,
        }));
    });

    it('should render correctly', () => {
        const { getByLabelText } = render(<Actions />);
        expect(getByLabelText('Previous page')).toBeInTheDocument();
        expect(getByLabelText('Next page')).toBeInTheDocument();
    });

    it('should call setPage with next page when click advance', () => {
        const { getByLabelText } = render(<Actions />);
        fireEvent.click(getByLabelText('Next page'));

        expect(setPage).toHaveBeenCalledWith(1);
    });

    it('should call setPage with previous page when click return', () => {
        mockedUseStore.mockImplementation(() => ({
            page: 1,
            setPage,
            totalPages,
        }));
        const { getByLabelText } = render(<Actions />);
        fireEvent.click(getByLabelText('Previous page'));
        expect(setPage).toHaveBeenCalledWith(0);
    });
});
