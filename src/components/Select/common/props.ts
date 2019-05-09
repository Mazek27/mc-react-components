import {IProps} from "../../../Core/props";

export interface IItemListProps<T> extends IProps{
  activeItem?: T | null;
  items: T
}
