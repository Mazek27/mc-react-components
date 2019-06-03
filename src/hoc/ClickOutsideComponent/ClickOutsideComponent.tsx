import * as React from "react";



const ClickOutsideComponent = (WrappedComponent: any, handleClickOutside: any) => {
   
    return (props: any) => {
        const refWrappedComponent = React.useRef(null);
        
        const handleClick = (event: any) => {
           
            if (refWrappedComponent.current != null && refWrappedComponent.current.contains(event.target)) {
                    return;
            }
            handleClickOutside();
        }
        
       
        React.useEffect(() => {
            document.addEventListener("mousedown", (event:any) => handleClick(event));
            return () => {
                document.removeEventListener("mousedown", (event:any) => handleClick(event));
            };
        }, [])
        return <WrappedComponent ref ={refWrappedComponent} {...props} />;
    }
}

export default ClickOutsideComponent;