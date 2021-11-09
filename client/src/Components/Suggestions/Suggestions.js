import React from "react";
import Trending from "./Trending";
import WhoToFollow from "./WhoToFollow";

function Suggestions() {
  return (
    <>
      <h4 className="font-weight-bold">Trends For You</h4>
      <Trending></Trending>
      <h4 className="font-weight-bold">Who to Follow</h4>
      <WhoToFollow></WhoToFollow>
    </>
  );
}

export default Suggestions;
