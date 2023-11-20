import { useEffect, useState } from 'react';
import { useDebounce } from '../../../../commons/hooks/useDebounce/useDebounce';
import useStore from '../../../../store/index';
import { FlexContainer, Select, StyledInput, Option } from './Filters.styles';
import theme from '../../../../theme';
import { Box, Switch, Tooltip, Text, Container } from '@chakra-ui/react';
import { Button } from '../../../../commons/ui/Button/Button.styles';
import useDevice from '../../../../commons/hooks/useDevice/useDevice';

interface FiltersProps {
    actionButton?: () => void;
    actionButtonDisabled?: boolean;
}

const Filters: React.FC<FiltersProps> = ({
    actionButton,
    actionButtonDisabled,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { isPhone } = useDevice();

    const {
        setSearchString,
        searchString,
        fetchClients,
        setFilters,
        filters,
        excursions,
        fetchExcursionsBySearch,
    } = useStore((state) => ({
        setSearchString: state.setSearchString,
        searchString: state.searchString,
        fetchClients: state.fetchClients,
        fetchExcursionsBySearch: state.fetchExcursionsBySearch,
        setFilters: state.setFilters,
        filters: state.filters,
        excursions: state.excursions,
    }));

    useEffect(() => {
        if (isDropdownOpen && excursions.length === 0) {
            fetchExcursionsBySearch();
        }
    }, [isDropdownOpen, excursions.length, fetchExcursionsBySearch]);

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
        setFilters({
            excursionType: +event.target.value,
            ativo: filters.ativo,
        });
        fetchClients();
    };

    const handleSwitchChange = () => {
        if (filters.ativo !== '') {
            setFilters({ ...filters, ativo: '' });
        } else {
            setFilters({ ...filters, ativo: 'true' });
        }
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
        return excursionTypeFilter[filters.excursionType];
    };

    if (isPhone) {
        return (
            <FlexContainer>
                <StyledInput
                    type="text"
                    value={searchString}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Pesquise usuários"
                />
                <Container display={'flex'} gap={'1rem'} alignItems={'center'} flexDirection={'column'}>
                    <Box display={'flex'} gap={'1rem'} alignItems={'center'}>
                        <Text>Todos</Text>
                        <Switch
                            size="md"
                            colorScheme="green"
                            onChange={handleSwitchChange}
                            isChecked={filters.ativo?.length !== 0}
                        />
                        <Text>Ativos</Text>
                    </Box>
                    <Box display={'flex'} gap={'1rem'} alignItems={'center'}>
                        {actionButton && (
                            <Button
                                colorScheme={theme.colors.customGreen}
                                textColor={'white'}
                                onClick={actionButton}
                                _hover={{ filter: 'brightness(80%)' }}
                                isDisabled={actionButtonDisabled}
                            >
                                Fazer Checkout
                            </Button>
                        )}
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
                                    <Option
                                        key={excursion.id}
                                        value={excursion.id}
                                    >
                                        {excursion.nome}
                                    </Option>
                                ))}
                            </Select>
                        </Tooltip>
                    </Box>
                </Container>
            </FlexContainer>
        );
    }

    return (
        <FlexContainer>
            <StyledInput
                type="text"
                value={searchString}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Pesquise usuários"
            />
            <Box display={'flex'} gap={'1rem'} alignItems={'center'}>
                <Text>Todos</Text>
                <Switch
                    size="md"
                    colorScheme="green"
                    onChange={handleSwitchChange}
                    isChecked={filters.ativo?.length !== 0}
                />
                <Text>Ativos</Text>
                {actionButton && (
                    <Button
                        colorScheme={theme.colors.customGreen}
                        textColor={'white'}
                        onClick={actionButton}
                        _hover={{ filter: 'brightness(80%)' }}
                        isDisabled={actionButtonDisabled}
                    >
                        Fazer Checkout
                    </Button>
                )}
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
            </Box>
        </FlexContainer>
    );
};

export default Filters;
