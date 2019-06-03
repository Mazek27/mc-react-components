import * as React from "react";
import {CSSProperties, FunctionComponent} from "react";
import "./style/index.scss"

interface ICenteredProps {
  className?: string
  style?: CSSProperties
}

const Centered : FunctionComponent<ICenteredProps> = (props) => (
  <div className={"centered"} style={props.style}>
    <div className={`innerStyle ${props.className || ""}`}>{props.children}</div>
  </div>
);

export default Centered;
