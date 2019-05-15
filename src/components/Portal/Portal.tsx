import * as React from "react";
import {createPortal} from "react-dom";
import {positionType, positions} from "./common/position";
import {useMemo} from "react";

interface IPortalProps {
  localization: positionType
  isDisplay: boolean
  margin?: number
  target?: Element
}

const Portal: React.FC<IPortalProps> = (props) => {
  const component = useMemo(() => (
    <div style={{
    position: "absolute",
    zIndex: 1500,
    margin: props.margin || 0,
    ...positions[props.localization],
  }}>
    <div style={{margin: "auto"}}>
      {props.children}
    </div>
  </div>
  ), []);

  if(props.target){
    return props.isDisplay ?
      createPortal(component, props.target) : <></>
  } else {
    return component
  }

}

export default Portal
