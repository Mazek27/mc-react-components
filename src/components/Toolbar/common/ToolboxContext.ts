import * as React from "react";

interface IToolboxContext {
  // disabledItems : string[]
  selectedItem : string
  onSelect : (itemCn: string) => void
}

export const ToolboxContext = React.createContext<IToolboxContext | null>(null);
