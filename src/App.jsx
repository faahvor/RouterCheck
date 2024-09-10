import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

const movies = [
    {
        id: 1,
        title: "Inception",
        description: "A mind-bending thriller where dreams are real.",
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
        id: 2,
        title: "The Matrix",
        description: "A hacker discovers the reality he's living in is a simulation.",
        trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
    }
    // Add more movies here
];

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MovieList movies={movies} />} />
                <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
            </Routes>
        </Router>
    );
}

export default App;
