import * as React from "react";
import { FC } from "react"



interface IClickOutsideComponent {
    refs: React.MutableRefObject<HTMLDivElement | null>[]
    handleClickOutside: () => void
}

const ClickOutsideComponent: FC<IClickOutsideComponent> = ({ refs, handleClickOutside, children }) => {

    const handleClick = (event: any)=>{
        let clickOutside = true;
        refs.forEach(ref => {
            if (ref && ref.current && ref.current.contains(event.target)) {
                clickOutside = false;
            }
        });

        clickOutside ? handleClickOutside() : null;
    }
    React.useEffect(() => {

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        }


    }, []);

    return <>{children}</>
};

export default ClickOutsideComponent;
