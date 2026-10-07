import React from "react";

const InfoCard = ({ icon, label, value }) => {
  return (
<div className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-900 transition">

      <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-lg">
            {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-slate-300">
          {label}
        </p>

        <p className="text-sm text-slate-200 mt-1">
          {value}
        </p>
      </div>

    </div>
  );
};

export default InfoCard;