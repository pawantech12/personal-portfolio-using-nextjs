import React from "react";

const ProgressBar = ({ labelName, progress }) => {
  return (
    <div>
      <h4 className="text-xl font-semibold">{labelName}</h4>
      <div className="relative w-full bg-custom-light-gray rounded-full h-[10px] mt-2">
        {/* Filled Bar */}
        <div
          className="bg-custom-orange h-[10px] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>

        {/* Circle at the end of the progress bar */}
        <div
          className="absolute top-1/2 -translate-y-1/2 bg-custom-light-gray w-6 h-6 rounded-full border-2 border-custom-orange transition-transform duration-300"
          style={{ left: `calc(${progress}% - 12px)` }} // Adjust the circle's position
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
