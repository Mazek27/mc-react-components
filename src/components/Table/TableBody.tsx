import * as React from "react";
import {ITableProps} from "./common/ITableProps";
import {CellBody} from "./Cell";

interface ITableBodyProps extends ITableProps{
}

export const TableBody = (props : ITableBodyProps) => {

  const renderRow = (rowIndex: number) => {
    if(props.children instanceof Array){
      return <tr>
        {props.children.map((column, columnIndex) => (
          <CellBody renderer={column.props.cellRenderer(rowIndex, columnIndex)} {...props}/>
        ))}
      </tr>

    } else {
      return <tr>
        <CellBody renderer={props.children.props.cellRenderer(rowIndex)} {...props}/>
      </tr>
    }
  };

  return (
    <tbody>
    {
      [...Array(props.tableRow).keys()].map(renderRow)
    }
    </tbody>
  )
};
