import * as React from "react";

interface IButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  content: any
}

const Button = (props: IButtonProps) => {
  return <div {...props} >{props.content}</div>
}

export default Button
