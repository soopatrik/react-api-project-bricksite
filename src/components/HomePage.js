import SearchBar from './SearchBar';
import CryptoList from './CryptoList';
import Card from './Card';

const HomePage = () => {
    return (
        <Card className="homepage">
            <h1>Cryptocurrency Tracker</h1>  
            <p>Search and explore live cryptocurrency prices, market data, and more.</p>
            <SearchBar />
            <div className="top-cryptocurrencies">
                <CryptoList />
            </div>
        </Card>
    );
};

export default HomePage;