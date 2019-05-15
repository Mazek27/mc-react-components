import * as React from "react";
import "./style/button.scss"

interface IButtonProps {
  color?: "primary" | "warning" | "error"
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  content: any
}

const Button = (props: IButtonProps) => {
  return <button {...props} className={`mc-button ${props.color && props.color}`}>{props.content}</button>
}

export default Button
