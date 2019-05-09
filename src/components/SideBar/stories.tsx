import {storiesOf} from "@storybook/react";
import * as React from "react";
import {SideBar} from "./index";

const stories = storiesOf('Components', module);

stories.add(
  'SideBar',
  () => <SideBar/>,
);
