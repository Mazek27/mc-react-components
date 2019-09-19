import {storiesOf} from "@storybook/react";
import * as React from "react";
import Container from "./Container";
import Card from "../Card/Card";

const stories = storiesOf('Components', module);

stories.add(
  'Container',
  () =>(
    <div style={{position: "absolute", width: "100%", height: "100%"}}>
      <Container direction={"column"}>
        <Container withBorder>
          <Card/>
        </Container>
        <Container withBorder>
          <Container withBorder>
            <Container withBorder/>
            <Container withBorder/>
            <Container withBorder/>
            <Container withBorder/>
            <Card/>
          </Container>
          <Card/>
        </Container>
      </Container>
    </div>
  ),
);
