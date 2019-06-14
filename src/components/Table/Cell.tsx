import * as  React from "react";
import {FC, ReactElement} from "react";
import {ICellProps} from "./common/Column/ICellProps";
import {IRowWidth} from "./common/IRowWidth";
import {IRowHeight} from "./common/IRowHeight";


interface ICellBodyProps extends ICellProps, IRowWidth, IRowHeight {
  renderer : ReactElement<ICellProps>
}

export const CellBody : FC<ICellBodyProps> = (props) => {
  return (
    <td style={{minWidth: props.defaultRowWidth, height: props.defaultRowHeight}}>
      {

      }
    </td>
  )
}
