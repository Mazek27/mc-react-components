import { ILockableLayout, ResizeHandle } from "./ResizeHandle";
import {IProps} from "../../Core/props";
import * as React from "react";
import {FC} from "react";
import "./draggable.scss"
import {Orientation} from "../../Utils/variables";

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
    console.log("min" , value);
    value = min;
  }
  if (max != null && value > max) {
    console.log("max" , value);
    value = max;
  }
  return value;
}

export const Resizable: FC<IResizableProps> = React.memo((props) => {
  let size = props.size
  let unclampedSize = size

  function getStyle(): React.CSSProperties {
    if (props.orientation === Orientation.VERTICAL) {
      return {
        flexBasis: `${size}px`,
        minWidth: "0px",
        width: `${size}px`,
      };
    } else {
      return {
        flexBasis: `100%`,
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
    unclampedSize =size

    if (props.onResizeEnd != null) {
      props.onResizeEnd(size);
    }
  };

  const offsetSize = (offset: number) => {
    let updatedSize = unclampedSize + offset
    size = clamp(updatedSize, props.minSize, props.maxSize)
    unclampedSize = updatedSize
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

  const child = React.Children.only(props.children);
  const style = { ...child.props.style, ...getStyle() };

  if (props.isResizable === false) {
    return React.cloneElement(child, { style });
  }

  const resizeHandle = renderResizeHandle();
  return React.cloneElement(child, { style, resizeHandle });
})

