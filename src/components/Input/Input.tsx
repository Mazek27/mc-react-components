import { FunctionComponent } from "react";
import { IProps } from "../../Core/props";
import * as React from "react";
import "./style/index.scss"
import Icon, { IconType } from "../Icon/Icon"

interface IInputProps extends IProps, React.InputHTMLAttributes<HTMLInputElement>, React.ClassAttributes<HTMLInputElement> {
  icon?: String
  itemRenderer?: any
  onChange?: any
}

const Input: FunctionComponent<IInputProps> = React.forwardRef((props, ref: React.MutableRefObject<HTMLDivElement | null>) => {
  let icon = props.icon ?
    <Icon className={`icon`} style={{ width: 15, height: 15, margin: "3" }} type={"SVG"} /> : null;

  return <div onSelect={props.onSelect} ref={ref} tabIndex={1} className={`inputComponent ${props.className? props.className : ''} ${props.readOnly ? 'readonly' : ''}`} style={props.style} >
    {icon}
      <input onChange={props.onChange} readOnly={props.readOnly} className={props.readOnly ? 'readonly' : ''} value={props.value} /> 
       {/* <div>{props.itemRenderer ? props.itemRenderer(props.value) : props.value.toString()}</div> */}
  </div>
});

export default Input;


