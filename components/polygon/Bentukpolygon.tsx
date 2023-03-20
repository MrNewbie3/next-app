import { NextPage } from "next";
import PolygonSvg from "./Poligon";
const Polygon: NextPage = () => {
  const size = 100;
  const fillColor1 = "#DFE4F3";
  const fillColor2 = "#D00D00";
  const strokeColor2 = "#d53f8c";
  const strokeWidth = 0;
  const points1 = "50,5 100,20 100,80 50,100 10,80 10,20";
  const points2 = "50,20 80,25 80,65 50,80 20,65 20,30";
  const names = [""];

  return (
    <div style={{ position: "relative", width: 120, height: 120  }}>
      <PolygonSvg
        size={110}
        fillColor={fillColor1}
        strokeWidth={strokeWidth}
        points={points1}
        names={names}
        zIndex={1}
      />
      <PolygonSvg
        size={110}
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

export default Polygon;
