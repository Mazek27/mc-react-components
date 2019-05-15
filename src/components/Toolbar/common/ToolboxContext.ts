import * as React from "react";

interface IToolboxContext {
  // disabledItems : string[]
  selectedItem : string
  onSelect : (itemCn: string) => void
  onClick : (itemCn: string) => void
  isDisabled : (itemCn: string) => boolean,
  switchOffItem : (itemCn: string) => void
  switchOnItem : (itemCn: string) => void
}

export const ToolboxContext = React.createContext<IToolboxContext | null>(null);
