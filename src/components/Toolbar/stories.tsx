import {storiesOf} from "@storybook/react";
import * as React from "react";
import Toolbar from "./Toolbar";
import ToolbarItem from "./ToolbarItem";
import ToolbarGroup from "./ToolbarGroup";

const stories = storiesOf('Components/Toolbar', module);

stories.add(
  'Left',
  () => <Toolbar position={"left"} onClickItem={()=> {}} onSelectItem={()=> {}}/>,
  {}
);

stories.add(
  'Bottom',
  () => <Toolbar position={"bottom"} onClickItem={()=> {}} onSelectItem={()=> {}}/>,
  {}
);

stories.add(
  'With Items',
  () => <Toolbar position={"left"}  onClickItem={()=> {}} onSelectItem={()=> {}}>
    <ToolbarGroup>
      <ToolbarItem itemCn={'pan'} type={"mode"}/>
      <ToolbarItem itemCn={'fullScreen'} type={"mode"}/>
    </ToolbarGroup>
    <ToolbarGroup>
      <ToolbarItem itemCn={'config'} type={"mode"}/>
      <ToolbarItem itemCn={'savePhoto'} type={"mode"}/>
    </ToolbarGroup>
    <ToolbarGroup>
      <ToolbarItem itemCn={'synchronize'} type={"mode"}/>
    </ToolbarGroup>
  </Toolbar>,
  {}
);

