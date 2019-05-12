import * as React from "react";
import "./style/Toolbar.scss"
import {useState} from "react";
import {ToolboxContext} from "./common/ToolboxContext";

interface IToolbarProps {
  position : "top" | "bottom" | "left" | "right"
  defaultSelection? : string
}

const Toolbar : React.FC<IToolbarProps> = (props) => {
  const [selectedItem, selectItem] = useState(props.defaultSelection || "pan");
  // const [disabledItems, disableItem] = useState(props.defaultSelection || "pan");
  //
  // const disableItemOnChange = (itemCn: string) => {
  //
  // }

  return (
    <ToolboxContext.Provider value={{
      selectedItem: selectedItem,
      onSelect: selectItem,
      // disabledItems,
    }}>
    <div className={`toolbar ${props.position}`} >
      {props.children}
    </div>
    </ToolboxContext.Provider>
  )
}

export default Toolbar;
