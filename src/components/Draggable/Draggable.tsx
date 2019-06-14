import {IProps} from "../../Core/props";
import {ReactElement, useEffect, useRef} from "react";
import * as React from "react";
import {DragEvents} from "./Interactions/DragEvents";
import {usePrevious} from "../../Utils/hooks/usePrevious";
import {shallowCompareKeys} from "../../Utils/compareUtils";

export interface IDraggableProps extends IProps, IDragHandler{
  children: ReactElement
}

export type IDragHandler = {
  onActivate : (event: MouseEvent) => boolean
  onDragMove : (event: MouseEvent, coords: ICoordinateData) => void
  onDragEnd : (event: MouseEvent, coords: ICoordinateData) => void
  onClick : (event: MouseEvent) => void
  onDoubleClick : (event: MouseEvent) => void
  preventDefault?: boolean
  stopPropagation?: boolean
}

export type IClientCoordinates = [number, number];

export interface ICoordinateData {
  /**
   * The client coordinates where the interaction was activated.
   */
  activation: IClientCoordinates;

  /**
   * The client coordinates of the current mouse event.
   */
  current: IClientCoordinates;

  /**
   * The difference between current and last client coordinates.
   */
  delta: IClientCoordinates;

  /**
   * The client coordinates of the previous mouse event.
   */
  last: IClientCoordinates;

  /**
   * The difference between current and activation client coordinates.
   */
  offset: IClientCoordinates;
}

const REATTACH_PROPS_KEYS = ["stopPropagation", "preventDefault"] as Array<keyof IDraggableProps>;

export const Draggable = (props: IDraggableProps) => {
  let [attach, /*detach*/] = DragEvents();
  const childRef = useRef<HTMLElement | null>(null);
  const prevProps = usePrevious(props)

  useEffect(()=> {
    attach(childRef.current as HTMLElement, props);
    return () => {
      // detach()
    }
    }, [])

  useEffect(()=> {
    const propsWhitelist = { include: REATTACH_PROPS_KEYS };
    if (attach && prevProps &&  !shallowCompareKeys(prevProps, props, propsWhitelist)) {
      attach(childRef.current as HTMLElement, props);
    }
  });

  const childElement = React.Children.only(props.children);
  return React.cloneElement(
    childElement,
    {ref:childRef}
  )
}
