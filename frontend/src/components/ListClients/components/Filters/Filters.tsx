import { Button } from '../../../../commons/ui/Button/Button.styles';
import { useDebounce } from '../../../../commons/hooks/useDebounce/useDebounce';
import useStore from '../../../../store/index';
import { FlexContainer, StyledInput } from './Filters.styles';
import theme from '../../../../theme';

interface FiltersProps {
    action: () => void;
}

const Filters: React.FC<FiltersProps> = ({ action }) => {
    const { setSearchString, searchString, fetchClients } = useStore(
        (state) => ({
            setSearchString: state.setSearchString,
            searchString: state.searchString,
            fetchClients: state.fetchClients,
        })
    );

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

    return (
        <FlexContainer>
            <StyledInput
                type="text"
                value={searchString}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Pesquise usuários"
            />
            <Button colorScheme={theme.colors.customGreen} onClick={action}>
                Adicionar Cliente
            </Button>
        </FlexContainer>
    );
};

export default Filters;
