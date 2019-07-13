import { storiesOf } from "@storybook/react";
import * as React from "react";
import Select from "./Select";
import { IProps } from "../../Core/props";
import { IItem } from "./common/props";
import { ShadowPropTypesIOS } from "react-native";


const stories = storiesOf('Components', module);

interface IPerson extends IProps {
  name: String,
  age: number,
  address: String
}

const Person: React.FC<IPerson> = (props) => {
  return <div>
    <div>Name : {props.name}</div>
    <div>Age : {props.age}</div>
    <div>Address : {props.address}</div>
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

  },
  {

    name: "Tomek",
    age: 30,
    address: "Bialystok"

  },
  {

    name: "Klaudia",
    age: 23,
    address: "Warszawa"

  },
  {

    name: "Marek",
    age: 20,
    address: "Warszawa"

  },
  {

    name: "Kaska",
    age: 19,
    address: "Warszawa"

  },
  {

    name: "Wojtek",
    age: 20,
    address: "Warszawa"

  },
  {

    name: "Karol",
    age: 19,
    address: "Warszawa"

  }
]

const values: IItem<number>[] = [
  {
    value: 12
  },
  {
    value: 45
  }
]


stories.add(

  'Select',
  () => {
    const itemDidSelected = () => {
    }

    const PersonRenderer: React.FC<IPerson> = (props) => {
      return <Person {...props} />
    }

    const HederRenderer: React.FC<IPerson> = (props) =>{
      return <div >
          {props.name}
      </div>
    }

    return (<div style={{ margin: 10, width: 500, height: 100 }} >
      <Select<IPerson> searchComparator={(item: IPerson, value: string)=>item.name.includes(value) || item.age.toString().includes(value) || item.address.includes(value)} itemDiDSelected={itemDidSelected} items={Persons} headerRenderer={HederRenderer} itemRenderer={PersonRenderer} />
      <div>asdasfsdifusdjfdoifjdsifjdsfjsdijf</div>
    </div>)
  });

