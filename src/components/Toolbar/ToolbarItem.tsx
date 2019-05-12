import Centered from "../Centered/Centered";
import * as React from "react";
import {useContext, useMemo} from "react";
import {ToolboxContext} from "./common/ToolboxContext";

interface IToolbarItemProps {
  itemCn : string
}

const ToolbarItem : React.FC<IToolbarItemProps> = (props) => {
  const context = useContext(ToolboxContext);
  let selectedItemCn = context && context.selectedItem;

  return useMemo(() =>  context &&
    <div
      onClick={() => context.onSelect(props.itemCn)}
      className={`toolbarItem ${props.itemCn === selectedItemCn && 'selected'} ${""/*context.disabled[props.itemCn] && 'disabled'*/}`}
    ><Centered>{'A'}</Centered></div>
  , [selectedItemCn])
}

export default ToolbarItem;
