import React from 'react'

const PageButton = ({ currentPage, totalPages, setCurrentPage }) => {

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
  
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flex align-middle justify-center mt-2 w-100">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 mr-2 text-gray-600 hover:text-gray-900"
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Next
            </button>
        </div>
    )
}

export default PageButton;