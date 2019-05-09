import {storiesOf} from "@storybook/react";
import * as React from "react";
import {Select} from "./Select";

const stories = storiesOf('Components', module);

stories.add(
  'Select',
  () => <Select/>,
);

