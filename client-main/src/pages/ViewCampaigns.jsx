import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import FundCard from "../components/FundCard";

const ViewCampaigns = () => {
  const { getCampaigns } = useStateContext();
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getCampaigns();
        setCampaigns(data);
      } catch (error) {
        console.error("Failed to fetch campaigns:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCampaigns();
  }, [getCampaigns]);

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        Available Campaigns ({campaigns.length})
      </h1>

      {isLoading ? (
        <p className="text-white">Loading campaigns...</p>
      ) : campaigns.length === 0 ? (
        <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
          No campaigns available at the moment.
        </p>
      ) : (
        <div className="flex flex-wrap mt-[20px] gap-[26px]">
          {campaigns.map((campaign, i) => (
            <FundCard key={i} {...campaign} showDonateButton={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewCampaigns;
