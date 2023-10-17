import ReactPaginate from 'react-paginate';
import { StyledPagination } from './Pagination.styles'; 

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: {selected: number}) => void;
  initialPage: number;
}

const Pagination = ({pageCount, onPageChange, initialPage}: PaginationProps) => {
  return (
    <StyledPagination>
      <ReactPaginate
        breakLabel="..."
        nextLabel={null}
        onPageChange={onPageChange}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel={null}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        containerClassName="pagination"
        pageClassName="pagination-item" // Vamos usar string simples aqui
        pageLinkClassName="page-link"
        breakClassName="pagination-item ellipsis"
        activeClassName="active"
        initialPage={initialPage}
      />
    </StyledPagination>
  );
}

export default Pagination;
