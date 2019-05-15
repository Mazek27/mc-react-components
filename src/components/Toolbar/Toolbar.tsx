import * as React from "react";
import "./style/Toolbar.scss"
import {useState} from "react";
import {ToolboxContext} from "./common/ToolboxContext";

interface IToolbarProps {
  position : "top" | "bottom" | "left" | "right"
  defaultSelection? : string
  onClickItem : (itemCn: string) => void
  onSelectItem : (itemCn: string) => void
}

const Toolbar : React.FC<IToolbarProps> = (props) => {
  const [selectedItem, selectItem] = useState(props.defaultSelection || "pan");
  const [disabledItems, disableItem] = useState<string[]>(["synchronize"]);

  const switchOffItem = (itemCn: string) => {
    if(isDisabled(itemCn)){
      return
    }
    disableItem([...disabledItems, itemCn])
  }

  const switchOnItem = (itemCn: string) => {
    if(!isDisabled(itemCn)){
      return
    }
    disableItem(disabledItems.filter(item => item != itemCn))
  }

  const isDisabled = (itemCn: string) => {
    return disabledItems.includes(itemCn);
  }

  const onClick = (itemCn: string) => {
    props.onClickItem(itemCn)
  }

  // const indexDisabledItem = (itemCn: string) => {
  //   return disabledItems.indexOf(itemCn);
  // }

  return (
    <ToolboxContext.Provider value={{
      selectedItem: selectedItem,
      onSelect: selectItem,
      isDisabled,
      switchOffItem,
      switchOnItem,
      onClick,
    }}>
    <div className={`toolbar ${props.position}`} >
      {props.children}
    </div>
    </ToolboxContext.Provider>
  )
}

export default Toolbar;
