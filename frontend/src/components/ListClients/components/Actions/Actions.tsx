import useStore from '../../../../store/index';

import Styles from './Actions.module.scss';

const Actions: React.FC = () => {
<<<<<<< Updated upstream

    const [last, first, page, setPage] = useStore(state => ([
        state.last,
        state.first,
        state.page,
        state.setPage,
    ]));

    const nextHandler = () => {
        setPage(page + 1);
    };
    
    const backHandler = () => {
        setPage(page - 1);
    };

    return (
        <div className={Styles.clientListActions}>
            <button className={Styles.clientListActionsButton} disabled={first}
                onClick={backHandler}>
                Voltar
            </button>
            <button className={Styles.clientListActionsButton} disabled={last}
                onClick={nextHandler}>
                Avançar
            </button>
        </div>
    )
=======
    const [page, setPage, totalPages] = useStore((state) => [
        state.page,
        state.setPage,
        state.totalPages,
    ]);

    const handlePageChange = (selectedPage: { selected: number }) => {
        const { selected } = selectedPage;
        setPage(selected);
    };

    return (
        <Pagination
            pageCount={totalPages}
            onPageChange={handlePageChange}
            initialPage={page}
        />
    );
>>>>>>> Stashed changes
};

export default Actions;
