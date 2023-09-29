import Pagination from '../../../../commons/ui/Pagination/Pagination';
import useStore from '../../../../store/index';

const Actions: React.FC = () => {

    const [page, setPage, totalPages] = useStore(state => ([
        state.page,
        state.setPage,
        state.totalPages
    ]));

    const handlePageChange = (selectedPage: {selected: number}) => {
        const {selected} = selectedPage;
        setPage(selected);
    }

    return (
        <Pagination pageCount={totalPages} onPageChange={handlePageChange} initialPage={page}/>
    )
};

export default Actions;