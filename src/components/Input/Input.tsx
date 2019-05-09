import {FunctionComponent} from "react";
import {IProps} from "../../Core/props";
import * as React from "react";
import {debounce} from "../../Utils/debounce";

interface IInputProps extends IProps{
  controlled?: boolean
  onChange: (newValue: string) => void
}

const Input : FunctionComponent<IInputProps> = (props) => {
  const onChange = debounce(props.onChange, 1000);

  return (
    <input onChange={(event) => {
      event.persist();
      onChange(event.target.value)
    }
    }/>
  )
};

export default Input;


