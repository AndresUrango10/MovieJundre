export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const MAX_VISIBLE_PAGES = 5;

    const getPageNumbers = () => {
        let startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
        let endPage = startPage + MAX_VISIBLE_PAGES - 1;
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
        }
        const pages = [];
        for (let i = startPage; i <= endPage; i++) pages.push(i);
        return pages;
    };

    return (
        <div className="flex justify-center w-full mt-6">
            <div className="flex items-center gap-2 flex-wrap">
                <button
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    ⬅️ Anterior
                </button>
                {getPageNumbers().map(page => (
                    <button
                        key={page}
                        className={`px-3 py-1 rounded text-sm font-medium ${page === currentPage ? "bg-indigo-500 text-white" : "bg-gray-800 hover:bg-gray-700"}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Siguiente ➡️
                </button>
            </div>
        </div>
    );
}
