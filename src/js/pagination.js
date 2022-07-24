import Pagination from 'tui-pagination';

const options = {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
};

const container = document.getElementById('tui-pagination-container');
export const instance = new Pagination(container, options);
