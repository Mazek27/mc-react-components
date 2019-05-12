import {storiesOf} from "@storybook/react";
import * as React from "react";
import Container from "./Container";
import SideBar from "../SideBar/SideBar";

const stories = storiesOf('Components', module);

stories.add(
  'Container',
  () =>(
    <div style={{position: "absolute", width: "100%", height: "100%", margin: -8}}>
      <Container direction={"column"}>
        <Container  direction={"row"}>
          <Container  direction={"column"}>
            <Container>
              <SideBar/>
            </Container>
            <Container  direction={"row"}>
              <Container size={3}/>
              <Container size={5}/>
            </Container>
          </Container>
          <Container/>
        </Container>
        <Container/>
      </Container>
    </div>
  ),
);
