import * as React from "react";
import {FunctionComponent} from "react";
import "./style/index.scss"

interface ICenteredProps {
  className?: string
}

const Centered : FunctionComponent<ICenteredProps> = (props) => (
  <div className={"centered"}>
    <div className={`innerStyle ${props.className || ""}`}>{props.children}</div>
  </div>
);

export default Centered;
