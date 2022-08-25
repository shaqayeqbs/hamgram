import React from "react";

const FollowInformation = (props) => {
  return (
    <div className="flex justify-between px-2 text-[11px] md:text-[14px] md:px-16 pt-10 pb-8 text-center font-bold ">
      <div>
        <div className="text-lg sm:text-xl">{props.post}</div>
        <div className="">مجموع پست ها</div>
      </div>
      <div>
        <div className="text-lg sm:text-xl">{props.follower}</div>
        <div>مجموع دنبال کنندگان</div>
      </div>
      <div>
        <div className="text-lg sm:text-xl">{props.following}</div>
        <div>مجموع دنبال شوندگان</div>
      </div>
    </div>
  );
};

export default FollowInformation;
