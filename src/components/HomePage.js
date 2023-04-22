import CryptoList from "./CryptoList";
import Card from "./Card";
import "./HomePage.css";

const HomePage = ({ children }) => {
  const backgroundImage = {
    backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.8), rgba(30, 30, 30, 0.8)), url('https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2097&q=80')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="homepage">
      <div className="homepage-header" style={backgroundImage}>
        <Card>
          <h1>Cryptocurrency Tracker</h1>
          <p>
            Search and explore live cryptocurrency prices, market data, and
            more.
          </p>
        </Card>
      </div>
      <div className="top-cryptocurrencies">
        <CryptoList />
      </div>
      {children}
    </div>
  );
};

export default HomePage;
