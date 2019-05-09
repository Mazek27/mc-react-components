import {IProps} from "../../Core/props";
import * as React from "react";
import {FunctionComponent, ReactElement} from "react";
import "./style/accordion.scss"

export interface IAccordionProps extends IProps{
  collapsed?: boolean
  setCollapsed?: (collapsed: boolean) => void
}

const Accordion : FunctionComponent<IAccordionProps> = (props) => {
  const miniChildren = () => React.Children.map(props.children, child =>
    React.cloneElement(child as ReactElement, {miniController: {
        expanded: !props.collapsed,
        //@ts-ignore
        updateExpanded: () => {props.setCollapsed(true)}
      }})
  );

  return (
    <div className={`accordion ${props.collapsed ? 'collapsed' : '' }`}>
      {!props.collapsed ? props.children : miniChildren()}
    </div>
  )
}

export default Accordion
