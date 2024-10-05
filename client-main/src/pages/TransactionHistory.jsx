import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import axios from "axios";

const TransactionHistory = () => {
  const { address } = useStateContext();
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = "9Y49IVWXSRQ85U12GC6S31EGSI2Y2GRQN8";

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!address) return;

      try {
        const response = await axios.get(
          `https://api-sepolia.etherscan.io/api?module=account&action=txlistinternal&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`
        );

        console.log(response.data);
        if (response.data.status === "1") {
          setTransactions(response.data.result);
        } else {
          console.error("Error fetching transactions:", response.data.message);
        }
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [address, API_KEY]);

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        Transaction History
      </h1>

      {isLoading ? (
        <p className="text-white">Loading transactions...</p>
      ) : transactions.length === 0 ? (
        <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
          No transactions found.
        </p>
      ) : (
        <div className="mt-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.hash}
              className="bg-[#2c2f32] p-4 mb-4 rounded-lg"
            >
              <p className="text-white">
                <strong>Hash:</strong> {transaction.hash}
              </p>
              <p className="text-[#818183]">
                <strong>From:</strong> {transaction.from}
              </p>
              <p className="text-[#818183]">
                <strong>To:</strong> {transaction.to}
              </p>
              <p className="text-[#818183]">
                <strong>Value:</strong> {parseFloat(transaction.value) / 1e18}{" "}
                ETH
              </p>
              <p className="text-[#818183]">
                <strong>Timestamp:</strong>{" "}
                {new Date(transaction.timeStamp * 1000).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
