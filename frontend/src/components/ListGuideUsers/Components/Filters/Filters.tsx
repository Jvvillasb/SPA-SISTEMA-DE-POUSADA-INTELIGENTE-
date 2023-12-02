import { useDebounce } from '../../../../commons/hooks/useDebounce/useDebounce';
import useStore from '../../../../store/index';
import {
    FlexContainer,
    StyledInput,
} from '../../../ListClients/components/Filters/Filters.styles';

const Filters: React.FC = () => {
    const { setsearchStringGuideUser, searchStringGuideUser, fetchGuideUser } =
        useStore((state) => ({
            setsearchStringGuideUser: state.setsearchStringGuideUser,
            searchStringGuideUser: state.searchStringGuideUser,
            fetchGuideUser: state.fetchGuideUser,
            fetchExcursions: state.fetchExcursions,
            setFilters: state.setFilters,
            filters: state.filters,
            excursions: state.excursions,
        }));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setsearchStringGuideUser(e.target.value);
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
                value={searchStringGuideUser}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Pesquise Guias"
            />
        </FlexContainer>
    );
};

export default Filters;
