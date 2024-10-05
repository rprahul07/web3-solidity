import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  CampaignDetails,
  CreateCampaign,
  Profile,
  Home,
  IDcard,
} from "./pages";
import { Navbar, Sidebar } from "./components";
import { useStateContext } from "./context";
import { ViewCampaigns } from "./pages";
import Logout from "./pages/Logout";
import { TransactionHistory } from "./pages";
import Intro from "./pages/Intro";

const App = () => {
  const { address } = useStateContext();

  const checkAddress = () => {
    return (
      address &&
      address.toLowerCase() === "0x906ad8f65f9ca8b8c858e655a3462d6815ee78aa"
    );
  };

  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route
            path="/admin"
            element={
              checkAddress() ? <Home /> : <Navigate to="/profile_volenteer" />
            }
          />
          <Route
            path="/profile_volenteer"
            element={checkAddress() ? <Navigate to="/admin" /> : <Profile />}
          />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route
            path="/card"
            element={
              <IDcard address="0x906ad8f65f9Ca8B8C858e655a3462d6815eE78aa" />
            }
          />
          <Route path="/logout" element={<Logout />} />
          <Route path="/view-campaigns" element={<ViewCampaigns />} />

          <Route path="/transaction-history" element={<TransactionHistory />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
