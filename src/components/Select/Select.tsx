import * as React from "react";
import { useRef } from "react";
import { IItemListProps, Item } from "./common/props"
import Portal from "../Portal/Portal";
import "./style/index.scss"
import ClickOutsideComponent from "../../hoc/ClickOutsideComponent/ClickOutsideComponent";


const Select = <T extends any>(props: IItemListProps<T>) => {

  const [isDisplay, setDisplay] = React.useState(false);
  const [activeElement, setActiveElement] = React.useState<T | undefined>(undefined);

  const listRef = useRef<HTMLDivElement | null>(null);
  const node = useRef<HTMLInputElement>(null);


  // const handleClickOutSide = (e: any) => {
  //   if (node.current != null && node.current.contains(e.target) || (listRef != null && listRef.current && listRef.current.contains(e.target))) {
  //     return;
  //   }
   
  // };

  React.useEffect(() => {
    setDisplay(false);
   
    // document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      // document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [])

  const inputSelectHandle = (): void => {
    setDisplay(true);
  }

  const elementClickHandle = (event: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
    setActiveElement(event.currentTarget.value as any);
    setDisplay(false);
  }

  const getCaptionByVale = (value: T | undefined): string => {
    let result = "";
    props.items.forEach(element => {
      if (element.value == value) {
        result = element.label;
      }
    });

    return result;
  }


  Select.prototype.handleClickOutside = () => {
    setDisplay(false)
  }

  // const createContainerForList = (): void => {

  //   let element = document.createElement('div');
  //   element.style.position = "absolute";
  //   if (node.current) {
  //     let position = node.current.getBoundingClientRect();
  //     element.style.left = position.left + "px";
  //     element.style.top = position.top + position.height + "px";
  //     element.style.width = position.width + "px";
  //   }
  //   document.body.appendChild(element);
  //   if (!listRef.current)
  //     listRef.current = element;

  // }

  let items = props.items.map((element: Item<any>, index: number) => {
    return <li onClick={(event) => elementClickHandle(event)} className={`select list ${element.value == activeElement ? ' active' : 'select list'}`} value={element.value} key={index}>{element.label}</li>
  });

  return <div className={`select`} style={props.style}>
    <input readOnly ref={node} onSelect={inputSelectHandle} value={getCaptionByVale(activeElement)} className={`select input`} type="text" />
    <Portal ref={listRef} position={node.current ? node.current.getBoundingClientRect() : null} isDisplay={isDisplay}>
      <ul className={`select list`}>
        {items}
      </ul>
    </Portal>
  </div>
}

let handleClickOutside = () =>{
  Select.prototype.handleClickOutside();
}

export default ClickOutsideComponent(Select, handleClickOutside);
