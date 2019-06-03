import * as React from "react";
import {FC} from "react";



// const ClickOutsideComponent = (WrappedComponent: any, handleClickOutside: any) => {
//
//     return (props: any) => {
//         const refWrappedComponent = React.useRef<null | Element>(null);
//
//         const handleClick = (event: any) => {
//
//             if (refWrappedComponent.current && (refWrappedComponent.current == event.target || refWrappedComponent.current.contains(event.target))) {
//                     return;
//             }
//             handleClickOutside();
//         }
//
//
//         React.useEffect(() => {
//             document.addEventListener("mousedown", (event:any) => handleClick(event));
//             return () => {
//                 document.removeEventListener("mousedown", (event:any) => handleClick(event));
//             };
//         }, [])
//         return <WrappedComponent ref ={refWrappedComponent} {...props} />;
//     }
// }

interface IClickOutsideComponent {
  shouldListen: boolean
  handle: (event: any) => void
}

const ClickOutsideComponent : FC<IClickOutsideComponent> = ({shouldListen, handle, children}) => {
  React.useEffect(()=> {
    if(shouldListen){
      document.addEventListener("mousedown", handle);
    } else {
      document.removeEventListener("mousedown", handle);
    }
  }, [shouldListen]);

  return <>{children}</>
};

export default ClickOutsideComponent;
