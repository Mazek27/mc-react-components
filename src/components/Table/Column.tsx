import {FC} from "react";
import * as React from "react";
import {IColumnProps} from "./common/Column/IColumnProps";

export const Column : FC<IColumnProps> = (props) => {
  return (
    <div {...props}/>
  )
};
