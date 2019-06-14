import {ReactElement} from "react";
import {ICellProps} from "./ICellProps";

export type ICellRenderer = (rowIndex: number, columnIndex?: number) => ReactElement<ICellProps>
