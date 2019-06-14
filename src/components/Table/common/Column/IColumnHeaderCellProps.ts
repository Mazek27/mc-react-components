import {IProps} from "../../../../Core/props";
import {ReactElement} from "react";
import {IColumnProps} from "./IColumnProps";

export interface IColumnHeaderCellProps extends IProps{
  children: ReactElement<IColumnProps> | Array<ReactElement<IColumnProps>>
}
