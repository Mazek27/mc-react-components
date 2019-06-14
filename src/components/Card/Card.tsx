import {FC} from "react";
import * as React from "react";

interface ICardProps {
  className?: string
}

const Card: FC<ICardProps> = (props) => {
  return <div {...props}>
    {props.children}
  </div>
}

export default Card
