import React from "react";

const Percent = (props) => {
  return (
    <div className="relative">
      <div className="absolute text-xs ml-4 top-3 left-[-10px]">
        <div className="bg-[#c3d0e8] rounded-lg p-1 mx-3 text-center">هفته</div>
        <div className="bg-[#e7e4e4] rounded-lg p-1 mx-3 my-1">
          <span>روز</span>

          <span>15</span>
        </div>
        <div className="bg-[#e7e4e4] rounded-lg p-1 mx-3 text-center">ماه</div>
      </div>
      <div className="flex justify-between px-4 md:px-16 pl-20 md:pl-24 pt-8 pb-8 text-center font-bold ">
        <div>
          <div className="sm:text-xl text-[#42ab9a] mb-4">{props.engagement}</div>
          <div> انگیجمنت</div>
        </div>
        <div>
          <div className="sm:text-xl mb-4 text-[#cc355d]">{props.comment}</div>
          <div>کامنت </div>
        </div>
        <div>
          <div className="sm:text-xl text-[#42ab9a] mb-4">{props.like}</div>
          <div>لایک </div>
        </div>
      </div>
    </div>
  );
};

export default Percent;
