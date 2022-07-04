const usePagination = ({
  totalPages,
  currentPage
}) => {
  const getPages = () => {
    const items = [];

    for (let index = 0; index < totalPages; index++) {
      items.push({
        numPage: index + 1
      });
    }

    return items;
  };

  return {
    getPages
  };
};

export default usePagination;
