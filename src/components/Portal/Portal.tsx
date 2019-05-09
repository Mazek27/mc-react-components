import * as React from "react";
import {createPortal} from "react-dom";
import {positionType, positions} from "./common/position";

interface IPortalProps {
  localization: positionType
  isDisplay: boolean
  margin?: number
  target : Element
}

const Portal: React.FC<IPortalProps> = (props) => {
  return props.isDisplay ?
    createPortal(<div style={{
      position: "absolute",
      zIndex: 1500,
      margin: props.margin || 0,
      ...positions[props.localization],
    }}>
      <div style={{margin: "auto"}}>
        {props.children}
      </div>
    </div>, props.target) : <></>
}

export default Portal
