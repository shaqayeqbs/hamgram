import React from "react";

const FollowInformation = (props) => {
  return (
    <div className="flex justify-between px-16 pt-10 pb-8 text-center font-bold ">
      <div>
        <div className="text-xl">{props.post}</div>
        <div >مجموع پست ها</div>
      </div>
      <div>
        <div className="text-xl">{props.follower}</div>
        <div>مجموع دنبال کنندگان</div>
      </div>
      <div>
        <div className="text-xl">{props.following}</div>
        <div>مجموع دنبال شوندگان</div>
      </div>
    </div>
  );
};

export default FollowInformation;
