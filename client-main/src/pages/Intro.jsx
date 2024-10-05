// import React from "react";
// import { useStateContext } from "../contextt";
// const Intro = () => {
//   const { connect, address } = useStateContext();

//   return (
//     <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen flex flex-col items-center justify-center text-white p-6">
//       <header className="text-center mb-16">
//         <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600 transition-transform transform hover:scale-110 duration-500 ease-out">
//           UN'TETHERED
//         </h1>
//         <p className="mt-4 text-xl opacity-80 transition-opacity duration-500 ease-in-out hover:opacity-100">
//           Empowering Volunteers for Global Good Through Ethereum Blockchain
//         </p>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-5 w-full max-w-7xl">
//         {["Decentralization", "Transparency", "Incentivized Solutions"].map(
//           (goal, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-b from-gray-900 to-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 hover:scale-105 duration-500 ease-out group"
//             >
//               <h2 className="text-3xl font-semibold group-hover:text-green-400 transition-colors duration-500 ease-in-out">
//                 {goal}
//               </h2>
//               <p className="mt-4 text-lg text-gray-300 group-hover:text-gray-100 transition-colors duration-500 ease-in-out">
//                 Discover how {goal.toLowerCase()} empowers volunteers to solve
//                 global challenges.
//               </p>
//             </div>
//           )
//         )}
//       </div>

//       <div className="mt-16">
//         <button
//           className="bg-gradient-to-r from-green-500 to-blue-600
//          hover:from-blue-500 hover:to-green-600 text-white font-bold py-3 px-8 rounded-full
//          transition-transform transform hover:scale-110 shadow-xl hover:shadow-2xl duration-500 ease-out"
//         >
//           Join the Movement
//         </button>
//       </div>

//       <div className="mt-20 w-full max-w-6xl">
//         <h3 className="text-3xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500">
//           Why UN'TETHERED Matters
//         </h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-5">
//           {["Equality", "Sustainability", "Innovation", "Global Impact"].map(
//             (benefit, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-b from-gray-900 to-gray-700 p-6 rounded-lg text-center shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105 duration-500 ease-out"
//               >
//                 <h4 className="text-2xl font-semibold text-green-400">
//                   {benefit}
//                 </h4>
//                 <p className="mt-2 text-gray-400 text-sm group-hover:text-gray-200">
//                   Achieve {benefit.toLowerCase()} for a decentralized, equitable
//                   future.
//                 </p>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Intro;

import React from "react";
import { useStateContext } from "../context";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen flex flex-col items-center justify-center text-white p-6">
      <header className="text-center mb-16">
        <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600 transition-transform transform hover:scale-110 duration-500 ease-out">
          UN'TETHERED
        </h1>
        <p className="mt-4 text-xl opacity-80 transition-opacity duration-500 ease-in-out hover:opacity-100">
          Empowering Volunteers for Global Good Through Ethereum Blockchain
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-5 w-full max-w-7xl">
        {["Decentralization", "Transparency", "Incentivized Solutions"].map(
          (goal, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 hover:scale-105 duration-500 ease-out group"
            >
              <h2 className="text-3xl font-semibold group-hover:text-green-400 transition-colors duration-500 ease-in-out">
                {goal}
              </h2>
              <p className="mt-4 text-lg text-gray-300 group-hover:text-gray-100 transition-colors duration-500 ease-in-out">
                Discover how {goal.toLowerCase()} empowers volunteers to solve
                global challenges.
              </p>
            </div>
          )
        )}
      </div>

      <div className="mt-16">
        <button
          className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-500 hover:to-green-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-110 shadow-xl hover:shadow-2xl duration-500 ease-out"
          onClick={() => {
            window.location.href = "/create-campaign";
          }}
        >
          Join the Movement
        </button>
      </div>

      <div className="mt-20 w-full max-w-6xl">
        <h3 className="text-3xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500">
          Why UN'TETHERED Matters
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-5">
          {["Equality", "Sustainability", "Innovation", "Global Impact"].map(
            (benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-900 to-gray-700 p-6 rounded-lg text-center shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105 duration-500 ease-out"
              >
                <h4 className="text-2xl font-semibold text-green-400">
                  {benefit}
                </h4>
                <p className="mt-2 text-gray-400 text-sm group-hover:text-gray-200">
                  Achieve {benefit.toLowerCase()} for a decentralized, equitable
                  future.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
