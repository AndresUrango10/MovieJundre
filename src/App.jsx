import { useState } from 'react';
import { useMovies } from './hooks/GetMovies';
import MovieGrid from './components/MovieGrid';
import Modal from './components/Modal';
import Navmenu from './components/Navmenu';
import Pagination from './components/Pagination';
import '../src/App.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // 👈 nuevo estado de página

  const { movies, loading, error, totalPages } = useMovies(currentPage); // 👈 le pasamos page

  return (

    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black text-white">
      <Navmenu />
      <div className="flex-1 p-4">
        {loading && <p className="text-center mt-12">Cargando películas...</p>}
        {error && <p className="text-center mt-12 text-red-400">Error: {error.message}</p>}
        {!loading && !error && (
          <>
            <MovieGrid movies={movies} onSelectMovie={setSelectedMovie} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={page => { setCurrentPage(page); setSelectedMovie(null); }} />
            <Modal isOpen={Boolean(selectedMovie)} onClose={() => setSelectedMovie(null)}>
              {selectedMovie && (
                <div className="text-white">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{selectedMovie.title}</h2>
                  <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path || selectedMovie.poster_path}`} alt={selectedMovie.title} className="w-full h-auto mb-4 rounded-lg" />
                  <p className="text-sm sm:text-base mb-4">{selectedMovie.overview}</p>
                  <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm">
                    <span>⭐ {selectedMovie.vote_average.toFixed(1)}</span>
                    <span>{new Date(selectedMovie.release_date).toLocaleDateString()}</span>
                  </div>
                </div>
              )}
            </Modal>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
