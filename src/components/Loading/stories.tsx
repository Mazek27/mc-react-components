import {storiesOf} from "@storybook/react";
import * as React from "react";
import {Loading} from "./Loading";

const stories = storiesOf('Components', module);

stories.add(
  'Loading',
  () => <Loading/>,
  {}
);

