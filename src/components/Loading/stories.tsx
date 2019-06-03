import {storiesOf} from "@storybook/react";
import * as React from "react";
import Loading from "./Loading";

const stories = storiesOf('Components/Loading', module);

stories.add(
  'default',
  () => <Loading/>,
  {}
);

stories.add(
  'withOverlay',
  () => <Loading overlay={true} overlayColor={"#EBEBEB"}/>,
  {}
);

stories.add(
  'custom text',
  () => <Loading text={"Ładowanie..."} overlay={true} overlayColor={"#EBEBEB"}/>,
  {}
);

