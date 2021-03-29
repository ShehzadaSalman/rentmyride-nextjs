import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const PaginationComponent = ({ data }) => {
  const router = useRouter();
  const [pagesArray, setPagesArray] = useState([]);
  const { currentPage, totalPages, pagesList } = data;

  useEffect(() => {
    // availablePages();
  }, []);

  const changePage = (event, id) => {
    event.preventDefault();
    router.push({
      pathname: "/categorypage",
      query: { page: id },
    });
  };

  const nextPage = (event) => {
    event.preventDefault();
    if (currentPage <= pagesList.length) {
      router.push({
        pathname: "/categorypage",
        query: { page: currentPage + 1 },
      });
    } else {
    }
  };

  const prevPage = (event) => {
    event.preventDefault();
    if (currentPage <= pagesList.length) {
      router.push({
        pathname: "/categorypage",
        query: { page: currentPage - 1 },
      });
    } else {
    }
  };

  //   const availablePages = () => {
  //     for (let i = 1; i <= totalPages; i++) {
  //       setPagesArray([...pagesArray, i]);
  //       console.log(i);
  //       console.log(pagesArray);
  //     }
  //   };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={prevPage}>
              Previous
            </a>
          </li>
          {/* <AvailablePages /> */}
          {pagesList.map((li, key) => (
            <li key={key} className="page-item">
              <a
                className="page-link"
                onClick={(e) => changePage(e, li)}
                href="#"
              >
                {li}
              </a>
            </li>
          ))}
          {/*  Available pages end here */}
          <li className="page-item">
            <a className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PaginationComponent;
