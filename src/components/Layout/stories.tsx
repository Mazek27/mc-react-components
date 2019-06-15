import {storiesOf} from "@storybook/react";
import * as React from "react";
import {Layout} from "./Layout";
import {Orientation} from "../../Utils/variables";
import "./styles/style.scss"

const stories = storiesOf('Components/Layout', module);

stories.add(
  'Vertical',
  () =>(
    <Layout orientation={Orientation.VERTICAL} secondaryInitialSize={50} unit={"%"}>
      <div style={{backgroundColor: "red", width: "100%", height: "100%"}}/>
      <div style={{backgroundColor: "green", width: "100%", height: "100%"}}/>
    </Layout>
  ),
);

stories.add(
  'Horizontal',
  () =>(
    <Layout orientation={Orientation.HORIZONTAL} secondaryInitialSize={50} unit={"%"}>
      <div style={{backgroundColor: "red", width: "100%", height: "100%"}}/>
      <div style={{backgroundColor: "green", width: "100%", height: "100%"}}/>
    </Layout>
  ),
);

stories.add(
  'Mix',
  () =>(
    <Layout orientation={Orientation.HORIZONTAL} secondaryInitialSize={50} unit={"%"} primaryMinSize={10} secondaryMinSize={10}>
      <div style={{backgroundColor: "red", width: "100%", height: "100%"}}/>
      <Layout orientation={Orientation.VERTICAL} secondaryInitialSize={50} unit={"%"}>
        <div style={{backgroundColor: "yellow", width: "100%", height: "100%"}}/>
        <div style={{backgroundColor: "green", width: "100%", height: "100%"}}/>
      </Layout>
    </Layout>
  ),
);
