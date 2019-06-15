import {IProps} from "../../../../Core/props";
import {ICellRenderer} from "./ICellRenderer";

interface IColumnHeaderRenderer {
}

export interface IColumnProps extends IProps{
  columnHeaderCellRenderer?: IColumnHeaderRenderer
  cellRenderer: ICellRenderer
}
