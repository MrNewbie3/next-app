import { FunctionComponent } from 'react';

type PolygonProps = {
  size: number;
  fillColor: string;
  strokeColor?: string;
  strokeWidth?: number;
  points: string;
  names: string[];
  zIndex: number;
};

const PolygonSvg: FunctionComponent<PolygonProps> = ({
  size,
  fillColor,
  strokeColor = 'black',
  strokeWidth = 1,
  points,
  names,
  zIndex,
}) => {
  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ position: 'absolute', zIndex }}>
      <polygon
        points={points}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      {names.map((name, index) => (
        <text
          key={index}
          x={getXCoordinate(index, size)}
          y={getYCoordinate(index, size)}
          fill={strokeColor}
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {name}
        </text>
      ))}
    </svg>
  );
};

function getXCoordinate(index: number, size: number): number {
  const angle = (2 * Math.PI * index) / 6;
  const radius = size / 2;
  return radius + radius * Math.sin(angle);
}

function getYCoordinate(index: number, size: number): number {
  const angle = (2 * Math.PI * index) / 6;
  const radius = size / 2;
  return radius - radius * Math.cos(angle);
}

export default PolygonSvg;
