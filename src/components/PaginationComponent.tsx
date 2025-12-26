interface PaginationComponentProps {
  totalCards: number;
  cardsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent = ({
  totalCards,
  cardsPerPage,
  currentPage,
  onPageChange,
}: PaginationComponentProps) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  // If the number of pages is less than or equal to 1, there is no need to display the pagination
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center mt-12 gap-2">
      {/* PREVIOUS BUTTON  */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 font-medium rounded-lg border border-brand-navy text-brand-navy 
        disabled:opacity-30 disabled:cursor-not-allowed
         hover:bg-brand-navy hover:text-white transition-all duration-300 cursor-pointer"
      >
        Previous
      </button>

      {/* PAGES NUMBERS */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            className={`w-10 h-10 rounded-lg font-bold transition-all cursor-pointer ${
              currentPage === i + 1
                ? "bg-brand-navy text-white shadow-md"
                : "bg-white border border-brand-gray text-brand-navy hover:bg-brand-light/30"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* NEXT BUTTON */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 font-medium not-visited:rounded-lg border border-brand-navy text-brand-navy
         disabled:opacity-30 disabled:cursor-not-allowed
          hover:bg-brand-navy hover:text-white transition-all duration-300 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
