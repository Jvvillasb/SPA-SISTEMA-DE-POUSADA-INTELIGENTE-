import { Button } from '../../../../commons/ui/Button/Button.styles';
import { useDebounce } from '../../../../commons/hooks/useDebounce/useDebounce';
import useStore from '../../../../store/index';
import { FlexContainer, Select, StyledInput } from './Filters.styles';
import theme from '../../../../theme';
import { Box } from '@chakra-ui/react';

interface FiltersProps {
    action: () => void;
}

const Filters: React.FC<FiltersProps> = ({ action }) => {
    const { setSearchString, searchString, fetchClients, setFilters } =
        useStore((state) => ({
            setSearchString: state.setSearchString,
            searchString: state.searchString,
            fetchClients: state.fetchClients,
            setFilters: state.setFilters,
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

    return (
        <FlexContainer>
            <Box>
                <StyledInput
                    type="text"
                    value={searchString}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Pesquise usuários"
                />

                <Select placeholder="Filtrar por" onChange={handleChange}>
                    <option value="2">Com caravana</option>
                    <option value="1">Sem caravana</option>
                </Select>
            </Box>
            <Button colorScheme={theme.colors.customGreen} onClick={action}>
                Adicionar Cliente
            </Button>
        </FlexContainer>
    );
};

export default Filters;
