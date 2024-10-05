// import React from "react";
// import { useStateContext } from "../context"; // Adjust the path as necessary
// import { useNavigate } from "react-router-dom";

// const Logout = () => {
//   const { disconnect, address } = useStateContext(); // Ensure disconnect function is in context
//   const navigate = useNavigate();

//   const handleDisconnect = () => {
//     disconnect();
//     navigate("/"); // Redirect to home or any desired route after disconnecting
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-[#13131a]">
//       <h1 className="font-epilogue font-bold text-[24px] text-white mb-4">
//         Disconnect Wallet
//       </h1>
//       {address ? (
//         <div className="bg-[#2c2f32] p-6 rounded-lg shadow-lg">
//           <p className="font-epilogue text-[16px] text-white mb-4">
//             Are you sure you want to disconnect your wallet?
//           </p>
//           <button
//             onClick={handleDisconnect}
//             className="bg-[#ff4c4c] text-white font-bold py-2 px-4 rounded"
//           >
//             Disconnect Wallet
//           </button>
//         </div>
//       ) : (
//         <p className="font-epilogue text-[16px] text-white">
//           No wallet connected.
//         </p>
//       )}
//     </div>
//   );
// };

// export default Logout;
import React from "react";
import { useStateContext } from "../context";
import { useNavigate } from "react-router-dom";
import { useDisconnect } from "@thirdweb-dev/react";

const Logout = () => {
  const { address } = useStateContext();
  const navigate = useNavigate();
  const disconnect = useDisconnect();
  const handleDisconnect = () => {
    disconnect();
    navigate("/admin");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#13131a]">
      <h1 className="font-epilogue font-bold text-[24px] text-white mb-4">
        Disconnect Wallet
      </h1>
      {address ? (
        <div className="bg-[#2c2f32] p-6 rounded-lg shadow-lg">
          <p className="font-epilogue text-[16px] text-white mb-4">
            Are you sure you want to disconnect your wallet?
          </p>
          <button
            onClick={handleDisconnect}
            className="bg-[#ff4c4c] text-white font-bold py-2 px-4 rounded"
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <p className="font-epilogue text-[16px] text-white">
          No wallet connected.
        </p>
      )}
    </div>
  );
};

export default Logout;
