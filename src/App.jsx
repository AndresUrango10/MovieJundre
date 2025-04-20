import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GetMovies } from './hooks/GetMovies';
import Sidebar from './components/Sidebar';
import MovieGrid from './components/MovieGrid';
import MovieChart from './components/MovieChart';
import MoviePieChart from './components/MoviePieChart';
import Pagination from './components/Pagination';
import Modal from './components/Modal';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movies, loading, error, totalPages } = GetMovies(page);

  return (
    <BrowserRouter>
      <div className={`flex min-h-screen overflow-hidden ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
        <Sidebar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1 p-4 overflow-y-auto">
          <Routes>
            {/* Redirige / a /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/languages" element={<MoviePieChart movies={movies} />} />
            <Route path="/home" element={
              <>  {/* Home view */}
                {loading && <p className="text-center mt-12">Cargando películas...</p>}
                {error && <p className="text-center mt-12 text-red-400">Error: {error.message}</p>}
                {!loading && !error && (
                  <>
                    <MovieGrid movies={movies} onSelectMovie={setSelectedMovie} />
                    <Pagination currentPage={page} totalPages={totalPages} onPageChange={p => { setPage(p); setSelectedMovie(null); }} />
                    <Modal isOpen={Boolean(selectedMovie)} onClose={() => setSelectedMovie(null)}>
                      {selectedMovie && (
                        <div>
                          <h2 className="text-2xl font-bold mb-4">{selectedMovie.title}</h2>
                          <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path || selectedMovie.poster_path}`} alt={selectedMovie.title} className="w-full h-auto rounded mb-4" />
                          <p className="mb-2">{selectedMovie.overview}</p>
                          <div className="flex justify-between text-sm">
                            <span>⭐ {selectedMovie.vote_average.toFixed(1)}</span>
                            <span>{new Date(selectedMovie.release_date).toLocaleDateString('es-ES')}</span>
                          </div>
                        </div>
                      )}
                    </Modal>
                  </>
                )}
              </>
            } />

            <Route path="/charts" element={
              <>
                <MovieChart movies={movies} />
              </>
            } />

            <Route path="*" element={<p className="text-center mt-12">Página no encontrada</p>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}