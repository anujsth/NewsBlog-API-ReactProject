import React, { useState } from "react";
import "./Pagination.css";
const PagitnationButton = ({ handlePageChange, totalPage, currentPage }) => {
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const handleClick = (page) => {
    setCurrentPageState(page);
    handlePageChange(page);
  };
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPage - 1;
  return (
    <div className="flex justify-center mb-10 mt-5">
      <div className="pagination">
        {/* <button onClick={() => props.increamentHandler(1)}>
          {props.button + 1}
        </button>
        <button onClick={() => props.increamentHandler(2)}>
          {props.button + 2}
        </button>
        <button onClick={() => props.increamentHandler(3)}>
          {props.button + 3}
        </button> */}
        <button
          disabled={isFirstPage}
          onClick={() => {
            handleClick(currentPageState - 1);
          }}
        >
          {`<<`}Previous
        </button>
        <button
          disabled={isLastPage}
          onClick={() => {
            handleClick(currentPageState + 1);
          }}
        >
          Next{`>>`}
        </button>
      </div>
    </div>
  );
};

export default PagitnationButton;
