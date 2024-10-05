import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider, ChainId, useNetwork } from "@thirdweb-dev/react";
import "./index.css";
import App from "./App";
import { StateContextProvider } from "./context";
import { Sepolia } from "@thirdweb-dev/chains";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider supportedChains={[Sepolia]} desiredChainId={11155111}>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
