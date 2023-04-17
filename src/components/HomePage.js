import React from 'react';
import SearchBar from './SearchBar';

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Cryptocurrency Tracker</h1>
            <p>Search and explore live cryptocurrency prices, market data, and more.</p>
            <SearchBar />
        </div>
    );
};

export default HomePage