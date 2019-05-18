import {IProps} from "../../../Core/props";

export interface IItemListProps<T> extends IProps{
  activeItem?: T | null;
  items: Item<T>[],
  styleCSS? : React.CSSProperties | undefined,
  itemDiDSelected(item : T) : void 
}

export interface Item<T> {
  value: T;
  label: string
}

