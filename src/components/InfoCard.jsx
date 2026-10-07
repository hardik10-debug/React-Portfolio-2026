import React from "react";

const InfoCard = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#18181B] transition">

      <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#18181B] border border-[#27272A] text-lg text-[#22C55E]">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-[#A1A1AA]">
          {label}
        </p>

        <p className="text-sm text-[#F4F4F5] mt-1">
          {value}
        </p>
      </div>

    </div>
  );
};

export default InfoCard;