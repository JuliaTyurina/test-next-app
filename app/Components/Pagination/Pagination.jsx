import Styles from '@/app/Components/Pagination/Pagination.module.css'

export function Pagination (props) {
    
  const handleNextPage = () => {
    if (props.currentPage < props.totalPages) {
        props.onPageChange(props.currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (props.currentPage > 1) {
        props.onPageChange(props.currentPage - 1);
    }
  };

  return (
    <div className={Styles["pagination"]}>
      <button onClick={handlePrevPage} disabled={props.currentPage === 1}>Предыдущая страница</button>
      <div>
        Страница {`${props.currentPage} из ${props.totalPages}`}
      </div>
      <button onClick={handleNextPage} disabled={props.currentPage === props.totalPages}>Следующая страница</button>
    </div>
  );
}
