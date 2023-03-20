import { NextPage } from "next";
import PolygonSvg from "./Poligon";
const Stacked: NextPage = () => {
  const size = 100;
  const fillColor1 = "#DFE4F3";
  const fillColor2 = "#D00D00";
  const strokeColor2 = "#d53f8c";
  const strokeWidth = 0;
  const points1 = "0,50 50,0 100,50 50,100";
  const points2 = "16,50 50,23 95,50 50,95 ";
  const names = [""];

  return (
    <div style={{ position: "relative", width: 120, height: 120  }}>
      <PolygonSvg
        size={100}
        fillColor={fillColor1}
        strokeWidth={strokeWidth}
        points={points1}
        names={names}
        zIndex={1}
      />
      <PolygonSvg
        size={100}
        fillColor={fillColor2}
        strokeColor={strokeColor2}
        strokeWidth={strokeWidth}
        points={points2}
        names={names}
        zIndex={2}
      />
    </div>
  );
};

export default Stacked;
