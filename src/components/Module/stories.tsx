import {storiesOf} from "@storybook/react";
import * as React from "react";
import Module from "./Module";

const stories = storiesOf('Components/Module', module);

stories.add(
  'Left',
  () => <Module/>,
  {}
);

