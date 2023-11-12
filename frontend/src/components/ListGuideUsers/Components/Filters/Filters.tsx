import { useDebounce } from '../../../../commons/hooks/useDebounce/useDebounce';
import useStore from '../../../../store/index';
import {
    FlexContainer,
    StyledInput,
} from '../../../ListClients/components/Filters/Filters.styles';

const Filters: React.FC = () => {
    const { setSearchString, searchString, fetchGuideUser } = useStore(
        (state) => ({
            setSearchString: state.setSearchString,
            searchString: state.searchString,
            fetchGuideUser: state.fetchGuideUser,
            fetchExcursions: state.fetchExcursions,
            setFilters: state.setFilters,
            filters: state.filters,
            excursions: state.excursions,
        })
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
        debouncedHandleInputChange();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            fetchGuideUser();
        }
    };

    const debouncedHandleInputChange = useDebounce(fetchGuideUser, 500);

    return (
        <FlexContainer>
            <StyledInput
                type="text"
                value={searchString}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Pesquise Guias"
            />
        </FlexContainer>
    );
};

export default Filters;
