import {storiesOf} from "@storybook/react";
import * as React from "react";
import {Input} from "./index";
import {useState} from "react";

const stories = storiesOf('Components/Input', module);

const WrappedInput = () => {
  const [text, changeText] = useState("");

  return (
    <>
      <a>{text}</a>
      <Input onChange={changeText} />
    </>
  )
}

stories.add(
  'Basic',
  () =>  <WrappedInput/>,
);
