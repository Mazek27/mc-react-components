import * as React from "react";
import {FC, useEffect, useRef, useState} from "react";
import * as classNames from "classnames";
import {IProps} from "../../Core/props";
import {Orientation} from "../../Utils/variables";
import {LAYOUT, LAYOUT_HANDLER, LAYOUT_HORIZONTAL, LAYOUT_VERTICAL} from "./common/Classes";
import {Pane} from "./Pane";
import "./styles/style.scss"

interface ILayoutProps extends IProps{
  orientation: Orientation
  primaryIndex?: number
  unit?: '%' | 'px'
  primaryMinSize?: number
  secondaryInitialSize?: number
  secondaryMinSize?: number
}

export const Layout : FC<ILayoutProps>= (props) => {
  const handlerRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);
  const [secondaryPaneSize, updateSecondaryPaneSize] = useState(props.secondaryInitialSize ? props.secondaryInitialSize : 0);

  const getSecondaryPaneSize = (layoutRect: ClientRect | DOMRect, handlerRect: ClientRect | DOMRect, clientPosition: { top: number; left: number }, clientOffset: boolean) => {
    let totalSize, handlerSize, offset;

    if(props.orientation == Orientation.VERTICAL){
      totalSize = layoutRect.height;
      handlerSize = handlerRect.height;
      offset = clientPosition.top - layoutRect.top;
    } else {
      totalSize = layoutRect.width;
      handlerSize = handlerRect.width;
      offset = clientPosition.left - layoutRect.left;
    }
    if(clientOffset){
      offset -= handlerSize / 2
    }
    let secondPaneSize;
    if(props.primaryIndex === 1){
      secondPaneSize = offset
    } else {
      secondPaneSize = totalSize - handlerSize - offset;
    }
    let primaryPaneSize = totalSize - handlerSize - secondPaneSize;
    if(props.unit === '%'){
      secondPaneSize = (secondPaneSize * 100) / totalSize;
      primaryPaneSize = (primaryPaneSize * 100) / totalSize;
      handlerSize = (handlerSize * 100) / totalSize;
      totalSize = 100;
    }

    if (props.primaryMinSize && primaryPaneSize < props.primaryMinSize) {
      secondPaneSize = Math.max(secondPaneSize - (props.primaryMinSize - primaryPaneSize), 0);
    } else if (props.primaryMinSize && props.secondaryMinSize && secondPaneSize < props.secondaryMinSize) {
      secondPaneSize = Math.min(totalSize - handlerSize - props.primaryMinSize, props.secondaryMinSize);
    }

    return secondPaneSize;
  };

  const handleResize = () => {
    if(layoutRef.current && handlerRef.current && props.unit === '%'){
      const layoutRect = layoutRef.current.getBoundingClientRect()
      const handlerRect = handlerRef.current.getBoundingClientRect();
      const secondPaneSize = getSecondaryPaneSize(layoutRect, handlerRect, {
        left: handlerRect.left,
        top: handlerRect.top
      }, false)
      updateSecondaryPaneSize(secondPaneSize)
    }
  }

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseMove = (event: MouseEvent) => {
    const containerRect = (layoutRef.current as HTMLDivElement).getBoundingClientRect();
    const splitterRect = (handlerRef.current as HTMLDivElement).getBoundingClientRect();
    const secondPaneSize = getSecondaryPaneSize(containerRect, splitterRect, {
      left: event.clientX,
      top: event.clientY
    }, true);
    updateSecondaryPaneSize(secondPaneSize)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  useEffect(()=> {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  let classes = classNames(LAYOUT,
    {
      [props.className as string] : props.className,
      [LAYOUT_VERTICAL]: props.orientation == Orientation.VERTICAL,
      [LAYOUT_HORIZONTAL]: props.orientation == Orientation.HORIZONTAL
    }
  )

  const children = React.Children.toArray(props.children).slice(0,2);
  if(!children.length){
    children.push(<div/>)
  }

  const primaryIndex = (!props.primaryIndex && props.primaryIndex != 1) ? 0 : props.primaryIndex
  const wrappedChildren = children.map((child, index) => {
    let primary = true;
    let size = null
    if(children.length > 1 && index !== primaryIndex){
      primary = false
      size = secondaryPaneSize
    }
    return (
      <Pane orientation={props.orientation} size={size} primary={primary} unit={props.unit}>
        {child}
      </Pane>
    )
  })

  return (
    <div className={classes} ref={layoutRef}>
      {wrappedChildren[0]}
      {
        wrappedChildren.length && (
          <>
            <div
              role="separator"
              className={LAYOUT_HANDLER}
              ref={handlerRef}
              onMouseDown={handleMouseDown}
            />
            {wrappedChildren[1]}
          </>
        )
      }

    </div>
  )
}
