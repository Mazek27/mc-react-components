import { storiesOf } from "@storybook/react";
import * as React from "react";
import Select from "./Select";


const stories = storiesOf('Components', module);

stories.add(

  'Select',
  () => {
    const itemDidSelected = () => {
    }
    
    return (<div >
      <Select<number> style={{margin: "200px", width: "500px"}} itemDiDSelected= {itemDidSelected} items={[{ value: 1, label: "Test1" }, { value: 2, label: "Test2" }]} />
    </div> )
  });

