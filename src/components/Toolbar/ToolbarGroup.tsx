import * as React from "react";

interface IToolbarGroupProps {
}

const ToolbarGroup : React.FC<IToolbarGroupProps> = (props) => {
  return (
    <div className={`toolbarGroup`}>
      {props.children}
    </div>
  )
}

export default ToolbarGroup
