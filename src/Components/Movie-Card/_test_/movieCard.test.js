import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from '../movieCard.jsx';

it('It renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MovieCard />, div)
})