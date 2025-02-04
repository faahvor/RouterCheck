import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <h2>{movie.title}</h2>
            <Link to={`/movies/${movie.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default MovieCard;
