import React from "react";
type PageProps = {
  data: any;
};

const goalkeping = (props: PageProps) => {
  const { data } = props;

  return (
    <div className="md:max-w-md w-full bg-white rounded-lg px-6 py-4 ">
      <div className="mb-6 text-[20px] font-semibold">Goalkeping</div>
      <div>
        <div className="flex justify-between mb-4">
          <h1 className="font-semibold">Total Saves</h1>
          <p className="font-bold text-base">{data.saves}</p>
        </div>
        <div className="flex justify-between mb-4">
          <h1 className="font-semibold">Punches</h1>
          <p className="font-bold text-base">{data.punch}</p>
        </div>
        <div className="flex justify-between mb-4">
          <h1 className="font-semibold">Goals Conceded</h1>
          <p className="font-bold text-base">{data.goals_concend}</p>
        </div>
      </div>
    </div>
  );
};

export default goalkeping;
