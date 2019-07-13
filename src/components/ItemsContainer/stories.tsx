import * as React from "react"
import { storiesOf } from "@storybook/react";
import ItemsContainer from "./ItemsContainers"
import { IProps } from "../../Core/props";

const stories = storiesOf('Components', module);
interface IPerson extends IProps {
    name: String,
    age: number,
    address: String
}

const Person: React.FC<IPerson> = (props) => {
    return <div>
      <div>{props.name}</div>
    </div>
  }

const Persons: IPerson[] = [
    {

        name: "Ala",
        age: 23,
        address: "Biala Podlaska"
    },
    {
        name: "Ola",
        age: 28,
        address: "Warszawa"
    }

]

const PersonRenderer: React.FC<IPerson> = (props) => {
    return <Person {...props} />
}

stories.add(
    
    'ItemsContainer',
    () => {

        return (<div style={{ width: 500, height: 200 }}>
            <ItemsContainer itemRenderer = {PersonRenderer} items={[Persons[0]]}/>
        </div>)
    }

)