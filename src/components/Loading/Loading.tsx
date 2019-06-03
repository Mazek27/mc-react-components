import * as React from "react";
import "./loading.scss"
import Centered from "../Centered/Centered";

interface ILoadingProps {
  text? : string
  overlay? : boolean;
  overlayColor? : string;
}

const Loading :React.FC<ILoadingProps> = ({text, overlay, overlayColor}) => {
  console.log(overlayColor);
  return (
      <Centered className={"loading"} style={overlay ? {backgroundColor : overlayColor, opacity: 0.7}: {}} >
        <h1>{text || "Loading..."}</h1>
      </Centered>
  )
}

export default Loading;
