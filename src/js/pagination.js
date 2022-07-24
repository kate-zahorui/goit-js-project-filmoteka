import Pagination from 'tui-pagination';

// const options = {
//   totalItems: 1000,
//   itemsPerPage: 20,
//   visiblePages: 5,
//   centerAlign: true,
// };

const container = document.getElementById('tui-pagination-container');
// export const instance = new Pagination(container, options);

export default function getPagination(total) {
  const options = {
    totalItems: total,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
  };
  return new Pagination(container, options);
}
