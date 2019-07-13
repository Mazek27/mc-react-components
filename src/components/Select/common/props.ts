import {IProps} from "../../../Core/props";
import { IIconProps } from "../../Icon/Icon";

export interface IItemListProps<T> extends IProps{
  activeItem?: any,
  items: T[],
  itemRenderer?: any,
  headerRenderer?: any,
  styleCSS? : React.CSSProperties | undefined,
  itemDiDSelected(item : T) : void 
  searchComparator: any
  style?: any
}

export interface IItem<T> {
  value: T;
  icon?: IIconProps;
}

