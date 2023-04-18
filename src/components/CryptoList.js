import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CryptoList.css';
import Card from './Card';

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => { // From what I gathered, Axios is the most suitable choice for fetching data from APIs
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        setCryptos(response.data);  // CoinGecko was chosen due to the comprehensive info on the top cryptocurrencies, plus it's free to use
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className='crypto-list'>
      <h1>Top Cryptocurrencies</h1>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.id} className='hoverable'>
          <img src={crypto.image} alt={`${crypto.name} logo`} />
          <div>{crypto.name}</div>
          <div>{crypto.symbol.toUpperCase()}</div>
          <div>${crypto.current_price.toFixed(2)}</div>
        </li>
        ))}
      </ul>
    </Card>
  );
};

export default CryptoList;
