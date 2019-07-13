import {storiesOf} from "@storybook/react";
import * as React from "react";
import Input from "./Input";
import {useState} from "react";

const stories = storiesOf('Components/Input', module);

const WrappedInput = () => {
  const [text, changeText] = useState("");

  return <div style={{width: "500px"}}>
      <Input icon={"icon"}  /> 
    </div>
  
}

stories.add(
  'Basic',
  () =>  <WrappedInput/>,
);
