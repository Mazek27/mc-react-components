import {FunctionComponent, useEffect, useState} from "react";
import {IProps} from "../../Core/props";
import * as React from "react";

interface IAccordionItem extends IProps{
  miniController?: {
    expanded: boolean,
    updateExpanded: () => void
  }
  expanded?: boolean
  title: string
  onOpenItem?: any
}

const AccordionItem: FunctionComponent<IAccordionItem> = (props) => {
  const [isExpanded, setExpanded] = useState(props.expanded || false);

  useEffect(()=> {
    if(props.expanded) {
      setExpanded(props.expanded)
    }
  }, [props.expanded]);

  if(props.miniController && !props.miniController.expanded){

    return <div className={"accordion-item mini"} onClick={() => {
      //@ts-ignore
      props.miniController.updateExpanded()
    }}>
        <a>{
          props.title[0]
        }</a>
    </div>
  }

  return (
    <div className={props.className || "accordion-item"}>
      <div className={`title ${isExpanded ? 'expanded' : ''}`} onClick={() => {
        setExpanded(!isExpanded);
        if(props.onOpenItem){
          props.onOpenItem()
        }
      }}>
        <a className="name">{props.title}</a>
        {
          isExpanded ?
            <a onClick={() => setExpanded(!isExpanded)}>+</a> :
            <a onClick={() => setExpanded(!isExpanded)}>-</a>
        }
      </div>
      <div className={`content ${isExpanded ? 'expanded' : ''}`}>
        {props.children}
      </div>
    </div>
  )
}

export default AccordionItem;
