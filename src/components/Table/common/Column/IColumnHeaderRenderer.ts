import {ReactElement} from "react";
import {IColumnHeaderCellProps} from "./IColumnHeaderCellProps";

export type IColumnHeaderRenderer = (columnIndex: number) => ReactElement<IColumnHeaderCellProps>
