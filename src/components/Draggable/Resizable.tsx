import { ILockableLayout, Orientation, ResizeHandle } from "./ResizeHandle";
import {IProps} from "../../Core/props";
import * as React from "react";
import {FC, useEffect, useState} from "react";
import "./draggable.scss"

export type IIndexedResizeCallback = (index: number, size: number) => void;

export interface IResizableProps extends IProps, ILockableLayout {
  isResizable?: boolean;
  maxSize?: number;
  minSize?: number;
  onSizeChanged?: (size: number) => void;
  onResizeEnd?: (size: number) => void;
  onDoubleClick?: () => void;
  orientation: Orientation;
  size: number;
  children: React.ReactElement
}

export const clamp = (value: number, min?: number, max?: number): number => {
  if (min != null && value < min) {
    value = min;
  }
  if (max != null && value > max) {
    value = max;
  }
  return value;
}

export const Resizable: FC<IResizableProps> = (props) => {
  const [size, setSize] = useState(props.size)
  const [unclampedSize, setUnclampedSize] = useState(props.size)


  const child = React.Children.only(props.children);

  useEffect(()=> {
    setSize(props.size)
    setUnclampedSize(props.size)
  })

  function getStyle(): React.CSSProperties {
    if (props.orientation === Orientation.VERTICAL) {
      return {
        flexBasis: `${size}px`,
        minWidth: "0px",
        width: `${size}px`,
      };
    } else {
      return {
        flexBasis: `${size}px`,
        height: `${size}px`,
        minHeight: "0px",
      };
    }
  }

  const onResizeMove = (_offset: number, delta: number) => {
    offsetSize(delta);
    if (props.onSizeChanged) {
      props.onSizeChanged(size);
    }
  };

  const onResizeEnd = (_offset: number) => {
    setUnclampedSize(size);

    if (props.onResizeEnd != null) {
      props.onResizeEnd(size);
    }
  };

  const offsetSize = (offset: number) => {
    setSize(clamp(unclampedSize + offset, props.minSize, props.maxSize))
    setUnclampedSize(unclampedSize + offset)
  }


  const renderResizeHandle= () => {
    const { onLayoutLock, onDoubleClick, orientation } = props;

    return (
      <ResizeHandle
        key="resize-handle"
        onDoubleClick={onDoubleClick}
        onLayoutLock={onLayoutLock}
        onResizeEnd={onResizeEnd}
        onResizeMove={onResizeMove}
        orientation={orientation}
      />
    );
  }

  const style = { ...child.props.style, ...getStyle() };

  if (props.isResizable === false) {
    return React.cloneElement(child, { style });
  }

  const resizeHandle = renderResizeHandle();
  return React.cloneElement(child, { style, resizeHandle });
}
