import React, { useEffect, useState } from "react";
import { useWallet } from "@wallet01/react";
import BookmarkList from "./bookmark/BookmarkList";
import { ethers } from "ethers";

const Dashboard = () => {
  const { address, disconnect } = useWallet();

  return (
    <div className="flex flex-col w-full font-body p-10">
      <div className="text-xl align-middle">{`Welcome to the Dashboard, ${address}!`}</div>
      <button
        className="flex btn w-16 content-end"
        onClick={() => disconnect()}
      >
        Disconnect
      </button>
      <BookmarkList />
    </div>
  );
};

export default Dashboard;
