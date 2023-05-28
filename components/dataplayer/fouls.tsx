import React from "react";

type PageProps = {
  data: any;
};
const fouls = (props: PageProps) => {
  const { touches_opo_box, changes_created, assist, forward_pass, throught } = props.data;

  return (
    <div>
      {" "}
      <div className=" ">
        <div className="flex justify-between mb-2">
          <h1 className="font-semibold">Touches in opo box</h1>
          <p className="font-bold text-base">{touches_opo_box}</p>
        </div>
        <div className="flex justify-between mb-2">
          <h1 className="font-semibold">Changes created</h1>
          <p className="font-bold text-base">{changes_created}</p>
        </div>
        <div className="flex justify-between mb-2">
          <h1 className="font-semibold">Assist</h1>
          <p className="font-bold text-base">{assist}</p>
        </div>
        <div className="flex justify-between mb-2">
          <h1 className="font-semibold">Forward passes</h1>
          <p className="font-bold text-base">{forward_pass}</p>
        </div>
        <div className="flex justify-between mb-2">
          <h1 className="font-semibold">Trought-balls</h1>
          <p className="font-bold text-base">{throught}</p>
        </div>
      </div>
    </div>
  );
};

export default fouls;
