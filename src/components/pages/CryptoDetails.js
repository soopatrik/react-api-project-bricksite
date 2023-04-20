import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./CryptoDetails.css";
import Card from "../Card";

const CryptoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cryptoDetails, setCryptoDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        setCryptoDetails(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Card className="crypto-details">
      <button onClick={() => navigate(-1)} className="back-button">
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </button>
      <div className="header-container">
        <h1>Cryptocurrency Details</h1>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cryptoDetails ? (
        <div>
          <div className="icon-name-container">
            <img
              className="crypto-details-image"
              src={cryptoDetails.image.large}
              alt={`${cryptoDetails.name} logo`}
            />
            <h2>
              {cryptoDetails.name} ({cryptoDetails.symbol.toUpperCase()})
            </h2>
          </div>
          <div className="info">
            <div className="market-data-field">
              <p>
                Current Price: $
                {cryptoDetails.market_data.current_price.usd.toFixed(2)}
              </p>
              <p>
                Market Cap: $
                {cryptoDetails.market_data.market_cap.usd.toLocaleString()}
              </p>
              <p>
                Total Volume: $
                {cryptoDetails.market_data.total_volume.usd.toLocaleString()}
              </p>
              <p>
                Price Change (24h):{" "}
                {cryptoDetails.market_data.price_change_percentage_24h.toFixed(
                  2
                )}
                %
              </p>
              <p>Rank: {cryptoDetails.market_cap_rank}</p>
            </div>
          </div>
        </div>
      ) : null}
    </Card>
  );
};

export default CryptoDetails;
