import { storiesOf } from "@storybook/react";
import * as React from "react";
import Select from "./Select";


const stories = storiesOf('Components', module);

stories.add(

  'Select',
  () => (
    <Select style={{margin: "200px", width: "500px"}} itemDiDSelected= {()=>{}} items={[{ value: 1, label: "Test1" }, { value: 2, label: "Test2" }]} />
  ));

