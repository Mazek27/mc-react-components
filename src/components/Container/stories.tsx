import {storiesOf} from "@storybook/react";
import * as React from "react";
import Container from "./Container";
import Module from "../Module/Module";

const stories = storiesOf('Components', module);

stories.add(
  'Container',
  () =>(
    <div style={{position: "absolute", width: "100%", height: "100%"}}>
      <Container direction={"column"}>
        <Container withBorder>
          <Module/>
        </Container>
        <Container withBorder>
          <Module/>
        </Container>
      </Container>
    </div>
  ),
);
