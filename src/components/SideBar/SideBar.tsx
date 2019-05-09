import * as React from "react";
import {IProps} from "../../Core/props";
import {FunctionComponent} from "react";
import "./style/index.scss"

interface ISideBarProps extends IProps{
}

const SideBar : FunctionComponent<ISideBarProps> = () => {
  return (
    <div className={`sidebar`}>

    </div>
  )
}

export default SideBar;
