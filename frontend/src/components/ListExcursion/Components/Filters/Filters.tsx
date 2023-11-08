import { useDebounce } from '../../../../commons/hooks/useDebounce/useDebounce';
import useStore from '../../../../store/index';
import {
    FlexContainer,
    StyledInput,
} from '../../../ListClients/components/Filters/Filters.styles';

const Filters: React.FC = () => {
    const { setSearchString, searchString, fetchExcursion } = useStore(
        (state) => ({
            setSearchString: state.setSearchString,
            searchString: state.searchString,
            fetchExcursion: state.fetchExcursions,
        })
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
        debouncedHandleInputChange();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            fetchExcursion();
        }
    };

    const debouncedHandleInputChange = useDebounce(fetchExcursion, 500);

    return (
        <FlexContainer>
            <StyledInput
                type="text"
                value={searchString}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Pesquise Caravanas"
            />
        </FlexContainer>
    );
};

export default Filters;
