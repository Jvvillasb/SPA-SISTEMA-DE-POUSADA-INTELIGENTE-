import ReactPaginate from 'react-paginate';
import Styles from './Pagination.module.scss';

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: {selected: number}) => void;
  initialPage: number;
}


const Pagination = ({pageCount, onPageChange, initialPage}: PaginationProps) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Avançar"
        onPageChange={onPageChange}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="Voltar"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        className={Styles.pagination}
        pageClassName={Styles.items}
        pageLinkClassName={Styles.teste}
        previousClassName={Styles.actions}
        nextClassName={Styles.actions}
        breakClassName={Styles.ellipsis}
        activeClassName={Styles.active}
        initialPage={initialPage}
      />
    </>
  );
}

export default Pagination;