import Link from "next/link";

const Pagination = (props) => {
  const { next, prev, route } = props;

  if (next) {
    const lastNext = next.split("=");
    const nextPage = lastNext[lastNext.length - 1];
    var nextRoute = `/${route}?page=${nextPage}`;
  }

  if (prev) {
    const lastPrev = prev.split("=");
    const prevPage = lastPrev[lastPrev.length - 1];
    var prevRoute = `/${route}?page=${prevPage}`;
  }
  return (
    <div className="contentCenter">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {prevRoute && (
            <Link href={prevRoute}>
              <li className="page-item">
                <a className="page-link">&lt; Previous</a>
              </li>
            </Link>
          )}

          {nextRoute && (
            <Link href={nextRoute}>
              <li className="page-item">
                <a className="page-link">Next &gt;</a>
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
