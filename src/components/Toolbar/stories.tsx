import {storiesOf} from "@storybook/react";
import * as React from "react";
import Toolbar from "./Toolbar";
import ToolbarItem from "./ToolbarItem";
import ToolbarGroup from "./ToolbarGroup";

const stories = storiesOf('Components/Toolbar', module);

stories.add(
  'Left',
  () => <Toolbar position={"left"}/>,
  {}
);
stories.add(
  'Right',
  () => <Toolbar position={"right"}/>,
  {}
);
stories.add(
  'Top',
  () => <Toolbar position={"top"}/>,
  {}
);
stories.add(
  'Bottom',
  () => <Toolbar position={"bottom"}/>,
  {}
);

stories.add(
  'With Items',
  () => <Toolbar position={"left"}>
    <ToolbarGroup>
      <ToolbarItem itemCn={'pan'}/>
      <ToolbarItem itemCn={'fullScreen'}/>
    </ToolbarGroup>
    <ToolbarGroup>
      <ToolbarItem itemCn={'config'}/>
      <ToolbarItem itemCn={'savePhoto'}/>
    </ToolbarGroup>
    <ToolbarGroup>
      <ToolbarItem itemCn={'synchronize'}/>
    </ToolbarGroup>
  </Toolbar>,
  {}
);

