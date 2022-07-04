import PropTypes from 'prop-types';
import usePagination from '@hooks/usePagination';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import PaginationStyled from './pagination.styled';

const Pagination = ({
  totalDocs,
  totalPages,
  currentPage,
  onPageChange,
  next,
  prev
}) => {
  const { getPages } = usePagination({ totalPages, currentPage });

  if (totalDocs === 0) {
    return null;
  }

  const pages = getPages();

  return (
    <PaginationStyled.Wrapper>
      <PaginationStyled.Button
        disabled={prev === null}
        onClick={() => onPageChange(prev)}>
        <BsChevronLeft />
      </PaginationStyled.Button>

      {pages.map((page, key) => (
        <PaginationStyled.Button
          active={currentPage === page.numPage}
          key={`pagination-item-${key}`}
          onClick={() => onPageChange(page.numPage)}
        >
          {page.numPage}
        </PaginationStyled.Button>
      ))}

      <PaginationStyled.Button
        disabled={next === null}
        onClick={() => onPageChange(next)}>
        <BsChevronRight />
      </PaginationStyled.Button>
    </PaginationStyled.Wrapper>
  );
};

Pagination.propTypes = {
  totalDocs: PropTypes.any,
  totalPages: PropTypes.any,
  currentPage: PropTypes.any,
  onPageChange: PropTypes.any,
  next: PropTypes.any,
  prev: PropTypes.any
};

export default Pagination;
