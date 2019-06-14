import {FC, useState} from "react";
import {IProps} from "../../Core/props";
import classNames from "classnames"
import * as Classes from "./common/classes";
import {Draggable, ICoordinateData} from "./Draggable";
import * as React from "react";

export enum Orientation {
  HORIZONTAL = 1,
  VERTICAL = 0,
}

export interface ILockableLayout {
  onLayoutLock: (isLayoutLocked?: boolean) => void;
}

interface IResizeHandleProps extends IProps, ILockableLayout{
  onResizeMove?:(offset: number, delta: number) => void;
  onResizeEnd?: (offset: number) => void;
  onDoubleClick?: () => void;
  orientation: Orientation;
}

//@ts-ignore
export const ResizeHandle : FC<IResizeHandleProps> = (props) => {
  const [isDragging, setDraging] = useState(false);

  const { onResizeMove, onResizeEnd, onDoubleClick, orientation } = props;
  if (onResizeMove == null && onResizeEnd == null && onDoubleClick == null) {
    return undefined;
  }

  const targetClasses = classNames(
    Classes.RESIZE_HANDLE_TARGET,
    {
      [Classes.DRAGGING]: isDragging,
      [Classes.RESIZE_HORIZONTAL]: orientation === Orientation.HORIZONTAL,
      [Classes.RESIZE_VERTICAL]: orientation === Orientation.VERTICAL,
    },
    props.className
  )

  const handleClasses = classNames(Classes.RESIZE_HANDLE, {
      [Classes.DRAGGING]: isDragging
    })


  const handleActivate = (event: MouseEvent) => {
    setDraging(true)
    props.onLayoutLock(true)

    event.stopPropagation()
    event.stopImmediatePropagation()
    return true;
  }

  function handleClick(_event: MouseEvent) {
    setDraging(false);
    props.onLayoutLock(false);
  }

  function handleDoubleClick(_event: MouseEvent) {
    setDraging(false)
    props.onLayoutLock(false)

    if(props.onDoubleClick){
      props.onDoubleClick()
    }
  }

  function handleDragEnd(_event: MouseEvent, coords: ICoordinateData) {
    const orientationIndex = props.orientation as number;
    setDraging(false)
    props.onLayoutLock(false);

    if (props.onResizeMove) {
      props.onResizeMove(coords.offset[orientationIndex], coords.delta[orientationIndex]);
    }
    if (props.onResizeEnd) {
      props.onResizeEnd(coords.offset[orientationIndex]);
    }
  }

  function handleDragMove(_event: MouseEvent, coords: ICoordinateData) {
    const orientationIndex = props.orientation as number;
    if(props.onResizeMove){
      props.onResizeMove(coords.offset[orientationIndex], coords.delta[orientationIndex])
    }
  }

  return (
    <Draggable
      onActivate={handleActivate}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onDragEnd={handleDragEnd}
      onDragMove={handleDragMove}
    >
      <div className={targetClasses}>
        <div className={handleClasses} />
      </div>
    </Draggable>
  )
}
