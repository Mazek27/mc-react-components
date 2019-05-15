import * as React from "react";
import {IProps} from "../../Core/props";
import {FunctionComponent} from "react";
import "./style/index.scss"
import Portal from "../Portal/Portal";
import Button from "../Button/Button";

interface ISideBarProps extends IProps{
  isOpen : boolean
  onClose: () => void
}

const SideBar : FunctionComponent<ISideBarProps> = (props) => {
  // const ref

  return (
    <div className={`sidebar ${!props.isOpen ? 'hidden' : ''}`}>
      <Portal localization={"top-right"} margin={5} isDisplay={true}><Button content={"X"} onClick={props.onClose}/></Portal>

    </div>
  )
}

export default SideBar;
