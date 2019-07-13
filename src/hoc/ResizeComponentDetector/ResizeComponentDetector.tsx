import * as React from "react";
import { FC } from "react"

export interface IReactComponentDetector {
    refs?: any
    handleHeight?: boolean
    handleWidth?: boolean
    onResize: any
}

const ReactComponentDetector: FC<IReactComponentDetector> = (props) => {
    const [isActive, setActive] = React.useState(false);
    const handleResize = () => {
        console.log("run");
    }
    React.useEffect(() => {
        if (props.refs && props.refs.current) {
            if (!isActive) {
                setActive(true)
                props.refs.current.addEventListener('onresize', handleResize);
            }
        }
        //props.children.addEventListener('resize', handleResize);
        return () => {
            props.refs.current.removeEventListener("clientHeight", handleResize);
        }
    });

    return <div >
        {props.children}
    </div>
}

export default ReactComponentDetector;