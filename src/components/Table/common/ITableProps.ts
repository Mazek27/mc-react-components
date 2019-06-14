import {IRowHeight} from "./IRowHeight";
import {IRowWidth} from "./IRowWidth";
import {IProps} from "../../../Core/props";
import {ReactElement} from "react";
import {IColumnProps} from "./Column/IColumnProps";

export interface ITableProps extends IRowHeight, IRowWidth, IProps{
  children: ReactElement<IColumnProps> | Array<ReactElement<IColumnProps>>
  tableRow: number
  enableRowHeader?: boolean
}
