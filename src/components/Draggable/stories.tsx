import { storiesOf } from "@storybook/react";
import * as React from "react";
import {Resizable} from "./Resizable";
import {Orientation} from "./ResizeHandle";
import {useState} from "react";


const stories = storiesOf('Components', module);

interface IResizableDivProps {
  // @ts-ignore
  resizeHandle?: any;
  style?: React.CSSProperties;
}

const ResizableDiv = (props: IResizableDivProps) => {
  const { style } = props;
  return (
    <div className="resizable-div" style={{...style, position: 'relative'}}>
      Yo
      {props.resizeHandle}
    </div>
  );
}

const Res = () => {
  const [size, updateSize] = useState(100)

  return (
    <Resizable
      maxSize={150}
      minSize={50}
      size={size}
      orientation={Orientation.VERTICAL}
      onLayoutLock={()=> {}}
      onSizeChanged={updateSize}
    >
      <ResizableDiv />
    </Resizable>
  )
}



stories.add(

  'Resizable',
  () => {


    return (
      <Res/>
    )
  });
