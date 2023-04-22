import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CryptoList.css";
import "./SearchBar.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); // error handling
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // From what I gathered, Axios is the most suitable choice for fetching data from APIs
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        setCryptos(response.data); // CoinGecko was chosen due to the comprehensive info on the top cryptocurrencies, plus it's free to use
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="crypto-list">
      <h1>Top Cryptocurrencies</h1>
      <SearchBar search={search} setSearch={setSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {cryptos
          .filter((crypto) =>
            crypto.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((crypto) => (
            <li key={crypto.id} className="hoverable">
              <Link to={`/details/${crypto.id}`} className="crypto-link">
                <img src={crypto.image} alt={crypto.name} />
                <h3>{crypto.name}</h3>
                <p>Rank: {crypto.market_cap_rank}</p>
                <p>Current Price: ${crypto.current_price.toFixed(2)}</p>
              </Link>
            </li>
          ))}
      </ul>
    </Card>
  );
};

export default CryptoList;
