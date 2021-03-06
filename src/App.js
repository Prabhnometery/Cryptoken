import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

// Import Components
import Header from "./components/Header";
import PunkList from "./components/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  // API CALL
  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xFc129B9daffBB97464488c12664593c3632df8DF"
      )
      console.log(openSeaData.data.assets);
      setPunkListData(openSeaData.data.assets);
    };
    return getMyNfts;
  }, []);

  return (
    <div className="app">
      <Header />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
