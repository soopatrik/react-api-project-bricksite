import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoDetails from "./components/pages/CryptoDetails";
import HomePage from "./components/HomePage";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* 
Instead of the weather App, I decided to make something that's closer to my interest. I am working on two projects simultaneously,
one of which is a training project, where I try everything out, and then after research and dummy project changes, I work on this one.
The final version of the App (A cryptocurrency tracker) should be able to let the user search and explore live prices, market data, and 
all the info one might need about selected currency. As said, there won't be a lot of functions, but I believe during the trial and 
error process, I will be able to learn and deliver a stable and interesting project. 
*/

// The Public API has a rate limit of 10-30 calls/minute, so after reaching a certain number of requests, network error appears.

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<CryptoDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
