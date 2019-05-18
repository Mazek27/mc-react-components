import * as React from "react";
import {IItemListProps, Item } from "./common/props"


const Select =  <T extends any>(props: IItemListProps<T>) => {

  const [activeElement, setActiveElement] = React.useState(0);

  let style = {
    width: "100%"
  }

  const handleChange = (event: any) => {
    setActiveElement(event.target.value);
    props.itemDiDSelected(event.target.value);
  }


  return <select value={activeElement} onChange={handleChange} style={props.styleCSS ? props.styleCSS : style}>
    {props.items.map((element: Item<any>, index: number) => {
      return <option value={element.value} key={index}>{element.label}</option>
    })}
  </select>
}

export default Select;
