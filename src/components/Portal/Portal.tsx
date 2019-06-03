import * as React from "react";
import { createPortal } from "react-dom";
import { positionType } from "./common/position";

interface IPortalProps extends React.ClassAttributes<HTMLDivElement> {
  localization?: positionType
  position?: ClientRect | DOMRect | null | undefined
  isDisplay: boolean
  margin?: number
}

const Portal: React.FC<IPortalProps> = React.forwardRef((props, ref : React.MutableRefObject<HTMLDivElement | null>) => {

  const refLocal = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    createContainerForPortal();
    return () => {
      if (refLocal && refLocal.current)
        document.body.removeChild(refLocal.current);
    }
  }, [])
  const createContainerForPortal = (): void => {
    const element = document.createElement('div');
    element.style.position = "absolute";
    element.style.zIndex = "1500";
    document.body.appendChild(element);

    if (refLocal)
      refLocal.current = element;
  }

  let element = refLocal.current;
  
  if (element) {
    if (props.margin) {
      element.style.margin = props.margin.toString();
    }

    let position = props.position;
    if (position) {
      element.style.left = position.left + "px";
      element.style.top = position.top + position.height + "px";
      element.style.width = position.width + "px";
    }
  
  }

  if (!ref.current) {
    ref.current = refLocal.current;
  }

  if (props.isDisplay && ref.current) {
    return createPortal(props.children, ref.current)
  } else {
    return null;
  }
})

export default Portal
