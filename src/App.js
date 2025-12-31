import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import BlankLayout from "./layouts/BlankLayout";

import Home from "./pages/Home";
import SellOnSamMarket from "./pages/SellOnSamMarket";
import SellOnSamMarketStart from "./pages/SellOnSamMarketStart";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/sell"
        element={
          <MainLayout>
            <SellOnSamMarket />
          </MainLayout>
        }
      />

      <Route
        path="/sell/start"
        element={
          <BlankLayout>
            <SellOnSamMarketStart />
          </BlankLayout>
        }
      />

    </Routes>
  );
}

export default App;
