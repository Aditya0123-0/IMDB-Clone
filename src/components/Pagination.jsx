import React from "react";

function Pagination({handlePrev, handleNext, page}) {
  return (
  <div className="bg-blue-400 p-4 mt-8 flex justify-center">
    <div onClick={handlePrev}><i className="fa-solid fa-angle-left"></i></div>
    <div>{page}</div>
    <div onClick={handleNext}><i className="fa-solid fa-angle-right"></i></div>
  </div>
  )
}

export default Pagination;
