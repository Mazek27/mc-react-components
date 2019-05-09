import * as React from "react";
import {FunctionComponent} from "react";
import {IProps} from "../../Core/props";
import {FlexDirectionProperty} from "csstype";
import "./style/index.scss";

export interface IContainerProps extends IProps{
  size?: number;
  direction?: FlexDirectionProperty
}

const Container : FunctionComponent<IContainerProps> = (props) => {
  return <div className={`container ${!hasContainerChildren(props.children) ? 'content' : ''}` } style={{
    flex: props.size || 1,
    flexDirection: props.direction || "column"}}>
    {props.children}
  </div>
}

function hasContainerChildren(children : any){
  return children && children instanceof Array && children.some((element:any) => element.type.displayName === 'Container')
}

Container.displayName = "Container";

export default Container ;
