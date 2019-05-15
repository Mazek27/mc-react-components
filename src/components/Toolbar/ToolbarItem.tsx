// import Centered from "../Centered/Centered";
import * as React from "react";
import {useContext, useMemo, Suspense} from "react";
import {ToolboxContext} from "./common/ToolboxContext";

interface IToolbarItemProps {
  itemCn : string
  type: "mode" | "immediate" | "toggle"
}

const ToolbarItem : React.FC<IToolbarItemProps> = (props) => {
  const context = useContext(ToolboxContext);
  let selectedItemCn = context && context.selectedItem;

  const Icon = React.lazy(()=> import(`../../Core/Icons/${props.itemCn}Icon`));

  return useMemo(() =>  context &&
    <div
      onClick={() => {
        switch(props.type){
          case "immediate": context.onClick(props.itemCn); break;
          case "mode": context.onSelect(props.itemCn); break;
          case "toggle": context.onSelect(props.itemCn); break;
        }

      }}
      className={`toolbarItem ${props.itemCn === selectedItemCn ? 'selected': ''} ${context.isDisabled(props.itemCn) ? 'disabled' : ''}`}

    ><Suspense fallback={""}><Icon className={'icon'}/></Suspense></div>
  , [selectedItemCn])
}

export default ToolbarItem;
