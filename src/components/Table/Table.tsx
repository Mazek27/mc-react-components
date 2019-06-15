import * as React from "react";
import {TableBody} from "./TableBody";
import {ITableProps} from "./common/ITableProps";
import "./styles/table.scss"
import {TableHead} from "./TableHead";


const Table = (props : ITableProps) => {
  return (
    <div className={'mc-table'}>
    <table>
      <TableHead>{props.children}</TableHead>
      <TableBody defaultRowHeight={10} defaultRowWidth={30} tableRow={props.tableRow}>{props.children}</TableBody>
    </table>
    </div>
  )
}

export default Table
