import {IProps} from "../../../Core/props";

export interface IItemListProps<T> extends IProps{
  activeItem?: any,
  items: Item<T>[],
  styleCSS? : React.CSSProperties | undefined,
  itemDiDSelected(item : T) : void 
  style: any
}

export interface Item<T> {
  value: T;
  label: string
}

