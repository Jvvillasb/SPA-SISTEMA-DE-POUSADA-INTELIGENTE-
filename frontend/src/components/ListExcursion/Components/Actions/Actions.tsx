import Pagination from '../../../../commons/ui/Pagination/Pagination';
import useStore from '../../../../store/index';

const Actions: React.FC = () => {
    const [pageExcursion, setPageExcursion, totalPages] = useStore((state) => [
        state.pageExcursion,
        state.setPageExcursion,
        state.totalPages,
    ]);

    const handlePageChange = (selectedPage: { selected: number }) => {
        const { selected } = selectedPage;
        setPageExcursion(selected);
    };

    return (
        <Pagination
            pageCount={totalPages}
            onPageChange={handlePageChange}
            initialPage={pageExcursion}
        />
    );
};

export default Actions;
