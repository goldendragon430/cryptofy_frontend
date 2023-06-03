import type { FC } from "react";

const AccountCard: FC<AccountCard> = ({ title, amount, icon, color }) => {
  return (
    <div className="w-full h-fit p-3 flex justify-between rounded-lg shadow-2xl bg-white">
      <div className="w- flex flex-col align-start gap-2">
        <span className="text-cblack text-sm">{title}</span>
        <span className="text-cblack text-2xl">{amount}</span>
      </div>
      <div
        className={`w-12 h-12 rounded-lg grid place-items-center bg-${color}`}
      >
        {icon}
      </div>
    </div>
  );
};

export default AccountCard;
