import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/admin",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "payment",
    imgUrl: payment,
    link: "/view-campaigns",
  },
  {
    name: "withdraw",
    imgUrl: withdraw,
    link: "/transaction-history",
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/card",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/logout",
  },
];
