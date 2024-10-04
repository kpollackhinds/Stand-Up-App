import Svg, { Path, Ellipse } from "react-native-svg";
const CheckCircle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-check-circle"
    {...props}
  >
    <Path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <Path d="M22 4 12 14.01l-3-3" />
  </Svg>
);

const TempLogo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={170} height={240} {...props}>
    <Path
      d="M31.324 106.794l55.882 16.47 51.47-17.352M46.618 216.5L87.5 156.206l31.765 59.706M87.528 156.315V91.948"
      fill="none"
      fillOpacity={0.75}
      fillRule="evenodd"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={4}
      strokeDasharray="none"
      strokeOpacity={1}
    />
    <Ellipse
      cx={88.186562}
      cy={57.841484}
      rx={37.282658}
      ry={34.34148}
      fill="none"
      fillOpacity={1}
      fillRule="nonzero"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={100}
      strokeDasharray="none"
      strokeOpacity={1}
    />
  </Svg>
);
export { CheckCircle, TempLogo };
