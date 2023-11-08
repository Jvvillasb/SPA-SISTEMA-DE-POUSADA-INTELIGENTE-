import { useEffect, useState } from 'react';
import { useDebounce } from '../../../../commons/hooks/useDebounce/useDebounce';
import useStore from '../../../../store/index';
import { FlexContainer, Select, StyledInput, Option } from './Filters.styles';
import theme from '../../../../theme';
import { Tooltip } from '@chakra-ui/react';

const Filters: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const {
        setSearchString,
        searchString,
        fetchClients,
        setFilters,
        filters,
        excursions,
        fetchExcursions,
    } = useStore((state) => ({
        setSearchString: state.setSearchString,
        searchString: state.searchString,
        fetchClients: state.fetchClients,
        fetchExcursions: state.fetchExcursions,
        setFilters: state.setFilters,
        filters: state.filters,
        excursions: state.excursions,
    }));

    useEffect(() => {
        if (isDropdownOpen && excursions.length === 0) {
            fetchExcursions();
        }
    }, [isDropdownOpen, excursions.length, fetchExcursions]);

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

    const handleDropdownFocus = () => {
        setIsDropdownOpen(true);
    };

    const handleDropdownBlur = () => {
        setIsDropdownOpen(false);
    };

    const getPlaceholderFilter = () => {
        const excursionTypeFilter: { [key: number]: string } = {
            1: 'Filtre por caravana',
        };
        console.log(excursionTypeFilter[filters.excursionType]);
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
            <Tooltip hasArrow label="Filtrar por caravana">
                <Select
                    rootProps={{ style: { width: 'fit-content' } }}
                    onChange={handleChange}
                    value={filters.excursionType}
                    onFocus={handleDropdownFocus}
                    onBlur={handleDropdownBlur}
                    focusBorderColor={theme.colors.customGreen}
                >
                    {excursions.length === 0 && (
                        <Option value="1" disabled>
                            {getPlaceholderFilter()}
                        </Option>
                    )}
                    {excursions.map((excursion) => (
                        <Option key={excursion.id} value={excursion.id}>
                            {excursion.nome}
                        </Option>
                    ))}
                </Select>
            </Tooltip>
        </FlexContainer>
    );
};

export default Filters;
