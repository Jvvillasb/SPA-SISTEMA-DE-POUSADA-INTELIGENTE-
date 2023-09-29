import { FormEvent, useRef } from "react";
import { useDebounce } from "../../../../commons/hooks/useDebounce";
import useStore from "../../../../store/index";
import { StyledInput } from "./Filters.styles";

const Filters = () => {

    const {setSearchString, searchString, fetchClients} = useStore(state => ({setSearchString: state.setSearchString, searchString: state.searchString, fetchClients: state.fetchClients}));


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchString(e.target.value);
            debouncedHandleInputChange();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            fetchClients();
        }
    }

    const debouncedHandleInputChange = useDebounce(fetchClients, 500);

    return (
        <>
            <StyledInput type="text" value={searchString} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
        </>
    )
}

export default Filters