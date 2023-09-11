import { render, fireEvent } from '@testing-library/react';
import Actions from './Actions';
import useStore from "../../../../store/index";
import { create } from 'zustand';

jest.mock('../../../../store/index');
const mockedUseStore = useStore as jest.MockedFunction<typeof useStore>;
describe('Actions component', () => {

    jest.mock('../../../../store/index');
    const setPage = jest.fn();
    beforeEach(() => {
        const store = create((set) => ({
            last: false,
            first: false,
            page: 1,
            setPage,
        }));

        mockedUseStore.mockImplementation(store);
    });

  it('should render correctly', () => {
    const { getByText } = render(<Actions />);

    expect(getByText('Voltar')).toBeInTheDocument();
    expect(getByText('Avançar')).toBeInTheDocument();
  });

  it('should call setPage with page +1 when next is clicked', () => {
    const { getByText } = render(<Actions />);
    fireEvent.click(getByText('Avançar'));

    expect(setPage).toHaveBeenCalledWith(2);
  });

  it('should call setPage with page -1 when back is clicked', () => {
    const { getByText } = render(<Actions />);
    fireEvent.click(getByText('Voltar'));

    expect(setPage).toHaveBeenCalledWith(0);
  });
});
