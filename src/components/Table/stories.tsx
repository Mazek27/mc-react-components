import { storiesOf } from "@storybook/react";
import * as React from "react";
import Table from "./Table";
import {Column} from "./Column";


const stories = storiesOf('Components', module);

stories.add(

  'Table',
  () => {
    return (
      <Table tableRow={5}>
        <Column cellRenderer={() => (<div/>)}/>
        <Column cellRenderer={() => (<div/>)}/>
        <Column cellRenderer={() => (<div/>)}/>
        <Column cellRenderer={() => (<div/>)}/>
      </Table>
    )
  });
