import { storiesOf } from "@storybook/react";
import * as React from "react";
import Select from "./Select";


const stories = storiesOf('Components', module);

stories.add(

  'Select',
  () => {
    // let style : React.CSSProperties ={
    //   width: "20px"
    // }
    let itemDidSelected = (item: any) =>{
      console.log(item);
    }
    return (<div style={{ width: "500px" }}>
      <Select<number> itemDiDSelected= {itemDidSelected} items={[{ value: 1, label: "Test1" }, { value: 2, label: "Test2" }]} />
    </div> )
  });

