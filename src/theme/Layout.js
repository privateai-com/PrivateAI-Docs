import React from "react";
import Layout from "@theme-original/Layout";
import { useLocation } from "@docusaurus/router";
// import Hero from "../components/Hero";
import timeSince from "../hook/TimeSince";

const releseData = new Date("2024-09-30");

const docs = [
  {
    id: "Graphs",
    date: "2024-09-13",
    type: "category",
  },
  {
    id: "AI_Powered_Features",
    date: "2024-09-14",
    type: "category", // or document
  },
  {
    id: "Privacy_and_security",
    date: "2024-09-20",
    type: "category",
  },
  {
    id: "Ecosystem",
    date: "2024-09-17",
    type: "category",
  },
  {
    id: "Ecosystem/staking",
    date: "2024-09-20",
    type: "document",
  },
  {
    id: "User_interactions_and_manual",
    date: "2024-09-23",
    type: "category", // or document
  },
  {
    id: "Public_API",
    date: "2024-09-25",
    type: "category",
  },
  {
    id: "Tokenomics",
    date: "2024-09-17",
    type: "category",
  },
  {
    id: "Future",
    date: "2024-09-28",
    type: "category",
  },
  {
    id: "Additional_Information",
    date: "2024-09-23",
    type: "category",
  },
];
const baseUrlPrefix = "";

export default function CustomLayout(props) {
  const location = useLocation();

  const renderDateLabel = ({ path }) => {
    let newDate = null;

    const filteredList = docs.filter((item) => path.includes(item.id));

    const fullPath = path;

    const lastDoc = filteredList[filteredList.length - 1] || null;

    switch (lastDoc && lastDoc.type) {
      case "category":
        newDate = new Date(lastDoc.date);
        break;
      case "document":
        if (baseUrlPrefix + "/" + lastDoc.id === fullPath) {
          newDate = new Date(lastDoc.date);
        } else {
          newDate = releseData;
        }
        break;

      default:
        newDate = releseData;
        break;
    }

    return `'Last update: ${timeSince(newDate)}'`;
  };

  return (
    <>
      <div
        className="wrap"
        style={{
          "--data":
            // location.pathname !== baseUrlPrefix + "/" &&
            renderDateLabel({
              path: location.pathname,
            }),
        }}
      >
        <Layout {...props} />
      </div>
    </>
  );
}
