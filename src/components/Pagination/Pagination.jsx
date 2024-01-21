import React from "react";
import Link from "next/link";

const Pagination = ({ page, setPage, lastPage, url }) => {
  const navigate = [page - 1, page, page + 1];
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-3/4 flex justify-center items-center gap-2">
        {page === 1 ? null : (
          <Link
            href={`${url}?page=${page - 1}`}
            onClick={() => setPage((curr) => curr - 1)}
            className="border text-white min-h-10 min-w-10 p-1 flex justify-center items-center"
          >
            Prev
          </Link>
        )}
        <Link
          href={`${url}?page=${1}`}
          onClick={() => setPage(1)}
          className={`border text-white min-h-10 min-w-10 p-1 flex justify-center items-center ${
            page === 1
              ? "border-2 border-red-500 font-semibold text-red-500"
              : null
          }`}
        >
          1
        </Link>
        {navigate.map((nav, index) => {
          return nav > 1 ? (
            <Link
              onClick={() => setPage(nav)}
              key={index}
              href={`${url}?page=${nav}`}
              className={`border text-white min-h-10 min-w-10 p-1 flex justify-center items-center ${
                nav === page
                  ? "border-2 border-red-500 font-semibold text-red-500"
                  : null
              }`}
            >
              {nav}
            </Link>
          ) : null;
        })}

        <Link
          onClick={() => setPage(lastPage)}
          href={`${url}?page=${lastPage}`}
          className={`border text-white min-h-10 min-w-10 p-1 flex justify-center items-center ${
            page === lastPage
              ? "border-2 border-red-500 font-semibold text-red-500"
              : null
          }`}
        >
          {lastPage}
        </Link>
        {page === lastPage ? null : (
          <Link
            href={`${url}?page=${page + 1}`}
            onClick={() => setPage((curr) => curr + 1)}
            className="border text-white min-h-10 min-w-10 p-1 flex justify-center items-center"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
