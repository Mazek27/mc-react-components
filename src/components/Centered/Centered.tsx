import * as React from "react";
import {FunctionComponent} from "react";
import "./style/index.scss"

const Centered : FunctionComponent = (props) => (
  <div className={"centered"}>
    <div className={"innerStyle"}>{props.children}</div>
  </div>
);

export default Centered;
