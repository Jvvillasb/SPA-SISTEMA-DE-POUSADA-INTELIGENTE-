import { useDebounce } from '../../../../commons/hooks/useDebounce/useDebounce';
import useStore from '../../../../store/index';
import {
    FlexContainer,
    StyledInput,
} from '../../../ListClients/components/Filters/Filters.styles';

const Filters: React.FC = () => {
    const { setsearchStringExcursion, searchStringExcursion, fetchExcursion } =
        useStore((state) => ({
            setsearchStringExcursion: state.setsearchStringExcursion,
            searchStringExcursion: state.searchStringExcursion,
            fetchExcursion: state.fetchExcursions,
        }));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setsearchStringExcursion(e.target.value);
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
                value={searchStringExcursion}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Pesquise Caravanas"
            />
        </FlexContainer>
    );
};

export default Filters;
