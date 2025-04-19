import { useState, useEffect } from "react";
import axios from "axios";

export function useMovies(page = 1) {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovies() {
            setLoading(true);
            try {
                const response = await axios.get(
                    "https://api.themoviedb.org/3/discover/movie",
                    {
                        params: {
                            api_key: "b867df3934a1aa5a300bb936454c6888",
                            language: "es-ES",
                            page,
                        },
                    }
                );
                // Limit to first 10 movies
                setMovies(response.data.results.slice(0, 10));
                setTotalPages(response.data.total_pages);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, [page]);

    return { movies, loading, error, totalPages };
}

