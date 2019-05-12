import {storiesOf} from "@storybook/react";
import * as React from "react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import Centered from "../Centered/Centered";
import {useState} from "react";

const stories = storiesOf('Components/Accordion', module);

const ComponentCollapsed = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <button className={'btn'} onClick={() => {
        setCollapsed(!collapsed)
      }}>{"A"}</button>
      <Centered>
        <Accordion collapsed={collapsed} setCollapsed={setCollapsed}>
          <AccordionItem title={"MainPage"}>
          </AccordionItem>
          <AccordionItem title={"Calculator"}>
          </AccordionItem>
        </Accordion>
      </Centered>
    </>
  )
};

stories
  .add(
  'Simple Accordion',
  () => (
    <Accordion>
      <AccordionItem title={"MainPage"}>
      </AccordionItem>
      <AccordionItem title={"Calculator"}>
      </AccordionItem>
    </Accordion>
  ))
  .add(
  'Collapsed Accordion',
  () =>  <ComponentCollapsed/>
);
