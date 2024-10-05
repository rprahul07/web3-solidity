import React from "react";
import { logo } from "../assets";
import { useStateContext } from "../context";

const AdminIDCard = () => {
  const { address } = useStateContext();

  const checkAddress = () => {
    return (
      address &&
      address.toLowerCase() === "0x906ad8f65f9ca8b8c858e655a3462d6815ee78aa"
    );
  };

  return (
    <div className="flex flex-col items-center bg-[#2c2f32] p-6 rounded-lg shadow-lg w-800">
      <div className="flex flex-col items-center mb-4">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-[#1dc071] mb-2"
        />
        <h2 className="font-epilogue font-bold text-[20px] text-white">
          {" "}
          {checkAddress() ? "Admin" : "Volunteer"}
        </h2>
        <p className="font-epilogue font-medium text-[16px] text-[#818183]"></p>
      </div>

      <div className="bg-[#1c1c24] p-4 rounded-lg w-full">
        <p className="font-epilogue font-normal text-[14px] text-[#ffffff]">
          Address:
        </p>
        <p className="font-epilogue font-normal text-[14px] text-[#818183]">
          {address}
        </p>
      </div>
      <div className="bg-[#1c1c24] p-4 rounded-lg w-full mt-5">
        <p className="font-epilogue font-normal text-[14px] text-[#ffffff]">
          {checkAddress()
            ? "United Nations Admin Digital Identity Card"
            : "United Nations Volunteer Digital Identity Card"}
        </p>
        <p className="font-epilogue font-normal mt-5 text-[14px] text-[#818183]">
          {checkAddress()
            ? 'This card represents your official identity as an Admin. As an authorized UN Admin, you have the ability to allocate funds directly to volunteers. Your role ensures that resources are distributed efficiently to support volunteers efforts in addressing critical global challenges. Through your guidance, volunteers can maximize their impact in areas of need, driving positive change worldwide."Empowering volunteers, enabling change."'
            : 'This card represents your official identity as a UN Volunteer. With it, you can raise funds for the causes you care about and support specific global issues. Your contributions directly impact communities, helping to drive positive change in areas such as education, healthcare, sustainability, and crisis response. "Together, we empower communities, one cause at a time."'}
        </p>
      </div>
    </div>
  );
};

export default AdminIDCard;
