import * as React from "react";
import {FC} from "react";
import {Orientation} from "../../Utils/variables";
import classNames from "classnames";
import {LAYOUT_PANE, LAYOUT_PANE_PRIMARY} from "./common/Classes";

interface IPaneProps {
  size?: number | null
  unit?: '%' | 'px'
  primary?: boolean
  orientation: Orientation
}

const Pane :FC<IPaneProps> = (props) => {
  let classes = classNames(LAYOUT_PANE,
    {
      [LAYOUT_PANE_PRIMARY] : props.primary
    }
  )

  const getStyle = () => {

    if(props.orientation == Orientation.HORIZONTAL){
      return {width: `${props.size}${props.unit}`, height: "100%"}
    } else {
      return {height: `${props.size}${props.unit}`, width: "100%"}
    }
  }

  const styles = getStyle()
  return <div className={classes} style={styles}>{props.children}</div>
}

export default Pane
