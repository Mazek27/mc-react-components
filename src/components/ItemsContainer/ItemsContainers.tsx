import * as React from "react";
import { FC, forwardRef } from "react";
import { IProps } from "../../Core/props";
import "./style/index.scss"
import { element } from "prop-types";
import Icon from "../Icon/Icon";
import Input from "../Input/Input"

export interface ITemContainerProps extends IProps, React.ClassAttributes<HTMLDivElement> {
    itemRenderer?: any
    items?: any[]
    onSelect?: any
    handleRemoveItem?(item: any): any
    filterChangeHandle?: any
}

let iconPath = `M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z`;
const ItemsContainer: FC<ITemContainerProps> = forwardRef((props, ref: any) => {

    let items = null;
    if (props.items && props.items.length > 0) {
        items = props.items.map((element: any, index: number) => {
            return <div className={`itemsContaineritem`} key={index}>
                {props.itemRenderer(element)}
                <div onClick={() => props.handleRemoveItem(element)}>
                    <Icon type={"SVG"} path={iconPath} style={{ width: 16, height: 16, margin: "10 10 0 0", viewBox: "0 0 16 16" }} className={`icon`} />
                </div>
            </div>
        })
    }

    return <div  onFocus={props.onSelect} tabIndex={1} ref={ref} className={props.className ? props.className : `itemsContainer`}>
        {items ? items :
            <div className={`itemsContainernoItems`}>
                <div>No Elements</div>
            </div>}
        <Input className={`input`} onChange={props.filterChangeHandle} style={{flex: "1 1 auto", margin: 4, minWidth: 30 }} />
    </div>
})

export default ItemsContainer;