import { useDebounce } from '../../../../commons/hooks/useDebounce/useDebounce';
import useStore from '../../../../store/index';
import { FlexContainer, Select, StyledInput } from './Filters.styles';

const Filters: React.FC = () => {
    const { setSearchString, searchString, fetchClients, setFilters, filters } =
        useStore((state) => ({
            setSearchString: state.setSearchString,
            searchString: state.searchString,
            fetchClients: state.fetchClients,
            setFilters: state.setFilters,
            filters: state.filters,
        }));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
        debouncedHandleInputChange();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            fetchClients();
        }
    };

    const debouncedHandleInputChange = useDebounce(fetchClients, 500);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({ excursionType: +event.target.value });
        fetchClients();
    };

    const getPlaceholderFilter = () => {
        const excursionTypeFilter: { [key: number]: string } = {
            1: 'Sem caravana',
            2: 'Com caravana',
        };
        return excursionTypeFilter[filters.excursionType];
    };

    return (
        <FlexContainer>
            <StyledInput
                type="text"
                value={searchString}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Pesquise usuários"
            />
            <Select
                rootProps={{ style: { width: 'fit-content' } }}
                onChange={handleChange}
                value={filters.excursionType}
            >
                {!filters.excursionType && (
                    <option value="" disabled>
                        {getPlaceholderFilter()}
                    </option>
                )}
                <option value="2">Com caravana</option>
                <option value="1">Sem caravana</option>
            </Select>
        </FlexContainer>
    );
};

export default Filters;
