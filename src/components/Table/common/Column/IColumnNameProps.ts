import {ReactElement} from "react";
import {IProps} from "../../../../Core/props";

export interface IColumnNameProps {
  name: string
  nameRenderer: (name:string, indexName?: number) => ReactElement<IProps>
}
