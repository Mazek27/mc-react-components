import * as React from "react";
import "./loading.scss"
import Centered from "../Centered/Centered";

const Loading :React.FC = () => {
  return (
      <Centered className={"loading"}>
        <h1>{"Loading..."}</h1>
      </Centered>
  )
}

export default Loading;
