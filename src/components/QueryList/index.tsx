import {IItemListProps} from "../Select/common/props";
import {IProps} from "../../Core/props";

export interface IQueryListProps<T> extends IItemListProps<T> {
  renderer: (listProps: IQueryListRendererProps<T>) => JSX.Element;
}

export interface IQueryListRendererProps<T>
  extends Pick<IQueryListState<T>, "activeItem" | "filteredItems" | "query">,
    IProps {

    }

export interface IQueryListState<T> {
  activeItem: T | null;
  filteredItems: T[];
  query: string;
}
