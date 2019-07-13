import * as React from "react";
import { useRef, FunctionComponent } from "react";
import { IItemListProps } from "./common/props"
import Portal from "../Portal/Portal";
import "./style/index.scss"
import ClickOutsideComponent from "../../hoc/ClickOutsideComponent/ClickOutsideComponent";
import Input from "../Input/Input";
import ItemsContainer from "../ItemsContainer/ItemsContainers";
import ResizeComponentDetector from "../../hoc/ResizeComponentDetector/ResizeComponentDetector"

const Select = <T extends any>(props: IItemListProps<T>) => {

  const [isDisplay, setDisplay] = React.useState(false);
  const [activeElement, setActiveElement] = React.useState<T[] | null>([]);
  const [filter, setFilter] = React.useState<string>("");

  const listRef = useRef<HTMLDivElement | null>(null);
  const node = useRef<HTMLInputElement>(null);


  const handleClickOutSide = () => {
    setDisplay(false);
  };

  const inputSelectHandle = (): void => {
    setDisplay(true);
  }

  const elementClickHandle = (element: T): void => {
    const localActive = [...activeElement];
    if (localActive.find(el => el == element)) {
      setActiveElement(localActive.filter(el => el != element));
      return;
    }
    localActive.push(element);
    setActiveElement(localActive);
    setDisplay(false);
  }

  const filterHandle = (value:any) =>{
    setFilter(value.target.value);
  }

  let items2 = props.items.filter(item => props.searchComparator(item, filter))
  let items = items2.map((element: T, index: number) => {
    return <li onClick={() => elementClickHandle(element)} className={`${activeElement ? activeElement.find(active => active == element) ? ' active' : '' : ""}`} key={index}>
      <div>
        <div style={{ padding: 5 }}>
          {props.itemRenderer ? props.itemRenderer(element) : JSON.stringify(element)}
        </div>
      </div>
    </li>
  });

  const handleRemoveItem = (item: any) => {
    const active = [...activeElement].filter(el => el != item);
    setActiveElement(active)
  }

  const handleResize = () =>{
      console.log("resize")
  }

  return <ClickOutsideComponent handleClickOutside={handleClickOutSide} refs={[node, listRef]}>
    <div className={`select`} style={props.style}>
        {/* <ResizeComponentDetector  refs={node} onResize={handleResize}> */}
          <ItemsContainer filterChangeHandle={filterHandle} ref={node} handleRemoveItem={handleRemoveItem}  onSelect={inputSelectHandle} itemRenderer={props.headerRenderer} items={activeElement} />
        {/* </ResizeComponentDetector> */}
        {/* <Input onSelect={inputSelectHandle}  style={{flex: "1 1 auto", marginRight: 0 , minWidth:30}}/> */}
     
      {/* <Input icon={"icon"} readOnly ref={node} onSelect={inputSelectHandle} value={getCaptionByVale(activeElement)} className={`select input`} type="text" /> */}
      <Portal ref={listRef} element={node} position={node.current ? node.current.getBoundingClientRect() : null} isDisplay={isDisplay}>
        <ul className={`select list`}>
          {items}
        </ul>
      </Portal>
    </div>
  </ClickOutsideComponent>
}

export default Select;
