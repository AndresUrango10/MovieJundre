import React from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, onSelectMovie }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6 p-2 sm:p-4">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClick={() => onSelectMovie(movie)}
                />
            ))}
        </div>
    );
}
