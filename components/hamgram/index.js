import React from "react";
import Navbar from "./nav";
import FollowInformation from "./follow-information";
import Bio from "./bio";
import Percent from "./percent";
import Carousel from "./carousel";
const Hamgram = () => {
  return (
    <div className="mx-4 sm:mx-20">
      <Navbar />
      <div className="bg-white rounded-t-md rounded-b-xl">
        <FollowInformation post="18" follower="3,288" following="2,407" />
        <Bio />
        <Percent engagement="+(100) 2%" comment="-(200) 5%" like="+(100) 2%" />
        <Carousel />
      </div>
    </div>
  );
};

export default Hamgram;
