import React from "react";

export default function MovieCard({ movie, onClick }) {
    const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.png";
    return (
        <div onClick={onClick} className="cursor-pointer relative group rounded-xl overflow-hidden shadow-md bg-gray-800 transition-transform hover:scale-105">
            <img src={posterUrl} alt={movie.title} className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-3 sm:p-4 flex flex-col justify-end">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1">{movie.title}</h3>
                <p className="text-gray-200 text-xs sm:text-sm md:text-base line-clamp-3 mb-2">{movie.overview}</p>
                <div className="flex items-center justify-between text-gray-100 text-xs sm:text-sm">
                    <span>⭐ {movie.vote_average.toFixed(1)}</span>
                    <span>{new Date(movie.release_date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}
